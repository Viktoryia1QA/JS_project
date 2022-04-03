class GameRoom {
    constructor() {
        this.toys = [];
    }

    addToy(toy) {
        this.toys.push(toy);
    }

    getCommonPrice(name) {
        return this.toys.map(obj => obj[name])
            .reduce((a, b) => a + b);
    }

    getTotalAmount() {
        return this.toys.length;
    }

    sortByPrice(name) {
        return this.toys.sort((a, b) => b[name] - a[name]);
    }

    filterByFixPrice(fixPrice) {
        return this.toys.filter(num=> num.price <= fixPrice);
    }

    filterByMaterial(material) {
        return this.toys.filter(word=> word.material.startsWith(material));
    }


    filterCars() {
        return this.toys.filter(name => {
            if (name.model) {
                return name;
            }
        })
    }
}

class Toys {
    constructor(price, material, size, recommendedAge) {
        this.price = price;
        this.material = material;
        this.size = size;
        this.recommendedAge = recommendedAge;
    }

}

class Cars extends Toys {
    constructor(price, material, size, recommendedAge, model, color) {
        super(price, material, size, recommendedAge);
        this.model = model;
        this.color = color;
    }
}

class Dolls extends Toys {
    constructor(price, material, size, recommendedAge, gender, colorOfSkin) {
        super(price, material, size, recommendedAge);
        this.gender = gender;
        this.colorOfSkin = colorOfSkin;
    }
}

class DevelopingToys extends Toys {
    constructor(price, material, size, recommendedAge, difficulty, name) {
        super(price, material, size, recommendedAge);
        this.difficulty = difficulty;
        this.name = name;
    }
    getRecommendation() {
        return `This game "${this.name}" has ${this.difficulty} level of difficulty for children ${this.recommendedAge} ages`
    }
    addAsTeamGame() {
        this.teamGame = true;
    }

    isItTeamGame() {
        if (this.teamGame) {
            return true
        }
        return false;
    }
}

const gameRoom = new GameRoom();

gameRoom.addToy(new Cars(60, 'plastic', 'middle', '+3', 'audi', 'red'));
gameRoom.addToy(new Cars(40, 'metal', 'small', '+5', 'bmw', 'white'));

gameRoom.addToy(new Dolls(50, 'stuffed', 'small', '+5', 'male', 'white'));
gameRoom.addToy(new Dolls(20, 'plastic', 'small', '+5', 'female', 'black'));

gameRoom.addToy(new DevelopingToys(80, 'plastic', 'big', '0-3', 'easy', 'Smart toy'));
gameRoom.addToy(new DevelopingToys(30, 'metal', 'big', '0-3', 'middle', 'Have fun'));
gameRoom.addToy(new DevelopingToys(120, 'wooden', 'small', '+5', 'hard', 'Storm brain'));

let newTeamGame = new DevelopingToys(45, 'wooden', 'small', '+5', 'hard', 'Storm brain');
gameRoom.addToy(newTeamGame);

newTeamGame.addAsTeamGame();
console.log(newTeamGame.isItTeamGame());
console.log(newTeamGame.getRecommendation());

// // console.log(gameRoom);

// // // - sorting by price:
gameRoom.sortByPrice('price');
console.log(gameRoom);

// // // - Total number of Toys:
console.log(`Total number of Toys = ${gameRoom.getTotalAmount()}`);

// // // - Total price of Toys:
console.log(`Total price of Toys = ${gameRoom.getCommonPrice('price')}`);

// // // - show only Cars:
console.log(gameRoom.filterCars());

// // - filter by Fix price: show < =  Fix price:
console.log(gameRoom.filterByFixPrice(20));
// console.log(gameRoom);

// // - filter by Material: show only wooden toys:
console.log(gameRoom.filterByMaterial('wooden'));


// // - filter by Metal Cars (show only Toys = Cars and Material = metal):
// console.log(gameRoom.filterCars().filterByMaterial('metal'));
console.log(gameRoom.filterCars().filter(word=> word.material.startsWith('metal')));