

/**
 * @api {get} /ThemeApi/getMyHabit 根据习惯类型获取购买的习惯。
 * @apiVersion 2.0.0
 * @apiName getMyHabit
 * @apiGroup Theme
 * @apiPermission login
 *
 * @apiDescription 根据习惯类型获取购买的习惯。
 * @apiParam {Number} type	类型（日常或事件）
 *
 * @apiUse AuthenticatedHeader
 *
 *
 *
 * @apiUse AuthenticatedError
 *
 */
function getMyHabit() { return; }





/**
 * @api {get} /PhysiqueApi/getPhtypeHabit 首页根据人群及体质推送习惯。
 * @apiVersion 2.0.0
 * @apiName getPhtypeHabit
 * @apiGroup Theme
 * @apiPermission login
 *
 * @apiDescription 首页根据人群及体质推送习惯。
 *
 * @apiUse AuthenticatedHeader
 *
 *
 *
 * @apiUse AuthenticatedError
 *
 */
function getPhtypeHabit() { return; }



/**
 * @api {get} /ThemeApi/deleteHabit 删除已经购买的周期习惯。
 * @apiVersion 2.0.0
 * @apiName deleteHabit
 * @apiGroup Theme
 * @apiPermission login
 *
 * @apiDescription 删除已经购买的周期习惯。
 * @apiParam {String} habitNum	习惯编号
 * @apiParam {String} cycle	天数
 *
 * @apiUse AuthenticatedHeader
 *
 *
 *
 * @apiUse AuthenticatedError
 *
 */
function deleteHabit() { return; }



