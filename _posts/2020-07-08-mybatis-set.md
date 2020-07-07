---
layout: post
title:  "[웹개발] Mybatis 세팅."
date:   2020-07-06 20:00:00 +0800
categories: framework
tags: framework mybatis
---

##### Mybatis 세팅

###### 1. pom.xml에 Mybatis 세팅을 위한 값을 추가

1) 수정 : 주석처리 된 dependency 주석 해제  
 {% highlight ruby %}
 <dependency>
      <groupId>com.googlecode.log4jdbc</groupId>
      <artifactId>log4jdbc</artifactId>
      <version>1.2</version>
      <exclusions>
          <exclusion>
              <artifactId>slf4j-api</artifactId>
              <groupId>org.slf4j</groupId>
          </exclusion>
      </exclusions>
  </dependency>

  <dependency>
      <groupId>commons-dbcp</groupId>
      <artifactId>commons-dbcp</artifactId>
      <version>1.4</version>
  </dependency>
{% endhighlight %}

2) 추가 : 마리아DB 용 dependecy 추가  
{% highlight ruby %}
  <dependency>
      <groupId>org.mariadb.jdbc</groupId>
      <artifactId>mariadb-java-client</artifactId>
      <version>2.2.1</version>
  </dependency>
{% endhighlight %}

###### 2. context-mapper.xml 에 경로 수정  
{% highlight ruby %}
<!-- MapperConfigurer setup for MyBatis Database Layer with @Mapper("deptMapper") in DeptMapper Interface -->
 	<bean class="egovframework.rte.psl.dataaccess.mapper.MapperConfigurer">
		<property name="basePackage" value="egovframework.example.**.service.impl" />  <!-- 요기 경로 수정 -->
	</bean>
{% endhighlight %}


###### 3. context-dataSource.xml 에 설정값 추가  
{% highlight ruby %}
<bean id="dataSource" class="org.apache.commons.dbcp.BasicDataSource" destroy-method="close">
    <property name="driverClassName" value="org.mariadb.jdbc.Driver"/>
    <property name="url" value="jdbc:mariadb://localhost:3306/test" />
    <property name="username" value="root"/>
    <property name="password" value="root"/>
</bean>
{% endhighlight %}


