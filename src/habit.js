/**
 * @api {get} /HabitApi/checkHabitName 校验私人定制文件夹是否已存在
 * @apiVersion 2.0.0
 * @apiName checkHabitName
 * @apiGroup habit
 *
 * @apiDescription 校验私人定制文件夹是否已存在。
 *
 * @apiParam habitName {String}       私人定制习惯名称
 *
 * @apiUse AuthenticatedHeader
 *
 *
 * @apiUse AuthenticatedError
 *
 */
function checkHabitName() { return; }

/**
 * @api {get} /HabitApi/getPerHabitList 查询本人私人定制文件夹
 * @apiVersion 2.0.0
 * @apiName getPerHabitList
 * @apiGroup habit
 *
 * @apiDescription 查询本人私人定制文件夹。
 *
 *
 * @apiUse AuthenticatedHeader
 *
 *
 * @apiUse AuthenticatedError
 *
 */
function getPerHabitList() { return; }

/**
 * @api {get} /HabitApi/foundPerHabit 创建私人定制文件夹
 * @apiVersion 2.0.0
 * @apiName foundPerHabit
 * @apiGroup habit
 *
 * @apiDescription 创建私人定制文件夹
 *
 * @apiParam habitName {String}       私人定制习惯名称
 *
 * @apiUse AuthenticatedHeader
 *
 *
 * @apiUse AuthenticatedError
 *
 */
function foundPerHabit() { return; }

/**
 * @api {get} /HabitApi/addActToPerHabit 向私人定制文件夹中添加基础数据
 * @apiVersion 2.0.0
 * @apiName addActToPerHabit
 * @apiGroup habit
 *
 * @apiDescription 向私人定制文件夹中添加基础数据
 *
 * @apiParam id {String}       私人定制习惯文件夹名称
 * @apiParam actNum {int}       基础习惯编号
 * @apiParam beginTime {String}       用户选择开始时间
 * @apiParam days {String}       用户选择哪些天执行，多个逗号间隔
 *
 * @apiUse AuthenticatedHeader
 *
 *
 * @apiUse AuthenticatedError
 *
 */
function addActToPerHabit() { return; }


/**
 * @api {get} /HabitApi/getActToPerHabit 获取私人定制中某天的所有流程数据
 * @apiVersion 2.0.0
 * @apiName getActToPerHabit
 * @apiGroup habit
 *
 * @apiDescription 获取私人定制中某天的所有流程数据
 *
 * @apiParam perhabitId {String}       私人定制习惯文件夹ID
 * @apiParam days {String}       获取哪天
 *
 *
 * @apiUse AuthenticatedHeader
 *
 *
 * @apiUse AuthenticatedError
 *
 */
function getActToPerHabit() { return; }

/**
 * @api {get} /HabitApi/deleteActToPerHabit 删除私人定制中某天的流程数据
 * @apiVersion 2.0.0
 * @apiName deleteActToPerHabit
 * @apiGroup habit
 *
 * @apiDescription 删除私人定制中某天的流程数据
 *
 * @apiParam id {String}       该流程数据在私人定制中ID
 *
 *
 * @apiUse AuthenticatedHeader
 *
 *
 * @apiUse AuthenticatedError
 *
 */
function deleteActToPerHabit() { return; }

/**
 * @api {get} /HabitApi/getPerHabit 获取某流程在私人定制中设置情况
 * @apiVersion 2.0.0
 * @apiName getPerHabit
 * @apiGroup habit
 *
 * @apiDescription 获取某流程在私人定制中设置情况
 *
 * @apiParam actNum {String}       该流程编号
 * @apiParam perhabitId {String}       私人定制文件夹ID
 * @apiParam days {String}       第几天
 * @apiParam beginTime {String}       时间
 *
 *
 * @apiUse AuthenticatedHeader
 *
 *
 * @apiUse AuthenticatedError
 *
 */
function getPerHabit() { return; }

/**
 * @api {get} /HabitApi/updateActToPerHabit 修改私人定制文件夹中基础数据
 * @apiVersion 2.0.0
 * @apiName updateActToPerHabit
 * @apiGroup habit
 *
 * @apiDescription 修改私人定制文件夹中基础数据
 *
 * @apiParam id {String}       私人定制习惯文件夹名称
 * @apiParam actNum {int}       基础习惯编号
 * @apiParam beginTime {String}       用户选择开始时间
 * @apiParam oldTime {String}       修改前的设置时间
 * @apiParam days {String}       用户选择哪些天执行，多个逗号间隔
 * @apiParam isPush {String}       1推送 2不推
 * @apiParam isAct {String}       数据传过来的isact
 *
 * @apiUse AuthenticatedHeader
 *
 *
 * @apiUse AuthenticatedError
 *
 */
function updateActToPerHabit() { return; }



/**
 * @api {get} /HabitApi/getMyHabitMaxDay    获取当前用户购买当前习惯周期最大天数
 * @apiVersion 2.0.0
 * @apiName getMyHabitMaxDay
 * @apiGroup habit
 *
 * @apiDescription    获取当前用户购买当前习惯周期最大天数
 *
 * @apiParam habitId {String}       该习惯编号
 *
 *
 * @apiUse AuthenticatedHeader
 *
 *
 * @apiUse AuthenticatedError
 *
 */
function getMyHabitMaxDay() { return; }
/**
 * @api {get} /HabitApi/getThemeHabitAct 获取某习惯下某周期下某天基础流程数据
 * @apiVersion 2.0.0
 * @apiName getThemeHabitAct
 * @apiGroup habit
 *
 * @apiDescription 获取某习惯下某周期下某天基础流程数据
 *
 * @apiParam habitId {String}       习惯ID
 * @apiParam habitNum {String}       习惯Num
 * @apiParam cycle   {int}       周期总天数
 * @apiParam days {String}       第几天
 *
 *
 * @apiUse AuthenticatedHeader
 *
 *
 * @apiUse AuthenticatedError
 *
 */
function getThemeHabitAct() { return; }
/**
 * @api {get} /HabitApi/updateThemeActTime 修改周期习惯内单条数据开始时间
 * @apiVersion 2.0.0
 * @apiName updateThemeActTime
 * @apiGroup habit
 *
 * @apiDescription 修改周期习惯内单条数据开始时间
 *
 * @apiParam themeActId {String}       ID
 * @apiParam times {int}       新时间T
 * @apiParam isPush {int}      1推送 2不推
 *
 *
 *
 * @apiUse AuthenticatedHeader
 *
 *
 * @apiUse AuthenticatedError
 *
 */
function updateThemeActTime() { return; }
/**
 * @api {get} /HabitApi/habitOpenOrClose     习惯启动或者关闭
 * @apiVersion 2.0.0
 * @apiName habitOpenOrClose
 * @apiGroup habit
 *
 * @apiDescription    习惯启动或者关闭
 *
 * @apiParam habitType    {String}       1(日常、事件) 2私人定制
 * @apiParam habit       {int}       (日常、事件传习惯habitNum) 私人习惯传ID
 * @apiParam type    {String}       1启动 2关闭
 * @apiParam cycle     {String}       习惯天数
 *
 *
 * @apiUse AuthenticatedHeader
 *
 *
 * @apiUse AuthenticatedError
 *
 */
function habitOpenOrClose() { return; }


/**
 * @api {get} /HabitApi/getThisActUsers     获取购买当前流程的所有人
 * @apiVersion 2.0.0
 * @apiName getThisActUsers
 * @apiGroup habit
 *
 * @apiDescription     获取购买当前流程的所有人
 *
 * @apiParam actNum    {String}       习惯编号
 * @apiParam page       {int}       当前页码,默认值: 1
 * @apiParam pageSize    {String}     每页大小,默认值: 10
 *
 * @apiUse AuthenticatedHeader
 *
 *
 * @apiUse AuthenticatedError
 *
 */
function getThisActUsers() { return; }

/**
 * @api {get} /HabitApi/updatePerHabit  修改私人定制文件夹
 * @apiVersion 2.0.0
 * @apiName updatePerHabit
 * @apiGroup habit
 * @apiPermission login
 *
 * @apiDescription   修改私人定制文件夹
 *
 * @apiParam id    {String}       私人定制文件夹ID
 * @apiParam habitName       {String}       新的文件夹名称
 *
 * @apiUse AuthenticatedHeader
 *
 *
 * @apiUse AuthenticatedError
 *
 */
function updatePerHabit() { return; }


/**
 * @api {post} /HabitApi/deletePerHabit      删除私人定制文件夹
 * @apiVersion 2.0.0
 * @apiName deletePerHabit
 * @apiGroup habit
 * @apiPermission login
 *
 * @apiDescription      删除私人定制文件夹
 *
 * @apiParam id    {String}       私人定制文件夹ID

 *
 * @apiUse AuthenticatedHeader
 *
 *
 * @apiUse AuthenticatedError
 *
 */
function deletePerHabit() { return; }



/**
 * @api {get} /HabitApi/getHomeHabit 首页获取已经启动的习惯集合
 * @apiVersion 2.0.0
 * @apiName getHomeHabit
 * @apiGroup habit
 *
 * @apiDescription 首页获取已经启动的习惯集合
 *
 *
 *
 * @apiUse AuthenticatedHeader
 *
 *
 * @apiUse AuthenticatedError
 *
 */
function getHomeHabit() { return; }


/**
 * @api {get} /PhysiqueApi/getHomeTitle 首页体质、能量、时令汇总信息接口
 * @apiVersion 2.0.0
 * @apiName getHomeTitle
 * @apiGroup habit
 *
 * @apiDescription 首页体质、能量、时令汇总信息接口
 * @apiParam province    {String}       省份
 * @apiParam city       {String}       城市名
 * @apiParam wind    {String}     风级（2级）
 * @apiParam weather    {String}     天气（霾）
 *
 *
 * @apiUse AuthenticatedHeader
 *
 *
 * @apiUse AuthenticatedError
 *
 */
function getHomeTitle() { return; }
