<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<div class="gis_prop" id="_propertyLayer" style="display:none;">	
    <div class="layerprop">
        <div class="lpheadprop">
            <span class="tit_pop">속성보기</span>
            <span>
                <a href="#" class="close" onclick="fnCloseLayerPopup('_propertyLayer',false)">x</a>
            </span>
        </div>
        <div class="lpbodyprop">
            <div class="section" id="nodeProp">
                <div>
                    <h4 id="_propertyLayerTitle"></h4>
                </div>
                <div class="cont_result">
                    <table class="tbl_data2" summary="속성보기 테이블">
                        <colgroup>
                            <col width="45%">
                            <col width="*">
                        </colgroup>
                        <tbody id="_propertyLayerBody">
                        </tbody>
                    </table>
                </div>
            </div>
            <div class="btn_area2">
                <span class="btn btn-blue btn-mini" onclick="fnCloseLayerPopup('_propertyLayer',false)" title="현재 창을 닫습니다.">닫기</span>
            </div>
        </div>
    </div>
</div>