class Car {
  #brand;
  #model;
  speed = 0;
  trunk = false;

  constructor(carDetails) {
    this.#brand = carDetails.brand;
    this.#model = carDetails.model;
  }

  displayInfo() {
    const trunkStatus = this.trunk ? 'open':'closed'
    return `${this.#brand},${this.#model},${this.speed}km/h 'trunk':${trunkStatus}`
  }

  go() {
    if (this.speed <= 195) {
      if (!this.trunk) {
        return this.speed += 5
      }
    }
  }
  break() {
    if (this.speed >= 5) {
      if (!this.trunk) {
        return this.speed -= 5
      }
    }
  }
  openTrunk() {
    if (this.speed === 0) {
      this.trunk = true;
    }
  }

  closeTrunk() {
    if (this.speed === 0) {
      this.trunk = false;
    }
  }
}
const car1 = new Car({brand: 'alto',model:43})
const car2 = new Car({ brand: 'atlas', model: 403 })
car1.go();
car1.go();
car1.break();
car1.break();
car1.break();
car1.break();
car1.openTrunk();
car1.closeTrunk();
console.log(car1.displayInfo());



class RaceCar extends Car {
  acceleration;

  constructor(carDetails) {
    super(carDetails);
    this.acceleration = carDetails.acceleration;
  }

  go() {
    this.speed += this.acceleration;

    if (this.speed > 300) {
      this.speed = 300;
    }
  }

  openTrunk() {
    console.log('Race cars do not have a trunk.');
  }

  closeTrunk() {
    console.log('Race cars do not have a trunk.');
  }
}

const raceCar = new RaceCar({
  brand: 'McLaren',
  model: 'F1',
  acceleration: 20
});


car2.displayInfo();

raceCar.go();
raceCar.go();
raceCar.go();
raceCar.openTrunk();
console.log(raceCar.displayInfo());
raceCar.break();
console.log(raceCar.displayInfo());
