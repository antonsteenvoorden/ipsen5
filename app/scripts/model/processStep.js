/**
 * Created by Roy on 31-5-2016.
 */
var ProcessStep = function(id, number, type, name, time, distance, cost, energy, headCount) {
  this.id = id;
  this.number = number;
  this.type = type;
  this.name = name;
  // this.bottleneck = bottleneck;
  this.time = time;
  this.distance = distance;
  this.cost = cost;
  this.energy = energy;
  this.headCount = headCount;
  //TODO: check what attributes should be in ProcessStep. headCount
};

/**
 * To clone the ProcessStep object without the prototype hassle.
 * @returns {ProcessStep}
 */
ProcessStep.prototype.clone = function() {
  return new ProcessStep(this.id, this.number, this.type, this.name,
   this.time, this.distance, this.cost, this.energy, this.headCount);
};

ProcessStep.prototype.setPosition = function(position) {
  this.number = position;
};
