import React from "react";
import config from "config";
function Stable() {
  return (
    <>
      {/* <script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_TRACKING_ID}`}
      />
      <script
        dangerouslySetInnerHTML={{
          __html: `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);};
gtag('js', new Date());
gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_TRACKING_ID}');
`,
        }}
      /> */}
      <meta httpEquiv="x-ua-compatible" content="ie=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="shortcut icon" href="/favicon.ico" />
      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" href="/favicon.ico" />
      <link rel="robots" href="/robots.txt" />
      <link rel="manifest" href="/manifest.json" />
      <link rel="sitemap" type="application/xml" href="/sitemap.xml" />

      <meta property="og:site_name" content={config.website} />
      <meta property="og:type" content="website" />

      <meta name="twitter:creator" content="cfg" />
      <meta name="twitter:site" content={config.siteUrl} />
      <meta name="twitter:card" content="summary" />

      <meta name="author" content="Code For Green" />
      <meta name="theme-color" content="#0059b2" />

      {/* <meta
        name="google-site-verification"
        content={process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION}
      /> */}
      {config.fonts.map((v) => (
        <React.Fragment key={v}>
          <link rel="stylesheet" href={v} />
          <link rel="preload" as="style" href={v} />
        </React.Fragment>
      ))}
      {config.preconnect.map((v) => (
        <link key={v} rel="preconnect dns-prefetch" href={v} />
      ))}
      {config.scripts.map((v) => (
        <link key={v} rel="preload" as="script" href={v} />
      ))}
    </>
  );
}

export default Stable;
