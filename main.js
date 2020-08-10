let name = "ayush";
console.log(name);


var arr = [1, 2, 3, 4, 5];

// add Element at Start 
var addElementAtStart = (num) => {
    for (var i = arr.length - 1; i >= 0; i--) {
        arr[i + 1] = arr[i];
    }
    arr[0] = num;
};

// add Element at End 
var addElementAtEnd = (num) => {
    arr[arr.length] = num;
};

//add at Given index
var addElementAtGivenIndex = (num, index) => {
    for (var i = arr.length - 1; i >= index; i--) {
        arr[i + 1] = arr[i];
    }
    arr[index] = num;
};

var removeElementAtGivenIndex = (index) => {
    //arr[index] = null;
    for (var i = index; i < arr.length - 1; i++) {
        arr[i] = arr[i + 1];
    }
    arr[arr.length - 1] = null;
};

//linear Search
var search = (num) => {

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == num) {
            console.log(`number ${num} at ${i} postion`);
        }
    }
};


search(30);

console.log('====after Search====\narray :' + arr + '\narray length : ' + arr.length);
addElementAtEnd(25);
console.log('====after add at End====\narray :' + arr + '\narray length : ' + arr.length);
addElementAtStart(94);
console.log('====after add at start====\narray :' + arr + '\narray length : ' + arr.length);
addElementAtGivenIndex(14, 4);
console.log('====after add at given index====\narray :' + arr + '\narray length : ' + arr.length);
removeElementAtGivenIndex(4);
console.log('====after remove at given index====\narray :' + arr + '\narray length : ' + arr.length);