// pages/Details/Details.js
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    id : "",
    GoodsImg : '',
    GoodsTitle : '',
    GoodsPrice1 : '',
    GoodsPrice2 : '',
    GoodsMessage : '',
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options);
    var _this = this;
    var GoodsTitle = options.GoodsTitle;
    var GoodsImg = options.GoodsImg;
    var GoodsPrice1 = options.GoodsPrice1;
    var GoodsPrice2 = options.GoodsPrice2;
    var GoodsMessage = options.GoodsMessage;
    this.setData({
      GoodsTitle: GoodsTitle,
      GoodsImg: GoodsImg,
      GoodsPrice1: GoodsPrice1,
      GoodsPrice2: GoodsPrice2,
      GoodsMessage: GoodsMessage,
    })
    //获取
    wx.getStorage({
      key: 'id',
      success: function (res) {
        _this.setData({
          GoodsTitle: res.data,
          GoodsImg: res.data,
          GoodsPrice1: res.data,
          GoodsPrice2: res.data,
          GoodsMessage: res.data,
        })
      }
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
