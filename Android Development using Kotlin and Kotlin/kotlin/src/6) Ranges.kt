import kotlin.reflect.typeOf

fun main(args: Array<String>){

    var a = 10
    println(a is Int)
    println(a.javaClass.name)

    // RANGES
    var r1 = 1..2 // DOUBLE DOT OPERATOR
    // This range contains the number 1, 2, 3, 4, 5.
    println("------------")
    println(r1.javaClass.name) // OUTPUT: kotlin.ranges.IntRange
    println(r1) // Gives output as 1..2 Iterate through it to print each value
    println(1 in r1)

    var r2 = 1..2 step 2
    println("------------")
    println(r2)

    var r3 = "a".."z" // String
    println("------------")
    println(r3.javaClass.name)

    var r4 = 'a'..'z' // Char
    println("------------")
    println(r4.javaClass.name)

    var r5 = 1.rangeTo(5)
    println("------------")
    println(r5)

    var r6 = 5 downTo  1
    println("------------")
    println(r6)

    var r7 = 7 downTo  1 step 2
    println("------------")
    println(r7)

    var r8 = 10.downTo(1)
    println("------------")
    print(r8)
}