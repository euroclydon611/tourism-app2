module.exports = {
  apps: [
    {
      name: "tourism-reginald-fe",
      script: "npx",
      args: "vite preview --port 9097 --host 0.0.0.0",
      env: {
        NODE_ENV: "production",
      },
    },
  ],
};
