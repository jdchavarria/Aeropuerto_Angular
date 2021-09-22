const apptest = require('../app');
const supertest = require('supertest');
const request=supertest(apptest);

const mockvuelo={
    hora_salida:"2021-03-25 16:10:09",
    hora_llegada:"2021-03-26 16:10:09",
    precio:450,
    id_estado_v:1,
    origen:1,
     destino:2,
      id_avion:1
}

const mockasiento = {
    id : 1
}
    test('insertando datos', async done => {
        const res = await request.post('/vuelo')
            .send(mockvuelo);
        respuesta = res;
        expect(res.status).toEqual(200);
    done();
    });

test('GET /vuelos', async done => {
  const response = await request.get("/vuelos");            
  respuesta = response;
  expect(response.status).toEqual(200);
done();
});

test('GET /asientos/:id', async done => {
    const response = await request.get("/asientos/1").query(mockasiento);            
    respuesta = response;
    expect(response.status).toEqual(200);
  done();
});