<template>
  <div>

<div id="main_box">
   
    <div>
    <div id="box1">
      <div>
        <div>3.9</div>
        <div>综合评分</div>
        <div>高于周边商家69.2%</div>
      </div>
      <div>
        <div>
          <span>服务态度</span>
          <van-rate v-model="value" size="16px" readonly />
          <span>3.9</span>
        </div>
        <div>
          <span>服务态度</span>
          <van-rate v-model="value1" size="16px" readonly />
          <span>4.0</span>
        </div>
        <div>
          <span>送达时间</span>
          <span>44分钟</span>
        </div>
      </div>
    </div>
    <div id="box2"></div>

    <div id="box3">
      <div>全部{{all}}</div>
      <div>满意{{satisfied.length}}</div>
      <div>不满意{{all-satisfied.length}}</div>
    </div>

    <div id="box4">
      <van-checkbox v-model="checked" @click="change">只看有内容的评价</van-checkbox>
    </div>

    <div id="box5">
      <div v-for="item in pingja" :key="item.id">
        <div>
          <img :src="item.avatar" />
        </div>

        <div>
          <div>
            <div>{{item.username}}</div>
            <div>{{item.rateTime}}</div>
          </div>
          <div>
            <van-rate v-model="item.score" size="12px" />&emsp; &emsp;
            <span v-if="item.deliveryTime">{{item.deliveryTime}}分钟送达</span>
          </div>
          <div>{{item.text}}</div>
          <div><van-icon name="good-job" color="#6599E6" v-if="item.recommend.length>0"/>&emsp; &emsp;  <van-tag color="#f2826a" plain  v-if="item.recommend.length>0">{{item.recommend.join(',')}}</van-tag></div>
        </div>
      </div>
    </div>
  </div>

  </div>

    </div>
 
</template>

<script>
import { EVALUATE } from "@/api/apis";
// import BSscroll from 'better-scroll'
export default {
  data() {
    return {
      value: 4,
      value1: 4,
      all: "",
      satisfied: "",
      checked: false,
      pingja: "",
      pingja1:'',
    };
  },
methods:{
     
    change(){
       

       if(this.checked){
      this.pingja=  this.pingja.filter(res=>{
               return res.text.length>0
           })
       }else{
           return  this.pingja=this.pingja1
       }   
     
  
        
    }
},

  created() {
    EVALUATE().then(res => {
    //   console.log(res.data.data);
      for (let i of res.data.data) {
        i.rateTime = new Date(i.rateTime);

        let d = i.rateTime;
        let year = d.getFullYear();
        let mouth =
          d.getMonth() + 1 < 10 ? "0" + (d.getMonth() + 1) : d.getMonth() + 1;

        let date = d.getDate() < 10 ? "0" + d.getDate() : d.getDate();

        let hours = d.getHours() < 10 ? "0" + d.getHours() : d.getHours();

        let minute =
          d.getMinutes() < 10 ? "0" + d.getMinutes() : d.getMinutes();

        i.rateTime =
          year + "-" + mouth + "-" + date + " " + hours + ":" + minute;
      }
      this.pingja = res.data.data;
      this.pingja1=res.data.data
      this.all = res.data.data.length;
      this.satisfied = res.data.data.filter(res => {
        return res.score >= 4;
      });
    });
  },

  mounted(){
  // new BSscroll("#main_box",{
  //   click:true
  // })
  
    
}
 

};
</script>

<style lang='scss' scoped>
#box1 {
  padding: 20px 10px;
  box-sizing: border-box;
  border-top: 1px solid #e6e7e9;
  display: flex;
  justify-content: space-around;
  div:nth-child(1) {
    text-align: center;
    line-height: 25px;
    div:nth-child(1) {
      font-size: 20px;
      color: orange;
    }
    div:nth-child(2) {
      font-size: 14px;
    }
    div:nth-child(3) {
      font-size: 12px;
    }
  }
  div:nth-child(2) {
    font-size: 12px;
    div {
      line-height: 25px;
      span {
        vertical-align: middle;
        margin-right: 10px;
      }
      vertical-align: middle;
      margin-right: 10px;
      span:nth-child(3) {
        color: #fe9900;
      }
      span:nth-child(2) {
        color: #d4d5d9;
      }
    }
  }
}
#box2 {
  height: 20px;
  border-bottom: 1px solid #e6e7e9;
  background: #f4f5f7;
}

#box3 {
  display: flex;
  padding: 20px;
  box-sizing: border-box;
  border-bottom: 1px solid #e6e7e9;
  div {
    font-size: 12px;
    width: 50px;
    height: 30px;
    text-align: center;
    line-height: 30px;
    margin-right: 10px;
  }
  div:nth-child(1) {
    background: #00a0dc;
    color: white;
  }
  div:nth-child(2) {
    background: #ccecf7;
  }
  div:nth-child(3) {
    background: #eaebed;
  }
}

#box4 {
  color: #9a9fa4;
  font-size: 14px;
  border-bottom: 1px solid #e6e7e9;
  padding: 20px;
}

#box5 {
 
  & > div {
    display: flex;
    margin-top:30px ;
    & > div:nth-child(1) {
        margin: 0 20px;
      img {
        width: 30px;
        height: 30px;
        border-radius: 50%;
       
      }
    }
    & > div:nth-child(2) {
      flex: 1;
      margin-right: 10px;
     div{
          margin-top:5px ;
     }
      & > div:nth-child(1) {
        display: flex;
        justify-content: space-between;
      }
    }
  }
}
</style>