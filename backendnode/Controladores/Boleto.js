
const { Client } = require('pg')
const { conexion } = require('../conexion')
const client = new Client(conexion)
/*
Métodos internos
 */

exports.calcularTotalBoleto =calcularTotalBoleto= async function (id_asiento, id_boleto){
  const client2 = new Client(conexion)
  var query = `  SELECT round(precio + precio*(porcentaje_agregado_precio/100),2) 
  FROM "ASIENTO" asi
  INNER JOIN "CLASE" cls 
  ON cls.id_clase = asi.id_clase 
  INNER JOIN "VUELO" vl
  ON vl.id_avion = asi.id_avion
  WHERE asi.id_asiento =` +id_asiento+ `
  AND vl.id_vuelo =`+id_boleto;
  client2.connect()
  const {rows} = await client2.query(query,[]);
  console.log(rows)
  return rows[0]['round']
}

/*
Metodos externos
 */

exports.addBOLETO = async function addBOLETO(req, res) {
    let body = req.body;
    let id_vuelo=body.id_vuelo;
    let id_asiento=body.id_asiento;
    const total_precio=await this.calcularTotalBoleto(id_asiento,id_vuelo);
    client.connect()
    const text = 'INSERT INTO "BOLETO" (total_precio,id_vuelo,id_asiento) VALUES($1,$2,$3) RETURNING *'
    const values = [total_precio,id_vuelo,id_asiento]
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

  




