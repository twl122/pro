<template>
  <div id="index_box">
    <!-- 上盒子 -->
    <div id="top_box">
      <div>
        <img :src="img" alt width="80px" />
      </div>
      <div>
        <p>
          <van-tag type="danger">品牌</van-tag>
          <span>{{goodname}}</span>
        </p>
        <p>
          <span>{{description}}</span>
          <span>/</span>
          <span>{{deliveryTime}}</span>
        </p>
        <p>
          <van-tag>减</van-tag>
          {{supports}}
        </p>
      </div>
      <van-tag round color="#3E342B" class="ss" size="medium">
        <span>5</span>
        <span>></span>
      </van-tag>
    </div>

    <div>
      <van-notice-bar left-icon="volume-o" :text="bulletin" background="#434448" color="white" />
    </div>

    <!-- 导航 -->
    <div id="nav_box">
      <router-link to="/" :class="{active:patha=='/'}">商店</router-link>
      <router-link to="/evaluate" :class="{active:patha=='/evaluate'}">评价</router-link>
      <router-link to="/shop" :class="{active:patha=='/shop'}">商家</router-link>
    </div>

    <!-- 中盒子 -->

    <router-view id="router_box"></router-view>

    <!-- 下盒子 -->

          





    <div id="buttom_box">

      <van-cell is-link @click="showPopup" id="1111111111111111">
       
      <van-icon name="shopping-cart" />
     </van-cell>

      <div>￥0</div>
      <div>另需配送费￥4元</div>
      <div>￥20起送</div>
    </div>
    <van-popup v-model="show" position="bottom" :style="{ height: '30%' }" round>内容</van-popup>
    
  </div>
</template>

<script>
import { GOODS } from "@/api/apis";
export default {
  data() {
    return {
      img: "",
      goodname: "",
      description: "",
      deliveryTime: "",
      supports: "",
      bulletin: "",
      patha: "/",
      show: false
    };
  },
  methods: {
    showPopup() {
      this.show = true;
    }
  },

  watch: {
    $route: {
      handler: function(val) {
        this.patha = val.path;
      },
      deep: true
    }
  },

  created() {
    GOODS().then(res => {
      this.img = res.data.data.avatar;
      this.goodname = res.data.data.name;
      (this.description = res.data.data.description),
        (this.deliveryTime = res.data.data.deliveryTime),
        (this.supports = res.data.data.supports.join(","));
      this.bulletin = res.data.data.bulletin;

      this.img = this.img.replace(
        "http://127.0.0.1:5000",
        "http://192.168.43.72:5000"
      );

      // console.log(this.img);
    });
  }
};
</script>

<style lang="scss" >
body,
html {
  height: 100%;
}
#index_box {
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;

  #top_box {
    position: relative;
    box-sizing: border-box;
    padding: 10px;
    display: flex;
    height: 100px;
    //  filter: blur(15px);
    background: rgba(68, 68, 68, 0.8);
    div:nth-child(2) {
      margin-left: 10px;
      p {
        margin: 0;
        font-size: 12px;
        line-height: 20px;
      }
      p:nth-child(1) {
        font-size: 14px;
        color: white;
        span:nth-child(1) {
          font-size: 14px;
        }
      }

      p:nth-child(2) {
        font-size: 12px;
        color: white;
      }
      p:nth-child(3) {
        white-space: pre-wrap;
        font-size: 8px;
        color: white;
      }
    }
    .ss {
      position: absolute;
      bottom: 3px;
      right: 20px;
      font-size: 16px;
    }
  }

  div:nth-child(2) {
    .van-notice-bar {
      height: 30px;
      font-size: 12px;
    }
  }

  // 导航盒子
  #nav_box {
    display: flex;
    justify-content: space-around;
    line-height: 40px;
    .active {
      color: red;
    }
  }

  // 中盒子
  #router_box {
    flex: 1;
    height: 100%;
    overflow-y: scroll;
  }

  // 底部盒子
  #buttom_box {
    display: flex;
    justify-content: space-between;
    height: 50px;
    background: #141c27;
    position: relative;
    line-height: 50px;
    color: #82858d;
    &>div:nth-child(1) {
      top: -15px;
      left: 20px;
      position: absolute;
        padding: 0;
      width: 50px;
      height: 50px;
      text-align: center;
      line-height: 50px;
      border: 5px solid #141c27;
      border-radius: 50%;
      box-sizing: border-box;
      background: #2b343d;
      &>div{ box-sizing: border-box;
        position: absolute;
        top: 0;
        left: 0;
        background: #2B343D;
      
      width: 50px;
      height: 50px;
        border-radius: 50%;
   
   
        &>i{
            width: 50px;
      height: 50px;
        border-radius: 50%;
       margin-left: 4px;
       margin-top: 4px;
        font-size: 30px;
          color: #808589;
          
        }
      }
    
   
   
    }
    div:nth-child(2) {
      margin-left: 100px;
      font-weight: 900;
    }
    div:nth-child(3) {
      font-size: 12px;
    }
    div:nth-child(4) {
      padding: 0 20px;
      border: 0;
      box-sizing: border-box;

      background: #2b343b;
      font-size: 12px;
      font-weight: 700;
    }
  }
}
</style> 
