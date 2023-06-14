/*
  But :       accueilCtrl
  Auteur :    Widmer Sascha
  Date :      05.06.2023
  Version :   V1.0
*/

class AccueilCtrl {
  constructor() {
    $("#login").click(() => {
      this.changeTitre();
    });
  }

  changeTitre() {
    let clientID = document.getElementById("clientID").value;
    let clientSecret = document.getElementById("clientSecret").value;
    let token;

    $.ajax({
      url: "https://accounts.spotify.com/api/token",
      type: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      data: {
        grant_type: "client_credentials",
        client_id: clientID,
        client_secret: clientSecret,
      },
      success: function (response) {
        console.log(response);
        token = response.access_token;
        console.log(token);
      },
      error: function (error) {
        console.log(error);
      },
    });

    indexCtrl.loadinfoArtiste();

  }
}
