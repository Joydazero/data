<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<div class="widget-box">
    <div class="widget-title">
        <table class="toolbar" style="width: 100%;">
            <colgroup>
                <col width="100px" />
                <col width="" />
                <col width="280px" />
                <col width="550px" />
                <col width="270px" />
            </colgroup>
            <tr>
                <td>
                    <div class="btn_area">
                        <span class="btn btn-blue btn-mini active" id="_btnSearchLayer" onclick="fnOpenLayerPopup(this,'_searchLayer')" title="검색창 표시"> <i class="icon-white icon-search"></i>검색창</span>
                    </div>
                </td>
                <td></td>
                <td class="center">
                    <div style="display:inline; text-align:center;">
                        <label class="tool-bold" for="_chkVworldBase"><input type="checkbox" id="_chkVworldBase" value="Y" onclick="fnSaveToolbarConfig('vworld.Base', this)">기본지도</label>
                        <label class="tool-bold" for="_chkDistrict"><input type="checkbox" id="_chkDistrict" value="Y" onclick="fnSaveToolbarConfig('District', this)">행정경계</label>
                        <label class="tool-bold" for="_chkVworldSatellite"><input type="checkbox" id="_chkVworldSatellite" value="Y" onclick="fnSaveToolbarConfig('vworld.Satellite', this)">항공사진</label>
                    </div>
                </td>
                <td>
                    <div style="display:inline; ">
                        <div class="dropdownBox" id="_nodeDropBox">
                            <dl>
                                <dt>
                                    <span class="tool-bold multiCheckValues"></span>
                                    <span class="dropBtn">▼</span>
                                </dt>
                                <dd style="overflow-y: scroll;">
                                    <ul>
                                    	<li><input type="checkbox" id="chkConfigIjeong" name="chkConfigIjeong" value="0" onclick="fnSaveToolbarConfig('Default', this)" text="이정"><font color="black" size="11pt">◎</font> : 이정</li>
                                        <li><input type="checkbox" id="chkConfigNode1" name="chkConfigNode" value="1" onclick="fnSetConfig('N')" text="RSE"><font color="red" size="11pt">●</font> : RSE</li>
                                        <li><input type="checkbox" id="chkConfigNode2" name="chkConfigNode" value="2" onclick="fnSetConfig('N')" text="IC"><font color="blue" size="11pt">▲</font> : IC</li>
                                        <li><input type="checkbox" id="chkConfigNode3" name="chkConfigNode" value="3" onclick="fnSetConfig('N')" text="JC"><font color="blue" size="11pt">▼</font> : JC</li>
                                        <li><input type="checkbox" id="chkConfigNode4" name="chkConfigNode" value="4" onclick="fnSetConfig('N')" text="톨게이트(본선)"><font color="green" size="11pt">■</font> : 톨게이트(본선)</li>
                                        <li><input type="checkbox" id="chkConfigNode5" name="chkConfigNode" value="5" onclick="fnSetConfig('N')" text="톨게이트"><font color="green" size="11pt">▣</font> : 톨게이트</li>
                                        <li><input type="checkbox" id="chkConfigNode6" name="chkConfigNode" value="6" onclick="fnSetConfig('N')" text="도로종료점"><font color="black" size="11pt">●</font> : 도로종료점</li>
                                        <li><input type="checkbox" id="chkConfigNode7" name="chkConfigNode" value="7" onclick="fnSetConfig('N')" text="민자도로연결지점"><font color="black" size="11pt">★</font> : 민자도로연결지점</li>
                                        <li><input type="checkbox" id="chkConfigNode8" name="chkConfigNode" value="8" onclick="fnSetConfig('N')" text="휴게소"><font color="red" size="11pt">◆</font> : 휴게소</li>
                                    </ul>
                                </dd>
                            </dl>
                        </div>
                        <div class="dropdownBox" id="_linkDropBox">
                            <dl>
                                <dt>
                                    <span class="tool-bold multiCheckValues"></span>
                                    <span class="dropBtn">▼</span>
                                </dt>
                                <dd>
                                    <ul>
                                    <!-- <div style="width:15px; height:5px; display:inline-block; background-color:black; vertical-align:middle; margin-bottom:6px;">&nbsp;</div> -->
                                        <li><input type="checkbox" id="chkConfigLink1" name="chkConfigLink" value="1" onclick="fnSetConfig('L')" text="본선"> 본선</li>
                                        <li><input type="checkbox" id="chkConfigLink2" name="chkConfigLink" value="2" onclick="fnSetConfig('L')" text="IC"> IC</li>
                                        <li><input type="checkbox" id="chkConfigLink3" name="chkConfigLink" value="3" onclick="fnSetConfig('L')" text="JC"> JC</li>
                                        <li><input type="checkbox" id="chkConfigInout1" name="chkConfigInout" value="1" onclick="fnSetConfig('Inout')" text="진출입"> 진출입</li>
                                    </ul>
                                </dd>
                            </dl>
                        </div>
                        <!-- [HIST] 20101006  -->
                        <div class="dropdownBox" id="_labelDropBox">
                            <dl>
                                <dt>
                                    <span class="tool-bold multiCheckValues"></span>
                                    <span class="dropBtn">▼</span>
                                </dt>
                                <dd style="overflow-y: scroll;">
                                    <ul>
										<li><input type="checkbox" id="chkConfigLabel1"   name="chkConfigLabel" value="1"   onclick="fnSetConfig('Label')" text="노드 ID">		노드 ID 		</li>
                                        <li><input type="checkbox" id="chkConfigLabel2"   name="chkConfigLabel" value="2"   onclick="fnSetConfig('Label')" text="RSE ID">		RSE ID		</li>
                                        <li><input type="checkbox" id="chkConfigLabel3"   name="chkConfigLabel" value="3"   onclick="fnSetConfig('Label')" text="이정거리">		이정거리		</li>
                                        <li><input type="checkbox" id="chkConfigLabel4"   name="chkConfigLabel" value="4"   onclick="fnSetConfig('Label')" text="노드명칭">		노드명칭		</li>
                                        <li><input type="checkbox" id="chkConfigLabel5"   name="chkConfigLabel" value="5"   onclick="fnSetConfig('Label')" text="톨게이트코드">		톨게이트코드		</li>
                                        <li><input type="checkbox" id="chkConfigLabel6"   name="chkConfigLabel" value="6"   onclick="fnSetConfig('Label')" text="진출입정보">		진출입정보		</li>
                                        <li><input type="checkbox" id="chkConfigLabel7"   name="chkConfigLabel" value="7"   onclick="fnSetConfig('Label')" text="노선번호">		노선번호		</li>
                                        <li><input type="checkbox" id="chkConfigLabel8"   name="chkConfigLabel" value="8"   onclick="fnSetConfig('Label')" text="노선명칭">		노선명칭		</li>
                                        <li><input type="checkbox" id="chkConfigLabel9"   name="chkConfigLabel" value="9"   onclick="fnSetConfig('Label')" text="도로등급">		도로등급		</li>
                                        <li><input type="checkbox" id="chkConfigLabel10"  name="chkConfigLabel" value="10"  onclick="fnSetConfig('Label')" text="민자구분">		민자구분		</li>
                                        <li><input type="checkbox" id="chkConfigLabel11"  name="chkConfigLabel" value="11"  onclick="fnSetConfig('Label')" text="시군구정보">		시군구정보		</li>
                                        <li><input type="checkbox" id="chkConfigLabel12"  name="chkConfigLabel" value="12"  onclick="fnSetConfig('Label')" text="좌표">			좌표			</li>
                                    </ul>
                                </dd>
                            </dl>
                        </div>
                        
                        
                        
                    </div>
                </td>
                <td id="zoomElement">
                    <div class="btn_area">
                    	<span class="btn btn-black btn-mini" id="_btnGisReseetLayer" onclick="fnGisReset()" title="지도 초기화"> <i class="icon-white icon-cog"></i>지도 초기화</span>
                        <span class="btn btn-black btn-mini" id="_btnNetworkInfoLayer" onclick="fnOpenLayerPopup(this,'_networkInfoLayer')" title="네트워크 정보 표시"> <i class="icon-white icon-info-sign"></i>네트워크 확인</span>
                    </div>
                    <%--
                    <div class="btn_area">
                        <span class="btn btn-blue btn-mini" title="지도 확대" onclick="fnGisZoom('in');"> <i class="icon-plus"></i>
                        </span> <span class="btn btn-blue btn-mini" title="지도 축소" onclick="fnGisZoom('out');"> <i class="icon-minus"></i>
                        </span>
                    </div>
                    --%>
                </td>
            </tr>
        </table>
    </div>
</div>

<%--노드/링크 보기설정 --%>
<div style="display:none;">
    <input type="checkbox" id="_chkNode" 	value="Y" onclick="fnSaveToolbarConfig('Node', this)">
    <input type="checkbox" id="_chkLink" 	value="Y" onclick="fnSaveToolbarConfig('Link', this)">
    <input type="checkbox" id="_chkInout" 	value="Y" onclick="fnSaveToolbarConfig('Inout', this)">
    <input type="checkbox" id="_chkLabel" 	value="Y" onclick="fnSaveToolbarConfig('Label', this)">
</div>
