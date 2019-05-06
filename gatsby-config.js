const path = require(`path`);

const name = `آوان‌یار`;
const title = `${name} | ارائه راهکارهای امنیتی و هوشمند‌سازی برای خانه، محل کار و سازمان شما`;
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
const theme = `#363636`;
const background = `#363636`;
// PWA display types: fullscreen | standalone | minimal-ui | browser
const display = `minimal-ui`;

module.exports = {
  siteMetadata: {
    name,
    title,
    description,
    author,
    keywords,
  },
  plugins: [
    `gatsby-plugin-jarvis`,
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `images`),
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-glamor`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: title,
        short_name: name,
        start_url: `/`,
        background_color: theme,
        theme_color: background,
        display: display,
        icon: 'src/images/icon.png',
      },
    },
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `esdrv9zowlcp`,
        accessToken: `b8cf2fb475a69cff1ac4f5c09763a148407e2b16bb929acb3633a1b986ca46f2`,
      },
    }
  ],
}
