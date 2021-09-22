
const { Client } = require('pg')
const { conexion } = require('../conexion')
const client = new Client(conexion)
let id_compra;
exports.addCOMPRA = async function addCOMPRA(req, res) {
    let body = req.body;
    const nombre=body.nombre_cliente;
    const apellido=body.apellido;
    const fecha=body.fecha;
    const noTar=body.numero_tarjeta;
    const cvv=body.cvv_tarjeta;
    const expiracion=body.expiracion_tarjeta;
    const correo=body.correo;
    const detalle=body.detalle;


    client.connect()
    const text = 'INSERT INTO "COMPRA" (nombre_cliente,apellido,fecha,numero_tarjeta,cvv_tarjeta,expiracion_tarjeta,correo) VALUES($1,$2,$3,$4,$5,$6,$7) RETURNING *'
    const values = [nombre,apellido,fecha,noTar,cvv,expiracion,correo]
    try {
        const resp = await client.query(text, values)
        console.log(resp.rows[0]);
        insertados=resp.rows[0];
        this.id_compra=insertados.id_compra;
        console.log("id_compra:",this.id_compra)
        await addDetalles(detalle);
        res.send(insertados);
      } catch (err) {
        console.log(err.stack)
        res.status(500).send(err.message)
      }
  }

  async function addDetalles(detalles) {
    
    for (let detalle of detalles) {
        const text = 'INSERT INTO "DETALLE_COMPRA" (id_compra,id_boleto) VALUES($1,$2) RETURNING *'
        const values = [this.id_compra,detalle.id_boleto]
        try {
            const resp = await client.query(text, values)
            console.log(resp.rows[0]);
            insertados=resp.rows[0];
          } catch (err) {
            console.log(err.stack)
            res.status(500).send(err.message)
            return false;
          }

     }
     return true;
  }

exports.getCompras = async function getCompras(req, res) {
  const client2 = new Client(conexion)
  var query = `
  SELECT 
    nombre_cliente, apellido, fecha, SUM(total_precio) total, com.id_compra
  FROM "COMPRA" com
  INNER JOIN "DETALLE_COMPRA" det
  ON det.id_compra = com.id_compra
  INNER JOIN "BOLETO" bol
  ON bol.id_boleto = det.id_boleto
  GROUP BY nombre_cliente, apellido, fecha, com.id_compra`;
  client2.connect()
  const {rows} = await client2.query(query,[]);
  for (let i = 0; i < rows.length; i++) {
    const detail = await getDetail(rows[i].id_compra);
    rows[i].detalle= detail;
  }
  res.send(rows);
}


async function getDetail(id){
  const client2 = new Client(conexion)
  var query = `SELECT 
    ori.nombre as origen, dest.nombre as destino,
    bol.total_precio, ori.id_aeropuerto as id_origen, 
    dest.id_aeropuerto as id_destino
  FROM "DETALLE_COMPRA" det
  INNER JOIN "BOLETO" bol
  ON bol.id_boleto = det.id_boleto
  INNER JOIN "VUELO" vue
  ON vue.id_vuelo = bol.id_vuelo
  INNER JOIN "AEROPUERTO" ori
  ON ori.id_aeropuerto = vue.origen
  INNER JOIN "AEROPUERTO" dest
  ON dest.id_aeropuerto = vue.destino
  WHERE det.id_compra = ` + id;
  client2.connect()
  var {rows} = await client2.query(query,[]);
  return rows;
}