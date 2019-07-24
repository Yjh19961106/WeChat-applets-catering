// pages/Order/Order.js
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //购物车动画
    hide_good_box: true,
    bus_x: 0,
    bus_y: 0,
    //购物车弹窗
    showPop: false,
    animationData: {},   

    //导航栏下划线
    list : 1,

    // 左侧点击类样式
    scrollTop: 0,
    // 定义一个空数组，用来存放右侧滑栏中每一个商品分类的 Height
    listHeight: '',
    //分类切换样式
    curNav: 0,
    curNav1: 0,
    index:1,
    index1 :1,
    //金额 数量
    money: 0,
    num : 0,
    //弹出框
    hidden: true,
    hiddentext: false,
    modelId: null,
    modelImg: null,
    modelName: null,
    modelPrice1: null,
    modelPrice2: null,
    selectPerson: true,
    //弹出框页面加减号控制count
    GoodsNum : 0,
    minusStatus: true,
    leftnav: [
      { id: "1", name: "超值套餐"},
      { id: "2", name: "全锅底"},
      { id: "3", name: "鸳鸯锅底" },
      { id: "4", name: "小料" },
      { id: "5", name: "牛羊肉" },
      { id: "6", name: "特色菜" },
      { id: "7", name: "经典火锅菜" },
      { id: "8", name: "丸滑类" },
      { id: "9", name: "根茎菌类" },
      { id: "10", name: "豆制品类" },
      { id: "11", name: "叶菜类" },
      { id: "12", name: "饮品类" },
      { id: "13", name: "特色饮品类" },

    ],
    good:[
      {
        name:"超值套餐",
        id:0,
        value:[
          {
            Goods_Id: 1,
            Goods_Title: '超值四人套餐',
            Goods_Img: '../img/2.png',
            Goods_Price1: '500.00',
            Goods_Price2: '600.00',
            Goods_Message: "akjsdhaksjdhalskjdh",
            Goods_Size: [
              {name:"清汤口味" , id : 1 },
              {name:"麻辣口味" , id : 2 },
              {name:"酸菜鱼口味", id : 3 },
              {name:"三鲜口味", id : 4 },
            ],
            Goods_Taste: '锅底口味',
            Goods_List: 1,

          }, {
            Goods_Id: 2,
            Goods_Title: '超值三人套餐',
            Goods_Img: '../img/2.png',
            Goods_Price1: '500.00',
            Goods_Price2: '700.00',
            Goods_Message: "1231241414",
            Goods_Size: [
              { name: "清汤口味", id: 1 },
              { name: "麻辣口味", id: 2 },
              { name: "酸菜鱼口味", id: 3 },
              { name: "三鲜口味", id: 4 },
            ],
            Goods_Taste: '锅底口味',
            Goods_List: 1,
          }
        ]
      },
      {
        name: "全锅底",
        id: 1,
        value: [
          {
            Goods_Id: 1,
            Goods_Title: '全锅底',
            Goods_Img: '../img/2.png',
            Goods_Price1: '500.00',
            Goods_Price2: '600.00',
            Goods_Message: "akjsdhaksjdhalskjdh",
            Goods_Size: [
              { name: "清汤口味", id: 1 },
              { name: "麻辣口味", id: 2 },
              { name: "酸菜鱼口味", id: 3 },
              { name: "三鲜口味", id: 4 },
            ],
            Goods_Taste: '锅底口味',
            Goods_List: 1,
          }
        ]
      },
      {
        name: "鸳鸯锅底",
        id:2,
        value: [
          {
            Goods_Id: 1,
            Goods_Title: '麻辣酸菜鸳鸯锅',
            Goods_Img: '../img/2.png',
            Goods_Price1: '500.00',
            Goods_Price2: '600.00',
            Goods_Message: "akjsdhaksjdhalskjdh",
            Goods_List: 2,
          }, {
            Goods_Id: 2,
            Goods_Title: '麻辣番茄鸳鸯锅',
            Goods_Img: '../img/2.png',
            Goods_Price1: '500.00',
            Goods_Price2: '700.00',
            Goods_Message: "1231241414",
            Goods_List: 2,
          }, {
            Goods_Id: 3,
            Goods_Title: '番茄酸菜鸳鸯锅',
            Goods_Img: '../img/2.png',
            Goods_Price1: '500.00',
            Goods_Price2: '700.00',
            Goods_Message: "1231241414",
            Goods_List: 2,
          }
        ]
      },{
        name: "小料",
        id: 3,
        value: [
          {
            Goods_Id: 1,
            Goods_Title: '超值四人套餐',
            Goods_Img: '../img/2.png',
            Goods_Price1: '500.00',
            Goods_Price2: '600.00',
            Goods_Message: "akjsdhaksjdhalskjdh",
          }, {
            Goods_Id: 2,
            Goods_Title: '超值三人套餐',
            Goods_Img: '../img/2.png',
            Goods_Price1: '500.00',
            Goods_Price2: '700.00',
            Goods_Message: "1231241414",
          }
        ]
      }
    ],
  },

  //切换分类 堂食 预约点餐 配送
  Change1 : function(e){
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
  //点击选规格提示
  showRule :function(event){
    console.log("弹出框", event.currentTarget.dataset)
    var that = this;
    that.setData({
      hidden: false,
      modelId: event.currentTarget.dataset.id,
      modelImg: event.currentTarget.dataset.img,
      modelName: event.currentTarget.dataset.name,
      modelPrice1: event.currentTarget.dataset.price1,
      modelPrice2: event.currentTarget.dataset.price2,
      modelSize: event.currentTarget.dataset.size,
      modelTaste: event.currentTarget.dataset.taste,
    })
    console.log(this.data.modelSize)
    this.setData({
      isRuleTrue: true
    })

  },
  //点击按钮 加入购物车
  showRule2 :function(event){
    var that = this;
    that.setData({
      modelId1: event.currentTarget.dataset.id,
      modelName1: event.currentTarget.dataset.name,
      modelPrice11: event.currentTarget.dataset.price1,
      modelPrice21: event.currentTarget.dataset.price2,     
    })
    var num = this.data.num;
    var money = this.data.money;
    num++;
    money = money + parseInt(this.data.modelPrice11);
    this.setData({
      num: num,
      money: money,
    })
    console.log(num);
    console.log(money);
    console.log(this.data.modelId1)
    console.log(this.data.modelName1)
    console.log(this.data.modelPrice11)
    console.log(this.data.modelPrice21)
    // 如果good_box正在运动，不能重复点击
    if (!this.data.hide_good_box) return;
    this.finger = {};
    var topPoint = {};
    //点击点的坐标
    this.finger['x'] = event.touches["0"].clientX;
    this.finger['y'] = event.touches["0"].clientY;

    //控制点的y值定在低的点的上方150处
    if (this.finger['y'] < this.busPos['y']) {
      topPoint['y'] = this.finger['y'] - 150;
    } else {
      topPoint['y'] = this.busPos['y'] - 150;
    }

    //控制点的x值在点击点和购物车之间
    if (this.finger['x' > this.busPos['x']]) {
      topPoint['x'] = (this.finger['x'] - this.busPos['x']) / 2 + this.busPos['x'];
    } else {
      topPoint['x'] = (this.busPos['x'] - this.finger['x']) / 2 + this.finger['x'];
    }

    this.linePos = app.bezier([this.busPos, topPoint, this.finger], 30);
    this.startAnimation();
  },
  startAnimation: function () {
    var index = 0,
      that = this,
      bezier_points = that.linePos['bezier_points'];
    this.setData({
      hide_good_box: false,
      bus_x: that.finger['x'],
      bus_y: that.finger['y']
    })
    index = bezier_points.length;
    this.timer = setInterval(function () {
      index--;
      // 设置球的位置
      that.setData({
        bus_x: bezier_points[index]['x'],
        bus_y: bezier_points[index]['y']
      })
      // 到最后一个点的时候，开始购物车的一系列变化，并清除定时器，隐藏小球
      if (index < 1) {
        clearInterval(that.timer);
        that.addGoodToCartFn();
        that.setData({
          hide_good_box: true
        })
      }
    }, 33);
  },
  addGoodToCartFn: function () {
    // 购物车一系列变化

    // 设置购物车角标
    app.globalData.TotalNumber++; // 这里只是demo，每次角标数量加1
    wx.setTabBarBadge({
      index: 2,
      text: '' + app.globalData.TotalNumber + ''
    })
  },
  //点击购物车按钮 查看
  ShowCartMessage: function (event){
    console.log("123");



    var _this = this;
    var animation = wx.createAnimation({
      duration: 500,
      timingFunction: 'ease',
      delay: 0
    })
    _this.animation = animation
    animation.translateY(300).step()
    _this.setData({
      animationData: animation.export(),
      showPop: true
    })
    setTimeout(function () {
      animation.translateY(0).step()
      _this.setData({
        animationData: animation.export()
      })
    }.bind(_this), 50)
  },
  // 隐藏底部弹层
  hideModal: function () {
    var _this = this;
    // 隐藏遮罩层
    var animation = wx.createAnimation({
      duration: 500,
      timingFunction: "ease",
      delay: 0
    })
    _this.animation = animation
    animation.translateY(300).step()
    _this.setData({
      animationData: animation.export(),
    })
    setTimeout(function () {
      animation.translateY(0).step()
      _this.setData({
        animationData: animation.export(),
        showPop: false
      })
    }.bind(this), 200)
  },
  
  //点击规格
  ChooseSize : function(event){
    console.log("弹出框", event.currentTarget.dataset.name)
    var id = event.target.id;
    console.log(id)
    this.setData({
      // 左侧点击类样式
      curNav1: event.target.dataset.id,
    })
  },
  

  //点击减号
  minus : function(){
    var GoodsNum = this.data.GoodsNum;
    if (GoodsNum > 0) {
      GoodsNum--;
    }
    //数字<=0时，开启 - 按钮的disable状态
    var minusStatus = GoodsNum <0 ? true : false;
    this.setData({
      GoodsNum: GoodsNum,
      minusStatus: minusStatus
    });
    console.log(GoodsNum);
  },
  //点击加号
  plus: function () {
    var GoodsNum = this.data.GoodsNum;
    GoodsNum++;
    this.setData({
      GoodsNum: GoodsNum,
      minusStatus: false
    })
    console.log(GoodsNum);
  },
  //关闭提示
  hideRule: function () {
    this.setData({
      isRuleTrue: false,
      GoodsNum: 0,
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var _windowHeight = wx.getSystemInfoSync().windowHeight;

    // 目标终点元素 - 购物车的位置坐标
    this.busPos = {};
    this.busPos['x'] = 45; // x坐标暂写死，自己可根据UI来修改
    this.busPos['y'] = _windowHeight - 30; // y坐标，也可以根据自己需要来修改
    this.initscroll();
  },
  initscroll(){
    var that = this;
    // 定义右侧标题的 rpx 高度 和 px 高度
    var right_titleRpxHeight = 60;
    var right_titleHeight;
    // 定义右侧单个商品的 rpx 高度 和 px 高度
    var right_contentRpxHeight = 172;
    var right_contentHeight;
    // 定义左侧单个tab的 rpx 高度 和 px 高度
    var left_titleRpxHeight = 90;
    var left_titleHeight;
    //  获取可视区屏幕高度
    wx.getSystemInfo({
      success: function (e) {
        // percent 为当前设备1rpx对应的px值
        var percent = e.windowWidth / 750;
        that.setData({
          winHeight: e.windowHeight,
          right_titleHeight: Number(right_titleRpxHeight * percent),
          right_contentHeight: Number(right_contentRpxHeight * percent),
          left_titleHeight: Number(left_titleRpxHeight * percent)
        })
      }
    })
    // 把请求到的 list 中的数据赋值给  listChild1
    var listChild1 = that.data.good;
  
    // 定义一个 names ，用于存放 scroll-into-view 使用的 id
    var names = '';
    
    // 循环 listChild1 中的每一项
    for (var item in listChild1) {
      // 把 listChild1 中每一项的键值用“：”（便于后期处理）分隔开，存入 names 中，数据格式见图‘names中的数据’
      names += ":" + item;
      
      // 计算右侧每一个分类的 Height 。
      // 最后加上 right_titleHeight，此时 height 为右侧一个完整分类的高度
      var height = listChild1[item].value.length * this.data.right_contentHeight + this.data.right_titleHeight;
      
      // 同上面 names 的道理，把每一个 height 用“：”隔开放入 listHeight 中
      this.data.listHeight += ":" + height;
      this.setData({
        // 把 listChild1 赋值给 list ，供 wxml 中循环使用
        list: listChild1,
        listHeight: this.data.listHeight
      })
    }
       
    // 把 names 的数据切成数组
    var names = names.substring(1).split(':');
    
    this.setData({
      names: names
    })
    
  }// 右侧滑栏的 bindscroll 事件函数（ES6写法）
  ,scroll(event) {
    var that = this;
    // 把 listHeight 切割成数组
    var height = this.data.listHeight.substring(1).split(':');
    
    // 定义一个 index 供左侧边栏联动使用
    var index = 0;
    var num = 0;
    for (var i = 0; i < height.length; i++) {
      // 累计右侧滑栏滚动上去的每一个分类的 Height
      num += parseInt(height[i]);
      // 循环判断 num 是否大于右侧滑栏滚动上去的 Height ，然后 get 到 i 值赋给 index
      if (num > event.detail.scrollTop) {
        index = i;    
        if (event.detail.scrollTop < height[0]) {
          index = 0;
        }
        break;
      }
    }
    // 定义并设置左侧边栏的滚动高度
    var left_scrollTop = this.data.left_titleHeight * index
   
    this.setData({
      scrollTop: left_scrollTop,
      // 动态给左侧滑栏传递对应该项的 id，用于高亮效果显示
      curNav: that.data.names[index]
    })
  },
  //点击左侧 tab ，右侧列表相应位置联动 置顶
  switchRightTab: function (e) {
    var id = e.target.id;
    console.log(id)
    this.setData({
       // 左侧点击类样式
      curNav: e.target.dataset.id,
      scrollTopId: id,    
    })
  }
  
})