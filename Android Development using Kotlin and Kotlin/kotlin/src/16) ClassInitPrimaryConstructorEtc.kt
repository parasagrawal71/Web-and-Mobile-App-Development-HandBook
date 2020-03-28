fun main(args: Array<String>){
    var student = Student("Paras")
}

// Property is also known as Field Variables

//class Student constructor(name: String){ // This is primary constructor
//    init{ // init will be called when obj of this class will be created
//        println("Student name is $name")
//    }
//}

//class Student (name: String){ // SAME AS ABOVE with constructor keyword
//    init{
//        println("Student name is $name")
//    }
//}


//// Primary Constructor with property
//class Student (_name: String){
//    var name: String = "default" // this "name" is property and _name is just an argument
//    init{
//        this.name = _name
//        println("Student name is $name")
//    }
//}


// Primary Constructor with just parameters
class Student ( var name: String){ // "name" property can be defined inside of primary constructor like this
    init{
        println("Student name is $name")
    }
}