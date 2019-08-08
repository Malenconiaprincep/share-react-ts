const list = require('./list')


const proxy = {
    // Priority processing.
    // apiMocker(app, path, option)
    // This is the option parameter setting for apiMocker
    // =====================
    'GET /api/list': {
        ret_code:0, 
        data: list
    },
    'GET /api/detail/1': {
        ret_code:0, 
        data: {
            title: 'ETC业务预约登记表',
            pic: 'https://timgsa.baidu.com/timg?quality=80&size=b9999_10000&sec=1562754662269&di=83748b6e9695b99c573659b0ff6cb9fe&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2F485513be474ec249010f83edd14b6e1efc4bc3857a3d8-oiobWB_fw658'
        }
    },
    'GET /api/detail/:number': {
        ret_code:0, 
        data: {
            title: '聚会报名表',
            pic: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1563349489&di=3a88bfff41be2072fc67379f197f1b33&imgtype=jpg&er=1&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fblog%2F201509%2F24%2F20150924124903_dfQjr.jpeg'
        }
    },
    'POST /api/detail/3': {
        ret_code:0, 
        data: {
            title: 'testfewfew',
            pic: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1562754790973&di=68392d1d5152556210f7279e951cfb11&imgtype=0&src=http%3A%2F%2Fcdn.do1.com.cn%2Fuploads%2Fallimg%2F170417%2F6-1F41G33F5609.PNG'
        }
    },
    // 'GET /api/:owner/:repo/raw/:ref/(.*)': (req, res) => {
    //   const { owner, repo, ref } = req.params;
    //   // http://localhost:8081/api/admin/webpack-mock-api/raw/master/add/ddd.md
    //   // owner => admin
    //   // repo => webpack-mock-api
    //   // ref => master
    //   // req.params[0] => add/ddd.md
    //   return res.json({
    //     id: 1,
    //     owner, repo, ref,
    //     path: req.params[0]
    //   });
    // },
    // 'POST /api/login/account': (req, res) => {
    //   const { password, username } = req.body;
    //   if (password === '888888' && username === 'admin') {
    //     return res.json({
    //       status: 'ok',
    //       code: 0,
    //       token: "sdfsdfsdfdsf",
    //       data: {
    //         id: 1,
    //         username: 'kenny',
    //         sex: 6
    //       }
    //     });
    //   } else {
    //     return res.status(403).json({
    //       status: 'error',
    //       code: 403
    //     });
    //   }
    // },
    // 'DELETE /api/user/:id': (req, res) => {
    //   console.log('---->', req.body)
    //   console.log('---->', req.params.id)
    //   res.send({ status: 'ok', message: '删除成功！' });
    // }
  }
  module.exports = proxy;