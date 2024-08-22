const api_key = 'd377e171848f43a8b1bb8951759d11ff'; // API from Geolocation.com

// This function returns a promise that resolves with the latitude and longitude
function getLatitudeAndLongitude() {
    return new Promise((resolve, reject) => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                position => resolve({
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude
                }),
                error => reject(error)
            );
        } else {
            reject(new Error('La geolocalización no es soportada por este navegador.'));
        }
    });
}

// This function fetches the location using the latitude and longitude
async function getLocation() {
    try {
        const { latitude, longitude } = await getLatitudeAndLongitude();
        const url = `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=${api_key}`;

        const response = await fetch(url);
        const data = await response.json();

        if (data.results.length > 0) {
            const direccion = data.results[0].formatted;
            console.log(`Ubicación detectada: ${direccion}`);
        } else {
            console.log('No se encontraron resultados.');
        }
    } catch (error) {
        console.error('Error al obtener los datos:', error);
    }
}

getLocation();
