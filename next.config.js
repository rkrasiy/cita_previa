/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },
  env: {
    mongodb_username: 'krasiyruslan3',
    mongodb_password: 'WJofa4qsM4g2oHyC',
    mongodb_db: 'test',
    NEXTAUTH_SECRET: 'Q8Mla2kDLJH+HXXyf+V8rUH9Tw2WAGN9TGHgdIy7mhg=',
    NODEEMAILER_PW: "oehj yffk kozf klmu",
    NODEEMAILER_EMAIL: "krasiyruslan3@gmail.com",
    META_TITLE: "Project ABC",
    META_DESCRIPTION: "EADWDFFWAWFA"
  }
}

module.exports = nextConfig
