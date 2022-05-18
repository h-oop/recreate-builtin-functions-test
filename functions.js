// DEFINE YOUR FUNCTIONS HERE BASED ON THE PROVIDED CRITERIA

function includes(item, array){
    for (let i = 0; i < array.length; i++) {
        if (array[i] == item) {
            return true;
        } else {
            return false;
        }
    }
}

function indexOf(item, array) {

}

function reverse(array) {
    var placeholder = new Array;
    for(let e = array.length-1; e >= 0; e--) {
        placeholder.push(array[e]);
    }
    return placeholder;
}