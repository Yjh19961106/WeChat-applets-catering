// pages/Pay/wxPay/wxPay.js
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    items: [
      { name: '微信支付', id: '1', value: '微信支付'},
      { name: '会员卡支付', id: '2', value: '会员卡支付'},
    ],
    things: [
      { id: 1, name: "四人火锅", num: "1", money: "309.00" },
      { id: 2, name: "龙口粉丝", num: "2", money: "39.00" },
      { id: 3, name: "虾滑", num: "1", money: "69.00" },
    ],

  },
  radioChange(e) {
    console.log('radio发生change事件，携带value值为：', e.detail.value)
  },
  RunMemberCard : function(){
    wx.navigateTo({
      url: '../../MemberCard/MemberCard',
    })
  },
  //关闭提示
  hideRule: function () {
    this.setData({
      isRuleTrue: false,
      GoodsNum: 0,
    }),
    wx.navigateTo({
      url: '../paySuccess/paySuccess',
    })
  },
  ToastCard : function(){
    var that = this;
    this.setData({
      isRuleTrue: true
    })
    
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '立即支付',
    })
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
