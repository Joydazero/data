
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
backgroundColor: '#f5f5f5',
  xAxis: {
    type: 'category',
    data: ['1월', '2월', '3월', '4월', '5월', '6월', '7월','8월','9월','10월','11월','12월'],
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
  ]
};

if (optionSra01 && typeof optionSra01 === 'object') {
  myChartSra01.setOption(optionSra01);
}

window.addEventListener('resize', myChartSra01.resize);