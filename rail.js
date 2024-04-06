/**
 * The function adds the "change" event listener to the map's style
 * and modifies colors of the map features within that listener.
 * It also adds a blue polygon covering all additional places and a circular transparent layer around an added place.
 * @param  {H.Map} map      A HERE Map instance within the application
 */
function interleave(map) {
    var provider = map.getBaseLayer().getProvider();
  
    // Get the style object for the base layer
    var style = provider.getStyle();
  
    var changeListener = () => {
      if (style.getState() === H.map.Style.State.READY) {
        style.removeEventListener('change', changeListener);
  
        // Create a provider and a layer that are placed under the buildings layer
       
  
        // Extract buildings from the base layer config 
        // In order to inspect the config, call style.getConfig()
       
  
        // The default object layer and its objects will remain on top of the buildings layer
      
  
        // Add a blue polygon covering all additional places
      
       
  
        // Add a circular transparent layer around an added place
        
         var circle = new H.map.Circle(
          {lat: 22.372452028377033, lng:73.16407809461903}, // Coordinates of the added place
          700, // Radius of the circle in meters
          { style: {fillColor: 'rgba(0, 0, 255, 0.3)', strokeColor: 'rgba(0, 0, 255, 1)', lineWidth: 2} } // Transparent fill color
        );
        map.addObject(circle);
        
        var circle = new H.map.Circle(
          {lat: 22.311484464365375, lng:73.18092956205155}, // Coordinates of the added place
          700, // Radius of the circle in meters
          { style: {fillColor: 'rgba(0, 0, 255, 0.3)', strokeColor: 'rgba(0, 0, 255, 1)', lineWidth: 2} } // Transparent fill color
        );
        map.addObject(circle);
           
      }
    }
  
    style.addEventListener('change', changeListener);
  }
  
  //Step 1: initialize communication with the platform
  // In your own code, replace variable window.apikey with your own apikey
  var platform = new H.service.Platform({
    apikey: 'mwSGd_thMziSd8hBzz4OQT5b9goG8RAyNCZq8-5onz0'
  });
  var defaultLayers = platform.createDefaultLayers();
  
  //Step 2: initialize a map
  
  var map = new H.Map(document.getElementById('map'),
    defaultLayers.vector.normal.map, {
    center: {lat: 22.311484464365375, lng:73.18092956205155},
    zoom: 13,
    pixelRatio: window.devicePixelRatio || 1
  });
  
  function moveMapToBerlin(map){
    map.setCenter({lat:22.3127952817384, lng:73.182318167198});
    map.setZoom(13);
  }
  map.getViewModel().setLookAtData({tilt: 45});
  
  // add a resize listener to make sure that the map occupies the whole container
  window.addEventListener('resize', () => map.getViewPort().resize());
  
  //Step 3: make the map interactive
  // MapEvents enables the event system
  // Behavior implements default interactions for pan/zoom (also on mobile touch environments)
  var behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(map));
  
  // Now use the map as required...
  interleave(map);
  
  // Add markers for additional places
  var additionalPlaces = [
   // Example additional place 1
    
    {lat:22.372452028377033, lng:73.16407809461903},
    {lat:22.311484464365375, lng:73.18092956205155}
    
  
    
    // Add more places as needed
  ];
  
  additionalPlaces.forEach(place => {
    var icon = new H.map.Icon(
      'data:image/svg+xml,' +
      encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">' +
      '<text x="50%" y="50%" font-size="12pt" font-family="Arial" font-weight="bold" fill="black" text-anchor="middle">S</text>' +
      '</svg>')
    );
  
    var marker = new H.map.Marker(place);
    map.addObject(marker);
  });
  