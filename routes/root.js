module.exports = (router, controller) => {
  router.get('/', controller.getIndex);
  router.get('/pepito', controller.getIndex);
  return router;
}