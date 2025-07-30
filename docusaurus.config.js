module.exports = {
  title: 'Zado IA Docs',
  tagline: 'Automatize com inteligência',
  url: 'https://vinijre331.github.io',
  baseUrl: '/project_doc/',
  organizationName: 'vinijre331',
  projectName: 'project_doc',
  deploymentBranch: 'gh-pages',
  trailingSlash: false,
  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};