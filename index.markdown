---
layout: default
title: 首页
---

<div class="acdc-home">

  <!-- Hero / Codex-like product landing area -->
  <section class="acdc-hero">
    <div class="acdc-hero-noise"></div>

    <div class="acdc-hero-copy">
      <p class="acdc-eyebrow">Advanced Cross-media Data Computing Group</p>
      <h1>ACDC Lab</h1>
      <p class="acdc-hero-lead">跨媒体数据计算 · 探索智能，连接世界</p>
      <p class="acdc-hero-desc">
        聚焦社交媒体与数据挖掘、人工智能应用、多模态学习与大模型等前沿方向，
        致力于数据驱动的智能计算与应用创新。
      </p>

      <div class="acdc-hero-actions">
        <a class="acdc-btn acdc-btn-primary" href="{{ '/research/' | relative_url }}">了解研究方向</a>
        <a class="acdc-btn acdc-btn-secondary" href="{{ '/recruit/' | relative_url }}">加入实验室</a>
      </div>
    </div>

    <div class="acdc-console" aria-label="ACDC Lab Research System">
      <div class="acdc-console-sidebar">
        <span>◎</span>
        <span>⌂</span>
        <span>▥</span>
        <span>✣</span>
        <span>♟</span>
      </div>

      <div class="acdc-console-main">
        <div class="acdc-console-title">ACDC Lab Research System</div>

        <div class="acdc-console-grid">
          <div class="acdc-panel acdc-panel-embedding">
            <div class="acdc-panel-label">Cross-media Embedding</div>
            <div class="acdc-dot-field">
              <span></span><span></span><span></span><span></span><span></span>
              <span></span><span></span><span></span><span></span><span></span>
            </div>
          </div>

          <div class="acdc-panel acdc-panel-chart">
            <div class="acdc-panel-label">Model Performance</div>
            <svg viewBox="0 0 240 120" role="img" aria-label="model performance chart">
              <polyline points="10,94 45,66 78,78 112,46 145,56 180,28 220,18" fill="none" stroke="currentColor" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
              <g class="grid">
                <line x1="10" y1="100" x2="230" y2="100"/><line x1="10" y1="70" x2="230" y2="70"/><line x1="10" y1="40" x2="230" y2="40"/>
              </g>
            </svg>
          </div>

          <div class="acdc-panel acdc-panel-fusion">
            <div class="acdc-panel-label">Multimodal Fusion</div>
            <div class="acdc-fusion-icons">
              <span>IMG</span><span>AUD</span><span>T</span><span>VID</span>
            </div>
            <div class="acdc-fusion-node"></div>
          </div>

          <div class="acdc-panel acdc-panel-data">
            <div class="acdc-panel-label">Data Overview</div>
            <div class="acdc-donut"><span>68%</span></div>
            <ul>
              <li>文本 Text</li>
              <li>图像 Image</li>
              <li>视频 Video</li>
              <li>音频 Audio</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Team introduction -->
  <section class="acdc-section acdc-intro-section">
    <div class="acdc-section-head">
      <p class="acdc-eyebrow">GROUP INTRODUCTION</p>
      <h2>团队简介</h2>
    </div>

    <div class="acdc-intro-card">
      <div class="acdc-faculty-photo">
        <img src="{{ '/assets/img/members/jpchen.png' | relative_url }}" alt="陈晋鹏">
      </div>

      <div class="acdc-intro-content">
        <p>
          ACDC团队负责人 <strong>陈晋鹏</strong>，副教授，博士生导师，北京邮电大学计算机学院副院长。
          主要研究方向：社会媒体与数据挖掘、人工智能应用、大语言模型等。主持/参与国家级、省部级和企事业合作项目40余项，
          已发表SIGIR、AAAI、CIKM、MM等学术论文80余篇，申请/授权专利8项。
        </p>
        <p>
          曾获ICONIP 2022最佳论文奖、周炯槃优秀青年教师励志奖、"北京移动"教学创新奖等。
          CAAI智能服务专委会委员，CIPS社会媒体处理专委会委员、语言与知识计算专委会委员等，
          担任《Big Data Mining and Analytics》青年编委、《计算机科学》执行委员、《智能系统学报》助理编委等。
        </p>

        <div class="acdc-info-strip">
          <div class="acdc-info-icon">👥</div>
          <div>
            <h3>欢迎加入ACDC大家庭</h3>
            <p>
              目前团队研究方向聚焦推荐系统 / 模型轻量化 / 自动驾驶，
              欢迎相关研究方向同行者加入，感兴趣的同学可发送简历到
              <a href="mailto:jpchen@bupt.edu.cn">jpchen@bupt.edu.cn</a>。
            </p>
          </div>
        </div>

        <p class="acdc-resource-note">
          计算资源：团队拥有独立计算资源，并且从AutoDL购买足量计算资源提供模型训练支持。
        </p>
      </div>
    </div>
  </section>

  <!-- Research cards -->
  <section class="acdc-section acdc-research-section">
    <div class="acdc-section-head">
      <p class="acdc-eyebrow">MAIN RESEARCH</p>
      <h2>研究方向</h2>
    </div>

    <div class="acdc-research-cards">
      <article class="acdc-research-card">
        <div class="acdc-card-number">01</div>
        <div class="acdc-card-copy">
          <h3>推荐系统</h3>
          <p>面向大规模数据的个性化推荐方法研究，包括召回、排序、多样性与可解释性等关键问题。</p>
          <a href="{{ '/research/' | relative_url }}">了解更多 →</a>
        </div>
        <img src="{{ '/assets/img/recommend.png' | relative_url }}" alt="推荐系统">
      </article>

      <article class="acdc-research-card">
        <div class="acdc-card-number">02</div>
        <div class="acdc-card-copy">
          <h3>多模态学习</h3>
          <p>探索文本、图像、视频、音频等多模态数据的表示学习与融合建模，助力跨模态理解与生成。</p>
          <a href="{{ '/research/' | relative_url }}">了解更多 →</a>
        </div>
        <img src="{{ '/assets/img/multimodal.png' | relative_url }}" alt="多模态学习">
      </article>

      <article class="acdc-research-card">
        <div class="acdc-card-number">03</div>
        <div class="acdc-card-copy">
          <h3>多智能体学习</h3>
          <p>研究多智能体协作与博弈、强化学习与决策优化，面向复杂场景的智能体系统建模与应用。</p>
          <a href="{{ '/research/' | relative_url }}">了解更多 →</a>
        </div>
        <img src="{{ '/assets/img/multiagent.png' | relative_url }}" alt="多智能体学习">
      </article>
    </div>
  </section>

  <!-- Join us -->
  <section class="acdc-join-band">
    <div>
      <p class="acdc-eyebrow">JOIN US</p>
      <h2>加入ACDC，共同创造未来</h2>
      <p>
        我们欢迎对社会媒体、人工智能、多模态学习与大模型等方向充满热情的同学加入，
        一起探索数据智能的无限可能。
      </p>
      <div class="acdc-join-actions">
        <a class="acdc-btn acdc-btn-light" href="mailto:jpchen@bupt.edu.cn">发送简历</a>
        <a class="acdc-mail-link" href="mailto:jpchen@bupt.edu.cn">jpchen@bupt.edu.cn</a>
      </div>
    </div>
    <div class="acdc-portal" aria-hidden="true">
      <span></span>
    </div>
  </section>

</div>
