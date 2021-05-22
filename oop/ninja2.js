class Ninja {
	constructor(name, health, speed = 3, strength = 3) {
		this.name = name;
		this.health = health;
		this.speed = speed;
		this.strength = strength;
	}
	sayName() {
		// console.log(this.name);
		return this.name;
	}
	showStats() {
		return `${this.name} ${this.strength} ${this.speed} ${this.health}`;
	}
	drinkSake() {
		return (this.health += 10);
	}
}
const ninja1 = new Ninja("Dawon");
console.log(ninja1.sayName());
console.log(ninja1.showStats());
console.log(ninja1.drinkSake());
