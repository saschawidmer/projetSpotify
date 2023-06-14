/*
  But :       Couche de services HTTP (worker). 
  Auteur :    Widmer Sascha
  Date :      05.06.2023
  Version :   V1.0
*/

class HttpService {
  constructor() {}

  /*
   **  $.ajaxSetup permet de définir une fois un élément sans le refaire par la suite. Ici cela se fait l'error
   */
  centraliserErreurHttp(httpErrorCallbackFn) {
    $.ajaxSetup({
      error: function (xhr, exception) {
        let msg;
        if (xhr.status === 0) {
          msg = "Pas d'accès à la ressource serveur demandée !";
        } else if (xhr.status === 404) {
          msg = "Page demandée non trouvée [404] !";
        } else if (xhr.status === 500) {
          msg = "Erreur interne sur le serveur [500] !";
        } else if (exception === "parsererror") {
          msg = "Erreur de parcours dans le JSON !";
        } else if (exception === "timeout") {
          msg = "Erreur de délai dépassé [Time out] !";
        } else if (exception === "abort") {
          msg = "Requête Ajax stoppée !";
        } else {
          msg = "Erreur inconnue : \n" + xhr.responseText;
        }
        httpErrorCallbackFn(msg);
      },
    });
  }

  login(successCallBack) {
    let clientID = document.getElementById("clientID").value;
    let clientSecret = document.getElementById("clientSecret").value;

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

      success: successCallBack,

      error: function (error) {
        // Handle the error response here
        console.log(error);
      },
    });
  }

  getURI(successCallBack) {
    $.ajax({
      url: `https://api.spotify.com/v1/search?type=artist`,
      type: "GET",
      data: {
        q: document.getElementById("artisteRecherche").value,
        type: "artist",
      },
      headers: {
        Authorization: "Bearer " + token,
      },

      // Gérer ici la réponse en cas de succès
      success: successCallBack,

      // Gérer ici la réponse en cas d'erreur
      error: function (error) {
        console.log(error);
      },
    });
  }

  getImgArtiste(artist, successCallBack) {
    $.ajax({
      url: "https://api.spotify.com/v1/artists/" + artist,
      type: "GET",
      headers: {
        Authorization: "Bearer " + token,
      },

      // Gérer ici la réponse en cas de succès
      success: successCallBack,

      // Gérer ici la réponse en cas d'erreur
      error: function (error) {
        console.log(error);
      },
    });
  }

  getNomArtiste(artist, successCallBack) {
    $.ajax({
      url: "https://api.spotify.com/v1/artists/" + artist,
      type: "GET",
      headers: {
        Authorization: "Bearer " + token,
      },

      // Gérer ici la réponse en cas de succès
      success: successCallBack,

      // Gérer ici la réponse en cas d'erreur
      error: function (error) {
        console.log(error);
      },
    });
  }

  getFollowerArtiste(artist, successCallBack) {
    $.ajax({
      url: "https://api.spotify.com/v1/artists/" + artist,
      type: "GET",
      headers: {
        Authorization: "Bearer " + token,
      },

      // Gérer ici la réponse en cas de succès
      success: successCallBack,

      // Gérer ici la réponse en cas d'erreur
      error: function (error) {
        console.log(error);
      },
    });
  }

  getTracksArtiste(artist, successCallBack) {
    $.ajax({
      url: "https://api.spotify.com/v1/artists/" + artist + "/albums",
      type: "GET",
      headers: {
        Authorization: "Bearer " + token,
      },
      data: {
        include_groups: "album,single",
      },

      // Gérer ici la réponse en cas de succès
      success: successCallBack,

      // Gérer ici la réponse en cas d'erreur
      error: function (error) {
        console.log(error);
      },
    });
  }

  getGenresArtiste(artist, successCallBack) {
    $.ajax({
      url: "https://api.spotify.com/v1/artists/" + artist,
      type: "GET",
      headers: {
        Authorization: "Bearer " + token,
      },

      // Gérer ici la réponse en cas de succès
      success: successCallBack,

      // Gérer ici la réponse en cas d'erreur
      error: function (error) {
        console.log(error);
      },
    });
  }

  getRecommendation(seed_artists, seed_genres, seed_tracks, successCallBack) {
    $.ajax({
      url: "https://api.spotify.com/v1/recommendations",
      type: "GET",
      headers: {
        Authorization: "Bearer " + token,
      },
      data: {
        limit: 5,
        market: "CH",
        seed_artists: seed_artists,
        seed_genres: seed_genres,
        seed_tracks: seed_tracks,
      },

      // Gérer ici la réponse en cas de succès
      success: successCallBack,

      // Gérer ici la réponse en cas d'erreur
      error: function (error) {
        console.log(error);
      },
    });
  }
}
