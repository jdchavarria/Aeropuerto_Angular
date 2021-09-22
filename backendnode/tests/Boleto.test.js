const apptest = require('../app');
const supertest = require('supertest');
const request=supertest(apptest);

const mockboleto={
    id_asiento:84,
    id_vuelo:1,

}
test('insertando datos en boleto', async done => {
    const res = await request.post('/boleto')
        .send(mockboleto);
    respuesta = res;
    expect(res.status).toEqual(200);
done();
});
