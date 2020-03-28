import com.packages.ConstructorClass
import com.packages.Person

fun main(args: Array<String>){
    var obj = Person()
    obj.name = "Paras"
    println(obj.name)

    // Constructor
    var obj1 = ConstructorClass("Steve")
    obj1.display()

}