// DEFINE YOUR FUNCTIONS HERE BASED ON THE PROVIDED CRITERIA

function includes(item, array){
    for (let i = 0; i < array.length; i++) {
        if (array[i] == item) {
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
    return -1;
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
    var placeholder = array1;
    for(let p = 0; p < array2.length; p++) {
        placeholder.push(array2[p]);
    }
    return placeholder;
}

function join(sep, array) {
    var placeholder = new String;
    placeholder = array[0];
    for(let v = 1; v < array.length; v++) {
        placeholder += sep + array[v];
    }
    return placeholder;
}

function max(array) { 
    var max = array[0];
    for(let y = 0; y < array.length; y++) {
        if (array[y] > max) {
            var max = array[y];
        }
    }
    return max;
}