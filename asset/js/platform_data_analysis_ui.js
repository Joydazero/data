$(function() { 

 var tabs = $('.rest_area_tab > li')  // 각 탭

 , tabContents = $('.tab_contents'); // 각 탭과 연결된 컨텐츠



 // 탭에 클릭 이벤트 연결

 tabs.click(function(e) {

  var t = $(e.currentTarget);



  // 이전에 선택된 탭이 있는지 검사해서 몇번째 인지 알아 옮

  var before = tabs.filter('.on').index();



  // 이전 선택된 탭을 숨김

  tabContents.eq(before).removeClass("active");

  // 이전 탭의 on 클래스 제거

  tabs.eq(before).removeClass('on');

  

  // 선택한 탭 on 클래스 추가 

  t.addClass('on');



  // 현재 선택한 탭의 위치 구하자

  var selIndex = tabs.index(t.get(0));



  // 현재 선택한 탭의 컨텐츠 영역 보여줌

  tabContents.eq(selIndex).addClass('active');

 });



 // 맨 처음 첫번째 탭을 보여 줌

 tabs.eq(0).trigger('click');

});


(function() {
  function checkResolution() {
    var width = window.innerWidth;

    // 작은 화면 (예: 모바일)
    if (width <= 480) {
      console.log('모바일 화면에서 실행 중입니다.');
       var Auto1 = 'auto';
      var Vlist = $(".chart-row-02 > .chart-view");
      Vlist.height(Auto1);
      // 모바일 화면에 해당하는 코드 실행
    }
    // 중간 크기 화면 (예: 태블릿)
    else if (width > 480 && width <= 980) {
      console.log('태블릿 화면에서 실행 중입니다.');
      // 태블릿 화면에 해당하는 코드 실행
      var Auto1 = 'auto';
      var Vlist = $(".chart-row-02 > .chart-view");
      Vlist.height(Auto1);

    }
    // 매우 큰 화면 (예: 대형 모니터)
    else {
        var Auto1 = 'auto';
      var equalHeight = function(element){
      var maxHeight = 0;
         Vlist.height(Auto1);
      element.each(function(){
        if($(this).outerHeight() > maxHeight){
        maxHeight = $(this).outerHeight();
        }
      });
        return maxHeight;
      };
      var Vlist = $(".chart-row-02 > .chart-view");
      Vlist.height(equalHeight(Vlist));

    }
  }
        
  // 최초 실행
  checkResolution();

  // 화면 크기 변경 시 실행
  window.addEventListener('resize', checkResolution);
})();


