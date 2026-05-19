module.exports = {
  apps: [
    {
      name: "animated-portfolio",
      cwd: __dirname,
      script: "npm",
      args: "run start",
      interpreter: "none",
      env: {
        NODE_ENV: "production",
        HOST: "0.0.0.0",
        PORT: 4173,
      },
    },
  ],
};
