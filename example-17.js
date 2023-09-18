// Giant Robot class
var Robot = /** @class */ (function () {
    function Robot(name, power, type) {
        this.name = name;
        this.power = power;
        this.type = type;
    }
    Robot.prototype.describe = function () {
        console.log("name: ".concat(this.name, " type: ").concat(this.type, " power: ").concat(this.power));
    };
    return Robot;
}());
var robot = new Robot('Robo', 100, 'robot');
robot.describe();
exports.Robot = Robot;
