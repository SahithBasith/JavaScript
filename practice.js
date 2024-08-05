// print three tables in for loop;
// print basith twenty times in function
var startValue = 30;
var endValue = 60;
for (var i = startValue; i <= endValue; i++) {
    if (i % 3 == 0) {
        console.log(i)
    }
}


function tables(a, b) {
    for (i = a; i <= b; i++) {
        if (i % 3 == 0) {
            console.log(i)
        }
    }

}
tables(startValue, endValue)

for (i = 1; i <= 20; i++) {
    console.log("basith");
}
let name ="basith";
function printName(name){
    for(i=1;i<=20;i++){
        console.log(name)
    }
}
printName(name)

var startValue =20;
var endValue =1;
function printTable(a,b){
    for(i=a;i>=b;i--){
        if(i%2==0){
            console.log(i)
        }
    }
}
printTable(startValue,endValue)

// output: Basith
// Basith
// Basith
// Burhan
// Burhan
// Burhan
// Buhari
// Buhari
// Buhari

function printString(string){
    for(i=1;i<=20;i++){
        console.log(string)
    }

}
printString("Basith")
printString("Burhan")
printString("Buhari")