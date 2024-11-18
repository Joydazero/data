// 월 전기차 교통량
var domRest01 = document.getElementById('restingplace_elecar_traffic_num_data');
var myChartRest01 = echarts.init(domRest01, null, {
  renderer: 'svg',
  useDirtyRect: false
});
var app = {};
const eachRestpTrafficGp01InColor = getComputedStyle(document.body).getPropertyValue('--restingplace_elecar_data_graph01_incolor').trim();
const eachRestpTrafficGp02InColor = getComputedStyle(document.body).getPropertyValue('--restingplace_elecar_data_graph02_incolor').trim();
const eachRestpTrafficGp03InColor01 = getComputedStyle(document.body).getPropertyValue('--restingplace_elecar_data_graph03_incolor01').trim();
const eachRestpTrafficGp03InColor02 = getComputedStyle(document.body).getPropertyValue('--restingplace_elecar_data_graph03_incolor02').trim();
const eachRestpTrafficGp03InColor03 = getComputedStyle(document.body).getPropertyValue('--restingplace_elecar_data_graph03_incolor03').trim();
const eachRestpTrafficGp03InTxtColor01 = getComputedStyle(document.body).getPropertyValue('--restingplace_elecar_data_graph03_intxt_color01').trim();
const eachRestpTrafficGp03InTxtColor02 = getComputedStyle(document.body).getPropertyValue('--restingplace_elecar_data_graph03_intxt_color02').trim();
const eachRestpTrafficGp03InTxtColor03 = getComputedStyle(document.body).getPropertyValue('--restingplace_elecar_data_graph03_intxt_color03').trim();
const eachRestpTrafficGp03LegendTxt = getComputedStyle(document.body).getPropertyValue('--restingplace_elecar_data_graph03_legend_txt').trim();
const eachRestpTrafficGp01GridTop = getComputedStyle(document.body).getPropertyValue('--restingplace_elecar_data_graph01_grid_top').trim();

var optionRest01;
optionRest01 = {
  grid: {
    top: '10%',
    bottom: '15%'
  },
  xAxis: {
    type: 'category',
    data: ['23.01', '23.02', '23.03', '23.04', '23.05', '23.06', '23.07','23.08','23.09','23.10','23.11','23.12'],
    axisLabel: {
        fontSize: 12,    
        interval: 0 
    },
    grid: {
      containLabel: true
    },  
  },
  yAxis: {
    type: 'value',   
    axisLabel: {
        fontSize: 12,    
        interval: 0 ,
         formatter: function (value, index) {
            return value + 'k';
         }
    },
     min: function(value) {
        return value.min * 1;  
    },
    max: function(value) {
        return value.max * 1;  
    },
  },
  series: [
    {
      data: [30, 27,27.5,23.8,24,24.6,28,29,27,26,31.9,31.7],
      type: 'line',
       itemStyle: {
                color: eachRestpTrafficGp01InColor
      },
      lineStyle: {  color: eachRestpTrafficGp01InColor }
    }
  ],
  media: [
        // {
        //     query: { maxWidth: 600 },
        //     option: {
        //         grid: {
        //             left: '5%',
        //             right: '5%',
        //             top: '5%',
        //             bottom: '5%'
        //         }
        //     }
        // },
        {
            query: { maxWidth: 980 },
            option: {
                grid: {
                    left: '10%',
                    right: '5%',
                    top: '8%',
                    bottom: '8%'
                },
              },
            
        }
    ]
};

function updateChart01() {
    var width = window.innerWidth;
    if ( width <= 420) {
        optionRest01.xAxis.axisLabel.fontSize = 9;
        optionRest01.yAxis.axisLabel.fontSize = 9;
      }
    else if (width <= 980) {
        optionRest01.xAxis.axisLabel.fontSize = 11;
        optionRest01.yAxis.axisLabel.fontSize = 11;
    } else {
        
       optionRest01.xAxis.axisLabel.fontSize = 12;
       optionRest01.yAxis.axisLabel.fontSize = 12;
    }
    myChartRest01.setOption(optionRest01);
}

updateChart01();
window.addEventListener('resize', function() {
    updateChart01();
    myChartRest01.resize();
});


// // 월 전기차 충전량
var domRest02 = document.getElementById('restingplace_elecar_charge_num_data');
var myChartRest02 = echarts.init(domRest02, null, {
  renderer: 'svg',
  useDirtyRect: false
});
var optionRest02;

optionRest02 = {
  grid: {
    top: '10%',
    bottom: '15%'
  },
  xAxis: {
    type: 'category',
    data: ['23.01', '23.02', '23.03', '23.04', '23.05', '23.06', '23.07','23.08','23.09','23.10','23.11','23.12'],
    axisLabel: {
        fontSize: 12,    
        interval: 0 
    },
    grid: {
      containLabel: true
    },   
    // splitLine: {
    //         show: true,        
    //         interval:1   // 0.01 간격으로 세로선 표시
    // },
    //  axisTick: {
    //     alignWithLabel: true,
    //    customValues: [0,0.05, 0.10]
    // }
  },
  yAxis: {
    type: 'value',   
    axisLabel: {
        fontSize: 12,    
        interval: 0 ,
         formatter: function (value, index) {
            return value + 'k';
         }
    },
     min: function(value) {
        return value.min * 1;  
    },
    max: function(value) {
        return value.max * 1;  
    },
  },
  series: [
    {
      data: [30, 27,27.5,23.8,24,24.6,28,29,27,26,31.9,31.7],
      type: 'line',
       itemStyle: {
                color: eachRestpTrafficGp02InColor
      },
      lineStyle: {  color: eachRestpTrafficGp02InColor  }
    }
  ],
  media: [{
            query: { maxWidth: 980 },
            option: {
                grid: {
                    left: '10%',
                    right: '5%',
                    top: '8%',
                    bottom: '8%'
                }
            }
        }
  ]
};

function updateChart02() {
    var width = window.innerWidth;

    if ( width <= 420) {
        optionRest02.xAxis.axisLabel.fontSize = 9;
        optionRest02.yAxis.axisLabel.fontSize = 9;
      }
    else if (width <= 980) {
        optionRest02.xAxis.axisLabel.fontSize = 11;
        optionRest02.yAxis.axisLabel.fontSize = 11;
    } else {
        
       optionRest02.xAxis.axisLabel.fontSize = 12;
       optionRest02.yAxis.axisLabel.fontSize = 12;
    }
    myChartRest02.setOption(optionRest02);
}

updateChart02();
window.addEventListener('resize', function() {
    updateChart02();
    myChartRest02.resize();
});

var domRest03 = document.getElementById('byperiod_elecar_charge_station_data');
var myChartRest03 = echarts.init(domRest03, null, {
  renderer: 'svg',
  useDirtyRect: false
});

var optionRest03;

optionRest03 = {
    // title: {
    //     text: '기간별 충전소 이용현황',
    //     left: 'center',
    //     top: '10px',
    //     textStyle: {
    //         fontSize: 24,
    //         fontWeight: 'bold'
    //     }
    // },
    tooltip: {
        trigger: 'axis',
        axisPointer: { type: 'shadow' }
    },
    legend: {
        data: ['명절', '주말', '평일'],
        top: '0%',
        right:'1%',
        orient:'vertical',
        selectedMode:'false',
        textStyle :{
          color : '#fff'
        },
        itemWidth :16,
        itemHeight:16,
        textStyle: {
            color: eachRestpTrafficGp03LegendTxt
        }
        
    },
    xAxis: {
        type: 'category',
        data: ['2021', '2022', '2023'],
        name: '연도',        
        nameLocation: 'center', 
        nameGap: 30,
        axisLabel: {          
          rotate: 0, 
          fontSize: 12
        }         
        
    },
    yAxis: {         
        type: 'value',
         axisLabel: { 
          fontSize: 12
        }      
        //name: '이용 횟수',
        // Y축 값을 100, 200 등 절대값으로 표시하기 위해 formatter 설정 생략
    },
    series: [
        {
            name: '명절',
            type: 'bar',
             data: [
                { value: 218, label: { show: true, formatter: '9.87%', position: 'inside', rotate: -90, color: eachRestpTrafficGp03InTxtColor01 } },
                { value: 342, label: { show: true, formatter: '16.1%', position: 'inside', rotate: -90, color: eachRestpTrafficGp03InTxtColor01 } },
                { value: 450, label: { show: true, formatter: '18.0%', position: 'inside', rotate: -90, color: eachRestpTrafficGp03InTxtColor01 } }
            ],
            label: {
                show: true,
                position: 'inside',
                formatter: '9.8%', // 예시 퍼센트 값
                fontSize: 11,
                color: '#fff',
                rotate: -90
            },
            itemStyle: {
                color: eachRestpTrafficGp03InColor01
            },
             barGap: '5%',
             barMaxWidth : '20%'
        },
        {
            name: '주말',
            type: 'bar',
           data: [
                { value: 254, label: { show: true, formatter: '16.14%', position: 'inside', rotate: -90, color: eachRestpTrafficGp03InTxtColor02 } },
                { value: 398, label: { show: true, formatter: '18.37%', position: 'inside', rotate: -90, color: eachRestpTrafficGp03InTxtColor02 } },
                { value: 405, label: { show: true, formatter: '18.12%', position: 'inside', rotate: -90, color: eachRestpTrafficGp03InTxtColor02  } }
            ],
            label: {
                show: true,
                position: 'inside',
                formatter: '11.43%', // 예시 퍼센트 값
                fontSize: 11,
                color: '#fff',
                rotate: -90                
            },
            itemStyle: {
                color: eachRestpTrafficGp03InColor02
            },
             barGap: '5%',
             barMaxWidth : '20%'
        },
        {
            name: '평일',
            type: 'bar',
            data: [
                { value: 192, label: { show: true, formatter: '18.09%', position: 'inside', rotate: -90, eachRestpTrafficGp03InTxtColor03 } },
                { value: 314, label: { show: true, formatter: '16.19%', position: 'inside', rotate: -90, eachRestpTrafficGp03InTxtColor03 } },
                { value: 389, label: { show: true, formatter: '15.88%', position: 'inside', rotate: -90, eachRestpTrafficGp03InTxtColor03  } }
            ],
            label: {
                show: true,
                position: 'inside',
                formatter: '10.59%', // 예시 퍼센트 값
                fontSize: 11,
                color: '#fff',
                rotate: -90
            },
            itemStyle: {
                color: eachRestpTrafficGp03InColor03
            },
             barGap: '5%',
             barMaxWidth : '20%'
        }
    ],
    media: [{
            query: { maxWidth: 980 },
            option: {
                grid: {
                    left: '10%',
                    right: '5%',
                    top: '8%',
                    bottom: '8%'
                }
            }
        }
    ]
};

function updateChart03() {
    var width = window.innerWidth;
    if ( width <= 420) {
        optionRest03.xAxis.axisLabel.fontSize = 9;
        optionRest03.yAxis.axisLabel.fontSize = 9;
        optionRest03.legend.orient = 'horizontal';
      }
    else if (width <= 980) {
        optionRest03.xAxis.axisLabel.fontSize = 11;
    } else {
        
       optionRest03.xAxis.axisLabel.fontSize = 12;
       optionRest03.legend.orient = 'vertical';
    }
    myChartRest03.setOption(optionRest03);
}
updateChart03();
window.addEventListener('resize', function() {
    updateChart03();
    myChartRest03.resize();
});


var domRest04 = document.getElementById('bytime_elecar_charge_station_data');
var myChartRest04 = echarts.init(domRest04, null, {
  renderer: 'svg',
  useDirtyRect: false
});

var optionRest04;

optionRest04 = {
   tooltip: {
        trigger: 'axis',
        axisPointer: { type: 'shadow' }
  },
  grid:{
    top:'8%',
    bottom:'20%'
  },
  xAxis: {
      name : '시간대',
     nameLocation: 'center', 
     nameGap: 30,
     axisLabel: {          
          rotate: 0, 
     },
     textStyle :{
          color : '#fff'
     },
    type: 'category',
    data: ['0', '1', '2', '3', '4', '5', '6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23'],
    axisLabel: {
      interval: 4 
    }
  },
  yAxis: {
    type: 'value',   
    name : '빈도',
    nameLocation: 'center', 
    nameGap: 50,
    axisLabel: {
        fontSize: 12,    
        interval: 0 ,
         formatter: function (value, index) {
            return value + 'k';
         }
    },
  },
  series: [
    {
      data: [52, 50, 47, 46, 50, 52, 101, 149, 152, 201, 249, 299, 330, 301, 302, 303, 302, 300, 251, 220, 170, 100, 120, 130],
      type: 'bar',
      itemStyle: {
        // 각 막대별 색상 지정 (배열로 색상 지정)
        color: function(params) {
          // params.value에는 막대의 값이 들어옵니다.
          // 예를 들어 값에 따라 색상 변환
          var colorList = ['#dcdcdc', '#e1d7ce', '#e7d1c1', '#ecccb3', '#f2c6a5','#f5c098','#f5b88d','#f5b182','#f5a977','#f5a26b','#f19765','#ec8c5f','#e78259','#e37754','#de6c4e','#d96149','#d45643','#cf4b3d','#ca4038','#c53532','#c12b2d','#bc2027','#b71522','#b20a1c'];
          return colorList[params.dataIndex]; // 각 막대에 색상 지정
        }
      }
    }
  ]
 
};

// 옵션 적용 함수 정의
function updateChart04() {
    var width = window.innerWidth;
    if (width <= 420) {
        optionRest04.xAxis.name = '';
        optionRest04.yAxis.name = '';
        optionRest04.xAxis.axisLabel.fontSize = 9;
        optionRest04.yAxis.axisLabel.fontSize = 9;
        optionRest04.grid.bottom = '10%';
      }
    else if(width <= 980) {
        // 980px 이하일 때 xAxis.name 숨기기
        optionRest04.xAxis.name = '';
        optionRest04.yAxis.name = '';
        optionRest04.grid.bottom = '10%';
    }   
    else {
        // 980px 이상일 때 xAxis.name 다시 표시
        optionRest04.xAxis.name = '시간대';
        optionRest04.yAxis.name = '빈도';
        optionRest04.grid.bottom = '15%';
    }
    myChartRest04.setOption(optionRest04);
}

// 초기 옵션 적용
updateChart04();
// 창 크기 조정 시 이벤트 핸들러
window.addEventListener('resize', function() {
    updateChart04();
    myChartRest04.resize();
});

console.log(`Width: ${window.innerWidth}, Height: ${window.innerHeight}`);
window.addEventListener('resize', () => {
    console.log(`Width: ${window.innerWidth}, Height: ${window.innerHeight}`);
});