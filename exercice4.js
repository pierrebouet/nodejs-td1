
module.exports = {

        getNbNotes: function(tab) {
          var cpt=0;
          tab.forEach(function(currentTab){
            if (currentTab>10) {
              cpt++;

            };
          })
          return cpt;
        }
      }
