const Park = function (name, ticket_price) {
  this.name = name;
  this.ticket_price = ticket_price;
  this.dinosaurs = [];
}

Park.prototype.addDinosaur = function(dinosaur) {
  this.dinosaurs.push(dinosaur);
}

Park.prototype.removeDinosaur = function(dinosaur) {
  dino = this.dinosaurs.indexOf(dinosaur)
  this.dinosaurs.splice(dino, 1);
}
// Park.prototype.mostVisitors = function() {
//   array = for (let dino of this.dinosaurs){};
//   dino = (Math.max(array.guest));
//   return dino.name;
// }

Park.prototype.dailyVisitors = function() {
  let total_visitors = 0;
  for (let dino of this.dinosaurs){
    total_visitors += dino.guestsAttractedPerDay;
  }
  return total_visitors
}

// Park.prototype.removeSpecies = function(species) {
//   for (let dino of this.dinosaurs){
//     if species === dino.species;
//     species.pop;
//   }
// }

module.exports = Park;
