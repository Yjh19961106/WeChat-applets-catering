// pages/lists/noCardLists/noCardLists.js
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    hidden: true,
    ListNum1 : 3,
    ListNum2 : 2,
    list : 1,
    List:[
      { id: "1", num: '684984321132132132321', mes: '四人套餐,招牌酱料...等4件商品', mon: '500.00', date: '2019-02-20', con: '待支付...'},
      { id: "2", num: '684984321321', mes: '四人套餐,招牌酱料...等4件商品', mon: '500.00', date: '2019-02-20', con: '待领取...' },
      { id: "2", num: '684984321321', mes: '四人套餐,招牌酱料...等4件商品', mon: '500.00', date: '2019-02-20', con: '待领取...' },
      { id: "2", num: '684984321321', mes: '四人套餐,招牌酱料...等4件商品', mon: '500.00', date: '2019-02-20', con: '待领取...' },
      { id: "3", num: '684984321321', mes: '四人套餐,招牌酱料...等4件商品', mon: '500.00', date: '2019-02-20', con: '已完成' },
    ],
  },
  RunwxPay : function(){
    wx.navigateTo({
      url: '../../Pay/wxPay/wxPay',
    })
  },
  RunnoGet: function(){
    wx.navigateTo({
      url: '../noGet/noGet',
    })
  },
  Runfinish : function(){
    wx.navigateTo({
      url: '../finish/finish',
    })
  },
  //长摁list列表
  LongTap : function(e){

    this.setData({
      hidden: false,
    })
    this.setData({
      isRuleTrue: true
    })
    // var that = this;
    // this.cancel();
    // this.delete();
  
    // var that = this;
    // var List = that.data.List;
    // var index = e.currentTarget.dataset.index;//获取下标
    // wx.showModal({
    //   title: '提示',
    //   content: '确定要删除此图片吗？',
    //   success: function (res) {
    //     if (res.confirm) {
    //       console.log('点击确定了');
    //       List.splice(index, 1);
    //     } else if (res.cancel) {
    //       console.log('点击取消了');
    //       return false;
    //     }
    //     that.setData({
    //       List
    //     });
    //   }
    // })


    // List.splice(current, 1)
    // this.setData({
    // List 
    // })
  },
  //点击取消
  cancel: function (e) {
    var that = this;
    that.setData({
      hidden: true,
    })
    this.setData({
      isRuleTrue: false
    })
  },
  //点击删除
  delete_d :function(e){
    var that = this;
    var List = that.data.List;
    var index = e.currentTarget.dataset.index;//获取下标
    console.log('点击确定了');
    List.splice(index, 1);
    // that.setData({
    //   List : List
    // });



     
    that.setData({
      hidden: true,
    })
    that.setData({
    isRuleTrue: false
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  Change1: function (e) {
    var B = e.currentTarget.id
    var that = this;
    if (B == 'A1') {
      that.setData({
        list: 1,
      })
    } else if (B == 'A2') {
      that.setData({
        list: 2,
      })
    } else if (B == 'A3') {
      that.setData({
        list: 3,
      })
    }
  },
  onLoad: function (options) {
    
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