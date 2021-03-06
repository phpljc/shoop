// pages/choose_address/index.js
const app = getApp();
const appdata = app.globalData;
const url = appdata.app_address + appdata.subDomain;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    addresslist:{}
  },
  add_addres:function(e){
    wx.navigateTo({
      url: '/pages/address_add/index',
    })
  },
  editaddress:function(e){
    wx.navigateTo({
      url: '/pages/address_add/index?id=' + e.currentTarget.id,
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (e) {
    
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
    var that = this;
    wx.request({
      url: url + '/user/shipping-address/list',
      data: { token: wx.getStorageSync('token') },
      success: function (res) {
        if (res.data.code == 0) {
          that.setData({
            addresslist: res.data.data
          })
        }
      }
    })
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