const crypto = require('crypto');

export default ({ env }) => ({
  'users-permissions': {
    config: {
      jwt: {
        jwtSecret: env('JWT_SECRET') || crypto.randomBytes(16).toString('base64')
      },
    },
  },
  // upload: {
  //   config: {
  //     provider: "strapi-provider-upload-do",
  //     providerOptions: {
  //       key: env('DO_SPACE_ACCESS_KEY'),
  //       secret: env('DO_SPACE_SECRET_KEY'),
  //       endpoint: env('DO_SPACE_ENDPOINT'),
  //       space: env('DO_SPACE_BUCKET'),
  //     }
  //   }
  // }
});
