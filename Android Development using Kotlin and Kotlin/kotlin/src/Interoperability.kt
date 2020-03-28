@file:JvmName("CustomNameToClass") // custom name is given to this kotlin file

import com.allJavaPkgs.Test
import com.allKotlinPkgs.kotlinTest

fun main(args:Array<String>){
//    println(add(2,3))

    //Using JAVA File's method here
    var ans = InteroperabilityJavaFile.getArea(10,20);
    println("Printing from Kotlin FILE " + ans)

    // Using TEST Java file from package com.allJavaPkgs
    var output = Test.getTest()
    println(output)

    // Using kotlinTest Kotlin file from package com.allKotlinPkgs
    var output1 = kotlinTest()
    println(output1.printMe())

//    var output1 = kotlinTest.printMe() // Doesn't work
}

fun add(i: Int, j: Int): Int{
    return  i+j
}

/*
This is converted into like this:
public class InteroperablityKt {
    public static void main(String[] args){

    }

    public static int add(int i, int j){
        return i+j;
    }
}
 */