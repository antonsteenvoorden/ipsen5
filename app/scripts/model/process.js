/**
 * Created by Roy on 18-5-2016.
 */
var Process = function(id, name, date, batchSize, hoursDay, piecesDay, stepAmount, position) {
  this.id = id;
  this.name = name;
  this.date = date;
  this.batchSize = batchSize;
  this.hoursDay = hoursDay;
  this.piecesDay = piecesDay;
  this.stepAmount = stepAmount | this.getStepAmount();
  this.position = position | NaN; //@TODO: position should get fetched from database.
};

Process.prototype.test = function() {
  console.log("Test from Process class.");
};

/**
 * @TODO: this should return the actual number of processSteps.
 * @returns {number}
 */
Process.prototype.getStepAmount = function() {
  return 100;
};

/**
 * To clone the Process object without the prototype hassle.
 * @returns {Process}
 */
Process.prototype.clone = function() {
  return new Process(this.id, this.name, this.date, this.batchSize,
    this.hoursDay, this.piecesDay, this.stepAmount, this.position);
};
