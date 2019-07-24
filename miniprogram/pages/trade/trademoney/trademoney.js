// pages/trade/trademoney/trademoney.js
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    biao: 1,
    list: 1,
    modelMoney:  null,
    allmoney :[
      { m: '236545644', t:'1764569'}
    ],
    List :[
      {id : '1' , date : '2019-9-30\n18-00-00' ,num : '1354612312321387421321' ,money: '300.00'},
      { id: '2', date: '2019-9-30\n18-00-00', num: '1354687421321', money: '300.00' },
      { id: '3', date: '2019-9-30\n18-00-00', num: '1354687421321', money: '300.00' },
      { id: '4', date: '2019-9-30\n18-00-00', num: '1354687421321', money: '300.00' },
      { id: '5', date: '2019-9-30\n18-00-00', num: '1354687421321', money: '300.00' }
    ],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '交易金额',
    }),
    wx.setNavigationBarColor({
      frontColor: '#ffffff',
      backgroundColor: '#fe7875',
    })
  },

  //点击箭头
  InputDate: function(e){
    console.log("1");
    var that = this;
    that.setData({
      hidden: false,
    })
    this.setData({
      isRuleTrue: true
    })
  },
  //点击确定
  BeSure : function(e){
    var that = this;
    this.setData({
      isRuleTrue: false
    })
  },
  //变换标签
  onChangeShowState : function(e){
    var B = e.currentTarget.id
    var that = this;
    if (B == 'a1') {
      that.setData({
        biao: 1,
        list: 1,
      })
    } else if (B == 'a2') {
      that.setData({
        biao: 2,
        list: 2,
      })
    } 
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