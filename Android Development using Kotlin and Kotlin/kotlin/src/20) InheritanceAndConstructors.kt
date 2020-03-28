//fun main(args: Array<String>){
//
//    var obj = MyChild()
//    println(obj.childColor)
//}

//open class MyParent{
//    var color: String = "White"
//}

//class MyChild: MyParent(){
//    var childColor = "Black"
//}

//// Using constructor
//class MyChild(var childColor: String): MyParent(){
//}

//// Using constructor and default value
//class MyChild(var childColor: String = "Default"): MyParent(){
//}

////////////////////////////////////////////////////////////////////////////////////////////////////////

//fun main(args: Array<String>){
//
//    var obj = MyChild("parentGrey", "childBlack")
//    println(obj.parentColor)
//    println(obj.childColor)
//}
//
////open class MyParent{
////    var color: String = "White"
////}
//
//open class MyParent(var color: String){
//}
//
//class MyChild(var parentColor:String, var childColor: String): MyParent(parentColor){
//}
//
////class MyChild(parentColor:String, var childColor: String): MyParent(parentColor){ // NOT WORKING without var
////}



///////////////////////////////////SECONDARY CONSTRUCTOR DOWNWARDS//////////////////////////////////////////

fun main(args: Array<String>){

    var obj = MyChild("childBlack", "parentGrey")
}

open class MyParent{
    var parentColor: String = ""
    constructor(_color: String){ // No primary construtor call required
        this.parentColor = _color
        println(parentColor)
    }
}

class MyChild: MyParent{
    var childColor: String = ""
    constructor(_color: String, __color: String): super(__color) {
        this.childColor = _color
        println(childColor)
    }
}