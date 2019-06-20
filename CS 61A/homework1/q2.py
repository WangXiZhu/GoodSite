def two_of_three(a, b, c):
    varx = max(a,b)
    varb = max(c,b)
    print varx*varx + varb*varb;
    return;

# case

two_of_three(1, 2, 3)
two_of_three(5, 3, 1)
two_of_three(10, 2, 8)
two_of_three(5, 5, 5)