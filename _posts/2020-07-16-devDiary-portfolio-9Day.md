---
layout: post
title:  "[개발일기] 포트폴리오 리뉴얼 9일차!"
date:   2020-07-16 04:00:00 +0800
categories: devDiary
tags: devDiary portfolio
---

##### 포트폴리오 리뉴얼 9일차  
~ 이제 얼마 안 남았다.  ~  

---------------------------------------------------------------
**오늘 작업 목록**  
1. 로그인, 로그인 관련 사항 수정

---------------------------------------------------------------

처음에 로그인을 세션 방식으로 처리하려고 했다. 그러나 새로고침할 때마다 세션이 없어져서 한참을 찾아야 했다.     

그리고 찾은 결과는 이랬다.       
1) 세션을 이용, MVC intercept 를 이용해서 처리   
2) 쿠키를 이용해서 처리   

고민고민하다가 쿠키를 이용해서 처리하기로 했다.  
빠르게 완성하고 싶어서 기존 알고 있는 방식을 사용한거고, MVC intercept를 제대로 알지도 못한 채 사용하는 건 영 아니다 싶어서 였다.   

이전에 자바스크립트의 플러그인을 이용하여 쿠키를 만들었다면    
이번에는 자바로 쿠키를 만들어서 이용해보았다.   

그리고 로그인이 들어가는 부분도 모두 수정했다. 으아아아 꽤 자잘한 작업이 많았다.   

로그인으로 시간을 많이 소비해서 페이징 부분은 제대로 하질 못했다.   
사실 좀 귀찮은 감도 없잖아 있어서 마이바티스 부분은 기존 수업에서 배웠던 걸 그대로 이용했다.   
그리고 죄책감이 좀... 그래서 페이징처리 공통 부분을 내일 만들어볼 예정이다.   

그게 끝나면 게시판, 댓글 모두 간단히 적용 가능하겠지.   

으아아아 지친다. 강의 듣는 게 차라리 편하다. ㅠㅠ   

-----------------------------------
**다음 진행 사항**  

1. 게시판 페이징 기능 추가
1. aws에 올리기
1. ajax 배운거랑 form, input의 disabled 도 스터디 목록에 추가해야지.
1. 마이바티스의 selectKey 요것도 추가하자!

------------------------------------
**앞으로의 고민**  

1. 코 앞에 결과물이 보이는 데 언제 끝나냐아아 ㅠㅠ 

------------------------------------

