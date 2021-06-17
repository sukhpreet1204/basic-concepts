
/*
Given six digits, find the earliest valid time that can be displayed on a digital clock 
(in 24-hour format) using those digits.
*/
import java.util.*;

class Clock {
    public String solution(int A, int B, int C, int D, int E, int F) {
        int[] d = { A, B, C, D, E, F };
        Arrays.sort(d);
        if (d[4] < 6) { // 2nd largest digit is smaller 6, we can just fill up
            if (10 * d[0] + d[1] < 24)
                return "" + d[0] + d[1] + ":" + d[2] + d[3] + ":" + d[4] + d[5];
            else
                return "impossible";
        } else if (d[3] < 6) { // 3rd largest digit is smaller 6, put 2nd largest in 4th position
            if (10 * d[0] + d[1] < 24)
                return "" + d[0] + d[1] + ":" + d[2] + d[4] + ":" + d[3] + d[5];
            else
                return "impossible";
        } else if (d[2] < 6) { // 4th largest digit is smaller 6, put 3rd largest in 2nd position
            if (10 * d[0] + d[3] < 24)
                return "" + d[0] + d[3] + ":" + d[1] + d[4] + ":" + d[2] + d[5];
            else
                return "impossible";
        } else {
            return "impossible";
        }
    }

    public static void main(String[] args) {
        Clock ck = new Clock();
        System.out.println(ck.solution(2, 4, 5, 9, 5, 9));
    }
}