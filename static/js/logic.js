var sliderControl=null

var map = L.map("map", {center: [38.75, -77.5], zoom: 9});

L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
  attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
  maxZoom: 18,
  id: "mapbox.streets",
  accessToken: API_KEY
}).addTo(map);


// var layer2010 = L.geoJson(data, {style: style2010});
// var layer2011 = L.geoJson(data, {style: style2011});
// var layer2012 = L.geoJson(data, {style: style2012});
// var layer2013 = L.geoJson(data, {style: style2013});
// var layer2014 = L.geoJson(data, {style: style2014});
// var layer2015 = L.geoJson(data, {style: style2015});
var layer2016 = L.geoJson(data2016, {style: style, time: "2016"});
var layer2017 = L.geoJson(data2017, {style: style, time: "2017"});
var layer2018 = L.geoJson(data2018, {style: style, time: "2018"});

// var layerGroup = L.layerGroup([layer2010,layer2011,layer2012,
//   layer2013,layer2014,layer2015,layer2016,layer2017,layer2018]);

var layerGroup = L.layerGroup([layer2016,layer2017,layer2018])

// function getColor(d) {
//   return d > 530 ? '#800026' :
//          d > 460  ? '#BD0026' :
//          d > 410  ? '#E31A1C' :
//          d > 350  ? '#FC4E2A' :
//          d > 290   ? '#FD8D3C' :
//          d > 230   ? '#FEB24C' :
//          d > 170   ? '#FED976' :
//          d>110 ?      '#FFEDA0';
// };

function style(feature) {
  return {
      fillColor: getColor(feature.properties.Home_Value),
      weight: 2,
      opacity: 1,
      color: 'white',
      dashArray: '3',
      fillOpacity: 0.7
  };
}

var sliderControl = L.control.sliderControl({
  position: "topright", 
  layer: layerGroup, 
  follow: true,
  range: false,
  timeAttribute:"time"});


//Make sure to add the slider to the map ;-)
map.addControl(sliderControl);

//And initialize the slider
sliderControl.startSlider();
$('#slider-timestamp').html(options.markers[ui.value].feature.properties.time.substr(0, 19));



// ----------------------------------------------
// var sliderControl = null;

// var map = L.map("map", {center: [38.75, -77.5], zoom: 9});

// L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
//   attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
//   maxZoom: 18,
//   id: "mapbox.streets",
//   accessToken: API_KEY
// }).addTo(map);


// //Fetch some data from a GeoJSON file
// var link = "https://raw.githubusercontent.com/emreynolds9/Project-2/master/Resources/newfileeee.geojson"
// var testlayer
// var testlayer2

// d3.json(link, function(data) {
//     testlayer = L.choropleth(data, {  
//       valueProperty: function (feature) {
//         return feature.properties.Home_Values
//       },
//       console.log(valueProerty)
//   ,// Define what  property in the features to use
//       scale: ["#ffffb2", "#b10026"],// Set color scale
//       steps: 10, // Number of breaks in step range
//       mode: "q",// q for quartile, e for equidistant, k for k-means
//       style: {
//         // Border color
//         color: "#000",
//         weight: 1,
//         fillOpacity: 0.2
//       },
//       // Binding a pop-up to each layer
//       onEachFeature: function(feature, layer) {
//         layer.bindPopup(feature.properties.NAME + ", " + feature.properties.STATE_NAME + "<br>Median Home Value:<br>" +
//          "$" + feature.properties.HOME_VALUE);
//       },
//       time:"2011"
//     }).addTo(map);
//     console.log(testlayer)

//     testlayer2 = L.choropleth(data, {  
//       valueProperty: "RENTAL_PRICE",// Define what  property in the features to use
//       scale: ["#ffffb2", "#b10026"],// Set color scale
//       steps: 10, // Number of breaks in step range
//       mode: "q",// q for quartile, e for equidistant, k for k-means
//       style: {
//         // Border color
//         color: "#000",
//         weight: 1,
//         fillOpacity: 0.2
//       },
//       // Binding a pop-up to each layer
//       onEachFeature: function(feature, layer) {
//         layer.bindPopup(feature.properties.NAME + ", " + feature.properties.STATE_NAME + "<br>Median Home Value:<br>" +
//          "$" + feature.properties.RENTAL_PRICE);
//       },
//       time:"2011"
//     }).addTo(map);

// var layerGroup = L.layerGroup([testlayer,testlayer2]);

// var sliderControl = L.control.sliderControl({position: "topright", layer: layerGroup, follow: 3});
// //Make sure to add the slider to the map ;-)
// map.addControl(sliderControl);
// //And initialize the slider
// sliderControl.startSlider();

// $('#slider-timestamp').html(options.markers[ui.value].feature.properties.time.substr(2011, 2019));

// });

// ------------------------------------------------
//For a Range-Slider use the range property:

// // Creating map object
// var map = L.map("map", {
//   center: [38.75, -77.5],
//   zoom: 9
// });

// // Adding tile layer
// L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
//   attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
//   maxZoom: 18,
//   id: "mapbox.streets",
//   accessToken: API_KEY
// }).addTo(map);


// var link = "https://raw.githubusercontent.com/emreynolds9/Project-2/master/Resources/2011.geojson";



// var geojson;

// // This is for mouseover
// function highlight(e) {
// 	// e for event
// 	// The target event property returns the element that triggered the event.
// 	// Get access to the layer and set a grey border on it
//     var layer = e.target;

//     layer.setStyle({
//         weight: 5,
//         color: '#666',
//         dashArray: '',
//     });
//     layer.bringToFront();
//     // Send information to the info class defined below:
//     info.update(layer.feature.properties);
// }

// // This is for mouseout: return to normal style
// function resetHighlight(e) {
// 	geojson.resetStyle(e.target);
// 	// Senf information to the info class defined below:
// 	info.update();
// }


// function addToFeature(feature, layer) {
// 	// Grab the layer and describe listeners
// 	layer.on({
// 		mouseover: highlight,
// 		mouseout: resetHighlight
// 	});
// }

// // Custom info Control
// var info = L.control();
// info.onAdd = function(map) {
// 	this._div = L.DomUtil.create('div', 'info'); // create a div with a class "info"
// 	this.update();
// 	return this._div;
// };

// d3.json(link, function(data) {

//     // Create a new choropleth layer
//   geojson = L.choropleth(data, {  
//     valueProperty: "HOME_VALUE",// Define what  property in the features to use
//     scale: ["#ffffb2", "#b10026"],// Set color scale
//     steps: 10, // Number of breaks in step range
//     mode: "q",// q for quartile, e for equidistant, k for k-means
//     style: {
//       // Border color
//       color: "#000",
//       weight: 1,
//       fillOpacity: 0.8
//     },

//     // Binding a pop-up to each layer
//     onEachFeature: function(feature, layer) {
//       layer.bindPopup(feature.properties.NAME + ", " + feature.properties.STATE_NAME + "<br>Median Home Value:<br>" +
//        "$" + feature.properties.HOME_VALUE);
//     },
//     time:"2011"
//   }
//   ).addTo(map);


//   // Set up the legend
//   var legend = L.control({ position: "bottomright" });
//   legend.onAdd = function() {
//     var div = L.DomUtil.create("div", "info legend");
//     var limits = geojson.options.limits;
//     var colors = geojson.options.colors;
//     var labels = [];

//   //   // Add min & max
//     var legendInfo = "<h1>Median Home Value (per sq foot)</h1>" +
//       "<div class=\"labels\">" +
//         "<div class=\"min\">" + limits[0] + "</div>" +
//         "<div class=\"max\">" + limits[limits.length - 1] + "</div>" +
//       "</div>";

//     div.innerHTML = legendInfo;

//     limits.forEach(function(limit, index) {
//       labels.push("<li style=\"background-color: " + colors[index] + "\"></li>");
//     });

//     div.innerHTML += "<ul>" + labels.join("") + "</ul>";
//     return div;
//   };
//   // Adding legend to the map
//   legend.addTo(map);
// });

// var geojson2

// link2 = "https://raw.githubusercontent.com/emreynolds9/Project-2/master/Resources/2016.geojson"

// d3.json(link2, function(data) {

//   // console.log(data)
  
//     // Create a new choropleth layer
//   geojson2 = L.choropleth(data, {  
//     valueProperty: "HOME_VALUE",// Define what  property in the features to use
//     scale: ["#ffffb2", "#b10026"],// Set color scale
//     steps: 10, // Number of breaks in step range
//     mode: "q",// q for quartile, e for equidistant, k for k-means
//     style: {
//       // Border color
//       color: "#000",
//       weight: 1,
//       fillOpacity: 0.8
//     },

//     // Binding a pop-up to each layer
//     onEachFeature: function(feature, layer) {
//       layer.bindPopup(feature.properties.NAME + ", " + feature.properties.STATE_NAME + "<br>Median Home Value:<br>" +
//        "$" + feature.properties.HOME_VALUE);
//     },
//     time: "2016"

//   }).addTo(map);
  

  
//   var layerGroup = L.layerGroup([geojson, geojson2]);
//   //Create a marker layer (in the example done via a GeoJSON FeatureCollection)
//   var sliderControl = L.control.sliderControl({position: "topright", layer: layerGroup, follow: 3});
  
//   //Make sure to add the slider to the map ;-)
//   map.addControl(sliderControl);
  
//   //And initialize the slider
//   sliderControl.startSlider();
  
//   $('#slider-timestamp').html(options.markers[ui.value].feature.properties.time.substr(2000, 2016));

//  });

 


// // var gj2000
// // var gj2001
// // var gj2002




// // var array = [gj2000,gj2001,gj2002]
// // var layerdata
// // function makeLayer(layername, year,link) {
// //   d3.json(link, function(data) {

// //     // console.log(data)
    
// //       // Create a new choropleth layer
// //     layerdata = L.choropleth(data, {  
// //       valueProperty: "HOME_VALUE",// Define what  property in the features to use
// //       scale: ["#ffffb2", "#b10026"],// Set color scale
// //       steps: 10, // Number of breaks in step range
// //       mode: "q",// q for quartile, e for equidistant, k for k-means
// //       style: {
// //         // Border color
// //         color: "#000",
// //         weight: 1,
// //         fillOpacity: 0.9
// //       },
  
// //       // Binding a pop-up to each layer
// //       onEachFeature: function(feature, layer) {
// //         layer.bindPopup(feature.properties.NAME + ", " + feature.properties.STATE_NAME + "<br>Median Home Value:<br>" +
// //          "$" + feature.properties.HOME_VALUE);
// //         }, time: year
      
// //     })
// //     // Set up the legend
// //   });
// //   console.log(layerdata)
// //   return layerdata;
// //   console.log(layerdata)
// // }


// // var xxx
// // var array = [gj2000,gj2001,gj2002]
// // var layerdata

// // function testFunction(layername, year,link) {
// //   xxx = d3.json(link, function(data) {
// //     console.log(layername)
// //     console.log(link);
// //     console.log(year)
// //     console.log(data.features);

// //   });
// //   return xxx
// // };

// // array.forEach((gj) => {
// //   testFunction(gj,"2015","https://raw.githubusercontent.com/emreynolds9/Project-2/master/Resources/2015.geojson")
// //     // Set up the legend
// // });

// // function testfunction()
// // var newlayer
// // var xyear = "2015"
// // var xlink = "https://raw.githubusercontent.com/emreynolds9/Project-2/master/Resources/2015.geojson"

// // d3.json(xlink, function(data) {
// //   // console.log(data)  
// //     // Create a new choropleth layer
// //   newlayer = L.choropleth(data, {  
// //     valueProperty: "HOME_VALUE",// Define what  property in the features to use
// //     scale: ["#ffffb2", "#b10026"],// Set color scale
// //     steps: 10, // Number of breaks in step range
// //     mode: "q",// q for quartile, e for equidistant, k for k-means
// //     style: {
// //       color: "#000",// Border color
// //       weight: 1,
// //       fillOpacity: 0.9
// //     },
// //     // Binding a pop-up to each layer
// //     onEachFeature: function(feature, layer) {
// //       layer.bindPopup(feature.properties.NAME + ", " + feature.properties.STATE_NAME + "<br>Median Home Value:<br>" +
// //        "$" + feature.properties.HOME_VALUE);
// //     },
// //     time: xyear
// //   } 
// //   ).addTo(map);
  

// //   // Adding legend to the map
// //   legend.addTo(map);
// // });