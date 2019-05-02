import React from "react"
import { Helmet } from "react-helmet"

const SEO = ({ seo, title }) => {

  const description = seo.siteMetadata.description || '';
  const safeTitle = title || seo.siteMetadata.title || 'آوان‌یار';
  const lang = seo.siteMetadata.lang || 'fa';
  const author = seo.siteMetadata.author || '@avanyarteam';
  const keywords = seo.siteMetadata.keywords || [];

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={safeTitle}
      meta={[
        {
          name: `description`,
          content: description,
        },
        {
          property: `og:title`,
          content: safeTitle,
        },
        {
          property: `og:description`,
          content: description,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: author,
        },
        {
          name: `twitter:title`,
          content: safeTitle,
        },
        {
          name: `twitter:description`,
          content: description,
        },
      ].concat(
        keywords.length > 0
          ? {
            name: `keywords`,
            content: keywords.join(`, `),
          }
          : []
      ).concat(seo.siteMetadata.meta || [])}
    />
  );
}

export { SEO };
