/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },
  env: {
    NODEEMAILER_PW: "oehj yffk kozf klmu",
    NODEEMAILER_EMAIL: "krasiyruslan3@gmail.com"
  }
}

module.exports = nextConfig
