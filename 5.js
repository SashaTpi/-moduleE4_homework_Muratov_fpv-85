class ElectricalAppliance {
  constructor(name, power) {
    this.name = name;
    this.power = power;
    this.pluggedIn = false;
  }

  plugIn() {
    this.pluggedIn = true;
    console.log(`${this.name} is now plugged in.`);
  }

  unplug() {
    this.pluggedIn = false;
    console.log(`${this.name} is now unplugged.`);
  }

  getPower() {
    if (this.pluggedIn) {
      console.log(`${this.name} is using ${this.power} watts of power.`);
      return this.power;
    } else {
      console.log(`${this.name} is not plugged in.`);
      return 0;
    }
  }
}

class Lamp extends ElectricalAppliance {
  constructor(name, power, brightness) {
    super(name, power);
    this.brightness = brightness;
  }

  setBrightness(newBrightness) {
    this.brightness = newBrightness;
    console.log(`${this.name} brightness is now ${this.brightness}%.`);
  }
}

class Computer extends ElectricalAppliance {
  constructor(name, power, os) {
    super(name, power);
    this.os = os;
  }

  installProgram(programName) {
    console.log(`Installing ${programName} on ${this.name} running ${this.os}...`);
  }
}

// Создаем экземпляры классов
const tableLamp = new Lamp('Table Lamp', 25, 50);
const desktop = new Computer('Desktop', 300, 'Windows 10');

// Включаем приборы в розетку
tableLamp.plugIn();
desktop.plugIn();

// Получаем потребляемую мощность
let totalPower = tableLamp.getPower() + desktop.getPower();
console.log(`Total power consumption: ${totalPower} watts.`);

// Изменяем яркость лампы
tableLamp.setBrightness(75);


// Выключаем приборы
tableLamp.unplug();
desktop.unplug();
