/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['links.papareact.com', 'media.licdn.com', 'encrypted-tbn3.gstatic.com', 'scontent-lhr8-1.xx.fbcdn.net', 'platform-lookaside.fbsbx.com']
  },
  experimental: {
    appDir: true
  }
}
