// pages/UserHomePage/UserHomePage.js
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: 1,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  RunnoCardLists : function(){
    wx.navigateTo({
      url: '../lists/noCardLists/noCardLists',
    })
  },
  RuncardLists : function(){
    wx.navigateTo({
      url: '../lists/noCardLists/noCardLists',
    })
  },
  RunChargedRecord:function(){
    wx.navigateTo({
      url: '../ChargedRecord/ChargedRecord',
    })
  },
  RunJoin : function(){
    wx.navigateTo({
      url: '../Join/Join',
    })
  },
  RunMemberCard: function(){
    wx.navigateTo({
      url: '../MemberCard/MemberCard?list=1',
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    wx.setNavigationBarTitle({
      title: '我的',
    }),
    wx.setNavigationBarColor({
      frontColor: '#000000',
      backgroundColor: '#fff',
    })
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