// pages/RechargedSuccess/RechargedSuccess.js
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  //跳转
  Runback: function () {
    wx.switchTab ({
      url: '../UserHomePage/UserHomePage',
    })
    //充值成功 变为会员卡界面
    var pages = getCurrentPages();
    var prevPage = pages[pages.length - 3];
    prevPage.setData({
      list: '2'
    })
  },
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '会员办理',
    }),
    wx.setNavigationBarColor({
      frontColor: '#000000',
      backgroundColor: 'white',
    })
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