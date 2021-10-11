const link = document.querySelector("#kakaoLogin");
console.log(link);
link.href = "javascript:kakaoLogin();";
document.body.appendChild(link);

console.log(process.env.KAKAO_KEY);
window.Kakao.init(process.env.KAKAO_KEY);
function kakaoLogin(){
    window.Kakao.Auth.login({
        scope: 'profile, account_email',
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