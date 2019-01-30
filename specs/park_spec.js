const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  let park;
  let dinosaur;
  let dinosaur2;
  let dinosaur3;
  let dinosaur4;

  beforeEach(function () {
    park = new Park('Jurassic Park', 10);
    dinosaur = new Dinosaur('t-rex', 'carnivore', 80);
    dinosaur2 = new Dinosaur('Raptor', 'carnivore', 55);
    dinosaur3 = new Dinosaur('Pterodactyl', 'omnivore', 50);
    dinosaur4 = new Dinosaur('Stegosaurus', 'herbivore', 60)
  })

  it('should have a name', function() {
    const actual = park.name;
    assert.strictEqual(actual, 'Jurassic Park');
  });

  it('should have a ticket price', function() {
    const actual = park.ticket_price;
    assert.strictEqual(actual, 10);
  });

  it('should have a collection of dinosaurs', function() {
    park.addDinosaur('T-rex');
    park.addDinosaur('Pterodactyl')
    const actual = park.dinosaurs;
    assert.deepStrictEqual(actual, ['T-rex', 'Pterodactyl']);
  });

  it('should be able to add a dinosaur to its collection', function() {
    park.addDinosaur('Raptor');
    const actual = park.dinosaurs;
    assert.deepStrictEqual(actual, ['Raptor']);
  });

  it('should be able to remove a dinosaur from its collection', function() {
    park.addDinosaur(dinosaur.species);
    park.addDinosaur(dinosaur2.species);
    park.addDinosaur(dinosaur3.species);
    park.removeDinosaur(dinosaur.species);
    const actual = park.dinosaurs;
    assert.deepStrictEqual(actual, ['Raptor', 'Pterodactyl']);
  });

  it('should be able to find the dinosaur that attracts the most visitors', function() {
    park.addDinosaur(dinosaur);
    park.addDinosaur(dinosaur2);
    park.addDinosaur(dinosaur3);
    park.addDinosaur(dinosaur4);
    const actual = park.mostVisitors();
    assert.strictEqual(actual, 't-rex');
  });

  it('should be able to find all dinosaurs of a particular species', function(){

  });

  it('should calculate the number of visitors per day', function(){
    park.addDinosaur(dinosaur);
    park.addDinosaur(dinosaur2);
    park.addDinosaur(dinosaur3);
    park.addDinosaur(dinosaur4);
    const actual = park.dailyVisitors();
    assert.strictEqual(actual, 245)
  })

  it('should calculate the number of visitors per year', function() {
    park.addDinosaur(dinosaur);
    park.addDinosaur(dinosaur2);
    park.addDinosaur(dinosaur3);
    park.addDinosaur(dinosaur4);
    totalYearlyVisitors = park.dailyVisitors() * 365;
    const actual = totalYearlyVisitors;
    assert.strictEqual(actual, 89425)
  });

  it('should calculate total revenue from ticket sales', function() {
    park.addDinosaur(dinosaur);
    park.addDinosaur(dinosaur2);
    park.addDinosaur(dinosaur3);
    park.addDinosaur(dinosaur4);
    totalOf = (park.dailyVisitors() * 365) * park.ticket_price;
    const actual = totalOf;
    assert.strictEqual(actual, 894250)
  });

  it('should be able to remove all dinosaurs of a particular species', function() {
    park.addDinosaur(dinosaur);
    park.addDinosaur(dinosaur2);
    park.addDinosaur(dinosaur3);
    park.addDinosaur(dinosaur4);
    const actual = park.removeSpecies('carnivore')
    assert.strictEqual(actual, ['omnivore', 'herbivore'])
  });

});
