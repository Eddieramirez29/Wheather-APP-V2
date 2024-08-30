const api_key = 'd377e171848f43a8b1bb8951759d11ff'; // API from https://opencagedata.com/
let currentCity = "";

// This function returns a promise that resolves with the latitude and longitude
function getLatitudeAndLongitude()
{
    return new Promise((resolve, reject) => {
        if (navigator.geolocation)
        {
            navigator.geolocation.getCurrentPosition(
                position => resolve({
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude
        }),
                error => reject(error)
            );
        }
        else
        {
            reject(new Error('La geolocalización no es soportada por este navegador.'));
        }
    });
}

// This function fetches the location using the latitude and longitude
async function getLocation()
{
    try {
        const { latitude, longitude } = await getLatitudeAndLongitude();
        const url = `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=${api_key}`;

        const response = await fetch(url);
        const data = await response.json();

        if (data.results.length > 0)
        {
            //Gets your exact location
            // const direccion = data.results[0].formatted;
            // console.log(`Ubicación detectada: ${direccion}`);
            // Obtiene la ciudad desde el objeto components
            const components = data.results[0].components;
            const cityAPI = components.city || components.town || components.village || 'City not available';
            currentCity = cityAPI;
            console.log(`City: ${cityAPI}`);
        }
        else
        {
            console.log('Not found');
        }
    }
    catch (error)
    {
        console.error('Error when getting data:', error);
    }
}
getLocation();


