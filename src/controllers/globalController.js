import Reporting from "../models/reporting";
import Location from "../models/location";
import Event from "../models/event";
export const main = async(req, res) => {
    const event_obj = await Event.find({});
    const events =  JSON.stringify(event_obj);
    return res.render("home", {pageTitle: "main", events});
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