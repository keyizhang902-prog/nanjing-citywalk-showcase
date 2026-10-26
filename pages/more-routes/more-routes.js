// 公开展示版页面：仅保留初始界面数据与演示交互。
Page({data:{
  "routeTypes": [
    "六朝底蕴",
    "民国风光",
    "红色文旅",
    "高校文脉",
    "亲子娱乐",
    "自然风光",
    "历史文化",
    "现代都市",
    "水文化特色"
  ],
  "selectedType": "",
  "typeRoutes": [],
  "showRoutes": false,
  "isLoadingRatings": false,
  "ratingsError": "公开展示版未接入评分服务",
  "hasMore": false,
  "nextOffset": 0,
  "cloudEnabled": false
},
goBack:function(){wx.navigateBack();},
selectType:function(){wx.showToast({title:"此功能未包含在公开展示版",icon:"none"});},
navigateToRoute:function(){wx.showToast({title:"此功能未包含在公开展示版",icon:"none"});},
retryRatings:function(){wx.showToast({title:"此功能未包含在公开展示版",icon:"none"});},
loadMore:function(){wx.showToast({title:"此功能未包含在公开展示版",icon:"none"});}
});
