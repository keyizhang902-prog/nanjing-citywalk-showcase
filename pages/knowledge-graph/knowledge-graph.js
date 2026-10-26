Page({
  data: {
    // 知识图谱实体类型
    entityTypes: [
      { id: 'water', name: '水体', icon: '💧', color: '#2196F3', desc: '河流、湖泊、运河等水域' },
      { id: 'heritage', name: '历史古迹', icon: '🏛️', color: '#FF9800', desc: '古建筑、遗址、历史场所' },
      { id: 'person', name: '历史人物', icon: '👤', color: '#9C27B0', desc: '与治水、修建、题咏相关的人物' },
      { id: 'literature', name: '文学作品', icon: '📖', color: '#4CAF50', desc: '诗词、散文、地方志' },
      { id: 'facility', name: '水利设施', icon: '⚙️', color: '#607D8B', desc: '水利工程、治水设施' },
      { id: 'landscape', name: '滨水景观', icon: '🌅', color: '#00BCD4', desc: '依托河流湖泊形成的景观' },
      { id: 'concept', name: '文化概念', icon: '💭', color: '#E91E63', desc: '文化意象、地方记忆' },
      { id: 'region', name: '区域地名', icon: '📍', color: '#795548', desc: '行政区、历史片区、地理名称' }
    ],

    // 关系类型
    relationTypes: [
      { name: '属于', desc: '实体归属关系' },
      { name: '位于', desc: '空间位置关系' },
      { name: '流经', desc: '水体流经关系' },
      { name: '汇入', desc: '水体汇入关系' },
      { name: '修建', desc: '人物修建关系' },
      { name: '治理', desc: '人物治理关系' },
      { name: '题咏', desc: '人物题咏关系' },
      { name: '描写', desc: '文学作品描写关系' },
      { name: '创作于', desc: '作品创作地点关系' },
      { name: '作者', desc: '作品作者关系' }
    ],

    // 知识图谱示例数据 - 南京水文化
    graphData: {
      nodes: [
        // 水体
        { id: 'qinhua', name: '秦淮河', type: 'water', x: 50, y: 30, color: '#2196F3', icon: '💧', desc: '南京的母亲河，是南京历史文化的重要象征，流经南京主城区。' },
        { id: 'xuanwu', name: '玄武湖', type: 'water', x: 30, y: 20, color: '#2196F3', icon: '💧', desc: '中国最大的皇家园林湖泊之一，位于南京玄武区。' },
        { id: 'changjiang', name: '长江', type: 'water', x: 70, y: 40, color: '#2196F3', icon: '💧', desc: '中国第一大河，南京段是长江下游的重要组成部分。' },
        { id: 'jinchuan', name: '金川河', type: 'water', x: 40, y: 50, color: '#2196F3', icon: '💧', desc: '南京城北的重要河流，汇入玄武湖。' },
        { id: 'mochouhu', name: '莫愁湖', type: 'water', x: 25, y: 45, color: '#2196F3', icon: '💧', desc: '南京著名的古典园林湖泊，因莫愁女的传说而得名。' },

        // 历史古迹
        { id: 'tm', name: '桃叶渡', type: 'heritage', x: 45, y: 35, color: '#FF9800', icon: '🏛️', desc: '秦淮河上的古渡，因东晋书法家王羲之子王献之送桃叶而得名。' },
        { id: 'ws', name: '文德桥', type: 'heritage', x: 55, y: 35, color: '#FF9800', icon: '🏛️', desc: '秦淮河上的著名古桥，位于夫子庙前。' },
        { id: 'zj', name: '朱雀桥', type: 'heritage', x: 48, y: 45, color: '#FF9800', icon: '🏛️', desc: '东晋时期的重要桥梁，因刘禹锡《乌衣巷》诗而闻名。' },
        { id: 'fzm', name: '夫子庙', type: 'heritage', x: 52, y: 40, color: '#FF9800', icon: '🏛️', desc: '南京著名的历史文化建筑群，位于秦淮河畔。' },
        { id: 'wz', name: '乌衣巷', type: 'heritage', x: 58, y: 45, color: '#FF9800', icon: '🏛️', desc: '东晋时期王谢家族的聚居地，因刘禹锡《乌衣巷》诗而闻名。' },

        // 历史人物
        { id: 'libai', name: '李白', type: 'person', x: 60, y: 25, color: '#9C27B0', icon: '👤', desc: '唐代著名诗人，曾多次游历南京，留下许多著名诗篇。' },
        { id: 'dufu', name: '杜甫', type: 'person', x: 65, y: 30, color: '#9C27B0', icon: '👤', desc: '唐代现实主义诗人，与李白并称为"李杜"。' },
        { id: 'wangxizhi', name: '王羲之', type: 'person', x: 55, y: 20, color: '#9C27B0', icon: '👤', desc: '东晋著名书法家，有"书圣"之称，与南京有密切联系。' },
        { id: 'liuyuxi', name: '刘禹锡', type: 'person', x: 68, y: 40, color: '#9C27B0', icon: '👤', desc: '唐代文学家、哲学家，曾任和州刺史，《乌衣巷》的作者。' },

        // 文学作品
        { id: 'poem1', name: '《登金陵凤凰台》', type: 'literature', x: 75, y: 25, color: '#4CAF50', icon: '📖', desc: '李白所作，描写南京凤凰台的壮丽景色和历史变迁。' },
        { id: 'poem2', name: '《乌衣巷》', type: 'literature', x: 80, y: 35, color: '#4CAF50', icon: '📖', desc: '刘禹锡所作，描写朱雀桥边的历史沧桑。' },
        { id: 'poem3', name: '《泊秦淮》', type: 'literature', x: 72, y: 32, color: '#4CAF50', icon: '📖', desc: '杜牧所作，描写秦淮河夜景和历史兴衰。' },

        // 滨水景观
        { id: 'fhz', name: '夫子庙秦淮河风光带', type: 'landscape', x: 50, y: 40, color: '#00BCD4', icon: '🌅', desc: '南京著名的旅游景区，集历史文化、商业和休闲于一体。' },
        { id: 'mchg', name: '莫愁湖公园', type: 'landscape', x: 25, y: 45, color: '#00BCD4', icon: '🌅', desc: '南京著名的古典园林公园，以莫愁湖为中心。' },
        { id: 'xwhg', name: '玄武湖公园', type: 'landscape', x: 30, y: 20, color: '#00BCD4', icon: '🌅', desc: '南京最大的城市公园，以玄武湖为中心，历史悠久。' },

        // 区域地名
        { id: 'qinhuaiqu', name: '秦淮区', type: 'region', x: 45, y: 55, color: '#795548', icon: '📍', desc: '南京主城区之一，以秦淮河贯穿全境而得名，历史文化底蕴深厚。' },
        { id: 'gulou', name: '鼓楼区', type: 'region', x: 35, y: 35, color: '#795548', icon: '📍', desc: '南京主城区之一，因明代鼓楼而得名，是南京的政治、经济、文化中心。' },
        { id: 'xuanwuqu', name: '玄武区', type: 'region', x: 30, y: 15, color: '#795548', icon: '📍', desc: '南京主城区之一，因玄武湖而得名，历史文化资源丰富。' },

        // 水利设施
        { id: 'dyt', name: '东水关', type: 'facility', x: 55, y: 45, color: '#607D8B', icon: '⚙️', desc: '南京古城墙的水关，是秦淮河进入南京城的重要通道。' },
        { id: 'xsg', name: '西水关', type: 'facility', x: 45, y: 45, color: '#607D8B', icon: '⚙️', desc: '南京古城墙的水关，是秦淮河流出南京城的重要通道。' },

        // 文化概念
        { id: 'nhwh', name: '南京水文化', type: 'concept', x: 65, y: 50, color: '#E91E63', icon: '💭', desc: '以南京地区的水体为载体，融合历史、文学、艺术等元素的文化体系。' }
      ],

      edges: [
        { source: 'qinhua', target: 'tm', relation: '流经' },
        { source: 'qinhua', target: 'ws', relation: '流经' },
        { source: 'qinhua', target: 'zj', relation: '流经' },
        { source: 'qinhua', target: 'fzm', relation: '流经' },
        { source: 'qinhua', target: 'wz', relation: '流经' },
        { source: 'fhz', target: 'qinhua', relation: '位于' },
        { source: 'tm', target: 'wangxizhi', relation: '题咏' },
        { source: 'libai', target: 'poem1', relation: '作者' },
        { source: 'poem1', target: 'qinhua', relation: '描写' },
        { source: 'liuyuxi', target: 'poem2', relation: '作者' },
        { source: 'poem2', target: 'zj', relation: '描写' },
        { source: 'poem2', target: 'wz', relation: '描写' },
        { source: 'qinhuaiqu', target: 'qinhua', relation: '属于' },
        { source: 'jinchuan', target: 'xuanwu', relation: '汇入' },
        { source: 'xuanwu', target: 'changjiang', relation: '汇入' },
        { source: 'mochouhu', target: 'gulou', relation: '位于' },
        { source: 'fhz', target: 'qinhuaiqu', relation: '位于' },
        { source: 'xwhg', target: 'xuanwuqu', relation: '位于' },
        { source: 'xwhg', target: 'xuanwu', relation: '位于' },
        { source: 'mchg', target: 'mochouhu', relation: '位于' },
        { source: 'dyt', target: 'qinhua', relation: '位于' },
        { source: 'xsg', target: 'qinhua', relation: '位于' },
        { source: 'nhwh', target: 'qinhua', relation: '包含' },
        { source: 'nhwh', target: 'xuanwu', relation: '包含' },
        { source: 'nhwh', target: 'changjiang', relation: '包含' },
        { source: 'nhwh', target: 'fhz', relation: '包含' },
        { source: 'nhwh', target: 'poem1', relation: '包含' },
        { source: 'nhwh', target: 'poem2', relation: '包含' }
      ]
    },

    // 当前选中的实体
    selectedEntity: null,

    // 搜索关键词
    searchKeyword: '',

    // 是否显示关系筛选
    showRelationFilter: false,

    // 筛选的实体类型
    filterTypes: [],

    // 相关关系列表
    relatedEdges: [],

    // 关系线条数据
    relationLines: [],

    // 展开的节点列表
    expandedNodes: [],
    expandedFlags: {}
  },

  onLoad: function() {
    console.log('知识图谱页面加载');
    this.initGraph();
  },

  // 初始化知识图谱
  initGraph: function() {
    // 计算并绘制关系线
    this.calculateRelationLines();
    console.log('初始化知识图谱');
  },

  // 计算关系线
  calculateRelationLines: function() {
    const nodes = this.data.graphData.nodes;
    const edges = this.data.graphData.edges;
    const relationLines = [];

    edges.forEach(edge => {
      const sourceNode = nodes.find(n => n.id === edge.source);
      const targetNode = nodes.find(n => n.id === edge.target);

      if (sourceNode && targetNode) {
        // 计算线的位置和角度
        const sourceX = sourceNode.x;
        const sourceY = sourceNode.y;
        const targetX = targetNode.x;
        const targetY = targetNode.y;

        // 计算线的长度和角度
        const dx = targetX - sourceX;
        const dy = targetY - sourceY;
        const length = Math.sqrt(dx * dx + dy * dy);
        const angle = Math.atan2(dy, dx) * 180 / Math.PI;

        relationLines.push({
          ...edge,
          sourceX: sourceX,
          sourceY: sourceY,
          targetX: targetX,
          targetY: targetY,
          midX: (sourceX + targetX) / 2,
          midY: (sourceY + targetY) / 2 - 2,
          length: length,
          angle: angle
        });
      }
    });

    this.setData({
      relationLines: relationLines
    });
  },

  // 点击实体
  onNodeTap: function(e) {
    const nodeId = e.currentTarget.dataset.id;
    const node = this.data.graphData.nodes.find(n => n.id === nodeId);

    if (node) {
      // 获取实体类型信息
      const entityType = this.data.entityTypes.find(t => t.id === node.type) || {};

      // 构建完整的实体信息
      const completeEntity = {
        ...node,
        typeName: entityType.name,
        typeDesc: entityType.desc,
        desc: node.desc || ''
      };

      // 获取与该实体相关的关系和实体
      const relatedEdges = [];
      this.data.graphData.edges.forEach(edge => {
        if (edge.source === nodeId || edge.target === nodeId) {
          const relatedNodeId = edge.source === nodeId ? edge.target : edge.source;
          const relatedNode = this.data.graphData.nodes.find(n => n.id === relatedNodeId);
          relatedEdges.push({
            ...edge,
            relatedEntity: relatedNode
          });
        }
      });

      this.setData({
        selectedEntity: completeEntity,
        relatedEdges: relatedEdges
      });

      console.log('选中实体:', completeEntity);
      console.log('相关关系:', relatedEdges);
    }
  },

  // 搜索实体
  onSearch: function(e) {
    const keyword = e.detail.value.toLowerCase();
    this.setData({
      searchKeyword: keyword
    });

    if (!keyword) {
      return;
    }

    // 查找匹配的实体
    let matchedNode = null;
    for (let i = 0; i < this.data.graphData.nodes.length; i++) {
      if (this.data.graphData.nodes[i].name.toLowerCase().includes(keyword)) {
        matchedNode = this.data.graphData.nodes[i];
        break;
      }
    }

    if (matchedNode) {
      // 获取实体类型信息
      const entityType = this.data.entityTypes.find(t => t.id === matchedNode.type) || {};

      // 构建完整的实体信息
      const completeEntity = {
        ...matchedNode,
        typeName: entityType.name,
        typeDesc: entityType.desc,
        desc: matchedNode.desc || ''
      };

      // 获取与该实体相关的关系和实体
      const relatedEdges = [];
      this.data.graphData.edges.forEach(edge => {
        if (edge.source === matchedNode.id || edge.target === matchedNode.id) {
          const relatedNodeId = edge.source === matchedNode.id ? edge.target : edge.source;
          const relatedNode = this.data.graphData.nodes.find(n => n.id === relatedNodeId);
          relatedEdges.push({
            ...edge,
            relatedEntity: relatedNode
          });
        }
      });

      this.setData({
        selectedEntity: completeEntity,
        relatedEdges: relatedEdges
      });
    }
  },

  // 切换实体类型筛选
  toggleTypeFilter: function(e) {
    const typeId = e.currentTarget.dataset.type;
    const filterTypes = this.data.filterTypes;

    const index = filterTypes.indexOf(typeId);
    if (index > -1) {
      filterTypes.splice(index, 1);
    } else {
      filterTypes.push(typeId);
    }

    this.setData({
      filterTypes: filterTypes
    });
  },

  // 显示/隐藏关系筛选
  toggleRelationFilter: function() {
    this.setData({
      showRelationFilter: !this.data.showRelationFilter
    });
  },

  // 返回首页
  goBack: function() {
    wx.navigateBack();
  },

  // 查看实体详情
  viewEntityDetail: function() {
    const entity = this.data.selectedEntity;
    if (!entity) return;

    wx.showModal({
      title: entity.name,
      content: `类型: ${entity.typeName}\n点击查看更多信息`,
      showCancel: true,
      cancelText: '关闭',
      confirmText: '查看详情',
      success: function(res) {
        if (res.confirm) {
          // 可以跳转到详情页面
          console.log('查看详情:', entity);
        }
      }
    });
  },

  // 重置筛选
  resetFilter: function() {
    this.setData({
      filterTypes: [],
      selectedEntity: null,
      searchKeyword: '',
      relatedEdges: []
    });
  },

  // 关闭详情面板
  closeDetail: function() {
    this.setData({
      selectedEntity: null,
      relatedEdges: []
    });
  },

  // 获取指定类型的实体数量
  getTypeCount: function(typeId) {
    return this.data.graphData.nodes.filter(node => node.type === typeId).length;
  },

  // 获取指定类型的实体列表
  getEntitiesByType: function(typeId) {
    const keyword = this.data.searchKeyword.toLowerCase();
    let nodes = this.data.graphData.nodes.filter(node => node.type === typeId);

    if (keyword) {
      nodes = nodes.filter(node => node.name.toLowerCase().includes(keyword));
    }

    return nodes;
  },

  // 获取指定实体的关系列表（用于卡片上显示）
  getEntityRelations: function(entityId) {
    const edges = this.data.graphData.edges;
    const nodes = this.data.graphData.nodes;
    const relations = [];

    edges.forEach(edge => {
      if (edge.source === entityId || edge.target === entityId) {
        const targetNodeId = edge.source === entityId ? edge.target : edge.source;
        const targetNode = nodes.find(n => n.id === targetNodeId);
        if (targetNode) {
          relations.push({
            relation: edge.relation,
            targetName: targetNode.name
          });
        }
      }
    });

    return relations.slice(0, 3); // 最多显示3个关系
  },

  // 阻止事件冒泡（用于弹窗内部）
  stopPropagation: function() {
    // 空函数，用于catchtap
  },

  // 点击中心节点
  onCenterNodeTap: function() {
    const node = this.data.graphData.nodes.find(n => n.id === 'nhwh');
    if (node) {
      const entityType = this.data.entityTypes.find(t => t.id === node.type) || {};
      const completeEntity = {
        ...node,
        typeName: entityType.name,
        typeDesc: entityType.desc,
        desc: node.desc || ''
      };

      const relatedEdges = [];
      this.data.graphData.edges.forEach(edge => {
        if (edge.source === 'nhwh' || edge.target === 'nhwh') {
          const relatedNodeId = edge.source === 'nhwh' ? edge.target : edge.source;
          const relatedNode = this.data.graphData.nodes.find(n => n.id === relatedNodeId);
          relatedEdges.push({
            ...edge,
            relatedEntity: relatedNode
          });
        }
      });

      this.setData({
        selectedEntity: completeEntity,
        relatedEdges: relatedEdges
      });
    }
  },

  // 展开/收起子节点
  toggleExpand: function(e) {
    const nodeId = e.currentTarget.dataset.id;
    const expandedNodes = this.data.expandedNodes.slice();

    const index = expandedNodes.indexOf(nodeId);
    if (index > -1) {
      expandedNodes.splice(index, 1);
    } else {
      expandedNodes.push(nodeId);
    }

    var flags = {};
    expandedNodes.forEach(function(id) { flags[id] = true; });
    this.setData({ expandedNodes: expandedNodes, expandedFlags: flags });
  }
});
