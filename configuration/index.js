const { env: environment = {} } = process;

module.exports = {
  ENVS: {
    development: 'development',
    heroku: 'heroku',
    production: 'production',
  },
  ENV: environment.ENV || this.ENVS.development,
  PORT: Number(environment.PORT) || 3300,
  SERVER_ADDRESS: environment.SERVER_ADDRESS || '',
};
