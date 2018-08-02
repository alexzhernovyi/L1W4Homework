

window.onload = function (){
    var result;
    var map;
    var marker;

    result = document.getElementById('result');

    var ourOptions = {
        zoom:15,
        mapTypeId:google.maps.MapTypeId.ROADMAP


    };


    map = new google.maps.Map(document.getElementById ('mapSurface'), ourOptions);
    function newMarker(position) {
        var myPos = {
            lat: position.coords.latitude,
            lng: position.coods.longitude
        };

        marker = new google.maps.Marker({
            position: myPos,
            map: map,
            icon: "https://www.pngall.com/wp-content/uploads/2017/05/Map-Marker-PNG-Pic.png"
            
        });
        marker.setMap(map);
    }

    if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(geolocationSuccess, geolocationFailure);

        result.innerHTML = "Successful";
    } else {
        result.innerHTML = "Браузер не підтримує геолокацію";

        goToDefaultLocation();
    }

    function geolocationSuccess(position){
        var location =  new google.maps.LatLng(position.coords.latitude,position.coords.longitude);

        map.setCenter(location);
    }

    function geolocationFailure() {
        goToDefultLocation();
    }
    function goToDefultLocation() {
        var newYork = new google.maps.LatLng(40.730610, -73.935242);

        map.setCenter(newYork);
       
    }
    


}
