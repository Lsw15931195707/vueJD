import Vue from 'vue'
let modules={
    //命名空间
    namespaced:true,
    state:{
        cartData:localStorage['cartData']?JSON.parse(localStorage['cartData']):[]
    },
    mutations:{
        //添加商品
        addItem(state,payload){
            let isSame=false;
            if(state.cartData.length>0){
                for(let key in state.cartData){
                    if(state.cartData[key].gid===payload.cartData.gid && JSON.stringify(state.cartData[key].attrs)===
                    JSON.stringify(payload.cartData.attrs)
                    ){
                        isSame=true;
                        state.cartData[key].amount=parseInt(state.cartData[key].amount)+
                            parseInt(payload.cartData.amount);
                        break;
                    }
                }
            }
            if(!isSame){
                state.cartData.push(payload.cartData)
            }
            localStorage['cartData']=JSON.stringify(state.cartData);
        },
        //增加数量
        incAmount(state,payload){
            state.cartData[payload.index].amount=++state.cartData[payload.index].amount;
            Vue.set(state.cartData,payload.index,state.cartData[payload.index]);
            localStorage['cartData']=JSON.stringify(state.cartData);
        },
        //减少数量
        decAmount(state,payload){
            state.cartData[payload.index].amount=state.cartData[payload.index].amount>1?
                --state.cartData[payload.index].amount:state.cartData[payload.index].amount;
            Vue.set(state.cartData,payload.index,state.cartData[payload.index]);
            localStorage['cartData']=JSON.stringify(state.cartData);
        },
        //删除商品
        delItem(state,payload){
            state.cartData.splice(payload.index,1);
            localStorage['cartData']=JSON.stringify(state.cartData);
        },
        //选择商品
        selectItem(state,payload){
            state.cartData[payload.index].checked=!state.cartData[payload.index].checked;
            Vue.set(state.cartData,payload.index,state.cartData[payload.index]);
            localStorage['cartData']=JSON.stringify(state.cartData);
        },
        //全选/反选
        allSelectItems(state,payload){
            if(state.cartData.length>0){
                for(let key in state.cartData){
                    state.cartData[key].checked=payload.isAllChecked
                }
            }
            localStorage['cartData']=JSON.stringify(state.cartData);
        }
    },
    getters:{
        //合计计算
        total(state){
            let total=0;
            if(state.cartData.length>0){
                for(let key in state.cartData){
                    if(state.cartData[key].checked){
                        total+=parseFloat(state.cartData[key].price)* parseInt(state.cartData[key].amount)
                    }
                }
                return parseFloat(total.toFixed(2))
            }
            return total
        },
        //运费计算
        freight(state){
            if(state.cartData.length>0){
                let freightArr=[];
                for(let key in state.cartData ){
                    if(state.cartData[key].checked){
                        freightArr.push(state.cartData[key].freight)
                    }
                }
                return freightArr.length>0?Math.max.apply(null,freightArr):0
            }
            return 0
        }
    }
};
export default modules;
