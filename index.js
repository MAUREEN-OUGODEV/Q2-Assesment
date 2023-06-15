// 1. **Ancestral Stories:** In many African cultures, the art of storytelling is passed
// down from generation to generation. Imagine you're creating an application that
// records these oral stories and translates them into different languages. The
// stories vary by length, moral lessons, and the age group they are intended for.
// Think about how you would model `Story`, `StoryTeller`, and `Translator`
// objects, and how inheritance might come into play if there are different types of
// stories or storytellers.

// input: Story 

// 2. **African Cuisine:** You're creating a recipe app specifically for African cuisine.
// The app needs to handle recipes from different African countries, each with its
// unique ingredients, preparation time, cooking method, and nutritional
// information. Consider creating a `Recipe` class, and think about how you might
// create subclasses for different types of recipes (e.g., `MoroccanRecipe`,
// `EthiopianRecipe`, `NigerianRecipe`), each with their own unique properties and
// methods.


// 3. **Wildlife Preservation:** You're a wildlife conservationist working on a
// program to track different species in a national park. Each species has its own
// characteristics and behaviors, such as its diet, typical lifespan, migration
// patterns, etc. Some species might be predators, others prey. You'll need to

// create classes to model `Species`, `Predator`, `Prey`, etc., and think about how
// these classes might relate to each other through inheritance.


// 4. **African Music Festival:** You're in charge of organizing a Pan-African music
// festival. Many artists from different countries, each with their own musical style
// and instruments, are scheduled to perform. You need to write a program to
// manage the festival lineup, schedule, and stage arrangements. Think about how
// you might model the `Artist`, `Performance`, and `Stage` classes, and consider
// how you might use inheritance if there are different types of performances or
// stages.

// 5. Create a class called Product with attributes for name, price, and quantity.
// Implement a method to calculate the total value of the product (price * quantity).
// Create multiple objects of the Product class and calculate their total values.

class Product{
    constructor(name,price,quantity){
        this.name= name
        this.price = price
        this.quantity = quantity
    }
    totalValue(){
       let totals = this.price * this.quantity
       return totals
    }
}

// 6. Implement a class called Student with attributes for name, age, and grades (a
// list of integers). Include methods to calculate the average grade, display the
// student information, and determine if the student has passed (average grade >=
// 60). Create objects for the Student class and demonstrate the usage of these
// methods.
class Student{
    constructor(name,age,grade){
        this.name=name
        this.age=age
        this.grade= grade
    }
    studentInformation(){
        console.log `${this.name}, ${self.age},${self.grades}`
    }
    studentpassed(averagegrade) {
        if (averagegrade >= 60)
        return "you have passed"
      else{
        return "You have failed " 
      }
        
      
    }

   
}
 

// 7. Create a FlightBooking class that represents a flight booking system. Implement
// methods to search for available flights based on destination and date, reserve
// seats for customers, manage passenger information, and generate booking
// confirmations.

class FlightBooking{
    constructor(customer_name,destination,date,seat) {
        this.customer_name=customer_name
        this.destination= destination
        this.date = date
        this.seat = seat
    }
    available_flights(place,time){
        if (this.destination == place && this.date== time)
        return '{self.destination} and {self.date}'
      else{
        return 'No flights today going to {self.destination}'
      }
        
      }
      generateBooking(){
        console.log( `${this.customer_name}, your  seat is ${this.seat} on the flight to ${this.destination} on date ${this.date}.`)
        }

    passengerInformation(){
            console.log (`${this.customer_name}, seat no:${self. seat} , destination:${self.destination}`)
    }
          
    
}
 

 
    
    

  
  
    

// 8. Create a LibraryCatalog class that handles the cataloging and management of
// books in a library. Implement methods to add new books, search for books by
// title or author, keep track of available copies, and display book details.


// input:Management of library books
// output :search for the bok,add new book,track available copies,display book details

// process:creatinga class LibraryCatalog constructors:to add new books, search for books by
// title or author, keep track of available copies, and display book details.

class LibraryCatalog{
    constructor(book,title,author){
        this.book=book
        this.title = title
        this.author= author
        this.availability = true

    }

    addNewBook(title,author) {

        
    }
    serach_book(title,author){
        if (this.author == author){
            console.log(`the book name is:${this.book}`)
        }
        else if(this.title == title){
            console.log(`the book name is:${this.book}`)
        }
        else{
            console.log(`the book is not found`)

        }
    }
    bookDetail(){
        return `The ${this.book} is written by ${this.author }`
    }
    bookAvailability(available){
        if (this.availability===available){
            return `${this.book}`
        }
        else{
            return `is not available`
        }

    }
}
