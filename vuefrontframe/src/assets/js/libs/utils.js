import echo from './echo.js'
//会员安全认证
function safeUser(pThis){
    pThis.$request(process.env.VUE_APP_API+"/home/user/safe?token=1ec949a15fb709370f","post",{uid:pThis.$store.state.user.uid,auth_token:pThis.$store.state.user.authToken}).then(res=>{
        if(!res.code===200){
            pThis.$store.commit("user/outLogin");
            pThis.$router.replace("/login");
        }
    });
}
function lazyImg() {
    echo.init({
        offset:0,//可是区域多少像素可以被加载
        throttle:0//设置图片延迟加载的时间
    })
}
export {
    safeUser,lazyImg
}
