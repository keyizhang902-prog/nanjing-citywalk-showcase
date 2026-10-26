// 公开展示版页面：仅保留初始界面数据与演示交互。
Page({data:{
  "cloudEnabled": false,
  "localHistory": false,
  "items": [],
  "isLoading": false,
  "error": "公开展示版未接入评分服务",
  "hasMore": false,
  "nextOffset": 0,
  "stars": [
    1,
    2,
    3,
    4,
    5
  ],
  "editingReview": null,
  "attractionRating": 0,
  "comfortRating": 0,
  "isSubmitting": false
},
switchSource:function(){wx.showToast({title:"此功能未包含在公开展示版",icon:"none"});},
retry:function(){wx.showToast({title:"此功能未包含在公开展示版",icon:"none"});},
openRoute:function(){wx.showToast({title:"此功能未包含在公开展示版",icon:"none"});},
editReview:function(){wx.showToast({title:"此功能未包含在公开展示版",icon:"none"});},
loadMore:function(){wx.showToast({title:"此功能未包含在公开展示版",icon:"none"});},
closeEditor:function(){wx.showToast({title:"此功能未包含在公开展示版",icon:"none"});},
preventClose:function(){},
chooseAttraction:function(){wx.showToast({title:"此功能未包含在公开展示版",icon:"none"});},
chooseComfort:function(){wx.showToast({title:"此功能未包含在公开展示版",icon:"none"});},
submitReview:function(){wx.showToast({title:"此功能未包含在公开展示版",icon:"none"});}
});
