const apptest = require('../app');
const supertest = require('supertest');
const request=supertest(apptest);

    test('insertando datos', async done => {
        const res = await request.post('/avion')
            .send({
                cant_asientos:55
            });
        respuesta = res;
        expect(res.status).toEqual(200);
    done();
    });


    test('GET /aeropuertos', async done => {
        const response = await request.get("/aeropuertos");            
        respuesta = response;
        expect(response.status).toEqual(200);
    done();
    });


