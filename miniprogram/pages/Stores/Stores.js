// pages/Stores/Stores.js
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    StoresList: [
      { id: "1", name: "美食一号店", distance: "500" , img:"../img/1.png"},
      { id: "2", name: "美食二号店", distance: "1000", img: "../img/1.png"},
      { id: "3", name: "美食三号店", distance: "1500", img: "../img/1.png"},
      { id: "4", name: "美食四号店", distance: "2500", img: "../img/1.png"},
    ],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '切换店铺',
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
