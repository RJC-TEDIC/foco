// Variables y Objetos globales.
var v_mapa = null;
var v_cluster_marcadores = null;

function cargarMapa(){
	// Asuncion - Paraguay.
	var v_longitud = -57.521591;
	var v_latitud = -25.335409;
	var v_zoom = 13;
	
	v_mapa =  L.map('mapa').setView([v_latitud, v_longitud], v_zoom);
	
	// Humanitarian Style.
	L.tileLayer('http://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
		maxZoom: 18,
		attribution: 'Data \u00a9 <a href="http://www.openstreetmap.org/copyright"> OpenStreetMap Contributors </a> Tiles \u00a9 HOT'
	}).addTo(v_mapa);

	var v_geojsonFeature = {
		"type": "FeatureCollection",
		"features": [{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates":[ 
				    "-57.521591",
				    "-25.335409"
				]
		    },
			"properties": {
			    "nombre": "Startup Weekend Asunci\u00f3n",
				"lugar": "Aula Magna de la Facultad Polit\u00e9cnica de la Universidad Nacional de Asunci\u00f3n",
				"fecha_inicio": "04-04-2014", 
				"fecha_fin": "06-04-2014"
			}
		},{
			"type": "Feature",
			"geometry": {
				"type": "Point", 
				"coordinates": [
				    "-57.521591",
				    "-25.335409"
				]
		    },
			"properties":{
			    "nombre": "Festival Latinoamericano de Instalaci\u00f3n de Software Libre (FLISOL)",
				"lugar": "Aula Magna de la Facultad Polit\u00e9cnica de la Universidad Nacional de Asunci\u00f3n",
				"fecha_inicio": "26-04-2014",
				"fecha_fin": "26-04-2014"
		    }
		},{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [
		            "-57.521591",
		            "-25.335409"
		        ]
		    },
		    "properties": {
		    	"nombre": "Festival de Danza Paraguaya ",
		    	"lugar": "Aula Magna de la Facultad Polit\u00e9cnica de la Universidad Nacional de Asunci\u00f3n",
		    	"fecha_inicio": "21-06-2014",
		    	"fecha_fin": "25-06-2014"
		    }
		}
	    ]
	};
	
	// Layer GeoJSON.
	var v_geojsonLayer = L.geoJson(v_geojsonFeature, {
		onEachFeature: onEachFeature
	});
	
	// Cluster de marcadores.
	v_cluster_marcadores = L.markerClusterGroup();					// Se crea un cluster group.
	v_cluster_marcadores.addLayer(v_geojsonLayer); 					// Agrega el Layer GEOJSON al cluster group.
	v_mapa.addLayer(v_cluster_marcadores);							// Agrega el cluster group al mapa.

	function onEachFeature(p_feature, p_layer) {
		if (p_feature.properties) {
            var v_popupString = '<div class="popup">';
            
            for (var k in p_feature.properties) {
                var v = p_feature.properties[k];
                v_popupString += '<b>' + k + '</b>: ' + v + '<br />';
            }
            v_popupString += '</div>';
            p_layer.bindPopup(v_popupString);
        }
	}
} 