fun main(args: Array<String>){
    var obj = MyClass()
    obj.alreadyPresent()
    obj.addedMethod()

    // More Real Use of this feature
    var a:Int = 1
    var b:Int = 2
    var c:Int = 3

    var result = c.addFunc(a,b)
    println(result)
    // Read Advantages of Extension Functions
}

fun MyClass.addedMethod(){
    println("This method is added using 'extension function' feature")
}

class MyClass{
    fun alreadyPresent(){
        println("Method was already here")
    }
}


fun Int.addFunc(i: Int, j: Int): Int{
    return this + i + j
}