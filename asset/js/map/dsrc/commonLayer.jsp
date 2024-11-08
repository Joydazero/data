<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>

<%-- 노선검색 레이어 팝업(단일 선택) --%>
<div class="gis_comLeftPop" id="_searchRouteLayer" style="display:none;">
    <div class="layerpop2">
        <div class="lpheadpop2">
            <span class="tit_pop">노선검색</span>
            <span>
                <a href="#" class="close" onclick="fnCloseLayerPopup('_searchRouteLayer',false)">x</a>
            </span>
        </div>
        <div class="lpbodypop">
            <div class="section">
                <div class="cont_result">
                    <div class="search_area2">
                        <input class="searchInput" id="_schRouteText" onkeydown="fnEnterSearch('_btnSearchRoute')"/>
                        <span class="btn btn-green btn-mini" onclick="fnSearchRouteData('S')" id="_btnSearchRoute"> 
                            <i class="icon-white icon-search"></i>검색
                        </span>
                    </div>
                    <div>
                        <table class="tbl_data" summary="노선 검색 데이터">
                            <colgroup>
                                <col width="90px">
                                <col width=""> 
                            </colgroup>
                            <thead>
                                <tr>
                                    <th>노선ID</th>
                                    <th>명칭</th>
                                </tr>
                            </thead>
                        </table>
                    </div>
                    <div class="tbl_scroll_up">
                        <table class="tbl_data" id="_searchRouteDataList" summary="노선 검색 데이터">
                            <colgroup>
                                <col width="90px">
                                <col width="">
                            </colgroup>
                            <tbody>
                                <tr>
                                    <td class="center" colspan="3">조회 정보가 없습니다.</td>
                                </tr>
                            </tbody>
                        </table>        
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<%-- 노선검색 레이어 팝업(복수 선택) --%>
<div class="gis_comLeftPop" id="_searchMultiRouteLayer" style="display:none;">
    <div class="layerpop2">
        <div class="lpheadpop2">
            <span class="tit_pop">노선검색</span>
            <span>
                <a href="#" class="close" onclick="fnCloseLayerPopup('_searchMultiRouteLayer',false)">x</a>
            </span>
        </div>
        <div class="lpbodypop">
            <div class="section">
                <div class="cont_result">
                    <div class="search_area2">
                        <input class="searchInput" id="_schMultiRouteText" onkeydown="fnEnterSearch('_btnSearchMultiRoute')"/>
                        <span class="btn btn-green btn-mini" onclick="fnSearchRouteData('M')" id="_btnSearchMultiRoute">
                            <i class="icon-white icon-search"></i>검색
                        </span>
                    </div>
                    <div>
                        <table class="tbl_data" summary="노선 검색 데이터">
                            <colgroup>
                                <col width="70px">
                                <col width="90px">
                                <col width=""> 
                            </colgroup>
                            <thead>
                                <tr>
                                    <th><input type="checkbox" id="_chkAllRoute" onclick="fnCheckAll(this,'chkAddRoute')" />선택</th>
                                    <th>노선ID</th>
                                    <th>명칭</th>
                                </tr>
                            </thead>
                        </table>
                    </div>
                    <div class="tbl_scroll_up">
                        <table class="tbl_data" id="_searchMultiRouteDataList" summary="노선 검색 데이터">
                            <colgroup>
                                <col width="70px">
                                <col width="90px">
                                <col width="">
                            </colgroup>
                            <tbody>
                                <tr>
                                    <td class="center" colspan="3">조회 정보가 없습니다.</td>
                                </tr>
                            </tbody>
                        </table>        
                    </div>
                </div>
            </div>
            <div class="btn_area2">
                <span class="btn btn-blue btn-mini" onclick="fnSetRouteData()">선택</span>
            </div>
        </div>
    </div>
</div>

<%-- 네트워크 정보 팝업 --%>
<!-- 
<div class="gis_infoPop">
    <div class="gis_rightPop" id="_networkInfoLayer" style="display: none;">
        <div class="layerpop" style="height: 200px;">
            <div class="lpbodypop">
                <div class="section">
                    <div>
                        <h5>네트워크 정보</h5>
                    </div>
                    <div class="cont_result">
						<table class="tbl_data4" summary="검색 조건" style="border: 0;">
							<colgroup>
								<col width="100%">
							</colgroup>
							<tbody>
								<tr>
									<td style="border-bottom: 0;  border-top: 1px solid #898989;">
                                        <span>네트워크 테이터 생성일자는 2016년 4월 입니다.</span>
									</td>
								</tr>
							</tbody>
						</table>
					</div>
                </div>
            </div>
        </div>
    </div>
</div>
 -->
<div class="gis_infoPop">
    <div class="gis_rightPop" id="_networkInfoLayer" style="display: none;">
        <div class="layerpop3" style="height: 270px;">
            <div class="lpbodypop">
                <div class="section">
                    <div>
                        <h5>네트워크 이력 현황</h5>
                    </div>
                    <div class="cont_result">
						<div>
							<table class="tbl_data" summary="네트워크 이력 현황">
								<colgroup>
									<col width="80px">
									<col width="110px">
									<col width="110px">
									<col width="110px">
									<col width="110px">
									<col width="100px">
									<col width="100px">
									<col width="100px">
									<col width="100px">
								</colgroup>
								<thead>
									<tr>
										<th>구분</th>
										<th>네트워크 버전</th>
										<th>네트워크 생성일</th>
										<th>네트워크 적용일</th>
										<th>최종 RSE 검증일</th>
										<th>RSE 수</th>
										<th>정상 RSE 수</th>
										<th>비율(%)</th>
										<th>비고</th>
									</tr>
								</thead>
                       	</table>
                   	</div>
                   <div class="tbl_scroll_down">
                       <table class="tbl_data" id="networkHistoryStatus" summary="네트워크 이력 현황">
                           <colgroup>
								<col width="80px">
								<col width="110px">
								<col width="110px">
								<col width="110px">
								<col width="110px">
								<col width="100px">
								<col width="100px">
								<col width="100px">
								<col width="100px">
                           </colgroup>
                           <tbody>
                               <tr  id="_emptyRow">
                                   <td class="center" colspan="9">선택 정보가 없습니다.</td>
                               </tr>
                           </tbody>
                       </table>        
                   </div>
					</div>
                </div>
				<div class="btn_area2">
				<a href="#" class="btn btn-blue btn-mini" onclick="#">엑셀 다운</a>
				
				<a href="#" class="btn btn-mini btn-black" onclick="fnCloseLayerPopup('_networkInfoLayer','Y')">닫기</a>
				</div>
            </div>
        </div>
    </div>
</div> 
 
<div class="gis_infoPop">
    <div class="gis_rightPop" id="_networkInfoLayerDetail" style="display: none;">
        <div class="layerpop3" style="height: 500px;">
            <div class="lpbodypop">
                <div class="section">
                    <div>
                        <h5>RSE 상세 내역</h5>
                    </div>
                    <div style="height:400px;" class="cont_result">
						<div>
							<table class="tbl_data" summary="RSE 상세 내역">
								<colgroup>
									<col width="80px">
									<col width="110px">
									<col width="110px">
									<col width="80px">
									<col width="110px">
									<col width="150px">
									<col width="80px">
								</colgroup>
								<thead>
									<tr>
										<th>순번</th>
										<th>네트워크 버전</th>
										<th>RESE ID</th>
										<th>상태</th>
										<th>최종 RSE 검증일</th>
										<th>데이터</th>
										<th>비고</th>
									</tr>
								</thead>
                       	</table>
                   	</div>
                   <div class="tbl_scroll_down_side_add" style="height:350px;">
                       <table class="tbl_data" id="networkHistoryDetail" summary="RSE 상세 내역">
                           <colgroup>
								<col width="80px">
								<col width="110px">
								<col width="110px">
								<col width="80px">
								<col width="110px">
								<col width="150px">
								<col width="80px">
                           </colgroup>
                           <tbody>
                               <tr  id="_emptyRow">
                                   <td class="center" colspan="7">선택 정보가 없습니다.</td>
                               </tr>
                           </tbody>
                       </table>        
                   </div>
					</div>
                </div>
				<div class="btn_area2">
				<a href="#" class="btn btn-mini btn-black" onclick="fnCloseLayerPopup('_networkInfoLayerDetail','Y')">닫기</a>
				</div>
            </div>
        </div>
    </div>
</div>

<%-- 프로그레스바 --%>
<div id="_progressWrap" style="position:absolute; top:0px; left:0px; width:100%; height:100%; background-color:black; opacity:0.5; z-index:998; display:none;">
</div>
<div id="_progressContents" style="position:absolute; width:200px; height:50px; background-color:white; opacity:100%; border:3px; border-radius:10px; padding-top: 17px; padding-left:32px; font-weight:bold; color:black; z-index:999; display:none;">
    <img src="/asset/map/images/map/spinner.gif">&nbsp;작업 처리중입니다...
</div>