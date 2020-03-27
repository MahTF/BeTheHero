const req = require('supertest');
const app = require('../../src/app');
const cn = require('../../src/database/connection');

describe('ONG', () => {
    beforeEach(async () => {
        await cn.migrate.rollback();
        await cn.migrate.latest();
    });

    afterAll(async () =>
        await cn.destroy()
    );


    it('should be able to create a new ONG', async () => {
        const res = await req(app).post('/ongs')
            .send({
                name: "APAD2",
                email: "contato@apad.ong.br",
                whatsapp: "47912345678",
                city: "Rio do Sul",
                uf: "SC"
            })

        expect(res.body).toHaveProperty('id');
        expect(res.body.id).toHaveLength(8);
    });
});