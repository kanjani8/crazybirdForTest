const link = document.querySelector("#kakaoLogin");
console.log(link);
link.href = "javascript:kakaoLogin();";
document.body.appendChild(link);


window.Kakao.init("b169c21eaa77d6cdaca38772a3182193");
function kakaoLogin(){
    window.Kakao.Auth.login({
        scope: 'profile_nickname, profile_image, account_email',
        success: function(authObj){
            console.log("authObj: ", authObj);
            window.Kakao.API.request({
                url: '/v2/user/me',
                success: res => {
                    const kakao_account = res.kakao_account;
                    console.log("kakao account: ", kakao_account);
                }
            });
        }
    });
}