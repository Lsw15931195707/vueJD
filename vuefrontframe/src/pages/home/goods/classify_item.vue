<template>
    <div>
        <div class="caseShow" ref="caseShow1" @touchmove.prevent>
            <div class="box">
                <div  v-for="(item,index) in rightData" :key="index" v-show="!isNull">
                    <div class="right-title">
                        {{item.title}}
                    </div>
                    <div class="right-content" >
                        <div class="item" v-for="(item2,index2) in item.goods" :key="index2"
                             @click="goPage('/details?gid='+item2.gid)">
                            <div class="img">
                                <img src="../../../assets/images/common/load.gif" :data-echo="item2.image" alt="">
                            </div>
                            <div class="text">{{item2.title}}</div>
                        </div>
                    </div>
                </div>
                <div class="height"></div>
            </div>


            <div class="no-data" v-show="isNull">没有相关宝贝！</div>
        </div>
    </div>

</template>

<script>
    import {lazyImg} from '../../../assets/js/libs/utils';
    import IScroll from '../../../assets/js/libs/iscroll/iscroll'
    export default {
        data(){
            return{
                rightData:[],
                cid:this.$route.query.cid?this.$route.query.cid:"",
                isNull:false
            }
        },
        methods:{
            goPage(url){
                this.$router.push(url)
            },
            getData(){
                this.$request(  //'/classify/cloth?cid='+ item.cid +''
                    this.$config.baseApi + '/home/category/show?cid='+this.cid+'&token=' + this.$config.token
                ).then(res => {

                    if(res.code===200){
                        this.isNull=false;
                        this.rightData = res.data;
                        this.$nextTick(()=>{
                            lazyImg();
                            //重新计算dom的高
                            this.isScroll.refresh();
                            this.isScroll.on("'scrollEnd'",()=>{
                                lazyImg();
                            })
                        })
                    }else{
                        this.isNull=true;
                    }
                });
            }
        },
        beforeRouteUpdate(to,from,next){
            this.cid=to.query.cid;
            this.getData();
            next();
        },
        mounted() {
            this.isScroll=new IScroll(this.$refs['caseShow1'],{
                scrollX : false,
                scrollY : true,
                preventDefault : false
            });
        },
        created() {
            this.getData();
        }
    }
</script>

<style scoped>
    .caseShow{
        width: 100%;
        height: 100vh;
        overflow: hidden;
    }
    .box{
        /*height: 100vh;*/
        overflow:hidden;
        width: 100%;
        position:relative;
        z-index:1;
    }
    .right-title{
        width: 95%;
        height: auto;
        font-size: 0.28rem;
        margin-top: 0.28rem;
        clear: both;
    }
    .right-content{
        width: 95%;
        height: auto;
        background: #FFFFFF;
        margin-top: 0.2rem;
        overflow: hidden;
        padding-bottom: 0.32rem;
    }
    .item{
        width: 33%;
        height: 1.6rem;
        float: left;
        margin-top: 0.2rem;
    }
    .img{
        width: 70%;
        height: 1.2rem;
        overflow: hidden;
        margin: 0 auto;
    }
    .img img{
        width: 100%;
    }
    .text{
        width: 100%;
        height: 0.4rem;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        font-size: 0.24rem;
        text-align: center;
        line-height:0.4rem;
    }
    .height{
        height: 1.6rem;
        width: 100%;
    }
</style>