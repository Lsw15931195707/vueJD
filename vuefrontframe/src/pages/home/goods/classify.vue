<template>
    <div class="classify">
        <div class="header">
            <div class="prePage" @click="goBack()">
            </div>
            <div class="search">
                <input type="text" id="search" placeholder="请输入宝贝名称">
            </div>
        </div>
        <div  class="class-main">
            <div ref="left" class="left" @touchmove.prevent>
                <ul class="leftNav " ref="leftNav" >
                    <li ref="item" :class="{active:item.checked}" v-for="(item,index) in classifyData" :key="index"
                        @click="goPage('/classify/item?cid='+item.cid,index)">{{item.title}}</li>
                    <li></li>
                </ul>
            </div>
            <div class="right">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<script>
     import IScroll from '../../../assets/js/libs/iscroll/iscroll'
    export default {
        data(){
            return{
                classifyData:[],
            }
        },
        methods: {
            goBack(){
                this.$router.go(-1)
            },
            getClassify(){
                this.$request(this.$config.baseApi+"/home/category/menu?token="+this.$config.token)
                    .then(res=>{
                        if(res.code===200){
                            for(let i=0;i<res.data.length;i++){
                                res.data[i].checked=false
                            }
                            this.classifyData=res.data;
                            this.$nextTick(()=>{
                                //重新计算dom宽高
                                this.isScroll.refresh();
                            })
                        }
                    })
            },
            goPage(url,index) {
                this.$router.replace(url);
                this.changeClassifyStyle(index);
                this.scrollPosition(index);
            },
            changeClassifyStyle(index){
                if(this.classifyData.length>0){
                    for(let i=0;i<this.classifyData.length;i++){
                        if(this.classifyData[i].checked){
                            this.classifyData[i].checked=false;
                            break;
                        }
                    }
                }
                this.classifyData[index].checked=true;
                //解决数组试图不及时更新的问题
                this.$set(this.classifyData,index,this.classifyData[index]);
            },
            scrollPosition(index){
                let topHeight=this.$refs['item'][0].offsetHeight*index;
                let scrollHeight=this.$refs["left"].scrollHeight;
                let bottomHeight=scrollHeight-topHeight;
                if(bottomHeight>this.$refs["left"].offsetHeight){
                    this.isScroll.scrollTo(0,-topHeight,500,IScroll.utils.ease.circular )
                }
            }

        },
        created() {
            this.getClassify();
        },
        mounted() {
            this.isScroll=new IScroll(this.$refs['left'],{
                scrollX : false,
                scrollY : true,
                preventDefault : false,

            });
        }
    }
</script>

<style scoped>
    .classify{
        width: 100%;
        height: 13.3rem;
    }
    .header{
        width: 100%;
        height: 1rem;
        background: #FFFFFF;
        position: fixed;
        z-index: 10;
        overflow: hidden;
        border-bottom: 1px solid #EFEFEF;
    }
    .prePage{
        width:0.8rem;
        height: 0.8rem;
        background-image: url(../../../assets/images/home/goods/back.png);
        background-size: 100%;
        background-repeat: no-repeat;
        margin-top: 2%;
        float: left;
    }
    .search{
        width: 80%;
        height: 100%;
        float: left;
        overflow: hidden;
        font-size: 0.32rem;
        text-align: center;
        line-height: 1rem;
    }
    .search input{
        width: 90%;
        height: 65%;
        border: solid 1px #B2B2B2;
        outline: none;
        -webkit-appearance: none;
        border-radius: 3px;
        font-size: 0.28rem;
        padding-left: 5%;
        overflow: hidden;
        line-height: 0.4rem;
    }
    .class-main{
        width: 100%;
        height: 100%;
        overflow: hidden;
        background-color: #EFEFEF;
    }
    .left{
        width: 23%;
        height:100vh ;
        background: #FFFFFF;
        float: left;
        margin-right: 3%;
        overflow:hidden;
        margin-top:1rem;
        position:relative;z-index:1;
    }
    .leftNav{
        width:100%;
        height: auto;

    }
    .leftNav li{
        width: 100%;
        height: 0.8rem;
        line-height: 0.8rem;
        text-align: center;
        border-bottom: 1px solid #EFEFEF;
        font-size: 0.28rem;
    }
    .right{
        width: 74%;
        height: 100%;
        float: left;
        overflow: hidden;
        margin-top:1rem;
    }
    .active{
        color:#ff0000;
    }
</style>