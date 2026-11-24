---
layout: default
title: 新闻
permalink: /news/
---

<section class="page-section page-section--news">

  {% include page-heading.html title="新闻" subtitle="News" %}

  {% assign news_posts = site.posts | where_exp:'p','p.categories contains "news"' | where_exp:'p','p.lang != "en"' %}
  {% include news-list.html posts=news_posts %}

  <!-- 以后需要分页时，这里可以放一个简单的分页条（现在先省略） -->

</section>
