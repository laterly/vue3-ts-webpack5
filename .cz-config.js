module.exports = {
  types: [
    { value: 'feat', name: 'feat:     增加新功能' },
    { value: 'fix', name: 'fix:      修复问题/BUG' },
    { value: 'ui', name: 'ui:       更新UI' },
    { value: 'style', name: 'style:    代码风格相关无影响运行结果的' },
    { value: 'chore', name: 'chore:    依赖更新/开发工具变动(构建、脚手架工具等)' },
    { value: 'del', name: 'del:      删除代码/文件' },
    { value: 'refactor', name: 'refactor: 代码重构' },
    { value: 'test', name: 'test:     增删测试' },
    { value: 'merge', name: 'merge:     合并代码' },
  ],
  scopes: [],
  messages: {
    type: '选择更改类型:\n',
    scope: '更改的范围:\n',
    subject: '简短描述:\n',
    body: '详细描述. 使用"|"换行:\n',
    breaking: 'Breaking Changes列表:\n',
    footer:
      '如果代码的提交是不兼容变更或关闭缺陷，则Footer必需，否则可以省略:\n',
    confirmCommit: '确认提交?',
  },
  allowCustomScopes: false,
  allowBreakingChanges: ['feat', 'fix'],
  // 跳过问题
  skipQuestions: ['breaking', 'footer'],
};
