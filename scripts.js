//scripts.js - Loop
/*
for ( initial_value ; condition ; value_modification) {
    //code included in the loop block
}
for ( wartość_inicjująca ; warunek ; modyfikacja_wartości) {
    //kod zawarty w bloku pętli
}

for ( var k = 0 ; k < 10 ; k++) {
  console.log('The value of k is now: ' + k);
}

while (condition) {
    ...
}

var i = 0;

while (i < 10) {
    console.log(i);
    i++;
}

do {

//loop code

} while (condition)

var i = 0;

do {
    console.log(i);
    i++;
} while (i < 10);


for (loop_variable in indicated_object) {
  // code in the loop block
}
for (zmienna_pętli in wskazany_obiekt) {
  // kod w bloku pętli
}

var person = {
    name: 'Piotr',
    age: 25,
    country: 'Poland'
};
for (var attrName in person) {

    console.log(attrName);

}

object[attrName];

for ( var k = 0 ; k < 10 ; k++) {
    console.log('The value of k is now: ' + k);

    if (k == 5) {
        console.log('k is equal to 5. The end');

        break;
    }
}

for ( var k = 0 ; k < 10 ; k++) {

    console.log('The value of k is now: ' + k);

    if (k > 5) {
        continue;
    }

    console.log('Instruction at the end of the loop ');
}
*/
var heightTree = prompt('Enter tree height');

function drawTree(i) {
	for ( var i = 0 ; i < heightTree ; i ++ ) {
		var star = '';
		for ( var j = 0 ; j < i ; j ++ ) {
			var star = ( star += '*');
		}
	console.log(star);
	}
}
drawTree(heightTree);
