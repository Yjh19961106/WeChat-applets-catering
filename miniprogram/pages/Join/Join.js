// pages/Join/Join.js
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    Name: '',
    Phone: " ",
  },
  nameInput : function(e){
    this.setData({
      Name: e.detail.value
    })
  },
  phoneInput : function(e){
    this.setData({
      Phone: e.detail.value
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  SureSubmit : function(){
    console.log("用户名：" + this.data.Name + " 手机号：" + this.data.Phone);
  },
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '加盟合作',
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