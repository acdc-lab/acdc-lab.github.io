---
layout: default
title: News
lang: en
permalink: /en/news/
---

<section class="page-section page-section--news">

  {% include page-heading.html %}

  {% assign news_posts = site.posts | where_exp:'p','p.categories contains "news"' | where_exp:'p','p.lang == "en"' %}
  {% include news-list.html posts=news_posts %}

</section>
