import { Helmet } from 'react-helmet-async';

type Props = {
  title?: string;
  description?: string;
  url?: string;
  siteName?: string;
  imageUrl?: string;
};

function SeoMetaTag({ title, siteName, url, description, imageUrl }: Props) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:url" content={url || window.location.href} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={imageUrl} />
    </Helmet>
  );
}

export default SeoMetaTag;
