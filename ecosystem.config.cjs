module.exports = {
  apps: [
    {
      name: 'devxhub',
      port: '3000',
      exec_mode: 'cluster',
      instances: 'max',
      max_memory_restart: "100M",
      autorestart: true,
      script: './.output/server/index.mjs'
    },
    {
      name: 'dev',
      port: '3001',
      exec_mode: 'cluster',
      instances: 'max',
      max_memory_restart: "100M",
      autorestart: true,
      script: './.output/server/index.mjs'
    }
  ]
}
