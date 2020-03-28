public class DefaultArguments {
    public static void main(String[] args) {
//        _12__DefaultArgumentKt.addNum(2,3); // Doesn't work until @JvmOverloads is added

        int ans = _12__DefaultArgumentKt.addNum(2,1); // Worked
        System.out.println(ans);
    }
}
