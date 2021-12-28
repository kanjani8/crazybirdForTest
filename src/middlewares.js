import multer from "multer";


export const localsMiddleware = (req, res, next) => {
    res.locals.loggedIn = Boolean(req.session.loggedIn);
    res.locals.siteName = "Crazy Bird 🐦";
    res.locals.loggedInUser = req.session.user || {};
    res.locals.kakaoJS = process.env.KAKAO_KEY_JS;
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

export const reportMiddleware = (req, res, next) => {
  let user = "Somebody";
  if(req.session.user)
    user = req.session.user.username;
  const ids = req.params;
  let id;

  if(ids.postingId)
    id = "posting " + ids.postingId;
  else if(ids.testId)
    id = "testQuestion " + ids.testId;
  else if(ids.userId)
    id = "user " + ids.userId;
  else
    id = "Error";

  console.log(`🙀 ${user} tried to report ${id}`);
  next();
}



//avartar사진 용량 제한
export const avatarUpload = multer({
    dest: "uploads/avatars/",
    limits: {
      fileSize: 3000000,
    },
  });
  //커뮤니티 용량 제한
export const communityUpload = multer({
  dest: "uploads/community/",
  limits: {
    fileSize: 20000000,
    files: 5,
  },
});

//export const uploadFiles = multer({ dest: "uploads/" });