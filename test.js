const async = require('async')

async.parallel([
    function(callback) {
        setTimeout(function() {
            callback;
        }, 200);
    },
    function(callback) {
        setTimeout(function() {
            callback;
        }, 100);
    }
],
// optional callback
function(err, results) {
    // the results array will equal ['one','two'] even though
    // the second function had a shorter timeout.
    if(err) console.log(err)
    console.log(results)
});

// an example using an object instead of an array
async.parallel({
    one: function(callback) {
        setTimeout(function() {
            callback(null, 1);
        }, 200);
    },
    two: function(callback) {
        setTimeout(function() {
            callback(null, 2);
        }, 100);
    }
}, function(err, results) {
    // results is now equals to: {one: 1, two: 2}
    if(err) console.log(err)
    console.log(results)
});