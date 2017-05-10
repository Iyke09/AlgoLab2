exports.Car = function Car( type, model,name) {
       if (type === undefined && model === undefined && name ===undefined){
         this.name = "General";
         this.model= "GM";
       }else{
         this.name = name;
         this.model= model;
       }
       this.type = type;
       this.speed = 0;
       if (this.model === "Truck"){
       this.isSaloon= false;
       }else{
         this.isSaloon =true;
       }
  return this.isSaloon;
}
Car.prototype.numberOfDoors = function(){
  if (this.type === "porshe" || this.type === "Koenigsegg"){
    var numOfDoors = 2;
    return numberOfDoors ;
  }
  else{
     numOfDoors = 4;
    return numOfDoors ;
  }
};


Car.prototype.numberOfWheels = function(){
  if (this.type === "porshe" || this.type === "Koenigsegg"){
    var numberOfWheels = 4;
    return numberOfWheels ;
  }else if(this.model === "TRUCK"){
    numberOfWheels = 8;
    this.isSaloon = false;
    return numberOfWheels ;
  }
  else{
     numberOfWheels = 4;
    return numberOfWheels ;
  }
};

Car.prototype.drive = function(pedal){
  if (pedal == 7){
    this.speed = 77;
  }else if(pedal == 5){
    this.speed = 250;
  }
  return this.speed;
}

var motor = new Car();

motor.model
