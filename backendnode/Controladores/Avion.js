
const { Client } = require('pg')
const { conexion } = require('../conexion')
const client = new Client(conexion)

const connectionData = {
  user: 'postgres',
  host: 'localhost',
  database: 'aerolinea',
  password: 'admin',
  port: 5432,
}

exports.addAvion = async function addAvion(req, res) {
  let body = req.body;
  client.connect()
  const text = 'INSERT INTO "AVION" (cant_asientos) VALUES($1) RETURNING *'
  const values = [body.cant_asientos]
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




exports.fillAsientos = async function fillAsientos(req,res) {
  let cant=req.body.cant;
  let clase=req.body.clase;
  let id_avion=req.body.id_avion;


  client.connect()
  const text = 'INSERT INTO "ASIENTO" (nombre_,id_clase,id_avion) VALUES($1,$2,$3) RETURNING *'
  let pos = 0;
  nofila = 0;
  for (let j = 0; j < cant; j++) {
    if (pos == 6) {
      nofila++;
      pos = 0;
    }
    const nombre  = getnombre(pos,nofila)
    pos=pos+1;
    values = [nombre, clase, id_avion]
    try {
      const resp = await client.query(text, values)
      console.log(resp.rows[0])
    } catch (err) {
      console.log(err.stack)
      res.status(500).send(err.message)
      return false;

    }
  }
  return res.send({filas_insertadas:nofila+1})

}

exports.getletra= getletra =(pos)=> {
  letra = pos + 65
  return String.fromCharCode(letra)
}

exports.getnombre= function getnombre(pos,nofila){
  let letra = this.getletra(pos)
  return letra + nofila
}

exports.getAviones = async function getAviones(req, res) {
  const client2 = new Client(conexion)
  var query = `
  SELECT id_avion, cant_asientos 
  FROM "AVION" `;
  client2.connect()
  const {rows} = await client2.query(query,[]);
  res.send(rows);
}