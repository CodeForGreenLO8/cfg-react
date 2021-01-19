module.exports = {
  siteUrl: "https://cfg.lo8.poznan.pl",
  website: "cfg.lo8.poznan.pl",
  title: "Code For Green",
  description: "Code For Green",
  keywords: [
    "www",
    "strony",
    "strony internetowe",
    "css",
    "html",
    "javascript",
    "lo8",
    "poznan",
    "poznań",
  ],
  contacts: {
    // email: "krychaxp@op.pl",
    // webEmail: "admin@krychaxp.pl",
    // facebook: "https://www.facebook.com/krychaxp",
    // twitter: "https://twitter.com/krychaxp",
    // github: "https://github.com/krychaxp",
    // linkedin: "https://www.linkedin.com/in/krychaxp",
    // instagram: "https://www.instagram.com/krychaxp",
    // youtube: "https://www.youtube.com/channel/UCLg2fVpw_hI_eoRhw7pS9Bw",
  },

  utm: "?utm_source=cfg.lo8.poznan.pl&utm_content=link",
  preconnect: [
    "https//www.googletagmanager.com",
    "https//www.google-analytics.com",
    "https://fonts.googleapis.com",
    "https://fonts.gstatic.com",
    process.env.NEXT_PUBLIC_API_URL,
  ],
  fonts: [
    "https://fonts.googleapis.com/css?family=Montserrat:400,500&subset=latin-ext&display=swap",
    "https://fonts.googleapis.com/css?family=Roboto&display=swap",
    // "https://fonts.googleapis.com/icon?family=Material+Icons"
  ],
  scripts: [
    `https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_TRACKING_ID}`,
    "https://www.google-analytics.com/analytics.js",
  ],
};
