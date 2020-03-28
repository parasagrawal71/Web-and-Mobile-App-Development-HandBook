fun main(args: Array<String>){
    var obj = MyClass1()
    obj.printMe("Paras")

    obj printMe "MYNAME" // Use of INFIX function

    var a:Int = 1
    var b:Int = 2

    println(a.greaterVal(b))
    println(a greaterVal b)
}

//fun MyClass1.printMe(name: String){
//    println(name)
//}

infix fun MyClass1.printMe(name: String){ //Infix Function and also Extension function
    println(name)
}

//infix fun MyClass1.printMe(){ // INVALID: INFIX must have one parameter
//    println("HEY")
//}

class MyClass1{

}

infix fun Int.greaterVal(num: Int): Boolean{
    return this > num
}

/*
All Infix Functions are extension functions
But vice-versa is not true.

INFIX funtion just have ONE parameter.
 */