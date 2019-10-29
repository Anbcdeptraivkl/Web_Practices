var myObj = new Object();

myObj.name = "An";
myObj.index = 1;

myObj['name'] = "Random Name";
myObj['index'] = 2;

console.log(myObj);