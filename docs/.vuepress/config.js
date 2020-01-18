module.exports = {
  title: "Identity - Shoppre Consulting, India",
  description: "OAuth, SAML, Open ID Connect, Single Singon Consulting from India",
  themeConfig: {
    nav: [
      { text: "Home", link: "/" },
      { text: "OAuth in NodeJS", link: "/guide/nodejs-oauth-implementation.html" },
    ]
  },
  dest: "public",
  plugins: [
      'social-share',
    {
      'sitemap': {
        hostname: 'https://identity.shoppre.com/'
      },
    }
  ],
};
