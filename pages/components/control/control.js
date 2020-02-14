// pages/control/control.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    papahide:{
      type:Boolean,
      value:true,
     
    },
    config:{
      type:Object,
      value:{
        "fontColor":true,
         "speed":true,
         "fontSize":true,
         "bkColor": true,
         "moshi": false
        }
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    showFlag:true,
    controlShow:false,
    hintText:"(ﾉ◕ヮ◕)ﾉ点击屏幕即可隐藏/显示输入框哦~请分享，收藏，谢谢支持",
    colorArray:[
      '#fff',
      "#000",
      "#FF0000",
   
      "#FF99FF",
      "#FFFF00",
      "#FFCC00",
      
      "#00FF00",
      "#0099FF",
      "#6633FF",
      "#0000FF",
    ],
    speedArray:[
      
      { name: "0.5x", code: "7000" },
      { name: "1x", code: "5000" },
      { name: "2x", code: "3000" },
 
    ],
    SizeArray:[
      { name: "特小", code: "15" },
      { name: "小", code: "25" },
      { name: "正常", code: "40" },
      { name: "大", code: "60" },
      { name: "特大", code: "80" },
    ],
    moshiArray:[
      { name: "一行字", code: "0" },
      { name: "一段话", code: "1" },
    ]
  },

 ready:function(){
   console.log(this.data.config)
 },
  /**
   * 组件的方法列表
   */
  methods: {
    focus: function () {
      this.setData({
        hintText: "( ^ω^)回车就可以发送弹幕哦"

      })
    },
    onblur: function () {
      this.setData({
        hintText: "(ﾉ◕ヮ◕)ﾉ点击屏幕即可隐藏/显示输入框哦~请分享，收藏，谢谢支持"
      })
    },
    gohome:function(){
      wx.navigateTo({
        url: '../index/index'
      })
    },
    showcontrol:function(){
      this.setData({
        showFlag:false,
        controlShow: true
      })
    },
    hidecontrol:function(){
      this.setData({
        showFlag: true,
        controlShow: false
      })
    },
    textInput:function(e){
      this.triggerEvent('getText', e.detail.value)
    },
    selectFontColor:function(e){

      
      let color = e.currentTarget.dataset.color,
        my_event_detail = {
          val: color
        }
      // myevent自定义名称事件，父组件中使用
      this.triggerEvent('getFontColor', my_event_detail)
     
      console.log(color)
    },
    selectBkColor:function(e){

      let color = e.currentTarget.dataset.color,
        my_event_detail = {
          val: color
        }
      // myevent自定义名称事件，父组件中使用
      this.triggerEvent('getBkColor', my_event_detail)
     
    },
    selectMoshi:function(e){
      
      let moshi = e.currentTarget.dataset.moshi,
        my_event_detail = {
          val: moshi
        }

      console.log(moshi,33)
      this.triggerEvent('getMoshi', my_event_detail)
    },
    selectSpeed:function(e){

      let speed = e.currentTarget.dataset.speed,
        my_event_detail = {
          val: speed
        }
      // myevent自定义名称事件，父组件中使用
      this.triggerEvent('getSpeed', my_event_detail)
   
      
    },
    selectFontSize:function(e){
      
      let fontSize = e.currentTarget.dataset.size,
        my_event_detail = {
          val: fontSize
        }
      // myevent自定义名称事件，父组件中使用
      this.triggerEvent('getSize', my_event_detail)
    }
  }
})
