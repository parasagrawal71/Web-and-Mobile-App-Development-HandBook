fun main(args: Array<String>){
    // WHEN AS EXPRESSION
    // WHEN IS REPLACEMENT OF SWITCH

    var x = -2;

    when(x) {
        0, 1, 2 -> println("x is 0 or 1 or 2")
        3 -> {
            println("Multiple lines")
            println("x is 2")
        }
        in 4..10 -> println("between 4 to 10")
        !in 11..20 -> println("not in b/w 11 to 20") // Goes to next line, if next condition doesn't satisfied.
        // It will keep on checking next condition. In last, else statement will be printed
        // Give x = -2, it gives output as "not in b/w 11 to 20"
        in 12..20 -> println("in b/w 12 to 20")
        11 -> println("x is 11")
        21 -> println("x is 21")
        22 -> println("x is 22")
        else -> println("Default case as in switch")
    }

    var y = 2
    var ans:String
    when(y){
        1-> ans = "x is 1"
        2-> ans = "x is 2"
        else -> ans = "unknown"
    }
    println(ans)

    y = 10
    var output:String = when(y){
        1-> "x is 1"
        2-> "x is 2"
        else -> {
            "unused"
            "unknown" // this will be returned
        }
    }
    println(output)
}