<template>
    <div>
        <router-view></router-view>
        <div class="bottom-nav">
            <ul :class="{active:homeActive}" @click="goPage('/index')">
                <li class="home"></li>
                <li>首页</li>
            </ul>
            <ul :class="{active:cartActive}" @click="goPage('/cart')">
                <li class="cart"></li>
                <li>购物车</li>
                <li class="spot" v-show="cartData.length>0"></li>
            </ul>
            <ul :class="{active:myActive}" @click="goPage('/my')">
                <li class="my"></li>
                <li>我的</li>
            </ul>
        </div>
    </div>
</template>

<script>
    import {mapState} from 'vuex'
    export default {
        data(){
            return {
                homeActive:true,
                cartActive:false,
                myActive:false
            }
        },
        computed:{
          ...mapState({
              "cartData":(state)=>state.cart.cartData
          })
        },
        methods:{
            goPage(url){
                this.$router.replace(url);
                this.changeBottomStyle(url)
            },
            changeBottomStyle(url){
                switch (url) {
                    case "/index":
                        this.homeActive=true
                        this.cartActive=false
                        this.myActive=false
                    break;
                    case "/cart":
                        this.homeActive=false
                        this.cartActive=true
                        this.myActive=false
                        break;
                    case "/my":
                        this.homeActive=false
                        this.cartActive=false
                        this.myActive=true
                        break;
                    default:
                        this.homeActive=true
                        this.cartActive=false
                        this.myActive=false
                }
            }
        },
        created(){
            this.changeBottomStyle(this.$route.path)
        },
        //解决keep-alive缓存的问题，实时更新数据
        activated(){
            this.changeBottomStyle(this.$route.path)
        }
    }
</script>

<style scoped>
    .bottom-nav{width:100%;height:1rem;background-color:#FFFFFF;position: fixed;bottom:0;left:0;display: flex;justify-content: space-between;align-items: center;padding-left:6%;padding-right:6%;box-sizing: border-box;border-top:#EFEFEF 1px solid}
    .bottom-nav ul{width:0.9rem;position:relative;}
    .bottom-nav ul li:nth-child(1){width:0.6rem;height:0.6rem;margin:0 auto;}
    .bottom-nav ul li:nth-child(1).home{background-image: url("../../../assets/images/common/home1.png");background-size:100%;background-repeat: no-repeat;background-position: center;}
    .bottom-nav ul li:nth-child(2){font-size:0.28rem;text-align:center;}
    .bottom-nav ul.active li:nth-child(2){color:#EB1625}
    .bottom-nav ul.active li:nth-child(1).home{background-image: url("../../../assets/images/common/home2.png");background-size:100%;background-repeat: no-repeat;background-position: center;}

    .bottom-nav ul li:nth-child(1).cart{background-image: url("../../../assets/images/common/cart1.png");background-size:100%;background-repeat: no-repeat;background-position: center;}
    .bottom-nav ul.active li:nth-child(1).cart{background-image: url("../../../assets/images/common/cart2.png");background-size:100%;background-repeat: no-repeat;background-position: center;}

    .bottom-nav ul li:nth-child(1).my{background-image: url("../../../assets/images/common/my1.png");background-size:100%;background-repeat: no-repeat;background-position: center;}
    .bottom-nav ul.active li:nth-child(1).my{background-image: url("../../../assets/images/common/my2.png");background-size:100%;background-repeat: no-repeat;background-position: center;}

    .bottom-nav ul .spot{width:0.2rem;height:0.2rem;border-radius: 100%;background-color:#EB1625;position:absolute;right:0;top:0}
</style>
