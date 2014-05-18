<?php

///// PHP

for ($x = 1; $x <= 100; $x++) {
    if ($x % 3 == 0) {
        echo "ping \n";
    }
    if ($x % 5 == 0) {
        echo "pong \n";
    }
    if (( $x % 3 != 0 ) && ( $x % 5 != 0 )) {
        echo $x;
    }
}


///Javascript


for(var x = 1;x < 101;x++)document . write((((x % 3 ? '' : 'ping') + (x % 5 ? '' : 'pong')) || x) + '<br>');


//Coffescript
x = 1
while x < 101
document.write ((((if x % 3 then "" else "ping")) + ((if x % 5 then "" else "pong"))) or x) + "<br>"
x++
//Java

for( int number = 1;
number < 100;
number++) {
    boolean shouldPrintNumber = true;

    System . out . println("\n");
    if ((number % 3) == 0) {
        System . out . print("ping");
        shouldPrintNumber = false;
    }
    if ((number % 5) == 0) {
        System . out . print("pong");
        shouldPrintNumber = false;
    }

    if (shouldPrintNumber) {
        System . out . print( number);
    }
}