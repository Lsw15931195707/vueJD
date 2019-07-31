import Vue from 'vue';
//引入路由
import Router from 'vue-router';

Vue.use(Router);//装载路由

//实例化路由
let router=new Router({
    mode:"hash",//1、hash哈希：有#号。2、history历史：没有#号
    base:process.env.BASE_URL,
    //记录滚动的位置解决白屏问题，必须配合keep-alive
    scrollBehavior(to,from,position){
        if(position){
            return position
        }else{
            return {x:0,y:0}
        }
    },
    routes:[
        {
            path:"/",
            name:"main",
            component:()=>import('./pages/home/main/index'),
            redirect:"/index",
            children:[
                {
                    path:"index",
                    name:"index",
                    component:()=>import('./pages/home/index/index'),
                    meta:{title:"首页",keepAlive:true},


                },
                {
                    path:"cart",
                    name:"cart",
                    component:()=>import('./pages/home/cart/index'),
                    meta:{title:"购物车",keepAlive:false}
                },

                {
                    path:"my",
                    name:"my",
                    component:()=>import('./pages/user/index/index'),
                    meta:{title:"我的",keepAlive:false}
                },
            ]
        },
        {
            path:"/classify",
            name:"classify",
            component:()=>import('./pages/home/goods/classify'),
            meta:{title:"列表页",keepAlive:false},
            redirect:"/classify/item",
            children:[
                {
                    path:"item",
                    name:"item",
                    component:()=>import('./pages/home/goods/classify_item'),
                    meta:{title:"潮流女装",keepAlive:false}
                }

            ]
        },
        {
            path:"/details",
            name:"details",
            component:()=>import('./pages/home/goods/details'),
            meta:{title:"详情",keepAlive:false},
            redirect:"/details/item",
            children:[
                {
                    path:"item",
                    name:"/details/item",
                    component:()=>import('./pages/home/goods/details_item'),
                    meta:{title:"商品",keepAlive:false}
                },
                {
                    path:"content",
                    name:"/details/content",
                    component:()=>import('./pages/home/goods/details_content'),
                    meta:{title:"详情",keepAlive:false}
                },
                {
                    path:"review",
                    name:"/details/review",
                    component:()=>import('./pages/home/goods/details_review'),
                    meta:{title:"评价",keepAlive:false}
                }


            ]
        }

    ]
});
router.beforeEach((to,from,next)=>{
    //console.log(to.meta);
    if(to.meta.auth){
        if(Boolean(localStorage['isLogin'])){
            next()
        }else{
            next("/login");
        }
    } else {
        next()
    }
});
export default router;
