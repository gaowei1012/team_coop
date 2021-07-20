const express = require("express");
const router = express.Router();
const utils = require("../../../utils/utils");
const Catagory = require("../../../teamTools/team");
const mongoModal = require("../../../mongo/mongoInit/mongoModal");

/**
 * 获取分类
 */
router.get("/", function (req, res) {
  mongoModal.CATAGORY.find()
    .then((msg) => {
      res.send(utils.resSuccess("获取分类信息成功", msg));
    })
    .catch((err) => {
      res.send(utils.resFail("获取分类信息失败", err));
    });
});

/**
 * 添加分类
 */
router.post("/", function (req, res) {
  const c = new Catagory();
  const data = c.gen_catagory(req);
  mongoModal.CATAGORY.create(data)
    .then((doc) => {
      res.send(utils.resSuccess("添加分类成功", doc));
    })
    .catch((err) => {
      res.send(utils.resFail("添加分类失败", err));
    });
});

/**
 * 获取单个分类信息
 */
router.get("/:catagory_id", function (req, res) {
  mongoModal.CATAGORY.findOne({ catagory_id: req.params.catagory_id })
    .then((msg) => {
      res.send(utils.resSuccess("获取单个分类成功", msg));
    })
    .catch((err) => {
      res.send(utils.resFail("获取单个分类失败", err));
    });
});

/**
 * 更新单个分类信息成功
 */
router.put("/:catagory_id", function (req, res) {
  mongoModal.CATAGORY.updateOne(
    { catagory_id: req.params.catagory_id },
    { $set: req.body }
  )
    .then((msg) => {
      res.send(utils.resSuccess("更新单个分类成功", msg));
    })
    .catch((err) => {
      res.send(utils.resFail("更新单个分类失败", err));
    });
});

/**
 * 删除分类信息
 */
router.delete("/:catagory_id", function (req, res) {
  mongoModal.CUSTOMER.deleteOne({ catagory_id: req.params.catagory_id })
    .then((msg) => {
      res.send(utils.resSuccess("删除分类信息成功", msg));
    })
    .catch((err) => {
      res.send(utils.resFail("删除分类信息事变", msg));
    });
});

module.exports = router