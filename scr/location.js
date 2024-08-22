const api_key = 'd377e171848f43a8b1bb8951759d11ff';//API from Geolocation.com


//This function allows to get yout current position and
//it returns Latitude and Longitude
function getLatitudeAndLongitude()
{
    if (navigator.geolocation)
        {
            navigator.geolocation.getCurrentPosition(
                function(position)
                {
                    const latitude = position.coords.latitude;
                    const longitude = position.coords.longitude;
                    console.log(`Latitud: ${latitude}, Longitud: ${longitude}`);
                },
                function(error)
                {
                    console.error('Error when getting location:', error);
                }
            );
        }
        else
        {
            console.error('La geolocalización no es soportada por este navegador.');
        }
        
}

getLatitudeAndLongitude();


