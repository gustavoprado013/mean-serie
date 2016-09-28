module.exports = function (app) {

  var controller = {};

  var contatos = [
    {_id: 1, name: 'cont1', email: 'cont1@cont1.com'},
    {_id: 2, name: 'cont2', email: 'cont1@cont1.com'},
    {_id: 3, name: 'cont3', email: 'cont1@cont1.com'},
    {_id: 4, name: 'cont4', email: 'cont1@cont1.com'},
    {_id: 5, name: 'cont5', email: 'cont1@cont1.com'},
    {_id: 6, name: 'cont6', email: 'cont1@cont1.com'}
  ]

  controller.listarContatos = function (req, res, next) {
      res.json(contatos);
  }

  controller.obtemContato = function (req, res, next) {
      var idContato = req.params.id;
      var contato = contatos.filter(function (contato) {
        return idContato == contato._id;
      })[0];
      
      contato ? res.json(contato) :
        res.status(404).send('Contato não encontrado');
  }

  return controller;
}
