fun main(args: Array<String>) {
    var ans: Int = addNum(2, 3) //add is inbuilt function ???
    println(ans)

    // JAVA doesn't support Default Functions or Default Arguments But we can use it in Java using @JvmOverloads

    // Named Parameters
    // Named Parameters is pure kotlin feature so cant use in Java
    var output = addNum(j=1, i=1, k=2); //Here order doesn't matter
    println(output)

}

@JvmOverloads
fun addNum(i: Int, j: Int, k: Int = 10): Int{
    return i+j+k
}