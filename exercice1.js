module.exports = {

    getVolume: function(longueur, largeur, hauteur) {
        return (longueur * largeur * hauteur);
    },

    nombreRadiateurs: function(longueur, largeur, hauteur) {
        return Math.ceil(this.getVolume(longueur, largeur, hauteur) / 8)
    },

    getVolumeAsync: function(longueur, largeur, hauteur, callback) {
        return callback(longueur * largeur * hauteur)
    },

    nombreRadiateursAsync: function(longueur, largeur, hauteur, callback) {
        this.getVolumeAsync(longueur, largeur, hauteur, function(resultat) {
            return callback(Math.ceil(resultat / 8));
        });
    }
}
