const busStops = [
  [-71.093729, 42.359244], 
  [-71.094915, 42.360175],
  [-71.095800, 42.360698],
  [-71.099558, 42.362953],
  [-71.103476, 42.365248],
  [-71.106067, 42.366806],
  [-71.108717, 42.368355],
  [-71.110799, 42.369192],
  [-71.113095, 42.370218],
  [-71.115476, 42.372085],
  [-71.117585, 42.373016],
  [-71.118625, 42.374863]
]; 

 // TODO: add your own access token
 mapboxgl.accessToken = 'pk.eyJ1IjoiamJvbmRpNzYiLCJhIjoiY2xwcjFlcmhuMDR5ZjJpb2xxbXR4dWFyOCJ9.2up9iI8kV6vpcXC5E2K1Lw';
  
 // This is the map instance
 let map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/satellite-streets-v12',
  center: [-71.104081, 42.365554],
  zoom: 14,
});

// TODO: add a marker to the map at the first coordinates in the array busStops. The marker variable should be named "marker"
let marker = new mapboxgl.Marker().setLngLat([-71.092761, 42.357575]).addTo(map);

// counter here represents the index of the current bus stop
let counter = 0;
function move() {
  // TODO: move the marker on the map every 1000ms. Use the function marker.setLngLat() to update the marker coordinates
  setTimeout(() => {
    if (counter >= busStops.length) return;
    marker.setLngLat(busStops[counter]);
    counter++;
    move();
  }, 1000);
}