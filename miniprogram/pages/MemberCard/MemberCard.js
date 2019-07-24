// pages/MemberCard/MemberCard.js
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name :'',
    phone:'',
    birthday:'',
    code:'',
    send : true,
    alreadysend : false,
    resend : false,
    second : 60,

  },

  /**
   * 生命周期函数--监听页面加载
   */
  //输入信息
  btn1 :function(e){
    this.setData({
      name: e.detail.value
    })
  },
  btn2: function (e) {
    this.setData({
      phone: e.detail.value
    })
  },
  btn3: function (e) {
    this.setData({
      birthday: e.detail.value
    })
  },
  btn4: function (e) {
    this.setData({
      code: e.detail.value
    })
  },
  //发送验证码
  CountDown : function(e){
    this.setData({
      alreadysend: true,
      send: false,
      resend : false
    })
    this.timer();
  },
  //倒计时
  timer: function () {
    let promise = new Promise((resolve, reject) => {
      let setTimer = setInterval(
        () => {
          this.setData({
            second: this.data.second - 1
          })
          if (this.data.second <= 0) {
            this.setData({
              second: 60,
              alreadysend: false,
              send: false,
              resend : true
            })
            resolve(setTimer)
          }
        }
        , 1000)
    })
    promise.then((setTimer) => {
      clearInterval(setTimer)
    })
  },
  

  RunRechargedSuccess : function(){
    console.log('姓名' + this.data.name + '联系方式' + this.data.phone + '生日' + this.data.birthday + '验证码' + this.data.code)
    wx.navigateTo({
      url: '../RechargedSuccess/RechargedSuccess?list=1',
    })
  },
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '会员办理',
    }),
    wx.setNavigationBarColor({
      frontColor: '#000000',
      backgroundColor: '#fff8b0',
    }),
    console.log(options.list);
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})