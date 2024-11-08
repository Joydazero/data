var _map;
var _layers;
const _sysKey = 'TIS';
var vectorLayer_link;
var hour = document.getElementById('hour');

$(document).ready(function() {
	
	/* Base Layer */
    _layers = [
        new himap.layer.vworld.Base({visible:true, sysKey:_sysKey})
    ];

    _map = new himap.Map({
        sysKey: _sysKey,
        target: 'realtimeMap',
        layers: _layers,
        center: [14135902.1954, 4518050.7196],
        zoom: 3
    });

	set_calendar_yesterday("searchDate");
	
    document.getElementById('timeInterval').addEventListener('change', updateTimeOptions);
});


/* 조회 */
function fnMapSearch(){
	
	var type = $("#type").val();
	var timeInterval = $("#timeInterval").val();
	var sdate = $("#searchDate").val().replace(/-/gi, "");
	var stime = $("#hour").val() + $("#min").val(); 
	var lineCode = $("#lineCode").val();
	var realTime = $("#realTime").val();
	
	var option = {
		url      : "situation/realtime_map_search.do",
		param	 : {
			type : type,
			timeInterval : timeInterval,
			sdate : sdate,
			stime : stime,
			lineCode : lineCode,
			realTime : realTime
		},
		callback : fnMapSearchCallback
	}
	callService(option);
		
}

/* 조회 callback */
function fnMapSearchCallback(json){
    var code = json.data.CODE;
    var data = json.data;
    var type = $("#type").val();
    var realTime = $("#realTime").val();
    var timeInterval = $("#timeInterval").val();
    
    if (code == "S") {
		fnDrawRealtimeMap(data)
    }
}


/* 통계정보 */
function fnDataInfoPop(){
	popupUrl("48");
}


/* 구분 onchange */
function updateTimeIntervalOptions(){
	var selectedType = document.getElementById('type').value; 
    var timeInterval = document.getElementById('timeInterval');

	$("#hour").empty();
	$("#min").empty();
    
    for (var i = 0; i < timeInterval.options.length; i++) {
        timeInterval.options[i].style.display = 'block';
    }

    if (selectedType === 'typeVds') {
        timeInterval.querySelector('option[value="60"]').style.display = 'none';
        timeInterval.value = "none";
    } else if (selectedType === 'typeDsrc') {
        timeInterval.querySelector('option[value="15"]').style.display = 'none';
        timeInterval.querySelector('option[value="60"]').style.display = 'none';
        timeInterval.value = "none";
    } else if (selectedType === 'typeCongzone') {
        timeInterval.querySelector('option[value="05"]').style.display = 'none';
        timeInterval.value = "none";
    }
}

/* 시간 (시, 분) */
function updateTimeOptions() {
    var timeInterval = document.getElementById('timeInterval').value;
	var hourSelect = document.getElementById('hour');
    var minSelect = document.getElementById('min');

    while (hourSelect.options.length > 0) {
        hourSelect.remove(0);
    }

    for (var i = 0; i < 24; i++) {
        var optionValue = i.toString().padStart(2, '0');
        var option = document.createElement('option');
        option.value = optionValue;
        option.text = optionValue;
        hourSelect.appendChild(option);
    }

    while (minSelect.options.length > 0) {
        minSelect.remove(0);
    }

    if (timeInterval === '05') {
        for (var i = 0; i < 60; i += 5) {
            var optionValue = i.toString().padStart(2, '0');
            var option = document.createElement('option');
            option.value = optionValue;
            option.text = optionValue;
            minSelect.appendChild(option);
        }
    } else if (timeInterval === '15') {
        for (var i = 0; i < 60; i += 15) {
            var optionValue = i.toString().padStart(2, '0');
            var option = document.createElement('option');
            option.value = optionValue;
            option.text = optionValue;
            minSelect.appendChild(option);
        }
    } else if (timeInterval === '60') {
        var option = document.createElement('option');
        option.value = '00';
        option.text = '00';
        minSelect.appendChild(option);
    }
}

/* 실시간 체크 여부 */
function is_checked(){	
    var isChecked = $('#realTime').is(':checked');
	
	if(isChecked){
		$(".ui-datepicker-trigger").attr("disabled", true);
		$("#searchDate").val("").attr("disabled", true);
		$("#hour").val("none").attr("disabled", true);
		$("#min").val("none").attr("disabled", true);
		$("#realTime").val("true")
	}else{
		$(".ui-datepicker-trigger").attr("disabled", false);
		$("#searchDate").attr("disabled", false);
		$("#hour").val("none").attr("disabled", false);
		$("#min").val("none").attr("disabled", false);
		$("#realTime").val("false")
	}
}

/* 실시간 VDS 지도 */
function fnDrawRealtimeMap(data){
	// callback data
	var data_vds_id = data.daoData.map(item =>item.vds_id);
	var data_dsrc_id = data.daoData.map(item =>item.dsrc_link_id);
	var data_congzone_id = data.daoData.map(item =>item.congzone_id);
	var vdsStyle = {};
	var dsrcStyle = {};
	var congzoneStyle = {};
	
	data.daoData.forEach(item =>{
		if(item.vds_id) vdsStyle[item.vds_id] = item.vds_s;
		if(item.dsrc_link_id) dsrcStyle[item.dsrc_link_id] = item.dsrc_s;
		if(item.congzone_id) congzoneStyle[item.congzone_id] = item.con_s;				
	});
	
    var styles = {
        'MultiLineString' : [
		    new ol.style.Style({
		        stroke: new ol.style.Stroke({
		            color: '#C8C8C8',
		            width: 8,
					lineJoin: 'miter',
					lineCap: 'miter'
		        })
		    }),
            new ol.style.Style({
                stroke : new ol.style.Stroke({
                    color : '#076828',
                    width : 7,
					lineJoin: 'miter',
					lineCap: 'miter'
                })
            })
        ],
		'gray': [
	        new ol.style.Style({
	            stroke: new ol.style.Stroke({
	                color: '#808080',
	                width: 7,
					lineJoin: 'miter',
					lineCap: 'miter'
	            })
	        })
	    ]
    };

	function setStyle(speed){
		if(speed >= 80){
//			return '#7FFF00'
			return '#076828'
		}else if(speed >= 40 && speed < 80){
//			return '#FFFF00'
			return '#ffbc00'
		}else if(speed >= 20 && speed < 40){
			return '#ff8a00'
		}else if(speed > 10 && speed < 20){
			return '#ff000d'
		}else if(speed > 0 && speed <= 10){
			return '#000';
		}else{
			return '#747474';
		}
	}

    var styleFunction = function(feature){
		var feature_vds_id = feature.getProperties().vds_id;
		var feature_dsrc_id = feature.getProperties().dsrc_link_id;
		var feature_congzone_id = feature.getProperties().congzone_id;
		
		if(feature_vds_id && !data_vds_id.includes(feature_vds_id) 
			&& feature_dsrc_id && !data_dsrc_id.includes(feature_dsrc_id)
			&& feature_congzone_id && !data_congzone_id.includes(feature_congzone_id)){
			return styles['gray'];
		}
		
		var vds_s = vdsStyle[feature_vds_id];
		var dsrc_s = dsrcStyle[feature_dsrc_id];
		var con_s = congzoneStyle[feature_congzone_id];
		
		var color;
        if (vds_s !== undefined) {
            color = setStyle(vds_s);
        } else if (dsrc_s !== undefined) {
            color = setStyle(dsrc_s);
        } else if (con_s !== undefined) {
            color = setStyle(con_s);
        } else {
            color = '#C8C8C8';
        }

		return [
            new ol.style.Style({
                stroke: new ol.style.Stroke({
                    color: '#C8C8C8',
                    width: 8,
                    lineJoin: 'miter',
                    lineCap: 'miter'
                })
            }),
            new ol.style.Style({
                stroke: new ol.style.Stroke({
                    color: color,
                    width: 7,
                    lineJoin: 'miter',
                    lineCap: 'miter'
                })
            })
        ];
    };
	
    function createVectorLayer(geoJsonObject, styleFunction) {
		var data_line_code = data.daoData.map(item=>item.line_code);
		
		var fileterFeatures = new ol.format.GeoJSON().readFeatures(geoJsonObject, {
			featureProjection: 'EPSG:3857'
		}).filter(feature => {
			var feature_line_code = feature.getProperties().route_id;
			return data_line_code.includes(feature_line_code);
		});
		var tp = document.getElementById('type').value;
		var selectObj = tp == 'typeVds' ? 'vds_id' : tp == 'typeDsrc' ? 'dsrc_link_id' : tp == 'typeCongzone' ? 'congzone_id' : 'vds_id';
		fileterFeatures = fileterFeatures.filter( feature => { return !(feature.getProperties()[selectObj] == '' || feature.getProperties()[selectObj] == null) } );
		
        var vectorSource = new ol.source.Vector({
            features: fileterFeatures
        });

        return new ol.layer.Vector({
            source: vectorSource,
            style: styleFunction
        });
    }

    if (vectorLayer_link) {
        _map.removeLayer(vectorLayer_link);
    }
	
	vectorLayer_link = createVectorLayer(linkObject, styleFunction);
	_map.addLayer(vectorLayer_link);
}

