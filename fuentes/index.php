<html>
<head>
    <title>FOCO</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
    <link rel="stylesheet" href="js/libs/leaflet/leaflet.css" />
    <link rel="stylesheet" href="js/libs/leaflet/Plugins/MarkerCluster.css" />
    <link rel="stylesheet" href="js/libs/leaflet/Plugins/MarkerCluster.Default.css" />
    <style>
        #mapa {
            height: 80%;
            width: 100%;
      }
    </style>
    <script src="js/libs/leaflet/leaflet.js"></script>
    <script src="js/libs/leaflet/Plugins/leaflet.markercluster.js" type="text/javascript" charset="utf-8"></script>
    <script src="js/MapaOSM.js" type="text/javascript"></script>
</head>
<body onLoad="cargarMapa()">
    <div id="mapa">
    </div>
</body>
</html>