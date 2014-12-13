<html>
<head>
    <title>FOCO</title>
    <link rel="stylesheet" href="http://cdn.leafletjs.com/leaflet-0.7.2/leaflet.css" />
    <link rel="stylesheet" href="js/libs/leaflet/Plugins/MarkerCluster.css" />
    <link rel="stylesheet" href="js/libs/leaflet/Plugins/MarkerCluster.Default.css" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
    <style>
        #mapa {
            height: 80%;
            width: 100%;
      }
    </style>
    <script src="http://cdn.leafletjs.com/leaflet-0.7.2/leaflet.js"></script>
    <script src="js/libs/leaflet/Plugins/leaflet.markercluster.js" type="text/javascript" charset="utf-8"></script>
    <script src="js/MapaOSM.js" type="text/javascript"></script>
</head>
<body onLoad="cargarMapa()">
    <div id="mapa">
    </div>
</body>
</html>