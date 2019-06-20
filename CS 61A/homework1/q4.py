# -*- coding: UTF-8 -*-
# 1.Pick a positive integer n as the start.
# 2.If n is even, divide it by 2.  偶数
# 3.If n is odd, multiply it by 3 and add 1. 奇数
# 4.Continue this process until n is 1.

def hailstone(n):
    if n > 0:
        if n == 1:
            print n;
            return;
        elif (n % 2 == 0):
            n = n / 2;
            if (n > 1):
                print n;
        else:
            n = n *3 + 1;
            print n;

        hailstone(n);


hailstone(5)