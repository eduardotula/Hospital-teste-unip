module.exports = {
  routes: [
    {
     method: 'GET',
     path: '/user-api',
     handler: 'user-api.getByCpf',
     config: {
       policies: [],
       middlewares: [],
     },
    },
  ],
};
