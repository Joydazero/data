<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<div class="gis_leftPop" id="_configLayer" style="display: none;">
    <div class="layerpop">
        <div class="lpheadpop">
            <span class="tit_pop">보기 설정</span> <span> <a href="#" class="close" onclick="fnCloseLayerPopup('_configLayer')">x</a>
            </span>
        </div>
        <div class="lpbodypop">
            <div class="section">
                <div>
                    <h3>노드</h3>
                </div>
                <div class="cont_result">
                    <table class="tbl_data" summary="노드 보기설정 테이블">
                        <colgroup>
                            <col width="70%">
                            <col width="30%">
                        </colgroup>
                        <thead>
                            <tr>
                                <th>타입(On/off)</th>
                                <th>심볼</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <label class="tool-bold" for="chkNode"> <input type="checkbox" id="chkConfigNode1" name="chkConfigNode" value="1"> 1 : RSE
                                    </label>
                                </td>
                                <td class="center">
                                    <font color="red" size="5pt">◎</font>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label class="tool-bold" for="chkIc"> <input type="checkbox" id="chkConfigNode2" name="chkConfigNode" value="2"> 2 : IC
                                    </label>
                                </td>
                                <td class="center">
                                    <font color="blue" size="5pt">▲</font>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label class="tool-bold" for="chkJc"> <input type="checkbox" id="chkConfigNode3" name="chkConfigNode" value="3"> 3 : JC
                                    </label>
                                </td>
                                <td class="center">
                                    <font color="blue" size="5pt">▼</font>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label class="tool-bold" for="chkTgBon"> <input type="checkbox" id="chkConfigNode4" name="chkConfigNode" value="4"> 4 : TG(본선)
                                    </label>
                                </td>
                                <td class="center">
                                    <font color="green" size="5pt">■</font>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label class="tool-bold" for="chkTg"> <input type="checkbox" id="chkConfigNode5" name="chkConfigNode" value="5"> 5 : TG
                                    </label>
                                </td>
                                <td class="center">
                                    <font color="green" size="5pt">□</font>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label class="tool-bold" for="chkRoadClose"> <input type="checkbox" id="chkConfigNode6" name="chkConfigNode" value="6"> 6 : 도로종료점
                                    </label>
                                </td>
                                <td class="center">
                                    <font color="black" size="5pt">●</font>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label class="tool-bold" for="chkNoPubRoute"> <input type="checkbox" id="chkConfigNode7" name="chkConfigNode" value="7"> 7 : 민자도로연결지점
                                    </label>
                                </td>
                                <td class="center">
                                    <font color="black" size="5pt">★</font>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div class="section">
                <div>
                    <h3>링크</h3>
                </div>
                <div class="cont_result">
                    <table class="tbl_data" summary="링크 보기설정 테이블">
                        <colgroup>
                            <col width="70%">
                            <col width="30%">
                        </colgroup>
                        <thead>
                            <tr>
                                <th>타입(On/off)</th>
                                <th>심볼</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <label class="tool-bold" for="chkNode"> <input type="checkbox" id="chkConfigLink1" name="chkConfigLink" value="1"> 1 : 본선
                                    </label>
                                </td>
                                <td class="center">
                                    <div style="width:15px; height:5px; display:inline-block; background-color:black; vertical-align:middle;">&nbsp;</div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label class="tool-bold" for="chkIc"> <input type="checkbox" id="chkConfigLink2" name="chkConfigLink" value="2"> 2 : IC
                                    </label>
                                </td>
                                <td class="center">
                                    <div style="width:15px; height:5px; display:inline-block; background-color:green; vertical-align:middle;">&nbsp;</div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label class="tool-bold" for="chkJc"> <input type="checkbox" id="chkConfigLink3" name="chkConfigLink" value="3"> 3 : JC
                                    </label>
                                </td>
                                <td class="center">
                                    <div style="width:15px; height:5px; display:inline-block; background-color:red; vertical-align:middle;">&nbsp;</div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div class="btn_area2">
                <span class="btn btn-blue btn-mini" onclick="fnSetConfig()" title="지도에 적용">적용</span> <span class="btn btn-blue btn-mini" onclick="fnCloseLayerPopup('_configLayer')" title="현재 창을 닫습니다.">닫기</span>
            </div>
        </div>
    </div>
</div>