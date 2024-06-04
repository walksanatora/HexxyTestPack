file1 = open('tmp.txt', 'r')
Lines = file1.readlines()

for line in Lines:
    print(line.split("(", 1)[0])