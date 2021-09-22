
const { Client } = require('pg')
const { conexion } = require('../conexion')
const client = new Client(conexion)

exports.addVuelo = async function addVuelo(req, res) {
    let body = req.body;
    const salida=body.hora_salida
    const llegada=body.hora_llegada
    const precio=body.precio
    const id_estado=body.id_estado_v
    const origen = body.origen
    const destino=body.destino
    const id_avion=body.id_avion

    client.connect()
    const text = 'INSERT INTO "VUELO" (hora_salida,hora_llegada,precio,id_estado_v,origen,destino,id_avion) VALUES($1,$2,$3,$4,$5,$6,$7) RETURNING *'
    const values = [salida,llegada,precio,id_estado,origen,destino,id_avion]
    try {
        const resp = await client.query(text, values)
        console.log(resp.rows[0])
        res.send(resp.rows[0])
      } catch (err) {
        console.log(err.stack)
        res.status(500).send(err.message)
      }

  }

exports.getVuelos = async function getVuelos(req, res) {
  const client2 = new Client(conexion)
  var query = `
  SELECT 
	to_char(vue.hora_salida,'DD Mon YYYY HH24:MI:SS') as salida,  
	to_char(vue.hora_llegada,'DD Mon YYYY HH24:MI:SS') as llegada,
	vue.precio, est.nombre as estado,
	id_vuelo, est.id_estado_V id_estado, origen, destino, id_avion
  FROM "VUELO" vue
  INNER JOIN "ESTADO_VUELO" est
  ON vue.id_estado_v = est.id_estado_v`;
  client2.connect()
  const {rows} = await client2.query(query,[]);
  res.send(rows);
}

exports.getAsientos = async function getAsientos(req, res) {
  const client2 = new Client(conexion)
  var id_avion = req.params.id;
  var query = `
  SELECT 
  id_asiento, nombre_, nombre_clase, 
  porcentaje_agregado_precio as porcentaje, 
  asi.id_clase, id_avion
  FROM "ASIENTO" asi
  INNER JOIN "CLASE" cls
  ON asi.id_clase = cls.id_clase
  WHERE asi.id_avion = `+id_avion;
  client2.connect()
  const {rows} = await client2.query(query,[]);
  res.send(rows);
}