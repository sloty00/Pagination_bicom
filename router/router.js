const express = require('express');
const router = express.Router();
const db = require('../config/dbConnection');


router.get('/', (req, res) => {
  res.send(`Bienvenido a la pagina`);
});

router.get('/products', getAllProducts);

router.get('/groups', getAllGroups);

router.get('/measurement_unit', getAllMui);

router.get('/costumer_supp', getAllCustomers);



function getAllProducts(req, res){
  // limite de 100
  const limit = 100
  // numeros paginas
  const page = req.query.page
  // calcula offset
  const offset = (page - 1) * limit
  // consulta de datos con numero de paginas y offset
  const prodsQuery = "select * from products limit "+limit+" OFFSET "+offset
  db.getConnection(function(err, connection) {
    connection.query(prodsQuery, function (error, results, fields) {
      // cuando se establece conexion la libera.
      connection.release();
           if (error) throw error;
      // crea el payload
      var jsonResult = {
        'numero elementos':results.length,
        'numero paginas':page,
        'productos':results
      }
      // crea el response
      var myJsonString = JSON.parse(JSON.stringify(jsonResult));
      res.statusMessage = "Productos por pagina "+page;
      res.statusCode = 200;
      res.json(myJsonString);
      res.end();
    })
  })
}

function getAllGroups(req, res){
  // limite de 100
  const limit = 100
  // numeros paginas
  const page = req.query.page
  // calcula offset
  const offset = (page - 1) * limit
  // consulta de datos con numero de paginas y offset
  const prodsQuery = "select * from products limit "+limit+" OFFSET "+offset
  db.getConnection(function(err, connection) {
    connection.query(prodsQuery, function (error, results, fields) {
      // cuando se establece conexion la libera.
      connection.release();
           if (error) throw error;
      // crea el payload
      var jsonResult = {
        'numero elementos':results.length,
        'numero paginas':page,
        'productos':results
      }
      // crea el response
      var myJsonString = JSON.parse(JSON.stringify(jsonResult));
      res.statusMessage = "Productos por pagina "+page;
      res.statusCode = 200;
      res.json(myJsonString);
      res.end();
    })
  })
}

function getAllMui(req, res){
  // limite de 100
  const limit = 100
  // numeros paginas
  const page = req.query.page
  // calcula offset
  const offset = (page - 1) * limit
  // consulta de datos con numero de paginas y offset
  const prodsQuery = "select * from products limit "+limit+" OFFSET "+offset
  db.getConnection(function(err, connection) {
    connection.query(prodsQuery, function (error, results, fields) {
      // cuando se establece conexion la libera.
      connection.release();
           if (error) throw error;
      // crea el payload
      var jsonResult = {
        'numero elementos':results.length,
        'numero paginas':page,
        'productos':results
      }
      // crea el response
      var myJsonString = JSON.parse(JSON.stringify(jsonResult));
      res.statusMessage = "Productos por pagina "+page;
      res.statusCode = 200;
      res.json(myJsonString);
      res.end();
    })
  })
}

function getAllCustomers(req, res){
  // limite de 100
  const limit = 100
  // numeros paginas
  const page = req.query.page
  // calcula offset
  const offset = (page - 1) * limit
  // consulta de datos con numero de paginas y offset
  const prodsQuery = "select * from products limit "+limit+" OFFSET "+offset
  db.getConnection(function(err, connection) {
    connection.query(prodsQuery, function (error, results, fields) {
      // cuando se establece conexion la libera.
      connection.release();
           if (error) throw error;
      // crea el payload
      var jsonResult = {
        'numero elementos':results.length,
        'numero paginas':page,
        'productos':results
      }
      // crea el response
      var myJsonString = JSON.parse(JSON.stringify(jsonResult));
      res.statusMessage = "Productos por pagina "+page;
      res.statusCode = 200;
      res.json(myJsonString);
      res.end();
    })
  })
}

module.exports = router;