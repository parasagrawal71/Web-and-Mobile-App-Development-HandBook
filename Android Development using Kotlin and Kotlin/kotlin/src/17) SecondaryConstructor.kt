fun main(args: Array<String>){
    var student = Student1("Steve", 10)
    println(student.id)
}

// Primary Constructor
class Student1 ( var name: String){
    var id: Int = -1
    init{
        println("Student name is $name and $id")
    }

    // Primary Constructor doesn't have body. It calls init method instead.
    // Unlike Primary, Secondary Constructor has its body

    // Secondary Constructor
//    constructor(nameStr: String, var id: Int): this(nameStr){ // INVALID:
//        // We can't use var inside it. That means property cannot be defined inside of secondary constructor
//    }

    constructor(nameStr: String, id: Int): this(nameStr){
        // this(nameStr) calls the primary constructor first which is must
        // The body of secondary constructor is called after init block
        this.id = id
    }
}