---
# try also 'default' to start simple
theme: light-icons
# https://sli.dev/custom/highlighters.html
highlighter: shiki
layout: intro
image: 'https://source.unsplash.com/collection/94734566/1920x1080'
---

  <div class="mb-8 absolute bottom-4 left-12">
    <span class="text-6xl text-primary-lighter text-opacity-80" style="font-weight:500;" >
      代码规范和ESLint<light-icon icon="bike"/>
    </span>
    <div class="mt-8 text-9xl text-white text-opacity-60" style="font-weight:600;" >
      前端代码质量
    </div>
  </div>


---

# 问题？

- javascript 脚本语言。变量类型，函数参数校验
- 代码风格不一致。
- 组件复用率不高。直接拷贝代码修改。
- 同一功能，不同项目依赖库不同。
- ......

<style>
h1 {
  background-color: #2B90B6;
  background-image: linear-gradient(45deg, #4EC5D4 10%, #146b8c 20%);
  background-size: 100%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
}
</style>

---

```javascript
schema(newVal, oldVal) {
  const fields = flattenSchema(this.schema);
  this.fields = fields
  const formData = getDefaultFormState(this.schema, this.value, this.schema);

  this.formData = formData;
}
```

```javascript
onFieldChange(data) {
    this.emitWidgetDataChange(data);

    // 如果存在 equalTo 规则，触发依赖校验
    if (data.equalTo) {
        setTimeout(() => {
            this.$refs.genEditForm.validateField(data.equalTo);
        });
    }
},
```

---

# 代码质量？

增强开发协作、提升开发效率、产品维护成本

- **代码风格** - 代码风格是否统一
- **复杂度** - 规模大小、耦合度
- **重复率** - 重复出现代码区块, 低于5%

<style>
h1 {
  background-color: #2B90B6;
  background-image: linear-gradient(45deg, #4EC5D4 10%, #146b8c 20%);
  background-size: 100%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
}
</style>

---

# 代码异味

- 1、Vue 组件 Template 中很长的判断
- 2、变量名定义 - 含义不明确或者无定义
- 3、重复代码 - 拷贝工具方法
- 4、过长函数 - 复杂度
- 5、函数参数太多 - 俩个以上考虑使用对象
- 6、setTimeout 和接口，执行错误，定时炸弹
- ...

<style>
h1 {
  background-color: #2B90B6;
  background-image: linear-gradient(45deg, #4EC5D4 10%, #146b8c 20%);
  background-size: 100%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
}
</style>

---

# Examples

<div class="pt-12" grid="~ cols-4 gap-4" m="-t-2">

```javascript
into() {
  setTimeout(() => {
    this.AgingBasic();
    this.TimeoutTrend();
    this.TimeoutType();
    this.TimeoutSys();
    this.TimeoutPerson();
    this.NodeTimeoutRate();
    this.WaitTime();
    this.MeanWork();
    this.SurplusDurationStep();
  }, 200);
}
```

```html
<span
  v-if="
    text.stepHangUpCount === 0 &&
      text.stepReturnCount === 0 &&
      text.stepPressCount === 0
  "
>
  --
</span>
```

```javascript
async TimeoutType() {
  try {
    this.AgingOvertimeWorkPic.spinning = true;
    const { status, resultData } = await getTimeoutType(this.options);
    if (status === 'complete') {
      let Items = [];
      let counts = 0;
      let data = changeTree(resultData, this.typeJsonTree);
      data.forEach(v => {
        counts += v.value;
      });
      data.forEach(v => {
        let obj = {
          name: v.name,
          value: v.value,
          rate: parseFloat((v.value / counts) * 100.0).toFixed(2)
        };
        Items.push(obj);
      });
      this.AgingOvertimeWorkPic.echart.title.subtext = counts;
      let result = Items.map(item => {
        let obj = { ...item };
        obj.rate = `${item.rate}%`;
        return obj;
      });
      this.AgingOvertimeWorkPic.records = result;
    }
  } catch (error) {
    this.AgingOvertimeWorkPic.records = [];
  } finally {
    this.AgingOvertimeWorkPic.chartsKey = Math.random();
    this.AgingOvertimeWorkPic.spinning = false;
  }
}
```

```javascript
handelDictionary(data) {
  switch (this.type) {
    case 'assign':
      data.records.forEach(item => {
        let content = JSON.parse(item.contentJson);
        if (content) {
          let assignToArr = content.transPerson.map(user => {
            return user.name;
          });
          item.assignTo = assignToArr.join(' | ');
        }
      });
      break;
    case 'delay':
      data.records.forEach(item => {
        let content = JSON.parse(item.contentJson);
        if (content) {
          item.addAging = content.addAging;
          item.stepDeadlineTime = content.stepDeadlineTime;
          item.stepDelayTime = content.stepDelayTime;
        }
      });
      break;
    case 'return':
      data.records.forEach(item => {
        let content = JSON.parse(item.contentJson);
        if (content) {
          let returnUserArr = content.returnUserList.map(user => {
            return user.name;
          });
          item.returnUser = returnUserArr.join(' | ');
          item.returnStepName = content.returnStepName;
        }
      });
      break;
    case 'hang':
      data.records.forEach(item => {
        item.addAging = item.ticketStatus === '3' ? '挂起中' : '';
        let content = JSON.parse(item.contentJson);
        if (content && item.ticketStatus !== '3') {
          item.addAging = content.addAging;
          item.endHangTime = content.endHangTime;
        }
      });
      break;
  }
  return data;
}
```
</div>

---

# 复杂度

代码复杂度低，代码不一定好，但代码复杂度高，代码一定不好。

- 1、项目越来越大，一直添加功能，无法全面掌控
- 2、这代码谁写的...

`if else` 、`switch case` 、 `for`循环、三元运算

<style>
h1 {
  background-color: #2B90B6;
  background-image: linear-gradient(45deg, #4EC5D4 10%, #146b8c 20%);
  background-size: 100%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
}
</style>

---

# Examples

```javascript
handelDictionary(data) {
  switch (this.type) {
    case 'assign':
      data.records.forEach(item => {
        let content = JSON.parse(item.contentJson);
        if (content) {
          let assignToArr = content.transPerson.map(user => {
            return user.name;
          });
          item.assignTo = assignToArr.join(' | ');
        }
      });
      break;
    case 'delay':
      data.records.forEach(item => {
        let content = JSON.parse(item.contentJson);
        if (content) {
          item.addAging = content.addAging;
          item.stepDeadlineTime = content.stepDeadlineTime;
          item.stepDelayTime = content.stepDelayTime;
        }
      });
      break;
    case 'return':
      data.records.forEach(item => {
        let content = JSON.parse(item.contentJson);
        if (content) {
          let returnUserArr = content.returnUserList.map(user => {
            return user.name;
          });
          item.returnUser = returnUserArr.join(' | ');
          item.returnStepName = content.returnStepName;
        }
      });
      break;
    case 'hang':
      data.records.forEach(item => {
        item.addAging = item.ticketStatus === '3' ? '挂起中' : '';
        let content = JSON.parse(item.contentJson);
        if (content && item.ticketStatus !== '3') {
          item.addAging = content.addAging;
          item.endHangTime = content.endHangTime;
        }
      });
      break;
  }
  return data;
}
```

---

# 看不懂代码

- 1、维护困难
- 2、逻辑不清晰
- 3、BUG 难定位
- 4、修改组件，A 页面好了，引起 B 页面新问题
- ...

---

# 降低复杂度

- 1、单一职责提炼函数
- 2、合并条件，避免条件语句
- 3、避免类型检查
- 4、组件拆分

<layout-tag>
  <a href="https://guide.cowboybebop.space/docs/javascript/code.html" target="_blank">避免条件语句</a>
</layout-tag>

<style>
h1 {
  background-color: #2B90B6;
  background-image: linear-gradient(45deg, #4EC5D4 10%, #146b8c 20%);
  background-size: 100%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
}
</style>

---

# 组件拆分

- 1、基础组件 - `@wpg/design-vue`
- 2、通用组件 - 不应当依赖外部可变的变量, 例如 vuex `@wpg/vc-design`
  - 用户交互
  - UI 展示
- 3、业务组件，业务逻辑；拆分慎重，太多引用地方，维护问题
  - 系统接口依赖依赖
  - 功能是否通用，2个地方引用
  - 功能是否独立
- 4、 props 传参数，不要 $refs 直接修改

<style>
h1 {
  background-color: #2B90B6;
  background-image: linear-gradient(45deg, #4EC5D4 10%, #146b8c 20%);
  background-size: 100%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
}
</style>

---

# 重复率

- 1、复制粘贴
- 2、新人接手，对项目不了解
- 3、完全一致的代码或者只修改了空格和注释
- 4、结构上和句法上一致的代码，例如只是修改了变量名
- 5、插入和删除了部分代码
- 6、功能和逻辑上一致的代码，直接拷贝

<layout-tag>
  <a href="http://10.10.102.75:9000/projects?sort=-analysis_date" target="_blank">sonarQube</a>
</layout-tag>

<style>
h1 {
  background-color: #2B90B6;
  background-image: linear-gradient(45deg, #4EC5D4 10%, #146b8c 20%);
  background-size: 100%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
}
</style>

---

# 工作流

- 📝 **Guide** - 代码规范
- 🎨 **ESLint** - 语法规则和代码风格的检查工具
- 🧑‍💻 **Prettier** - 代码格式化工具
- 🤹 **Stylelint** - CSS 代码检查器
- 🤹 **Commitizen** - Commit Message 规范
- 🛠 **Husky** - 提供钩子，提交代码前监测
- 🎥 **VSCode** - 如何配置 Lint 工具
- 📤 **Sonar** - 代码质量管理系统

<style>
h1 {
  background-color: #2B90B6;
  background-image: linear-gradient(45deg, #4EC5D4 10%, #146b8c 20%);
  background-size: 100%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
}
</style>

---

# 代码规范

旨在增强团队开发协作、提高代码质量和打造开发基石的编码规范

- 1、HTML 规范
- 2、CSS 规范
- 3、JavaScript 规范
- 4、VUE 规范
- 5、图片规范
- 6、命名规范


<layout-tag>
  <a href="https://guide.cowboybebop.space/" target="_blank">代码规范</a>
</layout-tag>

<style>
h1 {
  background-color: #2B90B6;
  background-image: linear-gradient(45deg, #4EC5D4 10%, #146b8c 20%);
  background-size: 100%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
}
</style>

---

# ESLint

`JavaScript` 代码监测工具，约定代码格式

- 1、未使用变量
- 2、全等监测
- 3、单双引号
- 4、缩进
- ...

<layout-tag>
  <a href="https://github.com/AlloyTeam/eslint-config-alloy" target="_blank">ESLint</a>
</layout-tag>

<style>
h1 {
  background-color: #2B90B6;
  background-image: linear-gradient(45deg, #4EC5D4 10%, #146b8c 20%);
  background-size: 100%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
}
</style>

---

# 规则

- **"off" 或 0** - 关闭规则
- **"warn" 或 1** - 开启规则，警告，程序不退出
- **"error" 或 2** - 开启规则，错误，程序退出

---

# Examples

```ts
yarn add eslint @babel/core @babel/eslint-parser @wpg/eslint-config -D
```

```javascript
// .eslintrc.js
module.exports = {
  extends: ['@wpg']
};
```

```json
{
  "eslint.enable": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    "vue",
    "typescript",
    "typescriptreact"
  ]
}
```

---

# Prettier

用来格式化代码，不仅仅 `javascript`,  支持多种代码格式

- 格式化空格
- 左右空格
- html 换行
- 单双引号
- ...

<layout-tag>
  <a href="https://prettier.io/" target="_blank">Prettier</a>
</layout-tag>

<style>
h1 {
  background-color: #2B90B6;
  background-image: linear-gradient(45deg, #4EC5D4 10%, #146b8c 20%);
  background-size: 100%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
}
</style>

---

# Examples

```ts
yarn add prettier @wpg/prettier-config -D
```

package.json 中配置
```json
{
  "prettier": "@wpg/prettier-config"
}
```

```json
{
  "editor.formatOnSave": true,
  "prettier.enable": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode"
}
```

---

# Stylelint

CSS 代码检查器，规避 CSS 代码中的错误并保持一致的编码风格

- 1、重复属性监测
- 2、属性排序
- 3、之间添加空行

<layout-tag>
  <a href="https://stylelint.io/" target="_blank">Stylelint</a>
</layout-tag>

<style>
h1 {
  background-color: #2B90B6;
  background-image: linear-gradient(45deg, #4EC5D4 10%, #146b8c 20%);
  background-size: 100%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
}
</style>

---

# Examples

```ts
yarn add stylelint @wpg/stylelint-config -D
```

```javascript
// .stylelintrc.js
module.exports = {
  extends: ['@wpg/stylelint-config']
};
```

```json
{
  "stylelint.enable": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.stylelint": true
  }
}
```

---

# UNI-APP

条件语法

```js
 // #ifdef H5
 // #endif
```

```js
// .eslintrc.js
rules: {
  ...
  'import/order': 'off',
  'import/first': 'off',
  'sort-imports': 'off',
  ...
}
```

```js
// .stylelintrc.js
rules: {
  ...
  'order/order': 'off',
  ...
}
```

---

# Learn More

规范化不能解决所有问题，积累基础能力，提供代码复用，代码可维护性

[eslint-config](http://10.10.102.223/WPG_SRC_WEB/eslint-config) · [stylelint-config](http://10.10.102.223/WPG_SRC_WEB/stylelint-config) · [prettier-config](http://10.10.102.223/WPG_SRC_WEB/prettier-config)

<style>
h1 {
  background-color: #2B90B6;
  background-image: linear-gradient(45deg, #4EC5D4 10%, #146b8c 20%);
  background-size: 100%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
}
</style>
