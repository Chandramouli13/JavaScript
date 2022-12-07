
// Math.random() - generate random number

Math.random()
0.3047398176533185
Math.random()
0.7724045328944447
Math.random()
0.8056055631083112
Math.random()
0.34948257495092894
Math.random()
0.4812029509263045

// it give random number btw 0.1 to 10000
Math.random()*10
8.549171620341355
Math.random()*100
65.23748774578225
Math.random()*1000
120.36745391659909
Math.random()*10000
1295.4492540287622
Math.random()*100000
61825.52137113024

// it give random number btw 0.1 to 30
Math.random()*30
16.848124945457137
Math.random()*30
0.7768503082685441
Math.random()*30
21.108563802210192
Math.random()*30
13.796953361902954

////////////////////////////////////////////////

// Math.floor() - always tend towards lower side
Math.floor(10)
10
Math.floor(10.1)
10
Math.floor(10.5)
10
Math.floor(10.9)
10

// Math.ceil() - always tend towards higher side
Math.ceil(10.1)
11
Math.ceil(10.5)
11
Math.ceil(10.9)
11


// Math.round() - round figure to the value 
// anything below 5 - upto 4.9 is lower
// anything above 5 - upto 9.9 is higher 
Math.round(10.1)
10
Math.round(10.4)
10
Math.round(10.5)
11
Math.round(10.8)
11
Math.round(10.9)
11

///////////////////////////////////////////////////////

// Number without decimal
Math.floor(Math.random()*30)
22
Math.floor(Math.random()*30)
18
Math.floor(Math.random()*30)
17
Math.ceil(Math.random()*30)
18
Math.ceil(Math.random()*30)
18
Math.ceil(Math.random()*30)
13
Math.ceil(Math.random()*30

//////////////////////////////////////////////////////
// want random number from max to min
Math.floor(Math.random()*(max-min))+min
// want random number from 23 to 52
Math.floor(Math.random()*(52-23))+23

// gives a random number btw 23 to 52
Math.floor(Math.random()*(52-23))+23
35
Math.floor(Math.random()*(52-23))+23
27
Math.floor(Math.random()*(52-23))+23
34
Math.floor(Math.random()*(52-23))+23
40
Math.floor(Math.random()*(52-23))+23
44

//////////////////////////////////////////////////////
Math.tan(2)
-2.185039863261519
Math.log(2)
0.6931471805599453
Math.log(1)
0
Math.log(0)
-Infinity
Math.pow(2,2)
4
Math.pow(2,3)
8
Math.sqrt(4)
2
Math.sqrt(144)
12
Math.sqrt(36)
6
Math.E
2.718281828459045
Math.PI
3.141592653589793

////////////////////////////////////////////////////////
// toFixed() - fixed to some given value.
Math.PI.toFixed(3)
'3.142'
Math.PI.toFixed(2)
'3.14'
Math.PI.toFixed(1)
'3.1'
Math.PI.toFixed(7)
'3.1415927'
Math.PI.toFixed(9)
'3.141592654'