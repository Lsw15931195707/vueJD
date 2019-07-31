<template>
    <div class="page">
        <div :class="{header:true,red:isScrollColor}">
            <a @click="goPage('/classify')"></a>
            <div class="select">
                <div class="selectIcon">

                </div>
                <div class="selectText">
                    请输入喜欢的宝贝名称
                </div>
            </div>
            <div class="login">
                <span>登陆</span>
            </div>
        </div>
        <div ref="swiper-container" class="swiper-container banner">
            <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="(item,index) in swiperData" :key="index">
                    <img :src="item.image" alt="">
                </div>
            </div>
            <div ref="swiper-pagination" class="swiper-pagination">

            </div><!--分页器。如果放置在swiper-container外面，需要自定义样式。-->
        </div>
        <div class="nav">
            <div class="navList" v-for="(item,index) in quickNavs" :key="index">
                <div class="navListImg">
                    <a href="##">
                        <img src="../../../assets/images/common/load.gif" :data-echo="item.image" alt="">
                    </a>
                </div>
                <div class="navListFont">
                    {{item.title}}
                </div>
            </div>
        </div>
        <template v-for="(item,index) in goods">
            <div v-if="index==0||index%2==0" :key="index" class="goods">
                <div :class="'goodsTitle goodsTitle-s'+index +''">
                    —— {{item.title}} ——
                </div>
                <div class="goodsShow-1">
                    <div class="goodsShow-1-left" @click="goPage('/details?gid='+item.items[0].gid)">
                        <div class="goodsList-1">
                            <div class="goodsList-1-title">
                                {{item.items[0].title}}
                            </div>
                            <div class="goodsList-1-desc">
                                精品打折
                            </div>
                            <div :class="'goodsList-1-price goodsTitle-ss'+index +''">
                                {{item.items[0].price}}元
                            </div>
                            <div class="goodsList-1-img">
                                <div class="goodsShowList-1-img-box">
                                    <img src="../../../assets/images/common/load.gif"
                                         :data-echo="item.items[0].image" alt="">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="goodsShow-1-right">
                        <div class="goodsList-2" @click="goPage('/details?gid='+item.items[1].gid)">
                            <div class="goodsList-2-title">
                                {{item.items[1].title}}
                            </div>
                            <div class="goodsList-2-desc">
                                品质精挑
                            </div>
                            <div class="goodsList-2-img">
                                <img src="../../../assets/images/common/grey.jpg"
                                     :data-echo="item.items[1].image" alt="">
                            </div>
                        </div>
                        <div class="goodsList-2" @click="goPage('/details?gid='+item.items[2].gid)">
                            <div class="goodsList-2-title">
                                {{item.items[2].title}}
                            </div>
                            <div class="goodsList-2-desc">
                                品质精挑4折起
                            </div>
                            <div class="goodsList-2-img">
                                <img src="../../../assets/images/common/grey.jpg"
                                     :data-echo="item.items[2].image" alt="">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="goodsShow-2">
                    <div class="goodsShow-2-list" v-for="(item2,index2) in item.items.slice(3)"
                         @click="goPage('/details?gid='+item2.gid)" :key="index2">
                        <div class="goodsShow-2-list-title">
                            {{item2.title}}
                        </div>
                        <div class="goodsShow-2-list-img">
                            <img src="../../../assets/images/common/load.gif"
                                 :data-echo="item2.image" :alt="item2.title">
                        </div>
                        <div class="goodsShow-2-list-price">
                            ¥{{item2.price}}
                        </div>
                        <div class="goodsShow-2-list-unprice">
                            ¥{{item2.price*1.5}}
                        </div>
                    </div>
                </div>
            </div>
            <div v-else class="goods">
                <div :class="'goodsTitle goodsTitle-s'+index +''">
                    —— {{item.title}} ——
                </div>
                <div class="goodsShow-1">
                    <div class="goodsShow-1-left" @click="goPage('/details?gid='+item.items[0].gid)">
                        <div class="goodsShow-1-left-list">
                            <div class="goodsShow-1-left-list-title">
                                {{item.items[0].title}}
                            </div>
                            <div class="goodsShow-1-left-list-desc">
                                火爆开售
                            </div>
                            <div class="goodsShow-1-left-list-img">
                                <img src="../../../assets/images/common/grey.jpg"
                                     :data-echo="item.items[0].image" alt="">
                            </div>
                        </div>
                    </div>
                    <div class="goodsShow-1-right" @click="goPage('/details?gid='+item.items[1].gid)">
                        <div class="goodsShow-1-left-list">
                            <div class="goodsShow-1-left-list-title">
                                {{item.items[1].title}}
                            </div>
                            <div class="goodsShow-1-left-list-desc">
                                火爆开售
                            </div>
                            <div class="goodsShow-1-left-list-img">
                                <img src="../../../assets/images/common/grey.jpg"
                                     :data-echo="item.items[1].image" alt="">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="goodsShow-2">
                    <div class="goodsShow-2-list" v-for="(item2,index2) in item.items.slice(2)"
                         @click="goPage('/details?gid='+item2.gid)" :key="index2">
                        <div class="goodsShow-2-list-title">
                            {{item2.title}}
                        </div>
                        <div class="goodsShow-2-list-img">
                            <img src="../../../assets/images/common/load.gif"
                                 :data-echo="item2.image" alt="">
                        </div>
                        <div class="goodsShow-2-list-price">
                            ¥{{item2.price}}
                        </div>
                        <div class="goodsShow-2-list-unprice">
                            ¥{{item2.price*1.5}}
                        </div>
                    </div>
                </div>
            </div>
        </template>
        <div class="title">
            <div class="titleLeft-line"></div>
            <div class="titleCon">为您推荐</div>
            <div class="titleLeft-line"></div>
        </div>
        <div class="case">
            <div class="caseList" v-for="(item,index) in caseData" :key="index"
                 @click="goPage('/details?gid='+item.gid)">
                <div class="caseList-img">
                    <img src="../../../assets/images/common/load.gif"
                         :data-echo="item.image" :alt="item.title">
                </div>
                <div class="caseList-title">
                    {{item.title}}
                </div>
                <div class="caseList-price">
                    ¥{{item.price}}
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Swiper from '../../../assets/js/libs/swiper/swiper';
    import {lazyImg} from '../../../assets/js/libs/utils';
    export default {

        data(){
            return {
                swiperData:[],
                quickNavs:[],
                goods:[],
                caseData:[],
                isScrollColor:false
            }
        },
        components:{

        },
        methods:{
            goPage(url){
                this.$router.push(url)
            },
            getSwiper(){
                this.$request(this.$config.baseApi+"/home/index/slide?token="+this.$config.token).then(res=>{
                    if(res.code===200){
                        this.swiperData=res.data;
                        this.$nextTick(()=>{
                            new Swiper(this.$refs['swiper-container'],{
                                pagination: {
                                    el:this.$refs['swiper-pagination'],
                                    clickable :true,
                                },
                                autoplay: {
                                    delay: 3000,
                                    stopOnLastSlide: false,
                                    disableOnInteraction: false,

                                },

                                loop: true
                            });
                        })
                    }
                })
            },
            getQuickNavs(){
                this.$request(this.$config.baseApi+"/home/index/nav?token="+this.$config.token)
                    .then(res=>{
                        if(res.code===200){
                            this.quickNavs=res.data;
                            this.$nextTick(()=>{
                                lazyImg();
                            })

                        }
                    })
            },
            getGoods(){
                this.$request(this.$config.baseApi+"/home/index/goodsLevel?token="
                    +this.$config.token).then(res=>{
                    if(res.code===200){
                        this.goods=res.data;
                        this.$nextTick(()=>{
                            lazyImg();
                        })
                    }

                })
            },
            getCase(){
                this.$request(this.$config.baseApi+"/home/index/recom?token="+this.$config.token)
                    .then(res=>{
                   if(res.code===200){
                       this.caseData=res.data;
                       this.$nextTick(()=>{
                           lazyImg();
                       })
                   }

                })
            },
            //滚动条变色
            eventScroll(){
                let scrollTop=document.body.scrollTop||document.documentElement.scrollTop;
                if(scrollTop>=100){
                    this.isScrollColor=true
                }else{
                    this.isScrollColor=false
                }
            }
        },
        created(){
            this.getSwiper();
            this.getQuickNavs();
            this.getGoods();
            this.getCase();
        },
        mounted(){
            lazyImg();
            window.addEventListener("scroll",this.eventScroll)
        },
        destroyed(){
            window.removeEventListener("scroll",this.eventScroll)
        },
        //解决keep-alive缓存的问题，实时更新数据
        activated(){
        }
    }
</script>

<style scoped>
    @import "../../../assets/js/libs/swiper/swiper.css";
    .page{width:100%;height:2000px;}
    .header{width: 100%;
        height: 1rem;
        position: fixed;
        z-index: 2;
        top: 0;
        left: 0;
        background:rgba(255, 255, 255, 0);

    }
    .header.red{
        background: linear-gradient(rgb(235, 22, 37) 0%, rgba(255, 255, 255, 0) 100%);
    }

    .header a{
        width: 0.6rem;
        height: 0.6rem;
        float: left;
        margin-left: 3%;
        margin-right: 3%;
        margin-top: 0.08rem;
        background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAB00lEQVR4Xu1bwVHDQAzc7YAS6IB0AFQAVAAdABWQVABUAHQAFUAqIHSQEkIFYpZxMuZ8ZvR0dNLHM44e3tVKd7d2iMaDjeNHEpAKaJyBbIHGBZBDMFtgrAXM7ADAEcll5DapKsDM7gHc9IDPSS4iEjEgwMwEXASUcUHytX/TzM4BXO8RMV8k+4UdDkEz+wBwXAH1QvKqIGAO4G6PCFiSPOk/b00BzROgKj85W0Bs/mF04mpYk3z+VwH60cweit6+Jal74WJ0H9AtgzMAK5KbcMg7QLkRilpZL65UgJepqHmpgKiV9eJKBXiZipqXCohaWS+uVICXqah5Y5aY/MBLALrqICQzJOSBqGaIHAJ4B6DrNlYATiOSUCNAhoGqX8bAEzCzpiyxgZ8WlQA5v2cVBSxIquK7iEqAXKDPgoBvADOS64IAzYn+rJj6YrEhqXm2i7FVQCSo2r+WmF6SlOCnjtT7fLkR8jIVNS8VELWyXlypAC9TUfNSAVEr68WVCvAyFTUvFVCrbPdqfOcIkXxsRgFmptOdToOyw7aRjhCA5h2hN5L6LC68IZKOUDpCZltHSANRNlg6Qs0sg1GBjuHKnWBrFS/xpgJSAY0zkC3QuADyf4M/MC2wQcKnVDYAAAAASUVORK5CYII );
        background-repeat: no-repeat;
        background-size: 0.52rem;
        background-position: center top;
    }
    .select{
        width: 65%;
        height: 0.52rem;
        float: left;
        background: rgba(255,255,255,0.6);
        border-radius: 7px;
        overflow: hidden;
        margin-top: 0.08rem;
    }
    .selectIcon{
        width: 0.68rem;
        height:0.52rem;
        background-image: url(../../../assets/images/common/search_icon.png);
        background-repeat: no-repeat;
        background-size: 70%;
        background-position: center 0.03rem;
        float: left;
    }
    .selectText{
        width: 80%;
        height: 0.52rem;
        color: #FFFFFF;
        float: left;
        font-size: 0.28rem;
        line-height: 0.52rem;
    }
    .login{
        width: 18%;
        height: 0.8rem;
        color: #FFF;
        font-size: 0.32rem;
        float: left;
        text-align: center;
        margin-top: 0.16rem;
    }
    .banner{
        width:100%;height:3.64rem;overflow:hidden;
    }
    .banner img{
        width: 100%;
        height: 100%;
    }
    .nav{
        width: 100%;
        height: 1.6rem;
        background-color: #fff;
        display: flex;
        -webkit-box-flex: 1;
        align-items: center;
        justify-content: space-between
    }
    .navList{
        width: 1.4rem;
        height: 1.3rem;
    }
    .navListImg{
        width: 100%;
        text-align: center;
    }
    .navListImg a img{
        width: 0.8rem;
        height: 0.8rem;
    }
    .navListFont{
        width: 100%;
        text-align: center;
        margin-top: 0.04rem;
        color: #7b7f82;
        font-size: 0.28rem;
    }
    .goods{
        width: 100%;
        margin-top:0.2rem;
        background: #fff;
    }
    .goodsTitle{
        width: 100%;
        height: 0.6rem;
        line-height: 0.6rem;
        background-color: #FFFFFF;
        border-bottom: solid #EFEFEF 1px;
        text-align: center;
        font-size: 0.28rem;
    }
    .goodsShow-1{
        width: 100%;
        height: 2.4rem;
        border-bottom: solid #EFEFEF 1px;
        overflow: hidden;
    }
    .goodsShow-1-left{
        height: 2.4rem;
        width: 50%;
        float: left;
        position:relative;
        border-right: solid #EFEFEF 1px;
    }
    .goodsList-1-title{
        width: 100%;
        height: 0.32rem;
        position: absolute;
        left: 1%;
        top: 8%;
        overflow: hidden;
        font-size: 0.28rem;
        font-weight: 700;
    }
    .goodsList-1-desc{
        width: 43%;
        height: 0.4rem;
        position: absolute;
        left: 4%;
        top: 25%;
        font-size: 0.24rem;
        color: #cb385d
    }
    .goodsList-1-price{
        width: 1rem;
        height: 0.4rem;
        line-height: 0.4rem;
        position: absolute;
        left: 45%;
        top: 21%;
        background-color: #F21D4F;
        border-radius: 0.2rem;
        text-align: center;
        font-size: 0.28rem;
        color: #fff;
    }
    .goodsTitle-s0{
        color:#f73b61;
    }
    .goodsTitle-s1{
        color:#fe6719
    }
    .goodsTitle-s2{
        color: #5fc600;
    }
    .goodsList-1-img{
        width: 100%;
        height: auto;
        overflow: hidden;
        text-align: center;
        position: absolute;
        left: 0;
        top: 38%;
    }
    .goodsShowList-1-img-box{
        width:3.5rem;
        height: 1.5rem;
        padding-left: 3%;
    }
    .goodsShowList-1-img-box img{
        width: 100%;
        height: 100%;
    }
    .goodsShow-1-right{
        width: 49%;
        height: 2.4rem;
        float: right;
    }
    .goodsList-2{
        height: 1.2rem;
        border-bottom: solid #EFEFEF 1px;
        position: relative;
        overflow: hidden;
    }
    .goodsList-2-title{
        width: 50%;
        height: 0.32rem;
        position: absolute;
        left: 4%;
        top: 8%;
        overflow: hidden;
        font-size: 0.28rem;
        font-weight: 700;
    }

    .goodsList-2-desc{
        width: 49%;
        height: 0.4rem;
        position: absolute;
        left: 4%;
        top: 36%;
        font-size: 0.24rem;
        color: #7b7f82;
    }
    .goodsList-2-img{
        width: 32%;
        height: auto;
        text-align: center;
        position: absolute;
        left: 55%;
        top: 0%;
    }
    .goodsList-2-img img{
        height: 1.16rem;
        padding-left: 5%;
    }
    .goodsShow-2{
        width: 100%;
        clear: both;
        background-color: #FFFFFF;
        display: flex;
        -webkit-box-flex: 1;
        align-items: center;
        justify-content: space-between;
    }
    .goodsShow-2-list{
        width: 24.7%;
        height: 3rem;
        border-right: 1px solid #EFEFEF;
        border-bottom: solid 1px #EFEFEF;
    }
    .goodsShow-2-list-title{
        width: 100%;
        height: 0.6rem;
        text-align: center;
        line-height: 0.8rem;
        overflow: hidden;
        font-size: 0.28rem;
        font-weight: 700
    }
    .goodsShow-2-list-img{
        width: 100%;
        text-align: center;
    }
    .goodsShow-2-list-img img{
        width: 1.52rem;
        height: 1.48rem;
    }
    .goodsShow-2-list-price{
        width: 100%;
        height: 0.4rem;
        text-align: center;
        font-size: 0.28rem;
        color: #d32a4e;
    }
    .goodsTitle-ss0{
        background: #F21D4F;
    }
    .goodsTitle-ss2{
        background: #5FC600;
    }
    .goodsShow-2-list-unprice{
        width: 100%;
        height: 0.4rem;
        text-align: center;
        font-size: 0.24rem;
        color: #7b7f82;
        text-decoration: line-through;
    }
    .title{
        width: 100%;
        height: 1rem;
        clear: both;
        display: flex;
        -webkit-box-flex: 1;
        -webkit-box-align: center;
        justify-content: space-between;
    }
    .titleLeft-line{
        width: 35%;
        height: 1px;
        background-color: #D4D4D4;
        margin-top: 6%;
    }
    .titleCon{
        width: 28%;
        height: 0.44rem;
        text-align: center;
        margin-top: 3.5%;
        background-image: url(../../../assets/images/home/index/recom.png);
        background-size: 0.36rem;
        background-repeat: no-repeat;
        background-position: 0.28rem top;
        line-height: 0.32rem;
        padding-left: 0.4rem;
        overflow: hidden;
        font-size: 0.32rem;
        color: #000;
    }
    .case{
        width: 100%;
        overflow: hidden;
        margin-bottom: 1rem;
        display: flex;
        -webkit-box-flex: 1;
        -webkit-box-align: center;
        justify-content: space-around;
        flex-wrap: wrap;
    }
    .caseList{
        margin-right: 0.1rem;
        width: 48%;
        height: 4.4rem;
        background-color: #FFFFFF;
        margin-bottom: 0.24rem;
        float: left;
        margin-left: 0.04rem;
    }
    .caseList-img{
        width: 100%;
        text-align: center;
    }
    .caseList-img img{
        width: 2.8rem;
        height: 2.8rem;
    }
    .caseList-title{
        width: 97%;
        height: 0.6rem;
        line-height: 0.6rem;
        text-overflow: ellipsis;
        -webkit-box-orient: vertical;
        overflow: hidden;
        display: -webkit-box;
        margin: 0 auto;
        font-size: 0.28rem;
        color: #000;
        -webkit-line-clamp: 2;
    }
    .caseList-price{
        width: 50%;
        height: 0.4rem;
        margin-top: 5%;
        margin-left: 0.12rem;
        font-size: 0.28rem;
        color: #d32a4e;
    }
    .goodsShow-1-left-list-title{
        width: 100%;
        height: 0.56rem;
        text-align: center;
        line-height: 0.5rem;
        overflow: hidden;
        font-size: 0.28rem;
        font-weight: 700;
    }
    .goodsShow-1-left-list-desc{
        width: 100%;
        height: 0.28rem;
        text-align: center;
        font-size: 0.24rem;
        color: #7b7f82;
    }
    .goodsShow-1-left-list-img{
        width: 100%;
        text-align: center;
    }
    .goodsShow-1-left-list-img img{
        width: 1.2rem;
        height: 1.4rem;
    }
</style>
