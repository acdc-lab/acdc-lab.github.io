---
layout: default
title: News
lang: en
permalink: /en/news/
---

<section class="page-section">

  <div class="page-header">
    <div class="page-header-en">NEWS</div>
    <div class="page-header-divider"><span class="line"></span></div>
  </div>

  <ul class="news-list">
    {% assign news_posts = site.posts | where_exp:'p','p.lang == "en"' %}
    {% for post in news_posts %}
    <li class="news-item">
      <a class="news-thumb" href="{{ post.url | relative_url }}">
        {% if post.thumb %}
          <img src="{{ post.thumb | relative_url }}" alt="{{ post.title }}">
        {% else %}
          <div class="news-thumb ph">NEWS</div>
        {% endif %}
      </a>

      <div class="news-meta">
        <h3 class="news-title-link">
          <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
        </h3>
        <div class="news-date">📅 {{ post.date | date: "%b %-d, %Y" }}</div>
        {% if post.excerpt %}
          <p class="news-excerpt">{{ post.excerpt | strip_html | truncate: 120 }}</p>
        {% endif %}
      </div>
    </li>
    {% endfor %}
  </ul>

</section>
