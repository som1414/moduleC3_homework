class Device {
    constructor(deviceName) {
        this.deviceName = deviceName;
        this.electrical = 'electrical';
        this.turn = false;
    }
    turnOnOff(action) {
        if (action) {
            console.log(this.deviceName + ' On');
            this.turn = true;
        } else {
            console.log(this.deviceName + ' Off');
            this.turn = false;
        }
    }
}

class LightingDevice extends Device {
    constructor(deviceName, power, type) {
        super(deviceName, power);
        this.turn = true;
        this.type = type;
    }
}

class Gadjet extends Device {
    constructor(deviceName, processor, type) {
        super(deviceName);
        this.processor = processor;
        this.turn = false;
        this.type = type;
    }
}

const lamp = new LightingDevice('Luminaire', '100 Vt', 'LED');
const computer = new Gadjet('HomePC', 'i7', 'Desktop');

lamp.turnOnOff('Off');
computer.turnOnOff('On');
console.log(computer);
console.log(lamp);
