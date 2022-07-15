export interface Client {
    name: string;
    registrationNumber: number;
    consumedEnergy: number;
    calculateBill(): number;
    

    constructor (name: string, registrationNumber: number, consumedEnergy: number) {
        this.name = name;
        this.registrationNumber = registrationNumber;
        this.consumedEnergy = consumedEnergy;
    }
  }