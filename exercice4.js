module.exports = {
    getNbNotes: function(tab) {
        var cpt = 0;
        tab.forEach(function(currentTab) {
            if (currentTab > 10) {
                cpt++;

            }
        });
        return cpt;
    }


    getNbNotesAsync: function(callbackResult) {
        var cpt = 0;
        var count = 0;
        async.whilst(
            function() {
                return count <= tab.length;
            },

            function(callback) {
                count++;
                if (currentTab > 10) {
                    cpt++;

                };
                callbackResult(resultat);
                callback(null, count);
            },

            function(err, n) {
                // 5 seconds have passed, n = 5
            }
        );
    }
}
