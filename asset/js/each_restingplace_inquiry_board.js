// 월 전기차 교통량
var domRest01 = document.getElementById('restingplace_elecar_traffic_num_data');
var myChartRest01 = echarts.init(domRest01, null, {
  renderer: 'svg',
  useDirtyRect: false
});
var app = {};

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
                color: '#d60000' 
      },
      lineStyle: {  color: '#d60000' }
    }
  ]
};

if (optionRest01 && typeof optionRest01 === 'object') {
  myChartRest01.setOption(optionRest01);
}

window.addEventListener('resize', myChartRest01.resize);


// 월 전기차 충전량
var domRest01 = document.getElementById('restingplace_elecar_charge_num_data');
var myChartRest01 = echarts.init(domRest01, null, {
  renderer: 'svg',
  useDirtyRect: false
});
var app = {};

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
                color: '#d60000' 
      },
      lineStyle: {  color: '#d60000' }
    }
  ]
};

if (optionRest01 && typeof optionRest01 === 'object') {
  myChartRest01.setOption(optionRest01);
}

window.addEventListener('resize', myChartRest01.resize);