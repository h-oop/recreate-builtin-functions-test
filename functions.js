// DEFINE YOUR FUNCTIONS HERE BASED ON THE PROVIDED CRITERIA

function includes(item, array){
    for (let i = 0; i < array.length; i++) {
        if (array[i] = item) {
            return true;
        }

    }
    return false;
}


function indexOf(item, array) {
    for(let o = 0; o < array.length; o++) {
        if(array[o] === item){
            return o;
        } 
    }
}


function reverse(array) {
    var placeholder = new Array;
    for(let e = array.length-1; e >= 0; e--) {
        placeholder.push(array[e]);
    }
    return placeholder;
}


function slice(start, stop, array) {
    var placeholder = new Array;
    for(let x = start; x < stop; x++) {
        placeholder.push(array[x]);
    }
    return placeholder;
}

function concat(array1, array2) {
    for(let p = 0; p < array2.length; p++) {
        array1.push(array2[p]);
    }
    return;
}

function join(sep, array) {

}

function max(array) { 

}