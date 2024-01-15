//complete this code
class Animal {
	constructor(species){
		this.species2=species;
	}
	get species(){
		return this.species2;
	}
	makeSound(sound){
		console.log(sound);
	}
}

class Dog extends Animal {
	constructor(){
		super('dog');
	}
	bark(){
		this.makeSound('woof');
	}
}

class Cat extends Animal {
	constructor(){
		super('cat');
	}

	purr(){
		this.makeSound('purr');
	}
}
let cat =new Cat();
cat.purr();

// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;
