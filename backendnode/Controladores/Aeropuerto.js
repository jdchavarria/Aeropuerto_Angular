
const { Client } = require('pg')
const { conexion } = require('../conexion')
const client = new Client(conexion)

exports.addAeropuerto = async function addAeropuerto(req, res) {
    let body = req.body;
    client.connect()
    const text = 'INSERT INTO "AEROPUERTO" (nombre) VALUES($1) RETURNING *'
    const values = [body.nombre]
    try {
        const resp = await client.query(text, values)
        console.log(resp.rows[0])
        res.send(resp.rows[0])
        return true;
      } catch (err) {
        console.log(err.stack)
        res.status(500).send(err.message)
        return false;
      }

  }


  exports.getAeropuertos = async function getAeropuertos(req, res) {
    const client2 = new Client(conexion)
    var id_avion = req.params.id;
    var query = `
    SELECT id_aeropuerto, nombre
    FROM "AEROPUERTO" `;
    client2.connect()
    const {rows} = await client2.query(query,[]);
    res.send(rows);
  }