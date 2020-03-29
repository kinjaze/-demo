// pages/index/index.js
const list = require('../../data/word-list.js')
const vocList1 = require('../../data/vocabulary.js')
const innerAudioContext = wx.createInnerAudioContext()
var count=2;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 单词
    content: null,
    // 音标
    pron: null,
    // 词性
    definition: null,
    // 单词列表最多为999
    worldListMax: 999,
    // 词汇数据最多为12346
    vocListMax: 12346

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let that=this;
    //从本地缓存的单词列表选取一个单词
    let id=Math.floor(Math.random()*that.data.vocListMax)
    var word =list.wordList[1]
    console.log(word);
    that.setData({
      content:word.content,
      pron:word.pron,
      definition:word.definition
    })
  },


  // 不认识单词或者觉得模糊时显示单词的翻译
  show:function(){
    this.setData({
      showNot:true
    })

  },

  // 读取下一个单词
  next:function(){
    let that=this;
    that.setData({
      showNot:false
    })

    var idx=Math.floor(Math.random()*1000)
    count++;
    var word =list.wordList[idx]
    console.log(word);
    console.log(count);
    console.log(idx);
    that.setData({
      content:word.content,
      pron:word.pron,
      definition:word.definition
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