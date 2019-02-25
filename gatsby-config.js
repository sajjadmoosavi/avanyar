const title = `آوان‌یار | ارائه راهکارهای امنیتی و هوشمند‌سازی برای خانه، محل کار و سازمان شما`;
const description = `خدمات دوربین مداربسته و پسیو شبکه برای خانه، محل کار و سازمان شما`;
const author = `@avanyarteam`;
const keywords = [
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
];
const name = `آوان‌یار`;
const theme = `#363636`;
const background = `#363636`;
// PWA display types: fullscreen | standalone | minimal-ui | browser
const display = `minimal-ui`;

module.exports = {
  siteMetadata: {
    title,
    description,
    author,
    keywords,
  },
  plugins: [
    `gatsby-plugin-typescript`,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: title,
        short_name: name,
        start_url: `/`,
        background_color: theme,
        theme_color: background,
        display: display,
        icon: 'src/assets/icons/icon.png',
      },
    },
    `gatsby-plugin-offline`,
  ],
}
