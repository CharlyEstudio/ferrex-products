export default () => ({
  port: parseInt(process.env.PORT, 10) || 3001,
  version: process.env.npm_package_version,
  description: process.env.npm_package_description,
  emailSuperAdmin: process.env.EMAIL,
  passwordSuperAdmin: process.env.PASSWORD,
  nameSuperAdmin: process.env.NAME,
  redisHost: process.env.REDIS_HOST,
  redisPort: parseInt(process.env.REDIS_PORT) || 6379,
  redisPassword: process.env.REDIS_PASSWORD,
});
