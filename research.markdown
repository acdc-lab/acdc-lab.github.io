---
layout: default
title: 研究
permalink: /research/
---

  <section class="rsx-section container">

    <!-- 页眉 -->
    <div class="rsx-header">
      <h1 class="rsx-title">研究方向</h1>
      <div class="rsx-divider">
        <span class="rsx-line"></span>
      </div>
    </div>

    <!-- 方向 1：推荐系统 -->
    <div class="rsx-block">
      <h2 class="rsx-subtitle">推荐系统</h2>
      <div class="rsx-sub-underline"></div>

      <div class="rsx-card">
        <div class="rsx-figure">
          <img src="{{ '/assets/img/research/recommender.png' | relative_url }}" alt="推荐系统">
        </div>
        <div class="rsx-text">
          <p>
            面向大规模个性化场景，研究如何在<strong>长尾缓解</strong>、<strong>可解释性</strong>与<strong>多目标优化</strong>之间取得平衡。
            我们围绕<strong>图结构建模</strong>、<strong>跨主题/跨模态增强</strong>、<strong>个性化对比学习</strong>与<strong>因果去偏</strong>开展系统研究，
            关注冷启动、跨域泛化、可控曝光等关键问题，并与工业数据分布与上线指标（CTR/CVR/GMV等）对齐验证。
          </p>
          <ul class="rsx-bullets">
            <li>跨子主题图 / 多路检索与重排，面向长尾兴趣的覆盖与提升</li>
            <li>个性化对比学习与互信息约束，稳健用户表征与兴趣解耦</li>
            <li>因果去偏（位置/受欢迎度/曝光偏差），可解释与可控的推荐</li>
          </ul>
        </div>
      </div>
    </div>

    <!-- 方向 2：多模态学习 -->
    <div class="rsx-block">
      <h2 class="rsx-subtitle">多模态学习</h2>
      <div class="rsx-sub-underline"></div>

      <div class="rsx-card">
        <div class="rsx-figure">
          <img src="{{ '/assets/img/research/multimodal.png' | relative_url }}" alt="多模态学习">
        </div>
        <div class="rsx-text">
          <p>
            融合<strong>文本-图像-音频-时序</strong>等多模态信号，研究<strong>对齐</strong>、<strong>融合</strong>与<strong>鲁棒表征</strong>。
            结合<strong>预训练/指令对齐</strong>与<strong>参数高效微调</strong>（LoRA/QLoRA），
            在检索、问答、理解与生成等任务中实现端到端可迁移的多模态能力。
          </p>
          <ul class="rsx-bullets">
            <li>模态对齐与互信息约束，语义一致与细粒度对齐</li>
            <li>跨模态检索/标注/摘要，多任务多场景迁移</li>
            <li>压缩蒸馏与鲁棒训练，提升长尾与噪声场景表现</li>
          </ul>
        </div>
      </div>
    </div>

    <!-- 方向 3：多智能体学习 -->
    <div class="rsx-block">
      <h2 class="rsx-subtitle">多智能体学习</h2>
      <div class="rsx-sub-underline"></div>

      <div class="rsx-card">
        <div class="rsx-figure">
          <img src="{{ '/assets/img/research/agent.png' | relative_url }}" alt="多智能体学习">
        </div>
        <div class="rsx-text">
          <p>
            面向<strong>协同决策</strong>与<strong>任务分解</strong>，研究多智能体的角色分工、通信机制与自适应协调。
            结合<strong>LLM 代理</strong>、<strong>层级规划</strong>与<strong>自博弈/自进化</strong>，
            在推荐、检索、自治系统等场景中实现可靠、可扩展的群体智能。
          </p>
          <ul class="rsx-bullets">
            <li>专家-代理协同（规划-执行-评估-自我反思）</li>
            <li>通信协议与信用分配，稳定协作与公平资源利用</li>
            <li>跨任务迁移与开放环境适应，安全与可控机制</li>
          </ul>
        </div>
      </div>
    </div>

  </section>
