var request = require('supertest');
var assert = require('chai').assert;
var should = require("should");

describe('budget rest api', function () {
    var baseUrl = 'http://localhost:3030';

    before(require('./setup.js').setup);
    after(require('./setup.js').teardown);

    describe('list periods', function () {
        it('should return full list', function (done) {
            request(baseUrl)
                .get('/periods')
                .expect('Content-Type', /json/)
                .expect(function (res) {
                    assert.isArray(res.body);
                    assert.equal(res.body.length, 2);
                    res.body.forEach(function (period) {
                        period.should.have.property('period');
                    });
                })
                .expect(200, done);
        });
    });
    
    describe('paid expense', function () {
        it('should return OK', function (done) {
            request(baseUrl)
                .put('/expenses/2/paid')
                .expect(200, done);
        });
    });
});