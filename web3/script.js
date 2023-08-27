function loadMap() {
    canvas = document.getElementById("mapCanvas");
    canvas.width = 300;
    canvas.height = 300;
    ctx = canvas.getContext("2d");

    Microsoft.Maps.loadModule('Microsoft.Maps.AutoSuggest', {
        credentials: 'AhZw73kbEYBjgC-0RMNvIsXqWLReIqATcxxeDLeIKSCks5kP7ASXGS162r5WMM38',
        callback: function () {
            const mapContainer = document.getElementById("bingMapsControl");
            const bingMapsControl = new Microsoft.Maps.Map(mapContainer, {
                credentials: 'AhZw73kbEYBjgC-0RMNvIsXqWLReIqATcxxeDLeIKSCks5kP7ASXGS162r5WMM38',
                center: new Microsoft.Maps.Location(0, 0),
                zoom: 1 
            });

            document.getElementById("getLocationButton").addEventListener("click", getMyLocation);

            function getMyLocation() {
                if ("geolocation" in navigator) {
                    navigator.geolocation.getCurrentPosition(locateSuccess, locateFail);
                } else {
                    alert("Geolocation is not available in your browser.");
                }
            }
 function locateSuccess(position) {
                const latitude = position.coords.latitude;
                const longitude = position.coords.longitude;

                bingMapsControl.setView({ center: new Microsoft.Maps.Location(latitude, longitude), zoom: 15 });

                
                bingMapsControl.entities.clear();

                const userLocation = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(latitude, longitude), { 
                    color: 'red',
                    title: 'Your current location',
                    
                    
                    
                 });
                bingMapsControl.entities.push(userLocation);

                          

               
            }

            function locateFail(error) {
                alert("Failed to get your location: " + error.message);
            }
        }
   });
}

window.onload = loadMap;

document.getElementById("mapcanvas").addEventListener("click",get)

