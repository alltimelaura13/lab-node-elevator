class Elevator {
  constructor() {
    this.floor = 0;
    this.MAXFLOOR = 10;
    this.requests = [];
    this.direction = "up";
  }

  start() {
    this.interval = setInterval(() => {
      this.update()
    }, 1000);
  }

  stop() {
    clearInterval(this.interval);
  }

  update() {
    this.log();

    this._passengersEnter();
    this._passengersLeave();
    this.floor < this.requests[0]
      ? this.floorUp()
      : this.floorDown();
    if (this.floor === this.requests[0]) {
      this.requests.shift()
    }
    if (this.requests.length === 0) {
      this.stop();
    }
  }

  _passengersEnter() {
    this.waitingList.forEach((elem, index) => {
      if (elem.originFloor === this.floor) {
        this.passengers.push(elem);
        this.waitingList.splice(index, 1);
        this.requests.push(elem.destinationFloor);
      }
    })
  }

  _passengersLeave() {
    this.passengers.forEach((elem, index) => {
      if (elem.destinationFloor === this.floor) {
        this.passengers.splice(index, 1);
        console.log(`${elem.name} has left the elevator`);
      }
    })

  }

  floorUp() {
    if (this.floor < this.MAXFLOOR) {
      this.floor += 1;
      console.log(this.floor);
    } else {
      console.log("This is the last floor");
    }

  }

  floorDown() {
    if (this.floor < 0) {
      this.floor -= 1;
      console.log(this.floor);
    } else {
      console.log("This is the first floor");
    }

  }

  call(person) {
    this.requests.push(person.originFloor);
    this.waitingList.push(person);

  }

  log() {
    console.log(`Direction: ${this.direction} | Floor: ${this.floor}`)
  }
}

module.exports = Elevator;
