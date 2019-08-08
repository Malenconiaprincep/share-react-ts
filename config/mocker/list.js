const Mock = require('mockjs')
const data = Mock.mock({
    // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
    'hotlist|4': [{
        // 属性 id 是一个自增数，起始值为 1，每次增 1
        'templateId|1-33': 1,
        'title|1': [
            "销售计划表1",
            "销售计划表2",
            "销售计划表3",
            "销售计划表4"
          ],
        'options': [
            {
                name: '车主姓名',
                need: 1,
                type: 'input'
            },
            {
                name: '车牌号码',
                need: 1,
                type: 'input'
            },
            {
                name: '车主手机号码',
                need: 1,
                type: 'input'
            },
            {
                name: '是否持有我行借记卡/信用卡',
                need: 1,
                type: 'select',
                selects: [
                    {
                        text: '是'
                    },
                    {
                        text: '否'
                    }
                ]
            }
        ],
    }],
    'salelist|4': [{
        // 属性 id 是一个自增数，起始值为 1，每次增 1
        'templateId|+1': 1,
        'title': '通用录收集表',
        'options': [
            {
                name: '车主姓名',
                need: 1,
                type: 'input'
            },
            {
                name: '车牌号码',
                need: 1,
                type: 'input'
            },
            {
                name: '车主手机号码',
                need: 1,
                type: 'input'
            },
            {
                name: '是否持有我行借记卡/信用卡',
                need: 1,
                type: 'select',
                selects: [
                    {
                        text: '是'
                    },
                    {
                        text: '否'
                    }
                ]
            }
        ],
    }],
    'informationlist|4': [{
        // 属性 id 是一个自增数，起始值为 1，每次增 1
        'templateId|+1': 1,
        'title': '通用录收集表',
        'options': [
            {
                name: '车主姓名',
                need: 1,
                type: 'input'
            },
            {
                name: '车牌号码',
                need: 1,
                type: 'input'
            },
            {
                name: '车主手机号码',
                need: 1,
                type: 'input'
            },
            {
                name: '是否持有我行借记卡/信用卡',
                need: 1,
                type: 'select',
                selects: [
                    {
                        text: '是'
                    },
                    {
                        text: '否'
                    }
                ]
            }
        ],
    }],
    'activitylist|4': [{
        // 属性 id 是一个自增数，起始值为 1，每次增 1
        'templateId|+1': 1,
        'title': '通用录收集表',
        'options': [
            {
                name: '车主姓名',
                need: 1,
                type: 'input'
            },
            {
                name: '车牌号码',
                need: 1,
                type: 'input'
            },
            {
                name: '车主手机号码',
                need: 1,
                type: 'input'
            },
            {
                name: '是否持有我行借记卡/信用卡',
                need: 1,
                type: 'select',
                selects: [
                    {
                        text: '是'
                    },
                    {
                        text: '否'
                    }
                ]
            }
        ],
    }],
    'questionlist|4': [{
        // 属性 id 是一个自增数，起始值为 1，每次增 1
        'templateId|+1': 1,
        'title': '调查问卷',
        'options': [
            {
                name: '车主姓名',
                need: 1,
                type: 'input'
            },
            {
                name: '车牌号码',
                need: 1,
                type: 'input'
            },
            {
                name: '车主手机号码',
                need: 1,
                type: 'input'
            },
            {
                name: '是否持有我行借记卡/信用卡',
                need: 1,
                type: 'select',
                selects: [
                    {
                        text: '是'
                    },
                    {
                        text: '否'
                    }
                ]
            }
        ],
    }]
})


module.exports = data