
$(document).ready(function(){
  $("#nav-bar-control-btn").click(function(){
    //$("#menu-bar").toggleClass("open");
    //$("body").toggleClass("open");
  });
});

// 
const sRa01Grp01LineColor01 = getComputedStyle(document.body).getPropertyValue('--sra01_data_graph01_linecolor_01').trim();
const sRa01Grp01LineColor02 = getComputedStyle(document.body).getPropertyValue('--sra01_data_graph01_linecolor_02').trim();
const sRa01Grp01Bgcolor = getComputedStyle(document.body).getPropertyValue('--sra01_data_graph01_bgcolor').trim();
const Sra04BarColor01 = getComputedStyle(document.body).getPropertyValue('--sra04_time_series_analysis_bar_color01').trim();
const Sra04BarColor02 = getComputedStyle(document.body).getPropertyValue('--sra04_time_series_analysis_bar_color02').trim();

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
      right : '5%',
      left: '7%',
      //containLabel: true,
      // left : '2%',
      // right : '2%',
      // top: '15%',
      // bottom: '15%',    
      // containLabel: true,      
      // width : 'auto'
  },      
  //backgroundColor: '#f5f5f5',
  xAxis: {
    type: 'category',
    data: ['1월', '2월', '3월', '4월', '5월', '6월', '7월','8월','9월','10월','11월','12월'],
    scale: true,
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
      },
      
       
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
  },
   media: [
        {
            query: { maxWidth: 680 },
            option: {
                grid: {
                    left: '10%',
                    right: '5%',
                    top: '8%',
                    bottom: '8%'
                }
            }
        }
        ,{
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


myChartSra01.setOption(optionSra01);






// window.addEventListener('resize', function() {
//     updatemyChartSra01();
//     myChartSra01.resize();
// });



//window.addEventListener('resize', myChartSra01.resize);


//분포그래프

var domSra02 = document.getElementById('sra_data_grp_distribution');
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
    right: '2%',
    top: '13%',
    bottom:'0',
    textStyle: {
      fontSize : 13
    }
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
      radius: '60%',
      center: ['25%', '40%'],
      width: '100%',
      height: '100%'
      // No encode specified, by default, it is '2012'.
    },
    {
      type: 'pie',
      radius: '60%',
      center: ['65%', '40%'],    
      width: '100%',
      height: '100%',
      encode: {
        itemName: 'product',
        value: '2013'
      },
      
    },
    
  ],
   media: [
        {
            query: { maxWidth: 680 },
            option: {
               
            }
        }
        ,{
            query: { maxWidth: 980 },
            option: {
                series: [
                  {
                    radius: '30%',
                  },
                  {
                    radius: '30%',
                  },
                ]
            }
        }
        ,{
            query: { maxWidth: 1200 },
            option: {
                series: [
                  {                   
                    radius: '40%',
                  },
                  {                  
                    radius: '40%',
                  },
                ]
            }
        },
        {
            query: { maxWidth: 1300 },
            option: {
                
            }
        },
        {
            query: { maxWidth: 1450 },
            option: {   
               
                series: [
                  {
                   center: ['30%', '30%'],              
                    radius: '50%',
                     width: '85%',
                     height: '90%',
                  },
                  {
                    center: ['85%', '30%'],    
                    radius: '50%',
                     width: '85%',
                     height: '90%',
                  },
                ]
            }
        },
         {
            query: { },
            option: {
               
                series: [
                  {
                    radius: '60%',
                  },
                  {
                    radius: '60%',
                  },
                ]
            }
        }

  ]
  
};


//myChartSra02.setOption(optionSra02);

var domSra03 = document.getElementById('time_series_analysis_grp_01');
var myChartSra03 = echarts.init(domSra03, null, {
  renderer: 'svg',
  useDirtyRect: false
});

var optionSra03;

optionSra03 = {
 
  grid: {
      left : '3%',
      right : '7%',
      top: '15%',
      bottom: '15%',    
      containLabel: true,      
  },      
  tooltip: {
    trigger: 'axis'
  },
  legend: {
    data: ['콜센터 문의량', '민원센터 문의량'],
    bottom : '6%'
  },
  toolbox: {
    feature: {
      saveAsImage: {}
    }
  },
  xAxis: {
    type: 'category',
    boundaryGap: false,
    data: ['2024-01-01', '2024-02-01', '2024-03-01', '2024-04-01', '2024-05-01', '2024-06-01', '2024-07-01','2024-08-01','2024-09-01','2024-10-01','2024-11-01','2024-12-01']
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      name: '콜센터 문의량',
      type: 'line',
      stack: 'Total',
      data: [1200,1300,1400,1500,1600,1700,1800,1750,1800,1850,1900,2000]
    },
    {
      name: '민원센터 문의량',
      type: 'line',
      stack: 'Total',
      data: [800,850,900,1000,1050,1200,1300,1250,1300,1400,1500,1600]
    },
  ]
};

myChartSra03.setOption(optionSra03);

var domSra04 = document.getElementById('time_series_analysis_grp_02');
var myChartSra04 = echarts.init(domSra04 , null, {
  renderer: 'svg',
  useDirtyRect: false
});

var optionSra04;

optionSra04 = {
  
  grid: {
      left : '3%',
      right : '7%',
      top: '15%',
      bottom: '15%',    
      containLabel: true,      
  },
  legend: {
     bottom : '6%'
  },
  tooltip: {},
  dataset: {
    source: [
      ['product', '	콜센터', '민원센터'],
      ['교통정보(스마트폰)', 3200,1800],
      ['이용방법 및 오류문의', 2800,1500],
      ['전광판 관련', 1500,1200],
      ['기타', 1000,700 ],
      ['가변차로', 1200,900],
      ['IC 관련', 1100,800],
      ['건설계획', 900,1000]
    ]
  },
  xAxis: { type: 'category' },
  yAxis: {},
  // Declare several bar series, each will be mapped
  // to a column of dataset.source by default.
  series: [
   { 
    type: 'bar',
    name: '콜센터', // 범례와 매칭
     itemStyle: {
        color: Sra04BarColor01
     }
   },
  { 
    type: 'bar',
    name: '민원센터', // 범례와 매칭
    itemStyle: {
        color: Sra04BarColor02
    }
   }
  ]
};

myChartSra04.setOption(optionSra04);

 const wordCloudChart = echarts.init(document.getElementById('wordCloud'));

    // 2. 데이터 준비
    const WcData = [
       { name: "네트워크 시각화", value: 100 },
      { name: "데이터 분석", value: 110 },
      { name: "관계 맵", value: 60 },
      { name: "트렌드 시각화", value: 50 },
      { name: "클러스터링", value: 11 },
      { name: "노드 연결", value: 70 },
      { name: "그래프 분석", value: 30 },
      { name: "인사이트 추출", value: 24 },
      { name: "패턴 발견", value: 90 },
      { name: "시각적 표현", value: 30 },
      { name: "상관관계", value: 10 },
      { name: "분산 분석", value: 10 },
      { name: "키워드 맵", value: 40 },
      { name: "데이터 시각화", value: 77 },
      { name: "차트 생성", value: 100 },
      { name: "분포도", value: 22 },
      { name: "연관성 분석", value: 44 },
      { name: "히트맵", value: 90 },
      { name: "다차원 스케일링", value: 87 },
      { name: "트리 구조", value: 60 },
      { name: "인터랙티브 차트", value: 10 },
      { name: "시간 흐름 분석", value: 90 },
      { name: "중심성 분석", value: 50 },
      { name: "모듈화", value: 90 },
      { name: "주제어 네트워크", value: 90 },
      { name: "감성 분석", value: 40 },
      { name: "토픽 모델링", value: 56 },
      { name: "연결 강도", value: 90 },
      { name: "인터랙션 맵", value: 20 },
      { name: "계층적 분석", value: 90 },
      { name: "군집 시각화", value: 30 },
    ];

    // 3. 옵션 설정
    const optionWc = {
      tooltip: {
        show: true,
      },
      series: [
        {
          type: 'wordCloud',
          gridSize: 5,
          //sizeRange: [12, 60], // 최소, 최대 글자 크기
          sizeRange: [10, 120], // 최소, 최대 글자 크기
          rotationRange: [-90, 180], 
          shape: 'circle', // 모양 ('circle', 'cardioid', 'diamond', etc.)
          textStyle: {
            fontFamily: 'sans-serif',
            fontWeight: 'bold',
            color: function () {
              // 랜덤 색상 설정
              return `rgb(${Math.random() * 180 + 75}, ${Math.random() * 180 + 75}, ${Math.random() * 180 + 75})`;
            },
          },
          data: WcData, // 키워드 데이터
          center: ['50%', '50%'],  // 좌우 50%, 상하 50%로 가운데 설정
          width: '90%',
          height: '90%',
        },
      ],
    };

    // 4. 옵션으로 차트 설정
    wordCloudChart.setOption(optionWc);



/*미디어쿼리 js */
function updatemyChartSra02() {
    var width = window.innerWidth;
    if (width <= 420) {
       // optionSra01.xAxis.name = '';
        //optionSra01.yAxis.name = '';
        // optionSra02.xAxis.axisLabel.fontSize = 9;
        // optionSra02.yAxis.axisLabel.fontSize = 9;
        // optionSra02.grid.right = '10%';
        // optionSra02.grid.bottom = '10%';
      }
    else if(width <= 1450) {
        // 980px 이하일 때 xAxis.name 숨기기
       // optionSra01.xAxis.name = '';
       // optionSra01.yAxis.name = '';
       optionSra02.grid.top = '1%';
       optionSra02.grid.bottom = '10%';
       optionSra02.legend.orient = 'horizontal';
       optionSra02.legend.top = 'auto';
       optionSra02.legend.bottom = '30%';
       optionSra02.legend.right = '3%';
       optionSra02.legend.itemWidth = 10;
       optionSra02.legend.itemHeight = 10;
       optionSra02.legend.textStyle.fontSize = 11;
    }   
    else {
        // 980px 이상일 때 xAxis.name 다시 표시
        //optionSra01.xAxis.name = '시간대';
        //optionSra01.yAxis.name = '빈도';
        //optionSra04.grid.bottom = '15%';
        optionSra02.legend.top = '20%';
        optionSra02.legend.bottom = 'auto';
        optionSra02.legend.orient = 'vertical';
        optionSra02.legend.textStyle.fontSize = 13;
       // optionSra01.grid.width = '1200px';
    }
    myChartSra02.setOption(optionSra02);
}


// 초기 옵션 적용



// ** Resizing Area ** // 

// 1. 그래프 리사이즈 함수
function resizeChart() {
    myChartSra01.resize();
    myChartSra02.resize();
    myChartSra03.resize();
    myChartSra04.resize();
    wordCloudChart.resize();
    updatemyChartSra02();
}

// 2. resize 이벤트 리스너: 브라우저 크기 변경 시 항상 리사이징
window.addEventListener('resize', function () {
    // body에 'open' 클래스가 있을 때와 없을 때 모두 리사이징 처리
    resizeChart();
});

// 3. MutationObserver 설정: <body>의 class 속성 변경 감지
const observer = new MutationObserver(function(mutationsList) {
    mutationsList.forEach(function(mutation) {
        // 'open' 클래스의 추가나 제거가 있을 때
        if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
            if (document.body.classList.contains('open')) {
                // 'open' 클래스가 추가되면 리사이징 처리
                resizeChart();
            } else {
                // 'open' 클래스가 제거되면 리사이징 처리
                resizeChart();
            }
        }
    });
});

// 4. Observer가 감지할 대상 설정: <body>의 class 속성 변경을 감지
observer.observe(document.body, { attributes: true });

// 5. 초기 페이지 로드 시 리사이징 처리
resizeChart();



  $(function () {
    var tabs = $(".tab-menu-list > li"), // 각 탭
      tabContents = $(".tab-contents"); // 각 탭과 연결된 컨텐츠

    // 탭 클릭 이벤트 연결
    tabs.click(function (e) {
      var t = $(e.currentTarget);

      // 이전 선택된 탭과 컨텐츠 숨김
      var before = tabs.filter(".on").index();
      tabs.eq(before).removeClass("on");
      tabContents.eq(before).removeClass("active");

      // 현재 선택한 탭과 컨텐츠 표시
      t.addClass("on");
      var selIndex = tabs.index(t.get(0));
      tabContents.eq(selIndex).addClass("active");
    });

    // 처음 첫 번째 탭 활성화
    tabs.eq(0).trigger("click");
  });

  
console.log(`Width: ${window.innerWidth}, Height: ${window.innerHeight}`);
window.addEventListener('resize', () => {
    console.log(`Width: ${window.innerWidth}, Height: ${window.innerHeight}`);
});