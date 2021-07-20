const express = require("express");
const router = express.Router();
const utils = require("../../../utils/utils");
const Customer = require("../../../teamTools/team");
const mongoModal = require("../../../mongo/mongoInit/mongoModal");

/**
 * 添加客服
 */
router.post("/", function (req, res) {
  const c = new Customer();
  const data = c.gen_customer(req);
  mongoModal.CUSTOMER.create(data)
    .then((doc) => {
      res.send(utils.resSuccess("添加客服信息成功", doc));
    })
    .catch((err) => {
      res.send(utils.resFail("添加客服信息失败", err));
    });
});

/**
 * 获取所有客服信息
 */
router.get("/", function (req, res) {
  mongoModal.CUSTOMER.find()
    .then((msg) => {
      res.send(utils.resSuccess("获取客服信息成功", msg));
    })
    .catch((err) => {
      res.send(utils.resFail("获取客服信息失败", err));
    });
});

/**
 * 获取单个客服信息
 */
router.get('/:customer_id', function(req, res) {
  mongoModal.CUSTOMER.findOne({ customer_id: req.params.customer_id })
    .then(msg => {
      res.send(utils.resSuccess('获取客服信息成功', msg))
    })
    .catch(err => {
      res.send(utils.resFail("获取客服信息失败", err));
    })
})

/**
 * 删除客服
 */
router.delete("/:customer_id", function (req, res) {
  mongoModal.CUSTOMER.deleteOne({ customer_id: req.params.customer_id })
    .then((msg) => {
      res.send(utils.resSuccess("删除客服信息成功", msg));
    })
    .catch((err) => {
      res.send(utils.resFail("删除客服信息失败", err));
    });
});

/**
 * 更新客服
 */
router.put("/:customer_id", function (req, res) {
  mongoModal.CUSTOMER.updateOne(
    { customer_id: req.params.customer_id },
    { $set: req.body }
  )
    .then((msg) => {
      res.send(utils.resSuccess("更新客服信息成功", msg));
    })
    .catch((err) => {
      res.send(utils.resFail("更新客服失败", err));
    });
});

module.exports = router;
