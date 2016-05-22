/**
 * Created by Roy on 18-5-2016.
 */
var Process = function(id, name, date, batchSize, hoursDay, piecesDay) {
  this.id = id;
  this.name = name;
  this.date = date;
  this.batchSize = batchSize;
  this.hoursDay = hoursDay;
  this.piecesDay = piecesDay;
  this.stepAmount = this.getStepAmount();
  this.position = NaN; //@TODO: position should get fetched from database.
}

Process.prototype.test = function() {
  console.log("Test from Process class.");
}

/**
 * @TODO: this should return the actual number of processSteps.
 * @returns {number}
 */
Process.prototype.getStepAmount = function() {
  return 100;
}
