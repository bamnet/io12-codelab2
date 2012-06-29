// Global to hold all the layers that can be shown on the map.
var gmeLayers = [];

// Get MapRoot JSON from Maps Engine Directory
function loadJSONP() {
  // URL of External Script (Step 1)

  // Create Insertable Script (Step 2)

  // Load the script (Step 3)
}


function parseMapRoot(data) {
  $("#side_bar").append('<div id="map_title"><h3>' + data.name +'</h3></div>');
  $("#side_bar").append('<ul id="layer_picker" style="list-style-type: none;"></ul>');

  setMapBounds(data.bounds);

  //Loop through all the layers of the map, and create MapDataLayers for each one
  $.each(data.layers, function(index, layer) {
    $("#layer_picker").append('<li><input type="checkbox" id="' + index + '" class="layer"/><label for="' + index + '">' + layer,layerName.replace("Frederick County Virginia", "").replace("County Mosaic", "") + '</label></li>');
    // Create the MapDataLayer, and add it to an array (Step 4)
  });

  //Add a JQuery listener to each layer's checkbox, so when it ticked it will toggle the layer's visiblility.
  $('.layer').change(function() {
    var layerID = parseInt($(this).attr('id'));
    if ($(this).attr('checked')){
      gmeLayers[layerID].setMap(map);
    } else {
      gmeLayers[layerID].setMap(null);
    }
  });
}
