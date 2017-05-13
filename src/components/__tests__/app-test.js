jest.autoMockOff();
jest.dontMock('../app');
var PouchDB = require('pouchdb-memory');
PouchDB.plugin(require('pouchdb-authentication'));
var chai = require('chai');
var should = chai.should();
chai.use(require('chai-as-promised'));

db = new PouchDB('http://localhost:5984/testdb');

describe('Test suite for 1', function() {
    it('Test signup', function () {
      return db.signup('batman', 'brucewayne').then(function (res) {
        res.ok.should.equal(true);
        res.id.should.equal('org.couchdb.user:batman');
      });
    });
});

describe('Test suite for 4', function() {
 it('Test change password', function () {
      return db.signup('spiderman', 'will-forget').then(function (res) {
        return db.changePassword('spiderman', 'will-remember').then(function (res) {
          res.ok.should.equal(true);
        }).then(function () {
          return db.login('spiderman', 'will-remember');
        }).then(function (res) {
          res.ok.should.equal(true);
        });
      });
    });
});

describe('Test suite for 3', function() {
    it('Test metadata', function () {
      var metadata = {alias: 'boywonder', profession: 'acrobat'};
      var opts = {metadata: metadata};
      return db.signup('robin', 'dickgrayson', opts).then(function (res) {
        res.ok.should.equal(true);
        return db.login('robin', 'dickgrayson');
      }).then(function () {
        return db.getUser('robin');
      }).then(function (user) {
        user.name.should.equal('robin');
        user.alias.should.equal('boywonder');
        user.profession.should.equal('acrobat');
      });
    });
});

describe('Test suite for 2', function() {
    it('Test login/logout', function () {
      return db.signup('aquaman', 'sleeps_with_fishes').then(function (res) {
        return db.getSession();
      }).then(function (res) {
        should.equal(res.userCtx.name, null);
        return db.login('aquaman', 'sleeps_with_fishes');
      }).then(function (res) {
        res.ok.should.equal(true);
        return db.getSession();
      }).then(function (res) {
        res.userCtx.name.should.equal('aquaman');
        return db.logout();
      }).then(function () {
        return db.getSession();
      }).then(function (res) {
        should.equal(res.userCtx.name, null);
      });
    });
});