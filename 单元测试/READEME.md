### 前端常见问题
- 修改js模块功能 其他模块也受影响 很难快速定位bug
- 多人开发代码 越来越难以维护 不方便迭代 代码无法重构

### 什么是单元测试
> 单元测试就是测试最小单元(一个方法， 一个组件)

### TDD & BDD
> Test-Driven Development 测试驱动开发
  - 先编写测试用例代码 然后针对测试用例编写功能代码 使其能够通过
  - 很好的诠释了代码即文档
  - 清晰地了解软件的需求

> Dehavior Driven Developemnt 行为驱动开发
  - 系统业务专家、开发者、测试人员一起合作 分析软件的需求 然后将这些需求写成一个个的故事。开发者赋值填充内容
  - 保证程序实现效果与用户需求一致

  ### 测试工具 mocha(测试框架) + chai(断言库) / jest(现在比较流行的一个测试框架)
  - Karma(现在用的不是很多，它相当于把你的代码放到浏览器去执行) + Jasmine + chrome-launcher
  - Karma + mocha + chai / jest 使用jsdom(用js来描述这个dom)

  ### chai文档
  > www.chijs.com/api/bdd/