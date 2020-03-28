fun main(args: Array<String>){

    var a = 2
    var b = 5
    var max: Int = 0

    if(a > b)
        max = a
    else if(b > a)
        max = b

    println(max) // Gives ERROR: Variable 'max' must be initialized in case max is not initialized

    println("IF AS EXPRESSION")
    println("----------------")
    var maxVal:Int = if (a>b)
                    a
                  else
                    b
    println(maxVal)

    println("In case of multiple lines, last statement is returned")
    var maxVal2:Int = if (a>b) {
        println("a is greater")
        a
    }
    else {
        println("b is greater")
        b
    }
    println(maxVal)
}