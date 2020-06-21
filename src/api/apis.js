import axios from 'axios'

//设置服务器IP地址
axios.defaults.baseURL='http://192.168.43.72:5000'
// 商品
export const SHOP=()=>axios.get('/goods/goods_list')
//商家
export const GOODS=()=>axios.get('/shop/seller')
//评价
export const EVALUATE=()=>axios.get('/shop/ratings')
