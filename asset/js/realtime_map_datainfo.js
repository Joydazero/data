/* 조회 */
function fnDataInfoSearch(){
	
	updateDateTime()
	
	var vdsTimeInterval = $("#vdsTimeInterval").val();
	var dsrcTimeInterval = $("#dsrcTimeInterval").val();
	var congzoneTimeInterval = $("#congzoneTimeInterval").val();
	
	var option = {
		url      : "situation/realtime_map_data_info_search.do",
		param	 : {
			vdsTimeInterval : vdsTimeInterval,
			dsrcTimeInterval : dsrcTimeInterval,
			congzoneTimeInterval : congzoneTimeInterval
		},
		callback : fnDataInfoSearchCallback
	}
	callService(option);
};

/* 조회 callback */
function fnDataInfoSearchCallback(json){
	var code = json.data.CODE;
    var data = json.data;

	var vds_success_cnt = data.daoVdsData[0].vds_success_cnt;
	var dsrc_success_cnt = data.daoDsrcData[0].dsrc_success_cnt;
	var con_success_cnt = data.daoCongzoneData[0].con_success_cnt;

	var vds_total_cnt = data.getVdsRealtimeTotalDatainfo[0].vds_total_cnt;
	var dsrc_total_cnt = data.getDsrcRealtimeTotalDatainfo[0].dsrc_total_cnt;
	var con_total_cnt = data.getCongzoneRealtimeTotalDatainfo[0].con_total_cnt;

	var vds_diff_cnt = vds_total_cnt - vds_success_cnt;
    var dsrc_diff_cnt = dsrc_total_cnt - dsrc_success_cnt;
    var conzone_diff_cnt = con_total_cnt - con_success_cnt;
	
    if (code == "S") {
        document.querySelector('table tr:nth-child(1) td:nth-child(2)').textContent = vds_total_cnt;
        document.querySelector('table tr:nth-child(1) td:nth-child(3)').textContent = dsrc_total_cnt;
        document.querySelector('table tr:nth-child(1) td:nth-child(4)').textContent = con_total_cnt;
        
        document.querySelector('table tr:nth-child(2) td:nth-child(2)').textContent = vds_success_cnt;
        document.querySelector('table tr:nth-child(2) td:nth-child(3)').textContent = dsrc_success_cnt;
        document.querySelector('table tr:nth-child(2) td:nth-child(4)').textContent = con_success_cnt;

		document.querySelector('table tr:nth-child(3) td:nth-child(2)').textContent = vds_diff_cnt;
        document.querySelector('table tr:nth-child(3) td:nth-child(3)').textContent = dsrc_diff_cnt;
        document.querySelector('table tr:nth-child(3) td:nth-child(4)').textContent = conzone_diff_cnt;
    }
}

/* 현재 날짜시간 */
function updateDateTime() {
    var now = new Date();
    var year = now.getFullYear();
    var month = ('0' + (now.getMonth() + 1)).slice(-2);
    var day = ('0' + now.getDate()).slice(-2);
    var hours = ('0' + now.getHours()).slice(-2);
    var minutes = ('0' + now.getMinutes()).slice(-2);
    var seconds = ('0' + now.getSeconds()).slice(-2);
    
    var currentDateTime = year + '-' + month + '-' + day + ' ' + hours + ':' + minutes + ':' + seconds;
    document.getElementById('currentDateTime').innerHTML = "현재 : " + currentDateTime;
}