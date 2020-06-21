<template>
    <div>
       
           

         
           
          <div id="box1">
              <div>
                 <h4>{{name}}</h4> 
            
                <van-rate v-model="score" size="16px" readonly />
                <van-tag plain type="danger" size= medium>月售{{sellCount}}单</van-tag>
              </div>

          </div>
          <div id="box2">
             <div>
                 <p>起送价</p>
                 <p><span>{{minPrice}}</span> 元</p>
             </div>
             <div>
                 <p>商家配送</p>
                 <p><span>{{deliveryPrice}}</span>元</p>
             </div>
             <div>
                 <p>平均配送时间</p>
                 <p><span>{{deliveryTime}}</span>分钟</p>
             </div>
          </div>
          <div id="box3">

          </div>

          <div id="box4" >
                 <h4>公告与活动</h4>
                 <div>{{bulletin}}</div>
                 <ul>
                     <li v-for="item in supports" :key="item">{{item}}</li>
                 </ul>
          </div>
          <div id="box5">

          </div>

<div id="box6">
<h4>商家实景</h4>
<img :src="item.replace('http://127.0.0.1:5000','http://192.168.43.72:5000')" v-for="item in pics" :key="item" width="80px" >
</div>

<div id="box7">

</div>
<div id="box8">
    <h4>商家信息</h4>
<ul>
    <li>该商家支持开发票，请在下单时填写好发票抬头</li>
    <li>品类：其他菜系、包子粥店</li>
    <li>地址：xxxx</li>
    <li>营业时间：10：00-20：00</li>
</ul>
</div>
    </div>
 
     
</template>

<script>
import {GOODS} from '@/api/apis'
// import BSscroll from 'better-scroll'
    export default {
        data(){
            return{
                 name:'',
                 sellCount:'',
                 minPrice:"",
                 deliveryPrice:'',
                 deliveryTime:'',
                 bulletin:'',
                 supports:'',
                 pics:"",
                 score:0,
           
            }
        },
     

    created(){
        GOODS().then(res=>{
           
            this.name=res.data.data.name
            this.sellCount=res.data.data.sellCount
            this.minPrice=res.data.data.minPrice
            this.deliveryPrice=res.data.data.deliveryPrice
            this.deliveryTime=res.data.data.deliveryTime
            this.bulletin=res.data.data.bulletin
            this.supports=res.data.data.supports
            this.pics=res.data.data.pics
            this.score=res.data.data.score
       
   
            
        })
    },
//       mounted(){
//   new BSscroll(".main")
  
    
// }


    }
</script>

<style lang="scss" scoped>



#box1{
    padding: 10px 10px;
    box-sizing: border-box;
    border-top:1px solid #E6E7E9;
    &>div{
        border-bottom:1px solid #E6E7E9;
        padding: 20px 10px;
        box-sizing: border-box;
    h4{

        margin: 0;
        margin-bottom: 10px;
        
    }

    span{
        margin-left: 20px;
   
    }
    }
}

#box2{
    display: flex;
    justify-content: space-around;
    color: #999C9F;
    border-bottom: 1px solid #E6E7E9;
    padding: 20px 0;
  
    div{
      
       
        p{
            margin: 0;
            text-align: center;
            span{
                font-size: 30px;
            }
        }
    }
}
#box3{
    height: 20px;
     border-bottom: 1px solid #E6E7E9;
     background:#F4F5F7 ;
}

#box4{ 
     padding: 20px 20px 10px 20px;
    box-sizing: border-box;
    border-bottom: 1px solid #E6E7E9;
    h4{
        margin: 0;
    }
    div{
        padding: 10px;
         box-sizing: border-box;
        line-height: 30px;
        color:red;
    }
    ul{
        li{
            padding: 0 10px;
            line-height: 40px;
            border-top: 1px solid #E6E7E9;
        }
    }
  
}

#box5{
    height: 20px;
     border-bottom: 1px solid #E6E7E9;
     background:#F4F5F7 ;
}

#box6{
    padding: 20px;
    box-sizing: border-box;
     border-bottom: 1px solid #E6E7E9;
    h4{
        margin: 0;
        margin-bottom:10px ;
    }
    img{
        margin-right: 10px;
    }
}
#box7{
    height: 20px;
     border-bottom: 1px solid #E6E7E9;
     background:#F4F5F7 ;
}
#box8{
     padding: 20px;
    box-sizing: border-box;
      h4{
        margin: 0;
        margin-bottom:10px ;
    }
    ul{
        li{
            height: 50px;
     margin-top: 20px;
             border-bottom: 1px solid #E6E7E9;
        }
    }
}
</style>