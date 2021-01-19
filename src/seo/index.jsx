import React from "react";
import Head from "next/head";
import config from "config";
import { useRouter } from "next/router";

const setKeywords = (...arg) => {
  return [
    ...new Set(
      arg
        .join(" ")
        .toLowerCase()
        .match(/[^|()\/\s+:,]+/g)
        .filter((v) => v != "-")
    ),
  ].join(",");
};

const setImage = (image) => {
  return /^http/.test(image)
    ? image
    : process.env.NEXT_PUBLIC_CDN_URL +
      config.image_src_path +
      (image || config.image_src);
};
const SEO = ({
  description = "",
  title,
  image,
  children,
  styles = [],
  preconnect = [],
  keywords = [],
}) => {
  const metaTitle = `${title} || ${config.title}`;
  const metaImage = setImage(image);
  const metaKeywords = setKeywords(
    config.keywords.join(","),
    keywords.join(","),
    metaTitle,
    description
  );
  const metaDescription = description || config.description;
  const router = useRouter();

  const fullUrl = process.env.NEXT_PUBLIC_HOST_URL + router.pathname;

  return (
    <Head>
      <title>{metaTitle}</title>

      <meta property="og:title" content={metaTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:image" content={metaImage} />
      <meta property="og:url" content={fullUrl} />
      <meta name="twitter:title" content={metaTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={metaImage} />

      <meta name="description" content={metaDescription} />
      <meta name="keywords" content={metaKeywords} />

      <link rel="image_src" href={metaImage} />
      {/* <link rel="canonical" href={fullUrl} /> */}

      {preconnect.map((v) => (
        <link key={v} rel="preconnect dns-prefetch" href={v} />
      ))}

      {styles.map((v) => (
        <React.Fragment key={v}>
          <link rel="stylesheet" href={v} />
          <link rel="preload" as="style" href={v} />
        </React.Fragment>
      ))}
      {children}
    </Head>
  );
};
export default SEO;
