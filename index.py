# // 1. **Ancestral Stories:** In many African cultures, the art of storytelling is passed
# // down from generation to generation. Imagine you're creating an application that
# // records these oral stories and translates them into different languages. The
# // stories vary by length, moral lessons, and the age group they are intended for.
# // Think about how you would model `Story`, `StoryTeller`, and `Translator`
# // objects, and how inheritance might come into play if there are different types of
# // stories or storytellers.

# // input: Story 

# // 2. **African Cuisine:** You're creating a recipe app specifically for African cuisine.
# // The app needs to handle recipes from different African countries, each with its
# // unique ingredients, preparation time, cooking method, and nutritional
# // information. Consider creating a `Recipe` class, and think about how you might
# // create subclasses for different types of recipes (e.g., `MoroccanRecipe`,
# // `EthiopianRecipe`, `NigerianRecipe`), each with their own unique properties and
# // methods.


# // 3. **Wildlife Preservation:** You're a wildlife conservationist working on a
# // program to track different species in a national park. Each species has its own
# // characteristics and behaviors, such as its diet, typical lifespan, migration
# // patterns, etc. Some species might be predators, others prey. You'll need to

# // create classes to model `Species`, `Predator`, `Prey`, etc., and think about how
# // these classes might relate to each other through inheritance.


# // 4. **African Music Festival:** You're in charge of organizing a Pan-African music
# // festival. Many artists from different countries, each with their own musical style
# // and instruments, are scheduled to perform. You need to write a program to
# // manage the festival lineup, schedule, and stage arrangements. Think about how
# // you might model the `Artist`, `Performance`, and `Stage` classes, and consider
# // how you might use inheritance if there are different types of performances or
# // stages.

# // 5. Create a class called Product with attributes for name, price, and quantity.
# // Implement a method to calculate the total value of the product (price * quantity).
# // Create multiple objects of the Product class and calculate their total values.

class Product:
  def __init__(self,name,price,quantity):
    self.name=name
    self.quantity=quantity
    self.price=price

  def total_product(self):
    total = self.price * self.quantity
    return total
   


# // 6. Implement a class called Student with attributes for name, age, and grades (a
# // list of integers). Include methods to calculate the average grade, display the
# // student information, and determine if the student has passed (average grade >=
# // 60). Create objects for the Student class and demonstrate the usage of these
# // methods
class Student:
  def __init__(self,name,age,grade):
    self.name=name
    self.age=age
    self.grade= grade

  def  student_information(self):
    return f"{self.name}, {self.age},{self.grades}"
  
  def average_grade(*grades):
    average = sum /len.grade




  def student_passed(average_grade) :

    if average_grade >= 60:
      return f"you have passed"
    else: 
      return f"You have failed " 

    

  


# // 7. Create a FlightBooking class that represents a flight booking system. Implement
# // methods to search for available flights based on destination and date, reserve
# // seats for customers, manage passenger information, and generate booking
# // confirmations.
class FlightBooking:
  def __init__(self,customer_name,destination,date,seat) :
    self.customer_name=customer_name
    self.destination= destination
    self.date = date
    self.seat = seat

  def available_flights(self,place,time):
    if self.destination == place and self.date== time:
      return f'{self.destination} and {self.date}'
    else:
      return f'No flights today going to {self.destination}'
    
  def generate_booking(self):
    return f'{self.customer_name}, your  seat is {self.seat} on the flight to {self.destination} on date {self.date}.'
  
  def passenger_information(self):
    return f'{self.customer_name}, seat no:{self. seat} , destination:{self.destination}'

# // 8. Create a LibraryCatalog class that handles the cataloging and management of
# // books in a library. Implement methods to add new books, search for books by
# // title or author, keep track of available copies, and display book details.


# // input:Management of library books
# // output :search for the bok,add new book,track available copies,display book details

# // process:creatinga class LibraryCatalog constructors:to add new books, search for books by
# // title or author, keep track of available copies, and display book details.

class LibraryCatalog:
   
    def __init__(self,author,title):
      self.title= title
      self.available= True
      self.author=author

    def  add_new_books(self):
     
     self.title=input("Enter book title:")
     self.author=input("Enter book author:") 
     self.available=input("Enter book availbility:")
     return f'{self.title}, {self.author},{self.available}'

    def search_for_books(self,book):
      
      if self.title==book:
        return f'{book}'
      elif self.author == book:
        return f"{book}"
       

    def book_availability(self,available) :
      if self.available == available:
        return f'{self.title}'
      
      else:
        return f"Not available"
     
      
    
      