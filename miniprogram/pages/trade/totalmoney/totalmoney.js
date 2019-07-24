// pages/trade/totalmoney/totalmoney.js
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    id: "",
    m : '',
    ListMoney:[
      { id: '1', date: '2019-01-20\n13-00-22' ,trade:'150000.00' , person: '15000.00' ,background :'1'},
      { id: '1', date: '2019-01-20\n13-00-22', trade: '150000.00', person: '5000.00' ,background :'2'},
      { id: '1', date: '2019-01-20\n13-00-22', trade: '150000.00', person: '15000.00' ,background :'1'},
      { id: '1', date: '2019-01-20\n13-00-22', trade: '150000.00', person: '5000.00' ,background :'2'},
      { id: '1', date: '2019-01-20\n13-00-22', trade: '150000.00', person: '15000.00' ,background :'1'},
    ],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '交易金额',
    }),
    console.log(options.m);
    var _this = this;
    var m = options.m;
    this.setData({
      m: m,
    })
    wx.getStorage({
      key: 'id',
      success: function (res) {
        _this.setData({
          m: res.data,
          
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