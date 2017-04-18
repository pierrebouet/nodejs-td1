var async = require('async');
module.exports = {

    calculConversion: function(franc) {
        return franc / 6.55957;

    },

    listingConversion: function() {
        for (i = 10; i < 1000; i += 50) {
            console.log(this.calculConversion(i));
        }

    },

    calculConversionAsync: function(franc, callback) {
        return callback(franc / 6.55957);

    },


    listingConversionAsync: function(callbackResult) {
        var _that = this;
        var count = -40;
        async.whilst(
            function() {
                return count < 1000;
            },

            function(callback) {
                count += 50;
                _that.calculConversionAsync(count, function (resultat) {
                    callbackResult(resultat);
                    callback(null, count);
                });
            },

            function(err, n) {
                // 5 seconds have passed, n = 5
                if (err) {
                  console.log(err);
                }
            }
        );
}
}
