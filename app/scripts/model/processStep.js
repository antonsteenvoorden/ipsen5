/**
 * Created by Roy on 31-5-2016.
 */
var ProcessStep = function(id, number, type, name, bottleneck, duration, distance, cost) {
  this.id = id;
  this.number = number;
  this.type = type;
  this.name = name;
  this.bottleneck = bottleneck;
  this.duration = duration;
  this.distance = distance;
  this.cost = cost;
  //TODO: check what attributes should be in ProcessStep. headCount
};
