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