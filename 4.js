//Определим родительскую функцию ElectricDevice,
//которая будет иметь методы для включения и выключения устройства из розетки

function ElectricDevice(name, power) {
  this.name = name;
  this.power = power;
  this.pluggedIn = false;
}

ElectricDevice.prototype.plugIn = function() {
  if (!this.pluggedIn) {
    console.log(this.name + " has been plugged in.");
    this.pluggedIn = true;
  }
}

ElectricDevice.prototype.unplug = function() {
  if (this.pluggedIn) {
    console.log(this.name + " has been unplugged.");
    this.pluggedIn = false;
  }
}
//Теперь создадим два конкретных прибора,
//которые будут иметь свои уникальные свойства и методы,
//а также делегирующую связь с прототипом ElectricDevice."

function DeskLamp(name, power, bulbType) {
  ElectricDevice.call(this, name, power);
  this.bulbType = bulbType;
}

DeskLamp.prototype = Object.create(ElectricDevice.prototype);
DeskLamp.prototype.constructor = DeskLamp;

DeskLamp.prototype.changeBulb = function(newBulbType) {
  console.log(this.name + " bulb has been changed to " + newBulbType);
  this.bulbType = newBulbType;
}

function Computer(name, power, os) {
  ElectricDevice.call(this, name, power);
  this.os = os;
}

Computer.prototype = Object.create(ElectricDevice.prototype);
Computer.prototype.constructor = Computer;

Computer.prototype.start = function() {
  console.log(this.name + " is starting " + this.os);
}

Computer.prototype.shutdown = function() {
  console.log(this.name + " is shutting down.");
}

//Теперь можно создать экземпляры каждого прибора и использовать их методы
const deskLamp = new DeskLamp("Desk Lamp", 60, "LED");
const computer = new Computer("Computer", 400, "Windows");

deskLamp.plugIn();
deskLamp
