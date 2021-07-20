const express = require("express");
const router = express.Router();
const utils = require("../utils/utils");
const jwt = require("jwt-simple");
const config = require("../config");
// const redisUtil = require("../utils/redis_util");

/**
 * 验证token
 */
router.use("/auth", function (req, res, next) {
  const jwtToken = req.headers.jwttoken;

  try {
    const decoded = jwt.decode(jwtToken, config.managerTokenSecret);

    /// token 时间过期， 返回错误提示
    if (Date.now() > decoded.exp) {
      res.send(utils.resFail(config.jwtExpiredError, "JWT TOKEN EXPIRED"));
      return;
    }

    // redisUtil
    //   .get(`${config.redis_login_session}:${decoded.user_id}`)
    //   .then((data) => {
    //     if (data === jwtToken) {
    //       req.payload = decoded;
    //       // 刷新session保留token时间为3天
    //       redisUtil.expire(
    //         `${config.redis_login_session}:${req.authUser.getUserId()}`,
    //         60 * 60 * 72
    //       );
    //     }
    //   });

    if (req.originalUrl === "/api/v0.1.0/auth") {
      res.send(utils.resSuccess("身份验证通过", decoded));
      return;
    }
  } catch (err) {
    res.send(
      utils.resFail(config.jwtInvalidError, `Invalid JWT Token！${err}`)
    );
  }
});

module.exports = router;
