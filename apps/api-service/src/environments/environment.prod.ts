import { EnvironmentType } from '../app/model/config';
const port = process.env.port || 4333;

export const environment: EnvironmentType = {
  production: true,
  baseUrl: `http://localhost:${port}/api`,
};
