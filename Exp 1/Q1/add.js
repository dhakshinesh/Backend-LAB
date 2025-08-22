
///Approach 2
// create another function and export it separately

function sum(a, b) {
    function inner(){
        console.log("Hello from inner function");
    }
    inner();
    return a + b;
}

module.exports = { sum };