/*
  But :       Couche de services HTTP (worker).
  Auteur :    Widmer Sascha
  Date :      05.06.2023
  Version :   V1.0
*/

class VueService {
  constructor() {}

    chargerVue(vue, callback) {

    // charger la vue demandee
    $("#view").load("views/" + vue + ".html", function () {

      // si une fonction de callback est spécifiée, on l'appelle ici
      if (typeof callback !== "undefined") {
        callback();
      }

    });
  }

}
