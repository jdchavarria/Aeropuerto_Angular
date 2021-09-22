const apptest = require('../app');
const supertest = require('supertest');
const request=supertest(apptest);

const mockcompra={
    nombre_cliente:"Juan",
    apellido:"perez",
    fecha:"2021-03-25 16:10:09",
    numero_tarjeta:124345335,
    cvv_tarjeta:562,
    expiracion_tarjeta:"09/21",
    correo:"Juan@gmail.com",
    detalle:[{"id_boleto":1},{"id_boleto":2}]


}
test('insertando datos en boleto', async done => {
    const res = await request.post('/compra')
        .send(mockcompra);
    respuesta = res;
    expect(res.status).toEqual(200);
done();
});

test('GET /compras', async done => {
    const response = await request.get("/compras");
    respuesta = response;
    expect(response.status).toEqual(200);
  done();
});