// 公开展示版页面：仅保留初始界面数据与演示交互。
Page({data:{
  "topRoutes": [],
  "isLoadingRatings": false,
  "ratingsError": "公开展示版未接入评分服务",
  "cloudEnabled": false,
  "comments": [
    {
      "user": "漫步金陵",
      "content": "南京Citywalk路线规划很准确，推荐的景点都很有意思！",
      "time": "2024-01-15"
    },
    {
      "user": "旅行者小王",
      "content": "导航功能很实用，跟着走就不会迷路，特别适合第一次去南京的朋友",
      "time": "2024-01-10"
    },
    {
      "user": "南京本地人",
      "content": "界面设计很美观，使用起来很方便，推荐了很多小众景点",
      "time": "2024-01-05"
    },
    {
      "user": "周末出游",
      "content": "路线生成速度很快，推荐的路线很合理，避开了人多的地方",
      "time": "2023-12-28"
    },
    {
      "user": "摄影爱好者",
      "content": "非常喜欢这个小程序，已经推荐给朋友了，拍了很多美照",
      "time": "2023-12-20"
    },
    {
      "user": "历史迷",
      "content": "南京的历史文化景点推荐得很到位，学到了很多知识",
      "time": "2023-12-15"
    },
    {
      "user": "美食探索家",
      "content": "路线中推荐的美食店都很正宗，特别是鸭血粉丝汤",
      "time": "2023-12-10"
    },
    {
      "user": "学生党",
      "content": "和同学一起使用这个小程序，找到了很多适合年轻人的打卡点，非常棒！",
      "time": "2024-01-20"
    },
    {
      "user": "亲子游家庭",
      "content": "带孩子用这个小程序规划路线，景点选择很适合家庭出游，孩子很开心",
      "time": "2024-01-18"
    },
    {
      "user": "文化爱好者",
      "content": "路线设计很有文化底蕴，每个景点都有详细介绍，增长了很多知识",
      "time": "2024-01-12"
    },
    {
      "user": "外地游客",
      "content": "第一次来南京，完全按照小程序推荐的路线走，玩得很开心，没有走冤枉路",
      "time": "2024-01-08"
    },
    {
      "user": "摄影达人",
      "content": "推荐的路线非常适合拍照，每个景点都有独特的视角，出片率很高",
      "time": "2024-01-03"
    }
  ]
},
onTouchMove:function(){},
goToKnowledgeGraph:function(){wx.navigateTo({url:"../knowledge-graph/knowledge-graph"});},
goToGenerate:function(){wx.navigateTo({url:"../generate/generate"});},
goToMyReviews:function(){wx.navigateTo({url:"../my-reviews/my-reviews"});},
goToMoreRoutes:function(){wx.navigateTo({url:"../more-routes/more-routes"});},
getTopRoutes:function(){wx.showToast({title:"此功能未包含在公开展示版",icon:"none"});},
navigateToRoute:function(){wx.showToast({title:"此功能未包含在公开展示版",icon:"none"});}
});
