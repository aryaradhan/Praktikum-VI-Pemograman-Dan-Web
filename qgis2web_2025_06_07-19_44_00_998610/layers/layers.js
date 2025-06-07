ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:3857").setExtent([11920364.681078, -763756.404141, 11932129.335572, -757020.018492]);
var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_BingVirtualEarth_1 = new ol.layer.Tile({
            'title': 'Bing Virtual Earth',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://ecn.t3.tiles.virtualearth.net/tiles/a{q}.jpeg?g=1'
            })
        });
var format_UniversitasYangBeradaDiCianjur_2 = new ol.format.GeoJSON();
var features_UniversitasYangBeradaDiCianjur_2 = format_UniversitasYangBeradaDiCianjur_2.readFeatures(json_UniversitasYangBeradaDiCianjur_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_UniversitasYangBeradaDiCianjur_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_UniversitasYangBeradaDiCianjur_2.addFeatures(features_UniversitasYangBeradaDiCianjur_2);
var lyr_UniversitasYangBeradaDiCianjur_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_UniversitasYangBeradaDiCianjur_2, 
                style: style_UniversitasYangBeradaDiCianjur_2,
                popuplayertitle: 'Universitas Yang Berada Di Cianjur',
                interactive: true,
    title: 'Universitas Yang Berada Di Cianjur<br />\
    <img src="styles/legend/UniversitasYangBeradaDiCianjur_2_0.png" /> <br />\
    <img src="styles/legend/UniversitasYangBeradaDiCianjur_2_1.png" /> <br />\
    <img src="styles/legend/UniversitasYangBeradaDiCianjur_2_2.png" /> <br />\
    <img src="styles/legend/UniversitasYangBeradaDiCianjur_2_3.png" /> <br />\
    <img src="styles/legend/UniversitasYangBeradaDiCianjur_2_4.png" /> <br />' });

lyr_OSMStandard_0.setVisible(true);lyr_BingVirtualEarth_1.setVisible(true);lyr_UniversitasYangBeradaDiCianjur_2.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_BingVirtualEarth_1,lyr_UniversitasYangBeradaDiCianjur_2];
lyr_UniversitasYangBeradaDiCianjur_2.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', 'X-coord': 'X-coord', 'Y-coord': 'Y-coord', 'Deskripsi': 'Deskripsi', 'Gambar_URL': 'Gambar_URL', });
lyr_UniversitasYangBeradaDiCianjur_2.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', 'X-coord': 'TextEdit', 'Y-coord': 'TextEdit', 'Deskripsi': 'TextEdit', 'Gambar_URL': 'TextEdit', });
lyr_UniversitasYangBeradaDiCianjur_2.set('fieldLabels', {'id': 'inline label - visible with data', 'Nama': 'header label - always visible', 'X-coord': 'inline label - visible with data', 'Y-coord': 'inline label - visible with data', 'Deskripsi': 'header label - always visible', 'Gambar_URL': 'inline label - visible with data', });
lyr_UniversitasYangBeradaDiCianjur_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});