import Reporting from "../models/reporting";
import Location from "../models/location";
import Event from "../models/event";
import User from "../models/user";
import Quote from "../models/quote";

export const main = async (req, res) => {
    if(req.session.user){
        console.log(req.session.user);
        try{
            const user = await User.findById(req.session.user._id).populate("likedSubjects");
            const quotes = await Quote.find({mode: user.mode});
            const likedSubjects = user.likedSubjects;
            const event_obj = await Event.find({});
            const events =  JSON.stringify(event_obj);
            return res.render("home", {pageTitle: "", events, likedSubjects, quotes});
        }catch(error){
            console.log(error);
            return res.status(404).render("404", {pageTitle: "오류", errorMessage: error._message});
        }
    }
    else{
        const quotes = await Quote.find({mode: "wise"});
        return res.render("home0", {pageTitle: "", quotes});
    }

}
export const getReportError = (req, res) => {
    return res.render("report", {pageTitle: "오류 보고 페이지"});
}
export const postReportError = async(req, res) => {
    const {title, script} = req.body;
    try{
        if (req.session.loggedIn){
            const user = req.session.user;
            await Reporting.create({
                title,
                script,
                reporter: user._id,
            });
        }
        else{  
            const newReport2 = await Reporting.create({
                title,
                script,
            });
            console.log(newReport2);
        }
        // 사용자에게 오류가 보고되었다는 알람 추가 필요
        return res.send(`<script>alert("문제가 성공적으로 보고되었습니다.");
            location.href='/';</script>`);
    }catch(error){
        console.log("Report error: ", error);
        return res.status(404).render("404", {pageTitle: "에러 보고 오류"});
    }
}

export const getMap = async(req, res) =>{
    const location_obj = await Location.find({school: req.session.user.school._id});
    const locations = JSON.stringify(location_obj);
    return res.render("map", {pageTitle: "학교 근처 공부할 곳들", locations});
}

export const getCalendar = async(req, res) =>{
    const event_obj = await Event.find({});
    const events =  JSON.stringify(event_obj);
    return res.render("calendar", {pageTitle: "일정표", events});
}

export const getPlusQuote = (req,res) => {
    return res.render("plusQuote");
}

export const postPlusQuote = async  (req,res) => {
    const {
        body: {content,mode},
    } = req;
    
    try {
        const quote = await Quote.create({
            author:req.session.user.name,
            content,
            mode
        });
        console.log(quote);
    } catch (error) {
        return res.status(400).render("404", {
            pageTitle: "명언 등록 에러",
            errorMessage: error._message,
          });
    }
    
    return res.send(`<script>alert("명언 등록 완료");  location.href='/'; </script>`);
}

export const changeQuote = async (req, res) => {
    const mode = req.body.mode;
    const user = await User.findByIdAndUpdate(req.session.user._id, {
        mode
    });
    req.session.user = user;
    return res.redirect("/");
}