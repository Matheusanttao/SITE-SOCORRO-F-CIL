function createMarker(place, map) {
    var marker = new google.maps.Marker({
      map: map,
      position: place.geometry.location,
      title: place.name
    });
  }
  
  function callback(results, status) {
    if (status === google.maps.places.PlacesServiceStatus.OK) {
      for (var i = 0; i < results.length; i++) {
        createMarker(results[i], map);
      }
    }
  }
  
  function initMap() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showMap, showError);
    } else {
      alert("Seu navegador não suporta geolocalização.");
    }
  }
  
  function showMap(position) {
    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;
  
    var userLatLng = new google.maps.LatLng(latitude, longitude);
  
    var map = new google.maps.Map(document.getElementById('map'), {
      center: userLatLng,
      zoom: 13
    });
  
    var service = new google.maps.places.PlacesService(map);
  
    service.nearbySearch({
      location: userLatLng,
      radius: 5000,
      type: ['hospital']
    }, callback);
  }
  
  function showError(error) {
    switch (error.code) {
      case error.PERMISSION_DENIED:
        alert("Usuário negou a solicitação de geolocalização.");
        break;
      case error.POSITION_UNAVAILABLE:
        alert("As informações de localização não estão disponíveis.");
        break;
      case error.TIMEOUT:
        alert("A solicitação de geolocalização expirou.");
        break;
      case error.UNKNOWN_ERROR:
        alert("Ocorreu um erro desconhecido na geolocalização.");
        break;
    }
  }
  