<template>
  <div class="map-card">
    <div class="search-container">
      <input class="search-bar" type="search" v-model="destination" placeholder="Ingresa tu destino" @keyup.enter="calculateDistance" />
      <button class="send-button" @click="calculateDistance">Enviar</button>
    </div>
    <div id="map"></div>
    <div class="map" v-if="distance">
      <p>Distancia: {{ distance }} km</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "MapComponent",
  data() {
    return {
      destination: '',
      map: null,
      userLocation: null,
      marker: null,
      distance: null,
    };
  },
  mounted() {
    this.loadGoogleMapsScript().then(() => {
      this.initMap();
    }).catch(error => {
      console.error('Google Maps script failed to load', error);
    });
  },
  methods: {
    loadGoogleMapsScript() {
      return new Promise((resolve, reject) => {
        if (typeof google !== 'undefined') {
          resolve();
          return;
        }
        const script = document.createElement('script');
        script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyBDaeWicvigtP9xPv919E-RNoxfvC-Hqik&libraries=places`;
        script.async = true;
        script.onload = resolve;
        script.onerror = reject;
        document.head.appendChild(script);
      });
    },
    initMap() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
          this.userLocation = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
          };
          this.map = new google.maps.Map(document.getElementById('map'), {
            center: this.userLocation,
            zoom: 14
          });
          new google.maps.Marker({
            position: this.userLocation,
            map: this.map,
            title: "Tu ubicación"
          });
        });
      } else {
        console.error("Geolocation is not supported by this browser.");
      }
    },
    calculateDistance() {
      const service = new google.maps.DistanceMatrixService();
      const geocoder = new google.maps.Geocoder();
      geocoder.geocode({address: this.destination}, (results, status) => {
        if (status === 'OK') {
          const destinationLocation = results[0].geometry.location;
          if (this.marker) {
            this.marker.setMap(null);
          }
          this.marker = new google.maps.Marker({
            position: destinationLocation,
            map: this.map,
            title: "Destino"
          });
          this.map.setCenter(destinationLocation);
          service.getDistanceMatrix({
            origins: [this.userLocation],
            destinations: [destinationLocation],
            travelMode: 'DRIVING',
          }, (response, status) => {
            if (status === 'OK') {
              this.distance = (response.rows[0].elements[0].distance.value / 1000).toFixed(2);
            } else {
              console.error('Error calculating distance:', status);
            }
          });
        } else {
          console.error('Geocode was not successful for the following reason:', status);
        }
      });
    }
  }
};
</script>

<style scoped>
#map {
  height: 500px;
  width: 100%;
}

.map-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.search-container {
  display: flex;
  width: 100%;
  margin-bottom: 15px;
}

.search-bar {
  flex: 1;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px 0 0 5px;
  outline: none;
}

.send-button {
  padding: 10px 20px;
  border: none;
  background-color: #007bff;
  color: white;
  cursor: pointer;
  border-radius: 0 5px 5px 0;
  transition: background-color 0.3s;
}

.send-button:hover {
  background-color: #0056b3;
}

.map {
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 10px;
  background-color: #ffffff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
</style>
