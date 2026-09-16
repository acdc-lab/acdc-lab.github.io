---
layout: default
title: 活动
permalink: /activities/
---

<section class="page-section">

  <div class="page-header">
    <div class="page-header-en">ACTIVITIES</div>
    <div class="page-header-cn">活动</div>
    <div class="page-header-divider"><span class="line"></span></div>
  </div>

  {% assign activities = site.data.activities | default: empty %}
  {% if activities and activities.size > 0 %}
  {% for act in activities %}
  <div class="act-block">
    <h2 class="act-title">{{ act.title }}<span class="act-date">{{ act.date }}</span></h2>
    <div class="act-grid">
      {% for p in act.photos %}
      <figure class="act-item">
        <img src="{{ p.img | relative_url }}" alt="{{ p.caption | default: act.title }}" loading="lazy" decoding="async">
        {% if p.caption %}<figcaption>{{ p.caption }}</figcaption>{% endif %}
      </figure>
      {% endfor %}
    </div>
  </div>
  {% endfor %}
  {% else %}
  <p class="act-empty">活动照片整理中，敬请期待。</p>
  {% endif %}

</section>

<div id="act-lightbox" class="act-lightbox" hidden>
  <img id="act-lightbox-img" src="" alt="">
  <button id="act-lightbox-close" aria-label="Close">×</button>
</div>
<script>
  var lb = document.getElementById('act-lightbox');
  var lbImg = document.getElementById('act-lightbox-img');
  document.querySelectorAll('.act-item img').forEach(function (img) {
    img.addEventListener('click', function () {
      lbImg.src = img.src;
      lb.hidden = false;
      document.body.style.overflow = 'hidden';
    });
  });
  function closeLb() { lb.hidden = true; document.body.style.overflow = ''; }
  document.getElementById('act-lightbox-close').addEventListener('click', closeLb);
  lb.addEventListener('click', function (e) { if (e.target === lb) closeLb(); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && !lb.hidden) closeLb(); });
</script>
