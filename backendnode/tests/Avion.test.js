const Avion = require('../Controladores/Avion');
const apptest = require('../app');
const supertest = require('supertest');
const request=supertest(apptest);

test('devuelve la letra B porque es el indice 1', () => {
  expect(Avion.getletra(1)).toBe('B');
});

test('Devuelve el nombre del asiento A0 porque los indices son 0,0', () => {
  expect(Avion.getnombre(0,0)).toBe('A0');
});

test('GET /aviones', async done => {
  const response = await request.get("/aviones");            
  respuesta = response;
  expect(response.status).toEqual(200);
done();
});