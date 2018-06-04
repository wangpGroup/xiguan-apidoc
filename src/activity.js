/**
 * @api {get} /ActivityApi/getUserScoreList 获取活动栏目列表，按分值排序。
 * @apiVersion 2.0.0
 * @apiName getUserScoreList
 * @apiGroup Activity
 * @apiPermission login
 *
 * @apiDescription 获取活动栏目列表，按分值排序。
 * @apiParam {Number} [page=1] 		    当前页码
 * @apiParam {Number} [pageSize=10] 	每页大小
 *
 * @apiUse AuthenticatedHeader
 *
 *
 *
 * @apiUse AuthenticatedError
 *
 */
function getUserScoreList() { return; }
/**
 * @api {get} /ActivityApi/getThemeActivityList 通过主题ID 获取主题下的所有活动。
 * @apiVersion 2.0.0
 * @apiName getThemeActivityList
 * @apiGroup Activity
 * @apiPermission login
 *
 * @apiDescription 通过主题ID 获取主题下的所有活动。
 * @apiParam {String} themeId  	    主题ID
 * @apiParam {Number} [page=1] 		    当前页码
 * @apiParam {Number} [pageSize=10] 	每页大小

 *
 * @apiUse AuthenticatedHeader
 *
 *
 *
 * @apiUse AuthenticatedError
 *
 */
function getThemeActivityList() { return; }
/**
 * @api {get} /ActivityApi/getRecommendActivityList 获取今日推荐的活动
 * @apiVersion 2.0.0
 * @apiName getRecommendActivityList
 * @apiGroup Activity
 * @apiPermission login
 *
 * @apiDescription 获取今日推荐的活动
 * @apiParam {Number} [page=1] 		    当前页码
 * @apiParam {Number} [pageSize=10] 	每页大小


 *
 * @apiUse AuthenticatedHeader
 *
 *
 *
 * @apiUse AuthenticatedError
 *
 */
function getRecommendActivityList() { return; }

/**
 * @api {get} /ActivityApi/addActScore 用户运动完成后添加分数
 * @apiVersion 2.0.0
 * @apiName addActScore
 * @apiGroup Activity
 * @apiPermission login
 *
 * @apiDescription 用户运动完成后添加分数
 * @apiParam {String} actId  	    当前活动ID


 *
 * @apiUse AuthenticatedHeader
 *
 *
 *
 * @apiUse AuthenticatedError
 *
 */
function addActScore() { return; }

/**
 * @api {get} /ActivityApi/getScore 获取用户当前分数
 * @apiVersion 2.0.0
 * @apiName getScore
 * @apiGroup Activity
 * @apiPermission login
 *
 * @apiDescription 获取用户当前分数
 *
 * @apiUse AuthenticatedHeader
 *
 *
 *
 * @apiUse AuthenticatedError
 *
 */
function getScore() { return; }

/**
 * @api {get} /ActivityApi/getThisDateScore 当前用户当天所得分数
 * @apiVersion 2.0.0
 * @apiName getThisDateScore
 * @apiGroup Activity
 * @apiPermission login
 *
 * @apiDescription 当前用户当天所得分数
 *
 * @apiUse AuthenticatedHeader
 *
 *
 *
 * @apiUse AuthenticatedError
 *
 */
function getThisDateScore() { return; }

/**
 * @api {get} /ActivityApi/getThisWeekTotallScore 当前用户一周所得总共分数（周活力值）
 * @apiVersion 2.0.0
 * @apiName getThisWeekTotallScore
 * @apiGroup Activity
 * @apiPermission login
 *
 * @apiDescription 当前用户一周所得总共分数（周活力值）
 * @apiParam {String} userId  	    当前用户ID
 *
 * @apiUse AuthenticatedHeader
 *
 *
 *
 * @apiUse AuthenticatedError
 *
 */
function getThisWeekTotallScore() { return; }


/**
 * @api {get} /ActivityApi/addOrRemovePraise 给当前好友点赞或者取消点赞
 * @apiVersion 2.0.0
 * @apiName addOrRemovePraise
 * @apiGroup Activity
 * @apiPermission login
 *
 * @apiDescription 给当前好友点赞或者取消点赞
 * @apiParam {String} friendId  	    好友ID
 * @apiParam {int} type  	    1:点赞，2：取消点赞
 *
 * @apiUse AuthenticatedHeader
 *
 *
 *
 * @apiUse AuthenticatedError
 *
 */
function addOrRemovePraise() { return; }

/**
 * @api {get} /ActivityApi/payActivity 活动付款。
 * @apiVersion 2.0.0
 * @apiName payActivity
 * @apiGroup Activity
 * @apiPermission login
 *
 * @apiDescription 活动付款
 * @apiParam {String} id  	    主题ID 类型，1：主题 2 活动
 *
 * @apiUse AuthenticatedHeader
 *
 *
 *
 * @apiUse AuthenticatedError
 *
 */
function payActivity() { return; }

/**
 * @api {get} /ActivityApi/clockedAct 基础数据打卡。
 * @apiVersion 2.0.0
 * @apiName clockedAct
 * @apiGroup Activity
 * @apiPermission login
 *
 * @apiDescription 基础数据打卡
 * @apiParam {String} actNum  	    数据编号
 * @apiParam {String} clockedType  	    打卡类型（1.基础数据 2，事件、日常 3 私人定制）
 * @apiParam {String} hibitId  	    习惯(私人定制传ID 事件日常穿num)
 * @apiParam {String} cycle  	    周期天数
 * @apiParam {String} days  	    第几天
 *
 * @apiUse AuthenticatedHeader
 *
 *
 *
 * @apiUse AuthenticatedError
 *
 */
function clockedAct() { return; }


/**
 * @api {get} /ActivityApi/getCombinationActtivity 获取组合食物数据。
 * @apiVersion 2.0.0
 * @apiName getCombinationActtivity
 * @apiGroup Activity
 * @apiPermission login
 *
 * @apiDescription 获取组合食物数据
 * @apiParam {String} foodId  	    食物id

 *
 * @apiUse AuthenticatedHeader
 *
 *
 *
 * @apiUse AuthenticatedError
 *
 */
function getCombinationActtivity() { return; }


