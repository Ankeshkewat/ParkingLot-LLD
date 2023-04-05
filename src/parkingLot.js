class Vehicle {
    constructor(type, registrationNumber, color) {
        this.type = type;
        this.registrationNumber = registrationNumber;
        this.color = color
    }
}

class Car extends Vehicle {
    constructor(registrationNumber, color) {
        super(registrationNumber, color);
        this.type = 'Car';
        this.registrationNumber = registrationNumber;
        this.color = color
    }
}

class Bike extends Vehicle {
    constructor(registrationNumber, color) {
        super(registrationNumber, color);
        this.type = "Bike"
        this.registrationNumber = registrationNumber;
        this.color = color
    }

}

class Bus extends Vehicle {
    constructor(registrationNumber, color) {
        super(registrationNumber, color);
        this.type = "Bus"
        this.registrationNumber = registrationNumber;
        this.color = color
    }
}


class Slot {
    constructor(number, type) {
        this.number = number;
        this.type = type;
        this.isBooked = false;
    }
}

class ParkingFloor {
    constructor(floorNumber, maxLimit) {
        this.floorNumber = floorNumber,
            this.maxLimit = maxLimit
        this.parkingSpots = [
            new Slot(1, "Bus"),
            new Slot(1, "Bike"),
            new Slot(1, "Bike"),
            new Slot(1, "Car")
        ];
        this.vacantParkingSpots = this.parkingSpots.filter((spots) => {
            return spots.isBooked == false
        })
    }
    displayAvailableSlots = () => {
        return this.vacantParkingSpots
    };

    parkVehicle = (type) => {
        this.availableSlots = this.vacantParkingSpots.find((spots) => {
            return spots.type == type && !spots.isBooked
        })
        if (this.availableSlots) {
            this.availableSlots.isBooked = true;
            this.vacantParkingSpots = this.parkingSpots.filter((spots) => {
                return !spots.isBooked
            })
        } else {
            return `${type} slots are full`
        }
    }
}

let p1 = new ParkingFloor(1, 6);
console.log(p1.displayAvailableSlots())

let b1=new Bike("MP3010","Black");
p1.parkVehicle(b1.type)
p1.parkVehicle(b1.type)
console.log(p1.displayAvailableSlots())

export { Vehicle, Car, Bike, Bus, Slot, ParkingFloor }


