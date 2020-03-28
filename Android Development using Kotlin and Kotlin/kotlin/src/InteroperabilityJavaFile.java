import com.allJavaPkgs.Test;
import com.allKotlinPkgs.kotlinTest;

public class InteroperabilityJavaFile {
    public static void main(String[] args) {

        // Using Kotlin file's method here
//        int ans = InteroperabilityKt.add(1,9);
        int ans = CustomNameToClass.add(1, 9); // In case of custom name given to kotlin file
        System.out.println("Printing from JAVA FILE " + ans);

        // Using TEST Java file from package com.allJavaPkgs
        String output = Test.getTest();
        System.out.println(output);

        // Using kotlinTest Kotlin file from package com.allKotlinPkgs
        Object output1 = new kotlinTest();
        System.out.println(output1); // Prints:- com.allKotlinPkgs.kotlinTest@9807454
        //Inside kotlinTest class, methods are final. Maybe this is reason for no accessibility of printMe method
    }
    public static int getArea(int a, int b){
        return a*b;
    }
}
