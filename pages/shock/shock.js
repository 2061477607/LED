const app = getApp();
let page,clear;

Page({
  data: {
    bkcolor: '',
    gohome:false,
    text:"轻触屏幕停止"
  },
  onLoad:function(){
    page = this;
    
    page.shock()
  },
  randomColor:function() {
    var colorStr = Math.floor(Math.random() * 0xFFFFFF).toString(16).toUpperCase();
    // return "#" + "000000".substring(0, 6 - colorStr) + colorStr;

    page.setData({
      bkcolor: "#" + "000000".substring(0, 6 - colorStr) + colorStr
    })
  },
  shock:function(){
    clear = setInterval(function(){
      page.randomColor()
    },100)
  },
  stop:function(){
    if(page.data.gohome){
      
      wx.navigateTo({
        url: '../index/index'
      })


    }else{
      clearInterval(clear);
      this.setData({
        text: '返回',
        gohome:true
      })
    }
    
  },


})
