<template>
  <div>
    <div id="good_box">
      <div id="left_box">
        <div>
        <ul>
          <!-- :class="index==acclick?'liActive':''"                                               是否开启这个类 -->
          <li v-for="(item,index) in goodsList" :key="item.name" @click="clickBtn(index)" :class="{liActive:index==acclick}"  >{{item.name}}</li>

        </ul>
        </div>
      </div>


      <div id="right_box">
        <div>
<div v-for="(item,index) in goodsList" :key="item.name" :id='index'>
      <div class="titleBox">{{item.name}}</div>
       <van-card
       v-for="(o,i) in item.foods" :key='i'
  :price="o.price"
  :title="o.name"
  :thumb="o.imgUrl.replace('http://127.0.0.1:5000','http://192.168.43.72:5000')"
  centered
>
  <template #tags>
    <van-tag plain type="primary">月售{{o.sellCount}}份</van-tag>  &emsp; 
<van-tag plain type="success">好评率{{o.rating}}%</van-tag>

  </template>
  <template #footer>
<van-stepper v-model="o.value1" theme="round" button-size="22" disable-input  min  />
  </template>
</van-card>
  </div>
      </div>
    </div>
    </div>
  </div>
</template>

<script>
import { SHOP } from "@/api/apis";
import BSscroll from 'better-scroll'
export default {
  data() {
    return {
      goodsList: "",
      value1:'',
      acclick:0,
   
     
    };
  },
  methods: {
 clickBtn(i){
 
   this.acclick=i
   this.rightBox.scrollToElement(document.getElementById(i),500)
 },

    
  },
  
  created() {
    SHOP().then(res => {
      this.goodsList = res.data.goodsList;
       for(let i of res.data.goodsList){
      //  console.log(i.foods);
       for(let j of i.foods)
        j.value1=0
       }
      //  console.log(res.data.goodsList);
        
 });      
},
mounted(){
  new BSscroll("#left_box",{
    click:true
  })
  this.rightBox= new BSscroll(document.getElementById('right_box'),
         {
           probeType:3
         }
  )

  this.rightBox.on('scroll',(obj)=>{
         let aa=parseInt(Math.abs(obj.y))

    
    //  console.log(  document.getElementById('1').offsetHeight);
      //  console.log( this.scrollRight);

            for(let o of this.scrollRight){
    
        if(aa>= o.min && aa < o.max){
          this.acclick = o.num
          break
        }
      }
       
  })
    
},
computed:{

   scrollRight(){


        
         let arr=[]
         let endHeight=0
         for(let i=0;i<this.goodsList.length;i++){

          let  stratHeight = document.getElementById(i).offsetHeight
          
          
            arr.push({num:i,min:endHeight,max: stratHeight+endHeight})
              
              endHeight+=stratHeight
       
           
         }
return arr
   }



}
 
   
   

  
};





         


   
    
    
    
    

</script>

<style lang="scss"  >
.van-stepper--round .van-stepper__plus{
  background: wheat !important;
}
body,html{
  height: 100%;
}
#good_box {
height: 100%;
  display: flex;
  border-top: 1px solid #d8dcdf;


}

#left_box {
  width: 80px;
 overflow-y: scroll;
height: 100%;
background: #f4f5f7;
  ul {
    li {
      font-size: 12px;
      text-align: center;
      width: 100%;
      height: 50px;

      padding-top: 15px;
      box-sizing: border-box;
      
    
    }.liActive{
        background: white;
      }
  }
}
#right_box {
  flex: 1;
   overflow-y: scroll;
 height: 100%;

 .titleBox{
   height: 40px;
   background: #F4F5F7;
   border-left: 5px solid #D9DCE1;
   line-height: 40px;
   padding-left: 15px;
   
 }
}


.van-stepper--round .van-stepper__plus{
  background: blue;
}
</style>