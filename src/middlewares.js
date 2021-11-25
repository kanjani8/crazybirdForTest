import multer from "multer";


export const localsMiddleware = (req, res, next) => {
    res.locals.loggedIn = Boolean(req.session.loggedIn);
    res.locals.siteName = "Crazy Bird 🐦";
    res.locals.loggedInUser = req.session.user || {};
    next();
}

export const protectorMiddleware = (req, res, next) => {
    if(req.session.loggedIn){
        next();
    } else{
        return res.redirect("/login");
    }
}

export const publicOnlyMiddleware = (req, res, next) => {
    if(!req.session.loggedIn){
        next();
    } else{
        return res.redirect("/");
    }
}
//avartar사진 용량 제한
export const avatarUpload = multer({
    dest: "uploads/avatars/",
    limits: {
      fileSize: 3000000,
    },
  });
  //사진 용량 제한
export const imageUpload = multer({
  dest: "uploads/images/",
  limits: {
    fileSize: 3000000,
  },
});
  //비디오 용량 제한
  export const videoUpload = multer({
    dest: "uploads/videos/",
    limits: {
      fileSize: 10000000,
    },
  });
//export const uploadFiles = multer({ dest: "uploads/" });