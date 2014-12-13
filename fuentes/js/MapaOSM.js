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
				"coordinates": [ 
				    "-57.56287111111111",
				    "-25.349559444444445"
				]
		    },
			"properties": {
			    "institucion": "Esc. Bás. Nº 3652 San José Obrero",
				"justificacion": "Institucion que sera beneficiada con el almuerzo escolar con el presupuesto de la Gobernacion del Departamento Central."
			}
		},{
			"type": "Feature",
			"geometry": {
				"type": "Point", 
				"coordinates": [
				    "-57.53095805555555",
				    "-25.314784444444445"
				]
		    },
			"properties":{
			    "institucion": "Esc. Bás. Nº 2001 Don Bosco",
				"justificacion": "Es sabido la importancia de la correcta alimentación para un adecuado rendimiento académico por está razón solicitamos seguir beneficiados con el almuerzo escolar, el cual es sumamente valorado por los alumnos"
		    }
		},{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [
		            "-57.555636111111106",
		            "-25.323371666666667"
		        ]
		    },
		    "properties": {
		    	"institucion": "Esc. Bás. Nº 353 Pitiantuta",
		    	"justificacion": "Solicitamos el alimento  porque los niños/as se sienten más motivados y prestan la atención necesario en el desarrollo de las clases, asi mismo el porcentaje de  ausentismo disminuye"
		    }
		}
	    ]
	};
	
	// Layer GeoJSON.
	var v_geojsonLayer = L.geoJson(v_geojsonFeature, {
		onEachFeature: onEachFeature,
		pointToLayer: function(p_feature, p_latlng) {
            var v_icono =  L.icon({ 
                iconUrl: 'recursos/imagenes/iconos/institucion.png', 
                iconSize: [32, 32]
            });  
            return L.marker(p_latlng, {
            	icon: v_icono
            });                                 
        }
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