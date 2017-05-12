
var Task = function(t_id, task, deadline, hourly, weekly, u_id, f_key) {

	this.t_id = t_id;
	this.task = task;
	this.deadline = deadline;
	this.hourly = hourly;
	this.weekly = weekly;
	this.u_id = u_id;
	this.f_key = f_key
};

module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {


module.exports = Task;
