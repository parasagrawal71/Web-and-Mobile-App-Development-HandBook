fun main(args: Array<String>){
    // FOR
    for(i in 1..4){ // SYNTAX: for(initializer in ranges)
        println(i)
    }

    // while and do while syntax same as in JAVA


    // CONTROL SATEMENTS
    // BREAK
    println("------------------BREAK-------------------")
    for(i in 1..3)
        for(j in 1..3){
            if(i==2 && j == 2)
                break // it breaks innermost loop
            println("$i and $j")
        }

    println("--------------------------------------------")
    MyLoop@ for(i in 1..3)
        for(j in 1..3){
            if(i==2 && j == 2)
                break@MyLoop
            println("$i and $j")
        }

    // CONTINUE
    println("------------------CONTINUE-------------------")
    for(i in 1..3)
        for(j in 1..3){
            if(i==2 && j == 2)
                continue // it skips innermost loop
            println("$i and $j")
        }

    println("--------------------------------------------")
    outerLoop@ for(i in 1..3)
        for(j in 1..3){
            if(i==2 && j == 2)
                continue@outerLoop
            println("$i and $j")
        }
}