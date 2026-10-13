var wms_layers = [];

var lyr_MapLommis_modifiziert_0 = new ol.layer.Image({
        opacity: 1,
        
    title: 'MapLommis_modifiziert<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/MapLommis_modifiziert_0.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [998974.047919, 6022737.081949, 1004178.715809, 6026874.678804]
        })
    });
var format_HJStaende2025_1 = new ol.format.GeoJSON();
var features_HJStaende2025_1 = format_HJStaende2025_1.readFeatures(json_HJStaende2025_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HJStaende2025_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HJStaende2025_1.addFeatures(features_HJStaende2025_1);
var lyr_HJStaende2025_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HJStaende2025_1, 
                style: style_HJStaende2025_1,
                popuplayertitle: 'HJStaende2025',
                interactive: true,
                title: '<img src="styles/legend/HJStaende2025_1.png" /> HJStaende2025'
            });

lyr_MapLommis_modifiziert_0.setVisible(true);lyr_HJStaende2025_1.setVisible(true);
var layersList = [lyr_MapLommis_modifiziert_0,lyr_HJStaende2025_1];
lyr_HJStaende2025_1.set('fieldAliases', {'fid': 'fid', 'nr': 'Standnummer', 'hund': 'Hund', 'kommentar': 'kommentar', 'kugel': 'kugel', 'trieb_anwendung': 'trieb_anwendung', 'update': 'update', 'anwendung_kommentar': 'anwendung_kommentar', });
lyr_HJStaende2025_1.set('fieldImages', {'fid': 'TextEdit', 'nr': 'TextEdit', 'hund': 'CheckBox', 'kommentar': '', 'kugel': 'CheckBox', 'trieb_anwendung': '', 'update': 'DateTime', 'anwendung_kommentar': '', });
lyr_HJStaende2025_1.set('fieldLabels', {'fid': 'hidden field', 'nr': 'header label - visible with data', 'hund': 'hidden field', 'kommentar': 'inline label - visible with data', 'kugel': 'inline label - always visible', 'trieb_anwendung': 'no label', 'update': 'hidden field', 'anwendung_kommentar': 'no label', });
lyr_HJStaende2025_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});