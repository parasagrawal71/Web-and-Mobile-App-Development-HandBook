fun main(args: Array<String>){

    // In kotlin by default, classes are:- public and final
    // so we can't inherit any class directly

    // For using inheritance, make use of "open".

    var cat = Cat()
    cat.eat()

}

//public final class Animal{
//    // On writing "public final" which is faded in colour shows that it is redundant. By default
//    // all classes and properties are public and final
//    public final var color: String = ""
//    public final fun eat(){
//        println("EAT")
//    }
//}

open class Animal{
    var color: String = ""
    fun eat(){
        println("EAT")
    }
}

//class Cat: Animal{ // Doesn't work until "open" is added to parent class
//    var age: Int = 0
//    fun meow(){
//        println("MEOW")
//    }
//}

class Cat: Animal(){ // Without parenthesis not working
    var age: Int = 0
    fun meow(){
        println("MEOW")
    }
}