<template>
  <GoogleMap
      :center="center"
      :zoom="16"
      style="width: 100%; height: 500px"
  >
    <GmapMarker
        :key="index"
        v-for="(m, index) in markers"
        :position="m.position"
        :title="m.title"
        :clickable="true"
        :draggable="true"
        @click="center=m.position"
    ></GmapMarker>
  </GoogleMap>
</template>

<script>
import { GoogleMap } from 'vue3-google-map';

export default {
  name: "GoogleMap",
  components: {
    GoogleMap,

  },
  data () {
    return {
      center: {lat: this.latitude, lng: this.longitude},
      markers: [{
        position: {lat: this.latitude, lng: this.longitude},
        title: this.title
      }]
    }
  },

  props: {
    latitude: Number,
    longitude: Number,
    title: String
  }
}
</script>