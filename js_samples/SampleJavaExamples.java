import java.io.Console;
import java.util.ArrayList;

class SampleJavaExamples {

    public static void main(String[] args) {
        String str1 = "Hello World!";
        int num1 = 10;
        ArrayList<String> studentList = new ArrayList<>();

        System.out.println(str1.toUpperCase());
        System.out.println(Integer.toString(num1));
        //Integer.parseInt("100ps");
        studentList.add("Test 1");
        studentList.add("Test 2");
        studentList.add("Test 3");

        for (String student : studentList) {
            System.out.println(student);
        }
    }

}