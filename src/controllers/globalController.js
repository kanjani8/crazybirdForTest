import Reporting from "../models/reporting";

export const main = (req, res) => res.render("home", {pageTitle: "main"});
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
    }catch(error){
        console.log("Report error: ", error);
        return res.status(404).render("404", {pageTitle: "에러 보고 오류"});
    }
    return res.redirect("/");
}

//달력, 지도, 시간표, testbird캐릭터 등 메인페이지를 채울 추가기능 넣을 공간