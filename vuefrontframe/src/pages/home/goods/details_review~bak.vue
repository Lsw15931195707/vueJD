<template>
    <div class="page">
        <div class='reviews-main'>
            <div class="reviews-title">商品评价（{{pageInfo.total}}）</div>
            <div class='reviews-wrap' ref="scroll-review">
                <div>
                    <div class='reviews-list' v-for="(item,index) in reviews" :key="index">
                        <div class='uinfo'>
                            <div class='head'><img  src="../../../assets/images/common/grey.jpg" :data-echo="item.head"  />
                            </div>
                            <div class='nickname'>{{item.nickname}}</div>
                        </div>
                        <div class='reviews-content'>{{item.content}}</div>
                        <div class='reviews-date'>{{item.times}}</div>
                    </div>
                    <div style="height:1rem;width: 100%;"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {lazyImg} from '../../../assets/js/libs/utils';
    import BScroll from '../../../assets/js/libs/bscroll';
    export default {
        data(){
            return{
                reviews:[],
                curPage:1,
                pageInfo:{total:0,pagenum:1},
                gid:this.$route.query.gid?this.$route.query.gid:"",
            }
        },
        created(){
            this.getReviews()
        },
        methods:{
            getReviews(){
                this.$request(this.$config.baseApi+
                    "/home/reviews/index?gid="+this.gid+"&token="+this.$config.token+"&page="+this.curPage+"")
                    .then(res=>{
                        if(res.code===200){
                            this.reviews=res.data;
                            this.pageInfo=res.pageinfo;
                            this.$nextTick(()=>{
                                lazyImg();
                                this.myScroll.refresh();
                                this.myScroll.on("scrollEnd",()=>{
                                    lazyImg();
                                });

                                this.myScroll.on("pullingUp",()=>{
                                    //alert('已到最底部');
                                    //console.log('加载ajax数据');
                                    if(this.curPage<this.pageInfo.pagenum){
                                        this.curPage++;
                                        this.$request(this.$config.baseApi+
                                            "/home/reviews/index?gid="+this.gid+"&token="+this.$config.token+"&page="+
                                            this.curPage+"").then(res=>{
                                            if(res.code===200){
                                                this.reviews.push(...res.data)
                                                this.myScroll.refresh();
                                            }
                                        });
                                    }
                                    this.myScroll.finishPullUp();//可以多次执行上拉刷新
                                });
                            })
                        }
                    })
            }
        },
        mounted() {
            this.myScroll = new BScroll(this.$refs['scroll-review'], {
                //这个配置用于做上拉加载功能，默认为 false。当设置为 true 或者是一个 Object 的时候，可以开启上拉加载
                pullUpLoad: {
                    threshold: 10
                },
                useTransition:false  // 防止iphone微信滑动卡顿
            });
        }
    }
</script>

<style scoped>
    .page{margin-top:1.2rem;}
    .reviews-main{width:100%;background-color: #FFFFFF;margin-top:0.5rem;overflow:hidden;padding-bottom: 0.5rem}
    .reviews-main .reviews-title{color:#7b7f82;font-size:0.32rem;width:90%;margin:0 auto;margin-top:0.2rem;}
    .reviews-main .reviews-wrap{width:90%;margin:0 auto;height: 82vh;overflow:hidden;position: relative;z-index: 1 ;}
    .reviews-main .reviews-wrap .reviews-list{width:100%;margin-top:0.4rem;}
    .reviews-main .reviews-list .uinfo{width:100%;display:flex;display:-webkit-flex;height:0.6rem;align-items: center;-webkit-align-items: center;}
    .reviews-main .reviews-list .uinfo .head{width:0.6rem;height:0.6rem;margin-right:0.2rem;}
    .reviews-main .reviews-list .uinfo .head img{width:100%;height:100%;border-radius: 100%;}
    .reviews-main .reviews-list .uinfo .nickname{width:auto;font-size:0.28rem;}
    .reviews-main .reviews-list .reviews-content{width:100%;margin:0 auto;font-size:0.28rem;margin-top:0.2rem;}
    .reviews-main .reviews-list .reviews-date{width:auto;font-size:0.28rem;color:#7b7f82;margin-top:0.2rem;}
    .reviews-main .reviews-more{width:2.44rem;height:0.56rem;border:solid 1px #D50A17;line-height:0.56rem;text-align:center;font-size:0.28rem;margin:0 auto;margin-top:0.5rem;border-radius: 0.1rem;}
</style>
