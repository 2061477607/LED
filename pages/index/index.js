//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  onLoad: function () {

  },
  //事件处理函数
  goToOldDanmu: function() {
    wx.navigateTo({
      url: '../olddanmu/olddanmu'
    })
  },
  goToshock:function(){
    wx.navigateTo({
      url: '../shock/shock'
    })
  },
  goToText:function(){
    wx.navigateTo({
      url: '../text/text'
    })
  },
  goTojieji:function(){
    wx.navigateTo({
      url: '../jieji/jieji'
    })
  }
 
  
})
