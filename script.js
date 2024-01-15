//complete this code
class Animal {
	constructor(species){
		this.species2=species;
	}
	get species(){
		return this.species2;
	}
	makeSound(sound){
		console.log(`The ${this.species2} makes a sound`);
	}
}

class Dog extends Animal {
	constructor(species){
		super(species);
	}
	bark(){
		console.log('woof');
	}
}

class Cat extends Animal {
	constructor(species){
		super(species);
	}

	purr(){
		console.log('purr');
	}
}

// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;
