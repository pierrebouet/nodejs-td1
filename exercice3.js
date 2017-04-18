var async = require('async');
module.exports = {

        getResultatMultiplication: function(multiplieur) {

            for (i = 0; i <= 10; i++) {
                console.log(multiplieur * i);

            }

        },
        getResultatMultiplicationAsync: function(multiplieur) {

            var count = 0;
            async.whilst(
                function() {
                    return count <= 10;
                },

                function(callback) {
                    count ++;
                    console.log(multiplieur*count);
                        callback(null, count);
                },

                function(err, n) {
                    // 5 seconds have passed, n = 5
                }
            );
    }
}
