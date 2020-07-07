---
layout: post
title:  "[웹개발] Mybatis 서브쿼리가 많을 때."
date:   2020-07-06 20:00:00 +0800
categories: framework
tags: framework mybatis
---

##### 서브쿼리가 많을 때,
- 쿼리가 길어져서 보기 어려울 때 사용하자
{% highlight language %}
<sql id="a">
	SELECT * FROM TABLE1
</sql>


<select id="getList" resultType="hashmap">
	<include refid="a" />
	WHRE name = #{value}
</select>
{% endhighlight %}
