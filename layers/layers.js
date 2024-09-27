var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://www.google.cn/maps/vt?lyrs=s@189&gl=cn&x={x}&y={y}&z={z}'
            })
        });
var format_Final_T1_1 = new ol.format.GeoJSON();
var features_Final_T1_1 = format_Final_T1_1.readFeatures(json_Final_T1_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Final_T1_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Final_T1_1.addFeatures(features_Final_T1_1);
var lyr_Final_T1_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Final_T1_1, 
                style: style_Final_T1_1,
                popuplayertitle: "Final_T1",
                interactive: true,
    title: 'Final_T1<br />\
    <img src="styles/legend/Final_T1_1_0.png" /> 186 - 3191<br />\
    <img src="styles/legend/Final_T1_1_1.png" /> 3191 - 4135<br />\
    <img src="styles/legend/Final_T1_1_2.png" /> 4135 - 5496<br />\
    <img src="styles/legend/Final_T1_1_3.png" /> 5496 - 6911<br />\
    <img src="styles/legend/Final_T1_1_4.png" /> 6911 - 70155<br />'
        });
var format_T1_retailers_pt_2 = new ol.format.GeoJSON();
var features_T1_retailers_pt_2 = format_T1_retailers_pt_2.readFeatures(json_T1_retailers_pt_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_T1_retailers_pt_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_T1_retailers_pt_2.addFeatures(features_T1_retailers_pt_2);
var lyr_T1_retailers_pt_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_T1_retailers_pt_2, 
                style: style_T1_retailers_pt_2,
                popuplayertitle: "T1_retailers_pt",
                interactive: true,
                title: '<img src="styles/legend/T1_retailers_pt_2.png" /> T1_retailers_pt'
            });
var format_T1_Distributer_3 = new ol.format.GeoJSON();
var features_T1_Distributer_3 = format_T1_Distributer_3.readFeatures(json_T1_Distributer_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_T1_Distributer_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_T1_Distributer_3.addFeatures(features_T1_Distributer_3);
var lyr_T1_Distributer_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_T1_Distributer_3, 
                style: style_T1_Distributer_3,
                popuplayertitle: "T1_Distributer",
                interactive: true,
                title: '<img src="styles/legend/T1_Distributer_3.png" /> T1_Distributer'
            });
var format_Radius_km_4 = new ol.format.GeoJSON();
var features_Radius_km_4 = format_Radius_km_4.readFeatures(json_Radius_km_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Radius_km_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Radius_km_4.addFeatures(features_Radius_km_4);
var lyr_Radius_km_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Radius_km_4, 
                style: style_Radius_km_4,
                popuplayertitle: "Radius_km",
                interactive: true,
                title: '<img src="styles/legend/Radius_km_4.png" /> Radius_km'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_Final_T1_1.setVisible(true);lyr_T1_retailers_pt_2.setVisible(true);lyr_T1_Distributer_3.setVisible(true);lyr_Radius_km_4.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_Final_T1_1,lyr_T1_retailers_pt_2,lyr_T1_Distributer_3,lyr_Radius_km_4];
lyr_Final_T1_1.set('fieldAliases', {'WARD_NAME': 'WARD_NAME', 'Population': 'Population', '10%_pop': '10%_pop', 'Belts/mon': 'Belts/mon', 'Retailers': 'Retailers', 'State': 'State', 'Area': 'Area', 'City': 'City', });
lyr_T1_retailers_pt_2.set('fieldAliases', {'id': 'id', 'City': 'City', 'State': 'State', });
lyr_T1_Distributer_3.set('fieldAliases', {'id': 'id', });
lyr_Radius_km_4.set('fieldAliases', {'Name': 'Name', 'Radius': 'Radius', 'Name1': 'Name1', });
lyr_Final_T1_1.set('fieldImages', {'WARD_NAME': 'TextEdit', 'Population': 'TextEdit', '10%_pop': 'TextEdit', 'Belts/mon': 'TextEdit', 'Retailers': 'TextEdit', 'State': 'TextEdit', 'Area': 'TextEdit', 'City': 'TextEdit', });
lyr_T1_retailers_pt_2.set('fieldImages', {'id': 'TextEdit', 'City': 'TextEdit', 'State': 'TextEdit', });
lyr_T1_Distributer_3.set('fieldImages', {'id': 'TextEdit', });
lyr_Radius_km_4.set('fieldImages', {'Name': 'TextEdit', 'Radius': 'TextEdit', 'Name1': 'TextEdit', });
lyr_Final_T1_1.set('fieldLabels', {'WARD_NAME': 'inline label - visible with data', 'Population': 'inline label - visible with data', '10%_pop': 'inline label - visible with data', 'Belts/mon': 'inline label - visible with data', 'Retailers': 'inline label - visible with data', 'State': 'inline label - visible with data', 'Area': 'inline label - visible with data', 'City': 'inline label - visible with data', });
lyr_T1_retailers_pt_2.set('fieldLabels', {'id': 'no label', 'City': 'no label', 'State': 'no label', });
lyr_T1_Distributer_3.set('fieldLabels', {'id': 'no label', });
lyr_Radius_km_4.set('fieldLabels', {'Name': 'inline label - visible with data', 'Radius': 'no label', 'Name1': 'no label', });
lyr_Radius_km_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});