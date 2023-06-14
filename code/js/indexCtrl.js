/*
  But :       indexCtrl
  Auteur :    Widmer Sascha
  Date :      05.06.2023
  Version :   V1.0
*/


$().ready(function () {
  // service et indexCtrl sont des variables globales qui doivent être accessible depuis partout => pas de mot clé devant ou window.xxx
  http = new HttpService();
  indexCtrl = new IndexCtrl();  // ctrl principal
  http.centraliserErreurHttp(indexCtrl.afficherErreurHttp);
});

class IndexCtrl {
  constructor() {
    this.vue = new VueService();
    this.loadLogin();
  }

  afficherErreurHttp(msg) {
    alert(msg);
  }

  // avec arrow function
  loadLogin() {
    this.vue.chargerVue("accueil", () =>  new AccueilCtrl());
  }

  loadinfoArtiste() {
    this.vue.chargerVue("infoArtiste", () =>  new InfoArtisteCtrl());
  }

  loadCompte() {
    this.vue.chargerVue("infoPerso", () =>  new InfoPersoCtrl());
  }

  loadCompte() {
    this.vue.chargerVue("logout", () =>  new LogoutCtrl());
  }

}
