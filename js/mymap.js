// Camadas de Base
 var mbUrl = 'https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpandmbXliNDBjZWd2M2x6bDk3c2ZtOTkifQ._QA7i5Mpkd_m30IGElHziw';

var grayscale = L.tileLayer(mbUrl, {
        id: 'mapbox.light',
    }),
    streets = L.tileLayer(mbUrl, {
        id: 'mapbox.streets',
    });

var roads = L.gridLayer.googleMutant({
    type: 'roadmap' // valid values are 'roadmap', 'satellite', 'terrain' and 'hybrid'
});

var satellite = L.gridLayer.googleMutant({
    type: 'satellite',
});

//  Camadas do SIGA-Urbano

var geoserver_url = "http://177.153.8.125:8181/geoserver/siga-urbano/wms";

var distrito = L.tileLayer.wms(geoserver_url, {
    layers: 'layers=siga-urbano:distrito',
    format: 'image/png',
    transparent: true,
    version: '1.1.0',
    CQL_FILTER:'cod_ibge_m=5005103'

});

var setor = L.tileLayer.wms(geoserver_url, {
    layers: 'layers=siga-urbano:setor',
    format: 'image/png',
    transparent: true,
    version: '1.1.0',
    CQL_FILTER:'cod_ibge_m=5005103'
});

var quadra = L.tileLayer.wms(geoserver_url, {
    layers: 'layers=siga-urbano:quadra',
    format: 'image/png',
    transparent: true,
    version: '1.1.0',
    CQL_FILTER:'cod_ibge_m=5005103'
});

var lote = L.tileLayer.wms(geoserver_url, {
    layers: 'layers=siga-urbano:lote',
    format: 'image/png',
    transparent: true,
    version: '1.1.0',
    CQL_FILTER:'cod_ibge_m=5005103'
});

var logradouro = L.tileLayer.wms(geoserver_url, {
    layers: 'layers=siga-urbano:logradouro',
    format: 'image/png',
    transparent: true,
    version: '1.1.0',
    CQL_FILTER:'cod_ibge_m=5005103'
});

var unidade_cadastral = L.tileLayer.wms(geoserver_url, {
    layers: 'layers=siga-urbano:unidade_cadastral',
    format: 'image/png',
    transparent: true,
    version: '1.1.0',
    CQL_FILTER:'cod_ibge_m=5005103'
});


var map = L.map('map', {
    center: [-22.479479151, -54.305806159],
    zoom: 16,
    layers: [
        satellite,
        distrito,
        setor,
        quadra,
        lote,
        unidade_cadastral,
        logradouro
    ]
});

var baseLayers = {
    "Google Satélite": satellite,
    "Google Streets": roads,
    "MapBox Grayscale": grayscale,
    "Mapbox Streets": streets,
};

var overlays = {
    "Distrito": distrito,
    "Setor": setor,
    "Quadra": quadra,
    "Lote": lote,
    "Unidade Cadastral": unidade_cadastral,
    "Logradouro": logradouro,
};

L.control.layers(baseLayers, overlays).addTo(map);