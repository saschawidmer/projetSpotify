/*
  But :       accueilCtrl
  Auteur :    Widmer Sascha
  Date :      05.06.2023
  Version :   V1.0
*/
let token;
class AccueilCtrl {
  constructor() {
    $("#login").click(() => {
      this.changeTitre();

    });
  }

  changeTitre() {
    http.login((data) => {
      token = data.access_token;
      console.log(token);
      indexCtrl.loadinfoArtiste();
    });
  }
}
