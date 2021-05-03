export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '609046efca447214fead86f8',
                  title: 'Sanity Studio',
                  name: 'zanium-site-studio',
                  apiId: '2772410d-0222-4600-a695-f786e27cb6fd'
                },
                {
                  buildHookId: '609046efdca51c1117b35b3e',
                  title: 'Landing pages Website',
                  name: 'zanium-site',
                  apiId: 'dac40835-d9a0-4804-a468-06a80dcab53f'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/refactorized/zanium-site',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://zanium-site.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
