---
layout: post
title:  "[웹개발] 타일즈 세팅."
date:   2020-07-06 20:00:00 +0800
categories: webSetting
tags: setting webSetting
---

##### 타일즈 세팅

###### 1. pom.xml에 타일즈 세팅을 위한 값을 추가

1) 추가 : properties 에 <org.apache.tiles-version>3.0.8</org.apache.tiles-version> 추가

{% highlight ruby %}
<properties>
	<spring.maven.artifact.version>4.2.4.RELEASE</spring.maven.artifact.version>
	<egovframework.rte.version>3.7.0</egovframework.rte.version>
	<!-- 요게 추가한 부분 -->
	<org.apache.tiles-version>2.2.2</org.apache.tiles-version>  
	</properties>
{% endhighlight %}

2) 추가 : 타일즈 dependency 

{% highlight ruby %}
 <!-- 타일즈 라이브러리 : 시작 -->		
<dependency>
	<groupId>org.apache.tiles</groupId>
	<artifactId>tiles-jsp</artifactId>
	<version>${org.apache.tiles-version}</version>
</dependency>
<dependency>
	<groupId>org.apache.tiles</groupId>
	<artifactId>tiles-core</artifactId>
	<version>${org.apache.tiles-version}</version>
</dependency>		
<!-- 타일즈 라이브러리 : 끝 -->	
{% endhighlight %}


###### 2. dispatcher-servlet.xml에 타일즈 우선 사용할 order 값 변경 및 타일즈 세팅 추가

1) 수정 : 기본 order 값 1을 2로 변경
{% highlight ruby %} <bean class="org.springframework.web.servlet.view.UrlBasedViewResolver" p:order="2" {% endhighlight %}

2) 추가 : 타일즈 설정 bean 추가
{% highlight ruby %}
<!-- 타일즈 뷰 설정 -->    
<bean class="org.springframework.web.servlet.view.UrlBasedViewResolver">  		
	<property name="viewClass" value="org.springframework.web.servlet.view.tiles3.TilesView" />  		
	<property name="order" value="1" /> 	
</bean> 	
	
<!-- 타일즈 레이아웃 설정  --> 	
<bean class="org.springframework.web.servlet.view.tiles3.TilesConfigurer">
	<property name="definitions">
		<list>
		<value>/WEB-INF/tiles/default-layout.xml</value>
		</list>
	</property>
</bean>	
{% endhighlight %}

###### 3. tiles 폴더 추가, cmmn에 default-XXX.jsp 추가

###### 4. index.jsp 에 경로 수정 (최초 입장 시의 주소가 될 예정)

