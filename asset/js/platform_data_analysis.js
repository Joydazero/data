
//일 전기차 교통량
var dom = document.getElementById('elecar_data_graph_01');
var myChart = echarts.init(dom, null, {
  renderer: 'svg',
  useDirtyRect: false
});
var app = {};
var option;
let elecarDataTrafficNum = 3779;
let elecarDataTrafficCpdayPer = -5;

const eleGp01TopTxt01 = getComputedStyle(document.body).getPropertyValue('--elecar_data_graph_01_etc_toptxt01').trim();
const eleGp01TopChangeLabelTxt01 = getComputedStyle(document.body).getPropertyValue('--elecar_data_graph_01_etc_topchange_label').trim();
const eleGpdataBgColor = getComputedStyle(document.body).getPropertyValue('--elecar_data_graph_bgcolor').trim();
const eleGp04BgColor01 = getComputedStyle(document.body).getPropertyValue('--elecar_data_graph_04_bar_bgcolor01').trim(); // 연도별 전기차 바 배경색1
const eleGp04BgColor02 = getComputedStyle(document.body).getPropertyValue('--elecar_data_graph_04_bar_bgcolor02').trim(); // 연도별 전기차 바 배경색2
const eleGp04BgColor03 = getComputedStyle(document.body).getPropertyValue('--elecar_data_graph_04_bar_bgcolor03').trim(); // 잂여균,회당평균량,회당평균충전시간 배경색
const eleGp01Intxtcolor01  = getComputedStyle(document.body).getPropertyValue('--elecar_data_graph_intxt_color01').trim(); // 일전기차교통량 그래프 in text

option = {
  graphic: [
       {
            type: 'text',            
            left: '45%',
            top: '3%',                   
            style: {
                text: `${elecarDataTrafficNum}대`,  
                fontSize: 24,
                fontWeight: 'bold',
                fill: eleGp01TopTxt01
             },           
            
         },         
       {
            type: 'rect',
            right: '10%',
            top: '2%', 
            shape: {
              width: 70,
              height: 40
            },
            style: {
                text: `${elecarDataTrafficCpdayPer}%\n전일대비`,  
                fontSize: 16,
                fontWeight: 'bold',
                fill: '#404040',
                stroke: '#999',
                lineWidth: 1,
                textFill: eleGp01TopChangeLabelTxt01,
                textAlign: 'center',   
                //textVerticalAlign: 'middle'    
             }
        }
      ]
    ,
  xAxis: {
    type: 'category',
    data: ['2024-­10­-21', '2024-­10­-21', '2024-­10­-21', '2024-­10­-21'],
    scale: true,
    boundaryGap: true,
    axisLabel: {
        fontSize: 11,    
        interval: 0 // 모든 레이블 표시
    },
    grid: {
      containLabel: true,      
      bottom: '0%',
    }
  },
  yAxis: {
    type: 'value',
    show: false,
     scale: true,
  },
//    dataZoom: {
//     start: 60,
//     type: "inside"
//   },
  series: [
    {
      data: [2500, 3100, 4000, 3779],
      type: 'line',
      label: {  
        show: true,
        color : eleGp01Intxtcolor01
      },
      symbol: 'circle', // 심볼 모양
      symbolSize: 8, 
      itemStyle: {
                color:  eleGpdataBgColor
      },
      lineStyle: {  color: eleGpdataBgColor }  ,
      textStyle :{
        color : '#ff0000'
      }    
    }
  ]
};

if (option && typeof option === 'object') {
  myChart.setOption(option);
}


window.addEventListener('resize', myChart.resize);

// 일 충전량

var dom2 = document.getElementById('elecar_data_graph_02');
var myChart2 = echarts.init(dom2, null, {
  renderer: 'svg',
  useDirtyRect: false
});
var app = {};
var option2;
let elecarDataChargeNum = 300;
let elecarDataChargeCpdayPer = 20;
const eleGp02TopTxt01 = getComputedStyle(document.body).getPropertyValue('--elecar_data_graph_01_etc_toptxt01').trim();
const eleGp02TopChangeLabelTxt01 = getComputedStyle(document.body).getPropertyValue('--elecar_data_graph_01_etc_topchange_label').trim();

option2 = {
  graphic: [
       {
            type: 'text',
            left: '45%',
            top: '3%',             
            //rotation: Math.PI / 2,
            style: {
                text: `${elecarDataChargeNum}Wh`,  
                fontSize: 24,
                fontWeight: 'bold',
                fill: eleGp02TopTxt01  
             }
         },
       {
            type: 'rect',
            right: '10%',
            top: '2%', 
            shape: {
              width: 70,
              height: 40
            },
            style: {
                text: `${elecarDataChargeCpdayPer}%\n전일대비`,  
                fontSize: 16,
                fontWeight: 'bold',
                fill: '#404040',
                stroke: '#999',
                lineWidth: 1,
                textFill: eleGp02TopChangeLabelTxt01,
                textAlign: 'center',   
                //textVerticalAlign: 'middle'    
             }
        }
      ]
    ,
  xAxis: {
    type: 'category',
    data: ['2024-­10­-21', '2024-­10­-21', '2024-­10­-21', '2024-­10­-21'],
    axisLabel: {
        fontSize: 11,    
        interval: 0 // 모든 레이블 표시
    },
    grid: {
      containLabel: true
    }
  },
  yAxis: {
    type: 'value',
    show: false
  },
  series: [
    {
      data: [300, 200, 250, 300],
      type: 'bar',
      label: {  
        show: true,
        color : eleGp01Intxtcolor01
      },
      barWidth : "40%",
      itemStyle: {
                color: eleGp01Intxtcolor01
      }
    }
  ]
};

if (option2 && typeof option2 === 'object') {
  myChart2.setOption(option2);
}

window.addEventListener('resize', myChart2.resize);

// 일 충전 횟수
var dom3 = document.getElementById('elecar_data_graph_03');
var myChart3 = echarts.init(dom3, null, {
  renderer: 'svg',
  useDirtyRect: false
});
var app = {};
var option3;
let elecarDataChargeCountNum = 4800;
let elecarDataChargeCountPer = -4;
const eleGp02TopTxt03 = getComputedStyle(document.body).getPropertyValue('--elecar_data_graph_01_etc_toptxt01').trim();
const eleGp02TopChangeLabelTxt03 = getComputedStyle(document.body).getPropertyValue('--elecar_data_graph_03_etc_topchange_label').trim();


option3 = {
  graphic: [
       {
            type: 'text',
            left: '45%',
            top: '3%',    
            //rotation: Math.PI / 2,
            style: {
                text: `${elecarDataChargeCountNum}건`,  
                fontSize: 24,
                fontWeight: 'bold',
                fill: eleGp02TopTxt03  
             }
         },
       {
            type: 'rect',
            right: '10%',
            top: '2%', 
            shape: {
              width: 70,
              height: 40
            },
            style: {
                text: `${elecarDataChargeCountPer}%n전일대비`,  
                fontSize: 16,
                fontWeight: 'bold',
                fill: '#404040',
                stroke: '#999',
                lineWidth: 1,
                 textFill: eleGp02TopChangeLabelTxt03,
                textAlign: 'center',   
                //textVerticalAlign: 'middle'    
             }
        }
      ]
    ,
  xAxis: {
    type: 'category',
    data: ['2024-­10­-21', '2024-­10­-21', '2024-­10­-21', '2024-­10­-21'],
     axisLabel: {
        fontSize: 11,    
        interval: 0 // 모든 레이블 표시
    },
  },
  yAxis: {
    type: 'value',
    show: false,
     min: function(value) {
        return value.min * 0.9;  // 최소값을 데이터 최소값의 90%로 설정
    },
    max: function(value) {
        return value.max * 1.1;  // 최대값을 데이터 최대값의 110%로 설정
    }
  },
  series: [
    {
      data: [4820, 4900, 5000, 4800],
      type: 'line',
      label: { 
         show: true,
         color : eleGp01Intxtcolor01
      },
      symbol: 'circle', // 심볼 모양
      symbolSize: 8, 
      itemStyle: {
                color: eleGpdataBgColor 
      },
      lineStyle: {  color: eleGpdataBgColor }  
    }
  ]
};

if (option3 && typeof option3 === 'object') {
  myChart3.setOption(option3);
}

window.addEventListener('resize', myChart3.resize);

// 휴게소별 월 충전현황
// 휴게소별 월 충전현황 - 수도권본부
var domRest01 = document.getElementById('rest_area_chargingstation_data_01');
var myChartRest01 = echarts.init(domRest01, null, {
  renderer: 'svg',
  useDirtyRect: false
});
var app = {};

var optionRest01;
var colors1 = ['#5470C6', '#91CC75', '#FAC858', '#EE6666', '#73C0DE'];

optionRest01 = { 
  grid : {
         left: '30%',  // Y축 레이블 공간을 늘림        
         right: '15%',
          top: '8%',     // 상단 여백을 좁게 설정
        bottom: '8%'   // 하단 여백을 좁게 설정
  },
  xAxis: {
    type: 'value',
   axisLabel : {
    show:false
   }
   
  },
  yAxis: {
     type: 'category',
     data: ['죽전(서울)', '화성(서울)', '시흥하늘(양방향)', '안성(부산)', '매송(서울)', '매송(목포)','안성(서을)','이천(남이)','서울만남(부산)','화성(목포)','하남드림(양방향)','서하남(판교)','이천(하남)','마장(양방향)','성남(일산)','기흥(부산)','구리(일산)'],
     inverse: true,
     axisLabel: {
        fontSize: 11,    
        interval: 0 // 모든 레이블 표시
    },
      boundaryGap: true
  },
  series: [
    {
      data: [752, 700,500,450, 300, 300,280,270,240,200,200,180,180,150,150,150,150],
      itemStyle: {
                color: function(params) {
                    // 데이터 인덱스에 따른 색상 선택
                    return colors1[params.dataIndex % colors1.length];
                }
      },
      type: 'bar'
      
    }
  ]
};

if (optionRest01 && typeof optionRest01 === 'object') {
  myChartRest01.setOption(optionRest01);
}

window.addEventListener('resize', myChartRest01.resize);

// 휴게소별 월 충전현황 - 강원본부

var domRest02 = document.getElementById('rest_area_chargingstation_data_02');
var myChartRest02 = echarts.init(domRest02, null, {
  renderer: 'svg',
  useDirtyRect: false
});
var app = {};

var optionRest02;
var colors2 = ['#5470C6', '#91CC75', '#FAC858', '#EE6666', '#73C0DE'];

optionRest02 = { 
  grid : {
         left: '30%',  // Y축 레이블 공간을 늘림        
         right: '15%',
          top: '8%',     // 상단 여백을 좁게 설정
        bottom: '8%'   // 하단 여백을 좁게 설정
  },
  xAxis: {
    type: 'value',
    axisLabel : {
      show:false
    }
  },
  yAxis: {
     type: 'category',
     data: ['횡성(인천)', '횡성(강릉)', '문막(인천)', '홍천(서울)', '덕평(인천)', '원주(부산)','강릉대관령(인천)','강릉대관령(강릉)','동해(동헤)','춘천(부산)','문막(강릉)','구정(속초)','구정(동해)'],
     inverse: true,
     axisLabel: {
        fontSize: 11,    
        interval: 0 // 모든 레이블 표시
    },
      boundaryGap: true
  },
  series: [
    {
      data: [752, 700,500,450, 300, 300,280,270,240,200,200,180,180,150,150,150,150],
      itemStyle: {
                color: function(params) {
                    // 데이터 인덱스에 따른 색상 선택
                    return colors2[params.dataIndex % colors2.length];
                }
      },
      type: 'bar'
      
    }
  ]
};

if (optionRest02 && typeof optionRest02 === 'object') {
  myChartRest02.setOption(optionRest02);
}

window.addEventListener('resize', myChartRest02.resize);

// 휴게소별 월 충전현황 - 충북본부
var domRest03 = document.getElementById('rest_area_chargingstation_data_03');
var myChartRest03 = echarts.init(domRest03, null, {
  renderer: 'svg',
  useDirtyRect: false
});
var app = {};

var optionRest03;
var colors3 = ['#5470C6', '#91CC75', '#FAC858', '#EE6666', '#73C0DE'];

optionRest03 = { 
  grid : {
         left: '30%',  // Y축 레이블 공간을 늘림        
         right: '15%',
          top: '8%',     // 상단 여백을 좁게 설정
        bottom: '8%'   // 하단 여백을 좁게 설정
  },
  xAxis: {
    type: 'value',
   axisLabel : {
    show:false
   }
   
  },
  yAxis: {
     type: 'category',
     data: ['33(인천)', '횡성(강릉)', '문막(인천)', '홍천(서울)', '덕평(인천)', '원주(부산)','강릉대관령(인천)','강릉대관령(강릉)','동해(동헤)','춘천(부산)','문막(강릉)','구정(속초)','구정(동해)'],
     inverse: true,
     axisLabel: {
        fontSize: 11,    
        interval: 0 // 모든 레이블 표시
    },
      boundaryGap: true
  },
  series: [
    {
      data: [752, 700,500,450, 300, 300,280,270,240,200,200,180,180,150,150,150,150],
      itemStyle: {
                color: function(params) {
                    // 데이터 인덱스에 따른 색상 선택
                    return colors3[params.dataIndex % colors3.length];
                }
      },
      type: 'bar'
      
    }
  ]
};

if (optionRest03 && typeof optionRest03 === 'object') {
  myChartRest03.setOption(optionRest03);
}

window.addEventListener('resize', myChartRest03.resize);

// 휴게소별 월 충전현황 - 대전충남본부
var domRest04 = document.getElementById('rest_area_chargingstation_data_04');
var myChartRest04 = echarts.init(domRest04, null, {
  renderer: 'svg',
  useDirtyRect: false
});
var app = {};

var optionRest04;
var colors4 = ['#5470C6', '#91CC75', '#FAC858', '#EE6666', '#73C0DE'];

optionRest04 = { 
  grid : {
         left: '30%',  // Y축 레이블 공간을 늘림        
         right: '15%',
          top: '8%',     // 상단 여백을 좁게 설정
        bottom: '8%'   // 하단 여백을 좁게 설정
  },
  xAxis: {
    type: 'value',
   axisLabel : {
    show:false
   }
   
  },
  yAxis: {
     type: 'category',
     data: ['44(인천)', '횡성(강릉)', '문막(인천)', '홍천(서울)', '덕평(인천)', '원주(부산)','강릉대관령(인천)','강릉대관령(강릉)','동해(동헤)','춘천(부산)','문막(강릉)','구정(속초)','구정(동해)'],
     inverse: true,
     axisLabel: {
        fontSize: 11,    
        interval: 0 // 모든 레이블 표시
    },
      boundaryGap: true
  },
  series: [
    {
      data: [752, 700,500,450, 300, 300,280,270,240,200,200,180,180,150,150,150,150],
      itemStyle: {
                color: function(params) {
                    // 데이터 인덱스에 따른 색상 선택
                    return colors4[params.dataIndex % colors4.length];
                }
      },
      type: 'bar'
      
    }
  ]
};

if (optionRest04 && typeof optionRest04 === 'object') {
  myChartRest04.setOption(optionRest04);
}

window.addEventListener('resize', myChartRest04.resize);

// 휴게소별 월 충전현황 - 전북본부

var domRest05 = document.getElementById('rest_area_chargingstation_data_05');
var myChartRest05 = echarts.init(domRest05, null, {
  renderer: 'svg',
  useDirtyRect: false
});
var app = {};

var optionRest05;
var colors5 = ['#5470C6', '#91CC75', '#FAC858', '#EE6666', '#73C0DE'];

optionRest05 = { 
  grid : {
         left: '30%',  // Y축 레이블 공간을 늘림        
         right: '15%',
          top: '8%',     // 상단 여백을 좁게 설정
        bottom: '8%'   // 하단 여백을 좁게 설정
  },
  xAxis: {
    type: 'value',
   axisLabel : {
    show:false
   }
   
  },
  yAxis: {
     type: 'category',
     data: ['55(인천)', '횡성(강릉)', '문막(인천)', '홍천(서울)', '덕평(인천)', '원주(부산)','강릉대관령(인천)','강릉대관령(강릉)','동해(동헤)','춘천(부산)','문막(강릉)','구정(속초)','구정(동해)'],
     inverse: true,
     axisLabel: {
        fontSize: 11,    
        interval: 0 // 모든 레이블 표시
    },
      boundaryGap: true
  },
  series: [
    {
      data: [752, 700,500,450, 300, 300,280,270,240,200,200,180,180,150,150,150,150],
      itemStyle: {
                color: function(params) {
                    // 데이터 인덱스에 따른 색상 선택
                    return colors5[params.dataIndex % colors5.length];
                }
      },
      type: 'bar'
      
    }
  ]
};

if (optionRest05 && typeof optionRest05 === 'object') {
  myChartRest05.setOption(optionRest05);
}

window.addEventListener('resize', myChartRest05.resize);

// 휴게소별 월 충전현황 - 광주전남본부

var domRest06 = document.getElementById('rest_area_chargingstation_data_06');
var myChartRest06 = echarts.init(domRest06, null, {
  renderer: 'svg',
  useDirtyRect: false
});
var app = {};

var optionRest06;
var colors6 = ['#5470C6', '#91CC75', '#FAC858', '#EE6666', '#73C0DE'];

optionRest06 = { 
  grid : {
         left: '30%',  // Y축 레이블 공간을 늘림        
         right: '15%',
          top: '8%',     // 상단 여백을 좁게 설정
        bottom: '8%'   // 하단 여백을 좁게 설정
  },
  xAxis: {
    type: 'value',
   axisLabel : {
    show:false
   }
   
  },
  yAxis: {
     type: 'category',
     data: ['66(인천)', '횡성(강릉)', '문막(인천)', '홍천(서울)', '덕평(인천)', '원주(부산)','강릉대관령(인천)','강릉대관령(강릉)','동해(동헤)','춘천(부산)','문막(강릉)','구정(속초)','구정(동해)'],
     inverse: true,
     axisLabel: {
        fontSize: 11,    
        interval: 0 // 모든 레이블 표시
    },
      boundaryGap: true
  },
  series: [
    {
      data: [752, 700,500,450, 300, 300,280,270,240,200,200,180,180,150,150,150,150],
      itemStyle: {
                color: function(params) {
                    // 데이터 인덱스에 따른 색상 선택
                    return colors6[params.dataIndex % colors6.length];
                }
      },
      type: 'bar'
      
    }
  ]
};

if (optionRest06 && typeof optionRest06 === 'object') {
  myChartRest06.setOption(optionRest06);
}

window.addEventListener('resize', myChartRest06.resize);

// 휴게소별 월 충전현황 - 대구경북본부
var domRest07 = document.getElementById('rest_area_chargingstation_data_07');
var myChartRest07 = echarts.init(domRest07, null, {
  renderer: 'svg',
  useDirtyRect: false
});
var app = {};

var optionRest07;
var colors7 = ['#5470C6', '#91CC75', '#FAC858', '#EE6666', '#73C0DE'];

optionRest07 = { 
  grid : {
         left: '30%',  // Y축 레이블 공간을 늘림        
         right: '15%',
          top: '8%',     // 상단 여백을 좁게 설정
        bottom: '8%'   // 하단 여백을 좁게 설정
  },
  xAxis: {
    type: 'value',
   axisLabel : {
    show:false
   }
   
  },
  yAxis: {
     type: 'category',
     data: ['77(인천)', '횡성(강릉)', '문막(인천)', '홍천(서울)', '덕평(인천)', '원주(부산)','강릉대관령(인천)','강릉대관령(강릉)','동해(동헤)','춘천(부산)','문막(강릉)','구정(속초)','구정(동해)'],
     inverse: true,
     axisLabel: {
        fontSize: 11,    
        interval: 0 // 모든 레이블 표시
    },
      boundaryGap: true
  },
  series: [
    {
      data: [752, 700,500,450, 300, 300,280,270,240,200,200,180,180,150,150,150,150],
      itemStyle: {
                color: function(params) {
                    // 데이터 인덱스에 따른 색상 선택
                    return colors7[params.dataIndex % colors7.length];
                }
      },
      type: 'bar'
      
    }
  ]
};

if (optionRest07 && typeof optionRest07 === 'object') {
  myChartRest07.setOption(optionRest07);
}

window.addEventListener('resize', myChartRest07.resize);

// 휴게소별 월 충전현황 - 부산경남본부
var domRest08 = document.getElementById('rest_area_chargingstation_data_08');
var myChartRest08 = echarts.init(domRest08, null, {
  renderer: 'svg',
  useDirtyRect: false
});
var app = {};

var optionRest08;
var colors8 = ['#5470C6', '#91CC75', '#FAC858', '#EE6666', '#73C0DE'];

optionRest08 = { 
  grid : {
         left: '30%',  // Y축 레이블 공간을 늘림        
         right: '15%',
          top: '8%',     // 상단 여백을 좁게 설정
        bottom: '8%'   // 하단 여백을 좁게 설정
  },
  xAxis: {
    type: 'value',
   axisLabel : {
    show:false
   }
   
  },
  yAxis: {
     type: 'category',
     data: ['88(인천)', '횡성(강릉)', '문막(인천)', '홍천(서울)', '덕평(인천)', '원주(부산)','강릉대관령(인천)','강릉대관령(강릉)','동해(동헤)','춘천(부산)','문막(강릉)','구정(속초)','구정(동해)'],
     inverse: true,
     axisLabel: {
        fontSize: 11,    
        interval: 0 // 모든 레이블 표시
    },
      boundaryGap: true
  },
  series: [
    {
      data: [752, 700,500,450, 300, 300,280,270,240,200,200,180,180,150,150,150,150],
      itemStyle: {
                color: function(params) {
                    // 데이터 인덱스에 따른 색상 선택
                    return colors8[params.dataIndex % colors8.length];
                }
      },
      type: 'bar'
      
    }
  ]
};

if (optionRest08 && typeof optionRest08 === 'object') {
  myChartRest08.setOption(optionRest08);
}

window.addEventListener('resize', myChartRest08.resize);

// 연도별 전기차 누적등록현황
var dom4 = document.getElementById('elecar_data_graph_04');
var myChart4 = echarts.init(dom4, null, {
  renderer: 'svg',
  useDirtyRect: true
});
var app = {};
const eleGp04Txt01 = getComputedStyle(document.body).getPropertyValue('--elecar_data_graph_04_legend_txt01').trim();
const eleGp04Txt02 = getComputedStyle(document.body).getPropertyValue('--elecar_data_graph_04_legend_txt02').trim();
const eleGp04SideYtxt = getComputedStyle(document.body).getPropertyValue('--elecar_data_graph_04_sidex_label_txt').trim();
var option4;

option4 = {
  
  grid : {
        top:'5%',
        left:'15%',
         right: '15%',
         bottom:'10%'
  },
  xAxis: {
    type: 'category',
    data: ['2020', '2021', '2022', '2023'],
     axisLabel: {
        fontSize: 11,    
        interval: 0 // 모든 레이블 표시
    }
  },
  yAxis: {
    type: 'value'
    
  },
  series: [
    {
      name: '전기',
      type: 'bar',
      stack: 'total',
      data: [0.6, 0.9,1.5, 2.1],
      label: {
            show: true,  // 데이터 레이블을 표시
            position: 'top',
            color : eleGp01Intxtcolor01,
            formatter: function (params) {
                return params.value + '%';
            }
        },
      barMinHeight: 10, // 최소 바 높이
      zlevel:2,
      emphasis: {
        focus: 'series'
      },

      //  showBackground: true,
      // backgroundStyle: {
      //   color: 'rgba(180, 180, 180, 0.2)'
      // }
       itemStyle: {
                color: eleGp04BgColor01
        
      },
    },
    {
      name: '야외',
      type: 'bar',
      stack: 'total',
      label: {
        show: true
      },
      emphasis: {
        focus: 'series'
      },
      zlevel:1,
      data: [134962,231443,389855,543900],
      label: {
            show: true,  // 데이터 레이블을 표시
            position: 'top',
            color : eleGp01Intxtcolor01,
            formatter: function (params) {
                return (params.value / 1000);
            }
        },
        itemStyle: {
                color: eleGp04BgColor02
      },
      
    },    
    //{      
    //   data: [0.6, 0.9, 1.5, 2.1],
    //   type: 'bar',      
    //   showBackground: true,
    //   backgroundStyle: {
    //     color: 'rgba(180, 180, 180, 0.2)'
    //   },
    //    label: {
    //     show: true,
    //     position: 'inside', // 막대 안쪽에 표시
    //     formatter: (params) => params.value + '%'
    //  },
    //   markPoint: { // markLine is in the same way.
    //           data: [{
    //               coord: [5, 33.4], // The number 5 represents xAxis.data[5], that is, '33'.
    //               // coord: ['5', 33.4] // The string '5' represents the '5' in xAxis.data.
    //           }]
    //   }
    //}
    
  ],
  
     graphic: [
       {
            type: 'text',
            left: '1%',
            top: 'middle',  // 범례 위에 위치하도록 설정
            rotation: Math.PI / 2,
            style: {
                text: '전체차량등록수',  // 제목 텍스트
                fontSize: 13,
                fontWeight: 'bold',
                fill: eleGp04SideYtxt  // 텍스트 색상 설정
             }
         },
       {
            type: 'text',
            right: '8%',
            top: '40%',  // 범례 위에 위치하도록 설정
            style: {
                text: '연료',  // 제목 텍스트
                fontSize: 16,
                fontWeight: 'bold',
                fill: '#fff'  // 텍스트 색상 설정
             }
        }
      ]
    ,
    legend: {
    name : 'elect02',
    top: '50%%',
    show: true,
    data: [
      {
        name: '야외'
        ,
        itemStyle: {
          color: eleGp04BgColor02
        },
        textStyle: {
          color: eleGp04Txt01 
        },
    },
      {
      name: '전기'
      ,
      itemStyle: {
        color: eleGp04BgColor01
      },
      textStyle: {
        color: eleGp04Txt02
      }
    }
  
  ],
    // textStyle: {
    //         color: '#FF5733',  // 범례 텍스트 색상 설정
    //     },
    //  itemStyle: {
    //         color: '#FF5733'  // 범례 아이콘 색상 설정
    //  },

    orient: 'vertical',
    right: '0',
   
    }
};

if (option4 && typeof option4 === 'object') {
  myChart4.setOption(option4);
}

window.addEventListener('resize', myChart4.resize);

//일평균 충전 횟수
var dom5 = document.getElementById('elecar_data_graph_05');
var myChart5 = echarts.init(dom5, null, {
  renderer: 'svg',
  useDirtyRect: false
});
var app = {};

var option5;

option5 = {
   grid : {
         left: '15%',  // Y축 레이블 공간을 늘림      
  },
  xAxis: {
    type: 'category',
    data: ['2021', '2022', '2023'],
    axisLabel: {
        fontSize: 11,    
        interval: 0 // 모든 레이블 표시
    },
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      data: [2500, 4800, 4900],
      type: 'bar',
      itemStyle : {
        color : eleGp04BgColor03
      }
    }
  ]
};

if (option5 && typeof option5 === 'object') {
  myChart5.setOption(option5);
}

window.addEventListener('resize', myChart5.resize);

//회당평균 충전량
var dom6 = document.getElementById('elecar_data_graph_06');
var myChart6 = echarts.init(dom6, null, {
  renderer: 'svg',
  useDirtyRect: false
});
var app = {};

var option6;

option6 = {
   grid : {
         top: '5%',  // Y축 레이블 공간을 늘림      
          bottom:'15%',
          left:'13%',
          right:'5%'
  },
  xAxis: {
    type: 'category',
    data: ['2021', '2022', '2023'],
    axisLabel: {      
        interval: 0 // 모든 레이블 표시
    },
  },
  yAxis: {
    type: 'value',
    scale: true,
    axisLabel: {      
        interval: 0 // 모든 레이블 표시
    },
    min: function(value) {
        return value.min * 0.9;  // 최소값을 데이터 최소값의 90%로 설정
    },
    // max: function(value) {
    //     return value.max * 1.1;  // 최대값을 데이터 최대값의 110%로 설정
    // }
  },
  series: [
    {
      data: [17.5, 19.3, 21],
      type: 'line',     
      itemStyle :{
        color : eleGp04BgColor03
      } 
    }
  ]
};

if (option6 && typeof option6 === 'object') {
  myChart6.setOption(option6);
}

window.addEventListener('resize', myChart6.resize);

//회당평균 충전 시간

var dom7 = document.getElementById('elecar_data_graph_07');
var myChart7 = echarts.init(dom7, null, {
  renderer: 'svg',
  useDirtyRect: false
});
var app = {};

var option7;

option7 = {
   grid : {
         top: '5%',  // Y축 레이블 공간을 늘림      
         bottom:'15%',
           left:'13%',
            right:'5%'
  },
  xAxis: {
    type: 'category',
    data: ['2021', '2022', '2023'],
    axisLabel: {      
        interval: 0 // 모든 레이블 표시
    },
  },
  yAxis: {
    type: 'value',
    scale: true,
    axisLabel: {      
        interval: 0 // 모든 레이블 표시
    },
    max: function(value) {
        return value.max * 1;  // 최소값을 데이터 최소값의 90%로 설정
    },
    // max: function(value) {
    //     return value.max * 1.1;  // 최대값을 데이터 최대값의 110%로 설정
    // }
  },
  series: [
    {
      data: [28.4, 28.3, 26.9],
      type: 'line',
      itemStyle : {
        color : eleGp04BgColor03
      }
    }
  ]
};

if (option7 && typeof option7 === 'object') {
  myChart7.setOption(option7);
}

window.addEventListener('resize', myChart7.resize);

//충전소 운영현황 TEXT

const stationOperationTxt = "1418";
const stationOperationTxtFormatter = stationOperationTxt.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")

const stationOperationPerTxt = "50";
document.getElementById("station-operation-txt").innerHTML = stationOperationTxtFormatter;
document.getElementById("station-operation-per-txt").innerHTML = stationOperationPerTxt;