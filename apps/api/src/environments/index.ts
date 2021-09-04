import { Env, environment as devEnv } from './environment';
import { environment as prodEnv } from './environment.prod';

const isProduction = process.env.NODE_ENV === 'production';

export const getEnv = <T extends keyof Env>(key: T): Env[T] => {
  const env: Env = (isProduction ? prodEnv : devEnv) as Env;
  return env[key];
};
