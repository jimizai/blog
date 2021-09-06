export const environment = {
  production: false,
  orm: {
    type: 'mysql',
    host: 'test',
    port: 3306,
    username: 'root',
    password: '123456',
    database: 'blog',
    synchronize: false,
  },
  jwt: {
    secret: 'hellosecret',
    expiresIn: '60s',
  },
};

export type Env = typeof environment;
