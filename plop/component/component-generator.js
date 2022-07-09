module.exports = function (plop) {
  plop.setGenerator('component', {
    description: 'Componente',
    prompts: [
      {
        name: 'name',
        type: 'input',
        message: 'Nome do Componente: '
      }
    ],
    actions(data) {
      const basePath = `src/ui/components/${data.name}/`
      const actions = [
        {
          type: 'add',
          path: `${basePath}/index.tsx`,
          templateFile: 'plop/component/component-template.hbs'
        },
        {
          type: 'add',
          path: `${basePath}/styles.ts`,
          templateFile: 'plop/component/component-styles-template.hbs'
        },
        {
          type: 'add',
          path: `${basePath}/stories.tsx`,
          templateFile: 'plop/component/component-stories-template.hbs'
        },
        {
          type: 'add',
          path: `${basePath}/test.tsx`,
          templateFile: 'plop/component/component-test-template.hbs'
        }
      ]

      return actions
    }
  })
}
