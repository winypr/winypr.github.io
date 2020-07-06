---
layout: post
title:  "[웹개발] 상대경로와 절대경로."
date:   2020-07-06 20:00:00 +0800
categories: web
tags: web html
---

##### 상대경로와 절대경로
보통 CSS와 js파일 경로를 설정할 때, 이미지를 화면에 표시할 때 상대경로로 위치를 표기한다.  
경로 때문에 대차게 꼬였던터라 정리해둔다. 

###### 절대경로 
- 파일의 고유 경로
- http://www.google.com, C:\eGovFrameDev-3.9.0-64bit
- 다른 사이트로 이동할 때 이외에는 절대 경로를 사용하지 않음

###### 상대경로 (중요)
- 현재 위치를 기준으로 대상의 위치를 찾을 때 사용 
 '/'   : 가장 최상위 디렉토리 (웹 개발 때는 webapp)
 './'  : 현재 위치 (생략해도 됨)
 '../' : 현재 위치의 부모 디렉토리 (조부모 디렉토리 접근은 '../../')
 
 ##### 동적경로
 - 관리를 위해 주소에 디렉토리가 포함되는 데 CSS, js의 경로에도 문제가 생길수 있다. 
 이 때 CSS, js의 경로를 동적으로 설정하면 해결된다.
 
 방법1) CSS의 경로에 ${pageContext.request.contextPath} - 웹애플리케이션의 상대적 경로 (프로젝트 명일수도) 추가 하기
 <link rel="stylesheet" href="${pageContext.request.contextPath}/css/bootstrap-chart.css">   

 방법2) CSS 경로에 수정해야 할 값이 많을 경우 base 태그 활용
 <base href="${pageContext.request.scheme}://${pageContext.request.serverName}:${pageContext.request.serverPort}${pageContext.request.contextPath}/" />
 -> aws에 올릴 때 괜찮을까? 직접 해봐야 알 수 있을 듯


 


