import multer from "multer";
import multerS3 from "multer-s3";
import aws from "aws-sdk";

const s3= new aws.S3({
  credentials: {
    accessKeyId: process.env.AWS_ID,
    secretAccessKey: process.env.AWS_SECRET,
  }
})
const isHeroku = process.env.NODE_ENV === "production";
const s3AvartarUploader = multerS3({
  s3: s3,
  bucket: 'cbird2022/avartar',
  acl: "public-read",
});

const s3CommunityUploader = multerS3({
  s3: s3,
  bucket: 'cbird2022/community',
  acl: "public-read",
});
export const localsMiddleware = (req, res, next) => {
    res.locals.loggedIn = Boolean(req.session.loggedIn);
    res.locals.siteName = "Crazy Bird ๐ฆ";
    res.locals.loggedInUser = req.session.user || {};
    res.locals.isHeroku = isHeroku;
    next();
}

export const protectorMiddleware = (req, res, next) => {
    if(req.session.loggedIn){
        next();
    } else{
        req.flash("error", "๋ก๊ทธ์ธ์ด ํ์ํฉ๋๋ค.");
        return res.redirect("/login");
      }
    }
    
    export const publicOnlyMiddleware = (req, res, next) => {
      if(!req.session.loggedIn){
        next();
      } else{
        req.flash("error", "์ด๋ฏธ ๋ก๊ทธ์ธ๋์์ต๋๋ค.");
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

  console.log(`๐ ${user} tried to report ${id}`);
  next();
}



//avartar์ฌ์ง ์ฉ๋ ์ ํ
export const avatarUpload = multer({
    dest: "uploads/avatars/",
    limits: {
      fileSize: 3000000,
    },
    storage: isHeroku ? s3AvartarUploader : undefined,
  });
  //์ปค๋ฎค๋ํฐ ์ฉ๋ ์ ํ
export const communityUpload = multer({
  dest: "uploads/community/",
  limits: {
    fileSize: 20000000,
    files: 5,
  },
  storage: isHeroku ? s3CommunityUploader : undefined,
});

//export const uploadFiles = multer({ dest: "uploads/" });