// prettier.config.js
module.exports = {
  // 在ES5中有效的结尾逗号（对象，数组等）
  trailingComma: 'none',
  // 不使用缩进符，而使用空格
  useTabs: false,
  // tab 用两个空格代替
  tabWidth: 2,
  // 仅在语法可能出现错误的时候才会添加分号
  semi: true,
  // 使用单引号
  singleQuote: true,
  // 在Vue文件中缩进脚本和样式标签。
  vueIndentScriptAndStyle: false,
  // 一行最多 100 字符
  printWidth: 100,
  // 对象的 key 仅在必要时用引号
  quoteProps: 'as-needed',
  // jsx 不使用单引号，而使用双引号
  jsxSingleQuote: false,
  // 大括号内的首尾需要空格
  bracketSpacing: true,
  // 标签的反尖括号需要换行
  bracketSameLine: false,
  // 箭头函数，只有一个参数的时候，也需要括号
  arrowParens: 'avoid',
  // 使用默认的折行标准
  proseWrap: 'preserve',
  // 根据显示样式决定 html 要不要折行
  htmlWhitespaceSensitivity: 'css',
  // 换行符使用 lf
  endOfLine: 'lf'
}
