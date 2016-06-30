module.exports = function(app){

  var controller = {};

  var contatos = [
    {_id: 1, nome: 'contato1', email: 'cont@email.com'},
    {_id: 2, nome: 'contato1', email: 'cont@email.com'},
    {_id: 3, nome: 'contato1', email: 'cont@email.com'},
    {_id: 4, nome: 'contato1', email: 'cont@email.com'},
    {_id: 5, nome: 'contato1', email: 'cont@email.com'},
  ];

  controller.listarContatos = function(req, res, next){
    res.json(contatos);
  }

  controller.obtemContato = function(req, res, next){
    var idContato = req.params.id;

    var contato = contatos.filter(function (contato) {
      return idContato == contato._id;
    })[0];

    contato ? res.json(contato) : res.status(404).send('Contato não encontrado')
  }

  return controller;
}
