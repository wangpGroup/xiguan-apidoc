



/**
 * @api {get} /UserApi/register  用户注册
 * @apiVersion 2.0.0
 * @apiName register
 * @apiGroup User
 *
 * @apiDescription  使用手机号、密码，注册新用户。
 *
 *
 * @apiParam {String}    phone      手机号
 * @apiParam {String}    password   密码
 *
 *
 * @apiSuccess {Boolean}    ok      是否成功
 *
 */
function register() { return; }

/**
 * @api {get} /UserApi/login       用户登录************************************
 * @apiVersion 2.0.0
 * @apiName login
 * @apiGroup User
 *
 * @apiDescription  用户输入手机号、密码登录。
 *
 * @apiParam {String}    phone      手机号
 * @apiParam {String}    password   密码13121812596
 *
 */
function login() { return; }

/**
 * @api {get} /UserApi/getLoginUser  获取登录用户信息
 * @apiversion 2.0.0
 * @apiname getLoginUser
 * @apigroup User
 *
 * @apidescription  获取当前登录用户的信息
 *
 * @apiUse AuthenticatedHeader
 *
 *
 * @apiUse AuthenticatedError
 *
 */
function getLoginUser() { return; }






