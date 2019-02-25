module.exports = {
  siteMetadata: {
    title: `آوان‌یار | ارائه راهکارهای امنیتی و هوشمند‌سازی برای خانه، محل کار و سازمان شما`,
    description: `خدمات دوربین مداربسته و پسیو شبکه برای خانه، محل کار و سازمان شما`,
    author: `@avanyarteam`,
    keywords: [
      'دوربین مدار‌بسته',
      'پسیو شبکه',
      'دزدگیر',
      'اتوماسیون صنعتی',
      'هوشمند سازی',
      'امنیت',
      'نظارت',
      'تصویر',
      'گیت تردد',
      'کرکره برقی',
      'درب برقی',
      'CCTV',
      'Network',
      'Security',
      'Gate',
      'Industerial Automation',
      'Video Record',
    ]
  },
  plugins: [
    `gatsby-plugin-typescript`,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        // icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-sass`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
}
