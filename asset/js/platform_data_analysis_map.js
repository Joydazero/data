var ROOT_PATH = "/asset/js/";
	var chartDom = document.getElementById("map");
	var myChart0 = echarts.init(chartDom);
	var option0;
	
	$.getJSON(ROOT_PATH + "/22.json", function (geoJson) {
		echarts.registerMap("KOREA", geoJson);
		 myChart0.setOption(option0 = {
            tooltip: {
                trigger: 'item',
                formatter: '{b}',
                 showContent: false
            },
            legend: {
                 orient: 'vertical',
                left: 'right',
                data: ['1순위 노선', '2순위 노선', '3순위 노선', '그 외'],
                textStyle: {
                    color: '#fff', // 텍스트 색상
                    fontSize: 14 // 텍스트 크기
                },
                inactiveColor: '#000', 
                selectedMode: 'single', // 다중 선택 가능
                itemWidth: 40, // 구별점 너비
                itemHeight: 14, // 구별점 높이
                itemGap: 10, // 항목 간 간격
                icon: 'rect', // 아이콘 모양 (예: 'circle', 'rect')
                selected: false,      
                inactiveBorderColor: 'auto',
                inactiveBorderWidth: 1,
                itemStyle : {
                    borderWidth : 1,
                    borderColor : '#000',
                }
            },
            geo: {
                 show: true,
                map: 'KOREA',
                roam: true,
                zoom: 1.5,
                  itemStyle: {
                    areaColor: '#ccc',       // 지역 기본 색상
                    borderColor: '#eee',      // 경계선 색상
                    borderWidth: 1,
                    emphasis: {
                        areaColor: '#a0a0a0'  // 강조된 상태의 지역 색상
                    }
                },
                label: {
                    show: true,
                    color: '#000000',         // 지역 이름 기본 텍스트 색상
                    fontSize: 12,
                    emphasis: {
                        show: true,
                        color: '#ff0000'      // 강조된 상태의 텍스트 색상
                    }
                }               
            },
            series: [
                {
                    name: '1순위 노선',
                    type: 'lines',
                    coordinateSystem: 'geo',
                    textStyle:{
                        color: '#333'
                    },
                    lineStyle: {
                        color: '#ff3333',
                        width: 7,
                        cap:'round',
                        join: 'round',
                        opcity: 1,
                         symbol: 'circle', 
                    },                   
                    data: [
                        { coords: [[126.9780, 37.7667], [129.0776, 37.1796]] }, // 예시: 서울-부산
                        // 추가 경로 데이터
                    ]
                },
                {
                    name: '2순위 노선',
                    type: 'lines',
                    coordinateSystem: 'geo',
                    //  textStyle:{
                    //     color: '#fff'
                    // },
                    lineStyle: {
                        color: '#33ff33',
                        width: 7,
                        cap:'round'
                    },
                    data: [
                        { coords: [[127.3847, 36.3704], [129.0776, 37.1796]] }, // 예시: 대전-부산
                        // 추가 경로 데이터
                    ]
                },
                {
                    name: '3순위 노선',
                    type: 'lines',
                    coordinateSystem: 'geo',
                    //  textStyle:{
                    //     color: '#fff'
                    // },7
                    lineStyle: {
                        color: '#3333ff',
                        width: 7,
                        cap:'round'
                    },
                    data: [
                        { coords: [[126.9780, 37.5665], [126.7052, 37.4563]] }, // 예시: 서울-인천
                        // 추가 경로 데이터
                    ]
                },
                {
                    name: '그 외',
                    type: 'lines',
                    coordinateSystem: 'geo',
                    //  textStyle:{
                    //     color: '#fff'
                    // },
                    lineStyle: {
                        color: '#bbbbbb',
                        width: 7,
                        type: 'dashed',
                        cap:'round'
                    },
                    data: [
                        // 그 외의 노선 추가
                    ]
                }
            ]
        });
    });

    option0 && myChart0.setOption(option0);