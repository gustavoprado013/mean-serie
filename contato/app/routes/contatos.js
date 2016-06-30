module.exports = function (app) {
  var controller = app.controllers.contatos;
  app.get('/contatos', controller.listarContatos);
  app.get('/contatos/:id', controller.obtemContato);
}
