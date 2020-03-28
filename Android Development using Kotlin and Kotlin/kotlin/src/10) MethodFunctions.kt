fun main(args: Array<String>){
    var ans = area(2,10)
    println(ans)

    // UNIT
   display()

    // Function as Expression
    var output = maxVal(2,8)
    println(output)

    // In Kotlin every functions are public
    // That is why fun definition is changed into public ___[static] returnType funcName when
    // it is converted into bytecode or .class file by compiler
    // In Kotlin, Every function is converted into static function on compilation.
}


fun area(len: Int, width: Int): Int { // Functions return type is Int
    return len * width
}


// UNIT
//fun display(): Unit { // Unit means return type is Void
//    println("displayed")
//}

//fun display(): { // Doesn't work
//    println("displayed")
//}

fun display() { //  Nothing means return type is Unit
    println("displayed")
}


//// Function as Expression
//fun maxVal(i: Int, j: Int): Int {
//    if(i>j){
//        return i
//    }
//    else{
//        return  j
//    }
//}

//fun maxVal(i: Int, j: Int): Int = if(i>j) i else j

fun maxVal(i: Int, j: Int): Int = if(i>j) {
        println("i is greater")
        i
    } else {
    println("j is greater")
    j
}