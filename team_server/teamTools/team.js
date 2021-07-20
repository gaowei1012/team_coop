const uuid = require('node-uuid')

class Team {
  // 客服
  gen_customer(req) {
    return {
      customer_id: uuid.v4(),
      ...req.body
    }
  }

  // 分类
  gen_catagory(req) {
    return {
      catagory_id: uuid.v4(),
      ...req.body
    }
  }

  // 问题
  gen_problem(req) {
    return {
      problem_id: uuid.v4(),
      ...req.body
    }
  }
}

module.exports = Team
