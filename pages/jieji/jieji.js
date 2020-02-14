const app = getApp();
var timer;
let page;
Page({
  data: {
    papaHide: true,
    displayText: "好用记得分享哦~",
    panelFlag: false,
    barFlag: true,
    scorllDuration: 5000,
    hintText: "(ﾉ◕ヮ◕)ﾉ点击非输入区域即可隐藏/显示界面哦！",
    textLen: 0,
    animation: {},
    currentSpeed: 0,
    color: "#000",
    fontSize: "40",
    background: '#fff',
  },

  onLoad: function () {
    page = this;
    this.setData({
      windowHeight: wx.getSystemInfoSync().windowHeight
    })
  },

  onShow: function () {
    var animation = wx.createAnimation({
      timingFunction: 'linear'
    });
    this.data.animation = animation;

    //初始化速度
    this.data.currentSpeed = this.data.windowHeight * 2 / 5000;

    this.scorllFuc();
  },

  /**
   * 查询字幕长度
   */
  getTextLen: function () {
    var query = wx.createSelectorQuery();
    query.select('.scorll-text').boundingClientRect((obj) => {
      this.setData({
        textLen: parseInt(obj.height)
      })
    }).exec();
  },

  /**
   * 清除字幕
   */
  clearScorll: function () {
    clearInterval(timer);
    this.data.animation.translate3d(0, 0, 0).step({
      duration: 0
    })
    this.setData({
      scorll: this.data.animation.export()
    })
  },

  //隐藏工具框
  toggleBar: function () {
    page.setData({
      papaHide: !page.data.papaHide
    })
  },
  //子组件传值
  get_text: function (e) {
    this.clearScorll();
    console.log(e)
    page.setData({
      displayText: e.detail
    })
    this.scorllFuc();
  },
  get_font_color: function (e) {

    this.setData({
      color: e.detail.val
    })
  },
  get_bk_color: function (e) {

    this.setData({
      background: e.detail.val
    })
  },
  get_speed: function (e) {
    this.clearScorll()
   

    this.setData({
      currentSpeed: this.data.windowHeight * 2 / e.detail.val
    })
    this.scorllFuc();
  },
  get_size: function (e) {
    this.clearScorll()
    this.setData({
      fontSize: e.detail.val
    })
    this.scorllFuc();
  },
  /**
   * 动画控制
   */
  scorllFuc: function () {
    this.getTextLen();
    var scorllH = this.data.windowHeight * 2 + this.data.textLen;
    this.data.scorllDuration = parseInt(scorllH / this.data.currentSpeed);
    var scorllAmt = () => {
      this.data.animation.translate3d(-scorllH, 0, 0).step({
        duration: this.data.scorllDuration
      })
      this.data.animation.translate3d(0, 0, 0).step({
        duration: 0
      })
      this.setData({
        scorll: this.data.animation.export()
      })
    };
    scorllAmt();
    // 循环动画
    timer = setInterval(() => {
      scorllAmt();
    }, this.data.scorllDuration + 500);
  },
})