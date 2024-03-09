// Write your code here
// function Book(title, author, ISBN, numCopies){
//   this.title = title;
//   this.author = author;
//   this.ISBN = ISBN;
//   this.numCopies = numCopies;
// }

// Book.prototype.getAvailability = function() {
//   if (this.numCopies < 10){
//     return "Low stock"
//   }
//   else if (this.numcopies === 0) {
//     return "Out of stock"

//   }
//   return "in stock"
// }

// Book.prototype.sell = function(numCopiesSold = 1) {
//   this.numCopies -= numCopiesSold;
// }

// Book.prototype.restock = function(numCopiesStocked = 5) {
//   this.numCopies += numCopiesStocked;
// }

class Book {
  constructor(title, author, ISBN, numCopies){
    this.title = title;
    this.author = author;
    this.ISBN = ISBN;
    this.numCopies = numCopies;    
  }

  get availability(){
    return this.getAvailability();
  }

  getAvailability(){
    if (this.numCopies < 10){
      return "Low stock";
    }
    else if (this.numcopies === 0) {
      return "Out of stock";

    }
    return "In stock";
  }

  sell(numCopieSold = 1){
    this.numCopies -= numCopieSold;
  }
  restock(numCopiesStocked = 5){
    this.numCopies += numCopiesStocked;
  }
}

const HungerGames = new Book("Hunger Games", "Suzanne Collins", 123919, 5);
console.log(HungerGames.availability);

HungerGames.restock(12);
console.log(HungerGames.availability);

HungerGames.sell(17);
console.log(HungerGames.availability);