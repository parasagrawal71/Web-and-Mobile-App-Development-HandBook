fun main(args: Array<String>){

    var obj = Child()
    obj.parentMeth()
    println(obj.color);

//    var parObj = Parent()
//    parObj.parentMeth()

}

open class Parent{
    open var color = "White"
    open fun parentMeth(){
        println("parentMeth")
    }
}

class Child: Parent(){ // Without parenthesis not working

    override  var color = "Black"

    fun childMeth(){
        println("childMeth")
    }

//    fun parentMeth(){ // Doesn't work
//        println("parentMeth")
//    }

    override  fun parentMeth(){
        // After adding "override" and "open" keywords, we can override
//        super.parentMeth()
        super<Parent>.parentMeth()
        // In case of, this child is inheriting one more interface. Then there will be confusion for compiler that
        // eat is present in that interface also. So to be safe side use <ClassName>
        println("parentMeth from child")
    }
}