// URL de la API que deseas consumir
const apiKey = "01a559aa6308b0d2d3ff65f1699f4e9d";

function extraerCoordenadasDeCiudad()
{
    return new Promise((resolve, reject) => {
        const arregloDatos = [];
        const inputElement = document.getElementById("myCity");
        const city = inputElement.value;

        

        const apiUrlCity = "http://api.openweathermap.org/geo/1.0/direct?q=" + currentCity + "&limit=5&appid=" + apiKey;

        fetch(apiUrlCity)
            .then((response) => {
                if (!response.ok) {
                    throw new Error('La solicitud no pudo completarse con éxito');
                }
                return response.json();
            })
            .then((data) => {
                let latitud = data[0].lat;
                let longitud = data[0].lon;

                arregloDatos.push(latitud);
                arregloDatos.push(longitud);
                console.log("Latitud: " + latitud);
                console.log("Longitud: " + longitud);

                resolve(arregloDatos);
            })
            .catch((error) => {
                reject(error);
            });
    });
}

function extraerTemperatura()
{
    extraerCoordenadasDeCiudad()
        .then((datosArreglo) => {
            let latitud = datosArreglo[0];
            let longitud = datosArreglo[1];
            const apiUrl = "https://api.openweathermap.org/data/2.5/weather?lat=" + latitud + "&lon=" + longitud + "&appid=" + apiKey;

            // Extraer la temperatura de la ciudad
            const outputTemperature = document.getElementById("temperature");

            fetch(apiUrl)
                .then((response) => {
                    if (!response.ok) {
                        throw new Error('La solicitud no pudo completarse con éxito');
                    }
                    return response.json();
                })
                .then((data) => {
                    // console.log(data);
                    // console.log(data.wind.speed);
                    // console.log("Icon id: " + data.weather[0].id); // Obtiene el id que se relaciona con el ícono del clima actual
                    // console.log("Icon code: " + data.weather[0].icon); // Obtiene el código del ícono del clima actual
                    // console.log("Icon description: " + data.weather[0].description); // Descripción

                    // let DescripciónDelClima = data.weather[0].description;
                    // wheatherDescription.textContent = DescripciónDelClima;

                    let temperaturaGradosCelcius;
                    // Convertir la temperatura a grados Celsius y muestra dos dígitos decimales
                    temperaturaGradosCelcius = (data.main.temp - 273.15).toFixed(1);
                    outputTemperature.textContent = temperaturaGradosCelcius + "°C";
                    getIcon(data.weather[0].id);

                   
                })
                .catch((error) => {
                    console.error('Hubo un error al consumir la API de temperatura:', error);
                });
        })
        .catch((error) => {
            console.error('Hubo un error al obtener las coordenadas de la ciudad:', error);
        });
}

function getIcon(iconId)
{
  // Crea un elemento de imagen en JavaScript
  const iconImage = document.createElement("img");
  iconImage.alt = "Weather Icon"; // Texto alternativo para la imagen

  // Obtiene el elemento contenedor donde deseas agregar la imagen
  const weatherIconContainer = document.getElementById("weather-icon");

  // Lógica para cargar imágenes según el valor de iconId
  if (iconId >= 200 && iconId <= 232)
  {
    iconImage.src = "../scr/Icons/Group 2xx Thunderstorm/11d@2x.png";
  }
  else if (iconId >= 300 && iconId <= 321)
  {
    iconImage.src = "../scr/Icons/Group 3xx Drizzle/09d@2x.png";
  }
  else if (iconId >= 500 && iconId <= 531)
  {
    if (iconId >= 500 && iconId <= 504)
    {
      iconImage.src = "../scr/Icons/Group 5xx Rain/10d@2x.png";
    }
    else if (iconId == 511)
    {
      iconImage.src = "../scr/Icons/Group 5xx Rain/13d@2x.png";
    }
    else
    {
      iconImage.src = "../scr/Icons/Group 5xx Rain/09d@2x.png";
    }
  }
  else if (iconId >= 600 && iconId <= 622)
  {
    iconImage.src = "../scr/Icons/Group 6xx Snow/13d@2x.png";
  }
  else if (iconId >= 701 && iconId <= 781)
  {
    iconImage.src = "../scr/Icons/Group 7xx Atmosphere/50d@2x.png";
  }
  else if (iconId == 800)
  {
    iconImage.src = "../scr/Icons/Group 800 Clear/01d@2x.png";
  }
  else if (iconId >= 801 && iconId <= 804)
  {
    if (iconId == 801)
    {
      iconImage.src = "../scr/Icons/Group 80x Clouds/02d@2x.png";
    }
    else if (iconId == 802)
    {
      iconImage.src = "../scr/Icons/Group 80x Clouds/03d@2x.png";
    }
    else if (iconId == 803)
    {
      iconImage.src = "../scr/Icons/Group 80x Clouds/04d@2x.png";
    }
    else
    {
      iconImage.src = "../scr/Icons/Group 80x Clouds/04d@2x.png";
    }
  }
  else
  {
    // Si iconId no coincide con ningún caso, puedes manejarlo aquí
    // Por ejemplo, cargar una imagen predeterminada o mostrar un mensaje de error
    iconImage.src = "../scr/Images/default.jpg"; // Ruta de la imagen predeterminada
  }

  console.log("Datos :): " + iconId);
  // Reemplaza el contenido existente del contenedor con el nuevo elemento
  weatherIconContainer.innerHTML = "";
  weatherIconContainer.appendChild(iconImage);
}