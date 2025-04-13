import { Helmet } from 'react-helmet-async';

type Props = {
  title?: string;
  description?: string;
  url?: string;
  siteName?: string;
};

function SeoMetaTag({ title, siteName, url, description }: Props) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
    </Helmet>
  );
}

export default SeoMetaTag;
