const express = require("express");
const router = express.Router();
const utils = require("../../../utils/utils");
const Problem = require("../../../teamTools/team");
const mongoModal = require("../../../mongo/mongoInit/mongoModal");

/**
 * 获取问题
 */
router.get("/", function (req, res) {
  mongoModal.PROBLEM.find()
    .then((doc) => {
      res.send(utils.resSuccess("获取问题成功", doc));
    })
    .catch((err) => {
      res.send(utils.resFail("获取问题失败", err));
    });
});

/**
 * 添加问题
 */
router.post("/", function (req, res) {
  const c = new Problem();
  const data = c.gen_problem(req);
  mongoModal.PROBLEM.create(data)
    .then((doc) => {
      res.send(utils.resSuccess("添加问题成功", doc));
    })
    .catch((err) => {
      res.send(utils.resFail("添加问题失败", err));
    });
});

/**
 * 获取问题详情
 */
router.get("/:problem_id", function (req, res) {
  mongoModal.PROBLEM.findOne({ problem_id: req.params.problem_id })
    .then((msg) => {
      res.send(utils.resSuccess("获取问题成功", msg));
    })
    .catch((err) => {
      res.send(utils.resFail("获取问题失败", err));
    });
});

/**
 * 更新问题
 */
router.put("/:problem_id", function (req, res) {
  mongoModal.PROBLEM.updateOne(
    { problem_id: req.params.problem_id },
    { $set: req.body }
  )
    .then((msg) => {
      res.send(utils.resSuccess("更新问题成功", msg));
    })
    .catch((err) => {
      res.send(utils.resFail("更新问题失败", err));
    });
});

/**
 * 删除问题
 */
router.delete("/:problem_id", function (req, res) {
  mongoModal.PROBLEM.deleteOne({ problem_id: req.params.problem_id })
    .then((msg) => {
      res.send(utils.resSuccess("删除问题成功", msg));
    })
    .catch((err) => {
      res.send(utils.resFail("删除问题失败", err));
    });
});

module.exports = router
