<template>
    <div>
        <div class="header">
            <div class="back" @click="$router.go(-1)">
                <img src="../../../assets/images/home/goods/back.png" alt="">
            </div>
            <div class="nav">
                <div :class="{'nav_list':true, active:itemStyle}"
                     @click="goPage('/details/item',{gid:gid})">商品</div>
                <div :class="{'nav_list':true, active:contentStyle}"
                     @click="goPage('/details/content',{gid:gid})">详情</div>
                <div :class="{'nav_list':true, active:reviewStyle}"
                     @click="goPage('/details/review',{gid:gid})">评价</div>
            </div>
            <div id="cart-icon" class="cart-icon" @click="$router.push('/cart')">
                <div class="spot" v-show="cartData.length>0"></div>
            </div>
        </div>
        <div class="content">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
    import {mapState} from 'vuex'
    export default {
        data(){
            return{
                gid:this.$route.query.gid?this.$route.query.gid:"",
                itemStyle:true,
                contentStyle:false,
                reviewStyle:false
            }
        },
        computed:{
            ...mapState({
                "cartData":(state)=>state.cart.cartData
            })
        },
        created(){
        },
        methods:{
            goPage(url,query){
                this.$router.replace({path:url,query:query});
                this.changeTabStyle(url)
            },
            changeTabStyle(url){
                switch (url) {
                    case"/details/item":
                        this.itemStyle=true;
                        this.contentStyle=false;
                        this.reviewStyle=false;
                        break;
                    case"/details/content":
                        this.itemStyle=false;
                        this.contentStyle=true;
                        this.reviewStyle=false;
                        break;
                    case"/details/review":
                        this.itemStyle=false;
                        this.contentStyle=false;
                        this.reviewStyle=true;
                        break;
                    default:
                        this.itemStyle=true;
                        this.contentStyle=false;
                        this.reviewStyle=false;

                }
            }
        }
    }
</script>

<style scoped>
    .header{
        width: 100%;
        height: 1rem;
        background: #FFFFFF;
        position: fixed;
        z-index: 2;
        overflow: hidden;
        border-bottom: 1px solid #EFEFEF;
        left:0;
        top:0;
    }
    .back{
        margin-top: 0.08rem;
        float: left;
        margin-right: 10%;
        width: 0.8rem;
        height: 0.8rem;
    }
    .back img{
        width: 100%;
        height: 100%;
    }
    .nav{
        width: 63%;
        height: 100%;
        float: left;
        overflow: hidden;
    }
    .nav_list{
        width: 18%;
        height: 96%;
        float: left;
        line-height: 1rem;
        text-align: center;
        margin-right: 15%;
        font-size: 0.36rem;
    }
    .active{
        border-bottom: solid 2px #FDA208;
    }
    .cart-icon{float:left;margin-top:0.1rem;width:0.8rem;height:0.8rem;background-image:url('../../../assets/images/home/goods/cart.png');background-repeat: no-repeat;background-position: center;background-size:100%;margin-right:0.2rem;position:relative;z-index:1;}
    .cart-icon .spot{width:0.2rem;height:0.2rem;background-color:#CC0004;border-radius: 100%;position:absolute;z-index:1;right:0px;top:0.15rem;}

    .content{
        width:100%;
        margin-top:1rem;
    }



</style>                               