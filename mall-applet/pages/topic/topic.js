// pages/topic/topic.js

var api = require('../../api.js');
var app = getApp();
var WxParse = require('../../wxParse/wxParse.js');
Page({

    /**
     * 页面的初始数据
     */
    data: {
        imgServer :  api.default.img_server,

    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        var page = this;
        app.request({
            url: api.default.topic,
            data: {
                id: options.id,
            },
            success: function (res) {
                if (res.code == 200) {
                    page.setData({
                        topics: res.data,
                    });
                    WxParse.wxParse("content", "html", res.data.description, page);
                } else {
                    wx.showModal({
                        title: "提示",
                        content: res.msg,
                        showCancel: false,
                        success: function (e) {
                            if (e.confirm) {
                                wx.switchTab({
                                    url: "/pages/index/index"
                                });
                            }
                        }
                    });
                }
            }
        });

    },

    wxParseTagATap: function (e) {
        console.log(e);
        if (e.currentTarget.dataset.goods) {
            var src = e.currentTarget.dataset.src || false;
            if (!src)
                return;
            wx.navigateTo({
                url: src,
            });
        }
    },
    favoriteClick: function (e) {
        var page = this;
        var access_token = wx.getStorageSync("access_token");

        var action = e.currentTarget.dataset.action;
        var count = page.data.topics.readCount+1;
        app.request({
            url: api.user.favorite_add,
            method: "post",
            data: {
                type:2,
                memberId:access_token,
                productName:page.data.topics.title ,
                productPic:page.data.topics.pic ,
                productSubTitle:page.data.topics.categoryName ,
                productPrice:count ,
                productId: page.data.topics.id,
            },
            success: function (res) {
                if (res.code == 200) {
                    page.setData({
                        is_favorite: action,
                    });
                }
            }
        });
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
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {
        var page = this;
        var res = {
            title: page.data.title,
        };
        return res;
    }
});