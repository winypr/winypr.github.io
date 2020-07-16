---
layout: post
title:  "[개발일기] 포트폴리오 리뉴얼 9일차!"
date:   2020-07-17 01:00:00 +0800
categories: devDiary
tags: devDiary portfolio
---

##### 포트폴리오 리뉴얼 10일차  
~ 멘탈이 박살나면서 완성  ~  

---------------------------------------------------------------
**오늘 작업 목록**  
1. 게시판 페이징 기능 추가

---------------------------------------------------------------

어제 자기 전 인터넷을 보다가 페이징 관련 알고리즘을 직접 짰다는 블로그를 보았다.   
나도!! 라는 마음으로 알고리즘을 짜 보았다. 제법 그럴싸하게 완성되어서 뿌듯... (그러나 변수명 참 별로다. 허허허)   

이번 페이징 작업은
1) 마이바티스의 공통 페이징 부분은 학원에서 배웠던 소스를 활용  
2) 화면 내 페이징 버튼 표시하는 부분은 자바스크립트로 내가 작성  
3) 페이징 관련 예외처리 (페이징 관련 값을 가지지 못했을 때) 클래스를 내가 작성  

그래서 이번 페이징 작업은 제법 뿌듯하다.   

그러나 문제는 ajax!! 
왜 나는 페이징 번호 넘기는 걸 굳이! ajax로 하려고 했던 것일까... 허허허 ㅠㅠㅠㅠ   
페이징이 들어간 테이블 메뉴 2개와 게시판 2개 총 4개를 ajax append 작업을 하려 했다. 무려 8시간 동안....

3개 까지 완성하고 마지막 하나를 하려는데 이거 append가 장난이 아니였다.  
아 몰라 죽여 ㅠㅠ 라는 심정으로 정줄 놓고 있다가 
'걍 form 방식으로 하자 굳이 ajax할 필요 없자나 코드 엉망 진창인데...' 라는 자기 합리화를 통해 form 작업으로 진행했다.

....... 2시간만에 끝났다. 허허허 (멘탈이 날아가는 게 진짜 눈에 보인다 ㅠㅠ)

이제 지쳐서 아무 생각도 안 난다.   
그래도 드디어 끝났다!!! 5일이 목표였는데 그 2배가 걸렸다... 정말 죽을 맛이다. 하지만 내 스스로 해냈다는 게 너무 뿌듯하다~~   

물론 아직 갈 길이 멀다. 
1) 세션 로그인 처리  
2) 비밀번호 암호화   
3) 데이터베이스에 이미지 저장하는 방법
4) 이번에는 추가하지 못했던 jqGrid 등등      

다시 하나하나 해나가보자! 올레! 잘했다 나! 고생했다 나! 칭찬한다 나!     

-----------------------------------
**다음 진행 사항**  

1. aws에 올리기
1. ajax 배운거랑 form, input의 disabled 도 스터디 목록에 추가해야지.
1. 마이바티스의 selectKey 요것도 추가하자!

------------------------------------
**앞으로의 고민**  

1. 취업 취업 취업. 그러나 오늘은 우선 자자 ~

------------------------------------
