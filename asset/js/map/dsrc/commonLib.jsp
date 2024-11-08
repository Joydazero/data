<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<meta http-equiv="content-type" content="text/html; charset=UTF-8">

<%-- 전자지도 기본 CSS LIB --%>
<!-- 
<link rel="stylesheet" type="text/css" href="http://portal.ex.co.kr./css/all.css">
<link rel="stylesheet" type="text/css" href="http://portal.ex.co.kr./css/map/ol.css">
<link rel="stylesheet" type="text/css" href="http://portal.ex.co.kr./css/map/mapapi.css">
<link rel="stylesheet" type="text/css" href="http://portal.ex.co.kr./css/map/style_map.css">
 -->
 
<!-- local version -->
<link rel="stylesheet" type="text/css" href="/asset/map/css/all.css">
<link rel="stylesheet" type="text/css" href="/asset/map/css/ol.css">
<link rel="stylesheet" type="text/css" href="/asset/map/css/mapapi.css">
<link rel="stylesheet" type="text/css" href="/asset/map/css/style_map.css">
 
 
<link rel="stylesheet" type="text/css" href="/asset/map/css/jquery-ui-1.9.2.custom.css">
 
<%-- 차량 통행경로 분석체계 공통 CSS LIB --%>
<link rel="stylesheet" type="text/css" href="/asset/map/css/common.css">

<%-- 전자지도 기본 JS LIB --%>
<script type="text/javascript" src="/asset/map/js/common/jquery-1.11.1.min.js"></script>
<!-- 
<script type="text/javascript" src="http://portal.ex.co.kr./js/ws./json_lib.js"></script>
<script type="text/javascript" src="http://portal.ex.co.kr./js/map/openlayers/build/ol-debug.js"></script>
<script type="text/javascript" src="http://portal.ex.co.kr./js/map/mapapi/ol-patch.js"></script>
<script type="text/javascript" src="http://portal.ex.co.kr./js/map/mapapi/mapapi.js"></script>
<script type="text/javascript" src="http://portal.ex.co.kr./js/map/mapapi/mapcontrol.js"></script>
 -->
 
<!-- local version -->
<script type="text/javascript" src="/asset/map/js/common/jsonLib.js"></script>
<script type="text/javascript" src="/asset/map/js/openlayers/build/ol-debug.js"></script>
<script type="text/javascript" src="/asset/map/js/mapapi/ol-patch.js"></script>
<script type="text/javascript" src="/asset/map/js/mapapi/mapapi.js"></script>
<script type="text/javascript" src="/asset/map/js/mapapi/mapcontrol.js"></script>
 
<script type="text/javascript" src="/asset/map/js/proj4js/proj4js-combined.js"></script>
 
<%-- 차량 통행경로 분석체계 공통 JS LIB --%>
<!-- -->
<script type="text/javascript" src="/asset/map/js/dsrc/map.js"></script>
 
<script type="text/javascript" src="/asset/map/js/dsrc/common.js"></script>

<%-- jquery UI Lib (common.js 밑에 위치해야됨) --%>
<script type="text/javascript" src="/asset/map/js/common/jquery-ui-1.9.2.custom.js"></script>

<%-- 로그 기능 --%>
<%--script type="text/javascript" src="http://realnameis.ex.co.kr:8094/htdocs/RN_help./js/ui.common_parameter_flag_log_GT.js"></script>--%>

<style>
    html { height:100%; }
    body, textarea, select, input, button, table {font-size:14px; word-break:break-all; font-family:"나눔고딕", "NanumGothic", sans-serif; color:#555; letter-spacing: -0.2px;}
    body {height: 100%;}
    img, iframe { vertical-align: middle; }
</style>