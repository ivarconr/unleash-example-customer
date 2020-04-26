const unleashEnterprise = require('@ivarconr/unleash-enterprise');
const customAuth = require('./custom-auth');

unleashEnterprise
  .start({
    databaseUrl: 'postgres://unleash_user:passord@localhost:5432/unleash',
    port: 4242,
    adminAuthentication: 'custom',
    preRouterHook: customAuth,
    extendedPermissions: true,
  });