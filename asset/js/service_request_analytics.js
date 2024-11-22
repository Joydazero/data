
$(document).ready(function(){
  $("#nav-bar-control-btn").click(function(){
    $("#menu-bar").toggleClass("open");
  });
});

// 
const sRa01Grp01LineColor01 = getComputedStyle(document.body).getPropertyValue('--sra01_data_graph01_linecolor_01').trim();
const sRa01Grp01LineColor02 = getComputedStyle(document.body).getPropertyValue('--sra01_data_graph01_linecolor_02').trim();
const sRa01Grp01Bgcolor = getComputedStyle(document.body).getPropertyValue('--sra01_data_graph01_bgcolor').trim();

var domSra01 = document.getElementById('sra_monthly_development_grp');
var myChartSra01 = echarts.init(domSra01, null, {
  renderer: 'svg',
  useDirtyRect: false
});
var app = {};

var optionSra01;

optionSra01 = {
  title : {
    text : 'VOC',
    right : '50%',
    top: '2%'
  },
  grid: {
      left : '2%',
      right : '2%',
      top: '15%',
      bottom: '15%',    
      containLabel: true,      
  },      
  backgroundColor: '#f5f5f5',
  xAxis: {
    type: 'category',
    data: ['1월', '2월', '3월', '4월', '5월', '6월', '7월','8월','9월','10월','11월','12월'],
    axisLabel: {
        fontSize: 12,    
        interval: 0 
    },
  },
  yAxis: {
    type: 'value',    
     min: function(value) {
        return value.min * 1;  
    },
    max: function(value) {
        return value.max * 1;  
    },
   
  },
  series: [
   {
      name: '2024년',
      type: 'line',
      data: [116389,112509,116749,121350,116267,109353,124346,134075,117375,118645,116572,102439],
      itemStyle : {
         color: sRa01Grp01LineColor02
      },
      lineStyle : {
        color: sRa01Grp01LineColor02
      },
      label: { 
         show: true,
         color : '#000'
      }
       
    },
    {
      name: '2023년',
      type: 'line',
      data: [110655,107062,118941,107121,118531,118972,124346,134075,117375,118645,116572,102439],
       itemStyle : {
         color: sRa01Grp01LineColor01
      },
      lineStyle : {
        color: sRa01Grp01LineColor01
      },
      label: { 
         show: true,
         color : '#000'
      },
    }
  ],
   legend: {
      show: true,
      bottom: '3%',
      data: [
        {
         name : '2023년',  
          itemStyle: {
           color: sRa01Grp01LineColor01
          },
          textStyle: {
            color: '#000'
          },
      },
        {
        name: '2024년'
        ,
        itemStyle: {
          color: sRa01Grp01LineColor02
        },
        textStyle: {
          color: '#000'
        }
      }
    ]
  }
};

if (optionSra01 && typeof optionSra01 === 'object') {
  myChartSra01.setOption(optionSra01);
}

window.addEventListener('resize', myChartSra01.resize);


var domSra02 = document.getElementById('sra_data_distribution');
var myChartSra02 = echarts.init(domSra02, null, {
  renderer: 'svg',
  useDirtyRect: false
});

var optionSra02;

optionSra02 = {
  grid :{
    top: '30%'
  },
  legend: {
    orient : 'vertical',
    right: '8%'
  },
  tooltip: {},
  dataset: 
    {
       source: [ 
      ['product', '2012', '2013'],
      ['휴게소', 84.8, 28.2],
      ['기타', 20.1, 17.4],
      ['미납', 17.2, 20.9],
      ['면제/할인', 5.63, 7.4],
      ['전자카드', 4.62, 3.29],
      ['하이패스 이용', 4.34, 5.54],
      ['통행요금 납부', 4.12, 5.11],
      ['주유소/LPG 및 정비소', 3.3, 3.99],
      ['단말기', 3.15, 4.22],
      ['기타 편의시설', 2.59, 3.25],
      ['미분류', 0.558, 0.658]
    ]
  },
  series: [
    {
      type: 'pie',
      radius: '80%',
      center: ['30%', '50%']
      // No encode specified, by default, it is '2012'.
    },
    {
      type: 'pie',
      radius: '80%',
      center: ['65%', '50%'],
      encode: {
        itemName: 'product',
        value: '2013'
      }
    },
  ]
};


if (optionSra02 && typeof optionSra02 === 'object') {
  myChartSra02.setOption(optionSra02);
}

window.addEventListener('resize', myChartSra02.resize);




var domSra03 = document.getElementById('time_series_analysis_grp_01');
var myChartra03 = echarts.init(domSra03, null, {
  renderer: 'svg',
  useDirtyRect: false
});

var optionra03;

optionra03 = {
  title: {
    text: 'Stacked Line'
  },
  tooltip: {
    trigger: 'axis'
  },
  legend: {
    data: ['Email', 'Union Ads', 'Video Ads', 'Direct', 'Search Engine']
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  toolbox: {
    feature: {
      saveAsImage: {}
    }
  },
  xAxis: {
    type: 'category',
    boundaryGap: false,
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      name: 'Email',
      type: 'line',
      stack: 'Total',
      data: [120, 132, 101, 134, 90, 230, 210]
    },
    {
      name: 'Union Ads',
      type: 'line',
      stack: 'Total',
      data: [220, 182, 191, 234, 290, 330, 310]
    },
    {
      name: 'Video Ads',
      type: 'line',
      stack: 'Total',
      data: [150, 232, 201, 154, 190, 330, 410]
    },
    {
      name: 'Direct',
      type: 'line',
      stack: 'Total',
      data: [320, 332, 301, 334, 390, 330, 320]
    },
    {
      name: 'Search Engine',
      type: 'line',
      stack: 'Total',
      data: [820, 932, 901, 934, 1290, 1330, 1320]
    }
  ]
};

if (optionra03 && typeof optionra03 === 'object') {
  myChartra03.setOption(optionra03);
}

window.addEventListener('resize', myChartra03.resize);

var domSra04 = document.getElementById('time_series_analysis_grp_02');
var myChartSra04 = echarts.init(domSra04 , null, {
  renderer: 'svg',
  useDirtyRect: false
});

var optionSra04;

optionSra04 = {
  legend: {},
  tooltip: {},
  dataset: {
    source: [
      ['product', '2015', '2016', '2017'],
      ['Matcha Latte', 43.3, 85.8, 93.7],
      ['Milk Tea', 83.1, 73.4, 55.1],
      ['Cheese Cocoa', 86.4, 65.2, 82.5],
      ['Walnut Brownie', 72.4, 53.9, 39.1]
    ]
  },
  xAxis: { type: 'category' },
  yAxis: {},
  // Declare several bar series, each will be mapped
  // to a column of dataset.source by default.
  series: [{ type: 'bar' }, { type: 'bar' }, { type: 'bar' }]
};

if (optionSra04 && typeof optionSra04 === 'object') {
  myChartSra04.setOption(optionSra04);
}

window.addEventListener('resize', myChartSra04.resize);