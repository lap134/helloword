import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;


public class Test {
public static void main(String[] args) {
            String dateInString = "2015-1-1";
            String date;
            String result[] = dateInString.split("[-]");
           date = result[2]+"-"+result[1]+"-"+result[0];
           System.out.println(date);
            }

}
