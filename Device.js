class Device {
    constructor(deviceName) {
        this.deviceName = deviceName;
        this.electrical = 'electrical';
        this.turn = false;
    }
    turnOnOff(turn) {
        if (turn === 'On') {
            console.log(this.deviceName + ' On');
            this.turn = true;
        } else {
            console.log(this.deviceName + ' Off');
            this.turn = false;
        }
    }
}

class LightingDevice {
    constructor(deviceName, power, type) {
        this.deviceName = deviceName;
        this.power = power;
        this.turn = true;
        this.type = type;
    }
}

class Gadjet {
    constructor(deviceName, processor, type) {
        this.deviceName = deviceName;
        this.processor = processor;
        this.turn = false;
        this.type = type;
    }
}

LightingDevice.prototype = new Device();

Gadjet.prototype = new Device();

const lamp = new LightingDevice('Luminaire', '100 Vt', 'LED');
const computer = new Gadjet('HomePC', 'i7', 'Desktop');

lamp.turnOnOff('Off');
computer.turnOnOff('On');
console.log(computer);
console.log(lamp);
