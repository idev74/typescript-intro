// Giant Robot class

// Goal creat an interface with a methods 

// All Robots have name, power and type. 
// Kaiju should have a describe method that 
// prints: name:<name> type:<type> power:<power>

interface RobotInterface {
    name: string;
    power: number;
    type: string;
}

class Robot implements RobotInterface {
    name: string;
    power: number;
    type: string;

    constructor(name: string, power: number, type: string) {
        this.name = name;
        this.power = power;
        this.type = type;
    }

    describe(): void {
        console.log(`name: ${this.name} type: ${this.type} power: ${this.power}`)
    }
}

const robot = new Robot('Robo', 100, 'robot');
robot.describe();

exports.Robot = Robot;
