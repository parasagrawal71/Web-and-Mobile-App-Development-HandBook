fun main(args: Array<String>){
    var name = "Hi there!!!"
    display(name) // Press ALT+ENTER to create the function

    // Using CLASS
    var personObj = Person()
    personObj.printName("Steve")

    var person1Obj = Person1()
    person1Obj.name = "Paras"
    person1Obj.printName()

    var newObj = Person1()
    newObj.name = "My NAME"
    println("Person name is " + newObj.name)
    println("Person name is ${newObj.name}") // This is called String interpolation
    var str = "Paras"
    println("This is $str") // For this curly braces NOT required
}

fun display(name: String) {
    println(name)
}

class Person{
    fun printName(name: String){
        println(name)
    }
}

class Person1{
    var name:String = ""
    fun printName(){
        println(name)
    }
}
