const config = {
  databaseUrl: 'mongodb://tai:taitai1@ds147180.mlab.com:47180/tai',
  port: process.env.PORT || 3000,
  JwtSecret: process.env.JWT_SERCRET || 'secret'
}
export default config
