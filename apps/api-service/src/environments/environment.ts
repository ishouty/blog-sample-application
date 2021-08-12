const port = process.env.port || 3333;

export const environment = {
  production: false,
  port: port,
  baseUrl: `http://localhost:${port}/api`,
};
