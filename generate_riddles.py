import sys

f = open('wordlist.txt')
lines = f.readlines()

fours = set()
threes = set()
twos = set()

for line in lines:
    line = line.rstrip()
    line_len = len(line)
    if line_len == 2:
        twos.add(line)
    if line_len == 3:
        threes.add(line)
    if line_len == 4:
        fours.add(line)

i = 0

for three1 in threes:
    for three2 in threes:
        two1 = three1[0] + three2[0]
        two2 = three1[1] + three2[1]
        two3 = three1[2] + three2[2]
        if two1 in twos and two2 in twos and two3 in twos:
            print( '{"first":"%s", "second":"%s"},' % (three1, three2))
            # "'" + three1 + "," + three2 + "'")
            i = i + 1
                        
"""
for four1 in fours:
    for four2 in fours:
        for four3 in fours:
            three1 = four1[0] + four2[0] + four3[0]
            three2 = four1[1] + four2[1] + four3[1]
            three3 = four1[2] + four2[2] + four3[2]
            three4 = four1[3] + four2[3] + four3[3]
            if three1 in threes and three2 in threes and three3 in threes and three4 in threes:
                print four1 + "," + four2 + "," + four3
            i = i + 1
"""