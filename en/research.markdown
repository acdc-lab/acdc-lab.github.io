---
layout: default
title: Research
lang: en
permalink: /en/research/
---

  <section class="page-section">

    <div class="page-header">
      <div class="page-header-en">RESEARCH</div>
      <div class="page-header-cn">研究方向</div>
      <div class="page-header-divider"><span class="line"></span></div>
    </div>

    <!-- Direction 1: Recommender Systems -->
    <div class="rsx-block">
      <h2 class="rsx-subtitle">Recommender Systems</h2>
      <div class="rsx-sub-underline"></div>

      <div class="rsx-card">
        <div class="rsx-figure">
          <img src="{{ '/assets/img/research/recommender.webp' | relative_url }}" alt="Recommender Systems">
        </div>
        <div class="rsx-text">
          <p>
            For large-scale personalization scenarios, we study how to balance
            <strong>long-tail alleviation</strong>, <strong>explainability</strong>, and
            <strong>multi-objective optimization</strong>.
            Our systematic research spans <strong>graph-structure modeling</strong>,
            <strong>cross-topic/cross-modal augmentation</strong>,
            <strong>personalized contrastive learning</strong>, and <strong>causal debiasing</strong>,
            targeting key problems such as cold start, cross-domain generalization, and controllable exposure,
            validated against industrial data distributions and online metrics (CTR/CVR/GMV).
          </p>
          <ul class="rsx-bullets">
            <li>Cross-subtopic graphs / multi-path retrieval and reranking for long-tail interest coverage</li>
            <li>Personalized contrastive learning with mutual-information constraints for robust user representations and interest disentanglement</li>
            <li>Causal debiasing (position/popularity/exposure bias) for explainable and controllable recommendation</li>
          </ul>
        </div>
      </div>
    </div>

    <!-- Direction 2: Multimodal Learning -->
    <div class="rsx-block">
      <h2 class="rsx-subtitle">Multimodal Learning</h2>
      <div class="rsx-sub-underline"></div>

      <div class="rsx-card">
        <div class="rsx-figure">
          <img src="{{ '/assets/img/research/multimodal.webp' | relative_url }}" alt="Multimodal Learning">
        </div>
        <div class="rsx-text">
          <p>
            Fusing <strong>text-image-audio-temporal</strong> signals, we study
            <strong>alignment</strong>, <strong>fusion</strong>, and <strong>robust representations</strong>.
            Combined with <strong>pretraining/instruction alignment</strong> and
            <strong>parameter-efficient fine-tuning</strong> (LoRA/QLoRA),
            we deliver end-to-end transferable multimodal capabilities for retrieval, QA, understanding, and generation.
          </p>
          <ul class="rsx-bullets">
            <li>Modality alignment with mutual-information constraints for semantic consistency and fine-grained alignment</li>
            <li>Cross-modal retrieval/annotation/summarization with multi-task, multi-scenario transfer</li>
            <li>Compression, distillation, and robust training for long-tail and noisy scenarios</li>
          </ul>
        </div>
      </div>
    </div>

    <!-- Direction 3: Multi-Agent Learning -->
    <div class="rsx-block">
      <h2 class="rsx-subtitle">Multi-Agent Learning</h2>
      <div class="rsx-sub-underline"></div>

      <div class="rsx-card">
        <div class="rsx-figure">
          <img src="{{ '/assets/img/research/agent.webp' | relative_url }}" alt="Multi-Agent Learning">
        </div>
        <div class="rsx-text">
          <p>
            Toward <strong>collaborative decision-making</strong> and <strong>task decomposition</strong>,
            we study role assignment, communication mechanisms, and adaptive coordination of multiple agents.
            Combining <strong>LLM agents</strong>, <strong>hierarchical planning</strong>, and
            <strong>self-play/self-evolution</strong>,
            we build reliable and scalable collective intelligence for recommendation, retrieval, and autonomous systems.
          </p>
          <ul class="rsx-bullets">
            <li>Expert-agent collaboration (plan-execute-evaluate-self-reflect)</li>
            <li>Communication protocols and credit assignment for stable cooperation and fair resource utilization</li>
            <li>Cross-task transfer and open-environment adaptation with safety and controllability mechanisms</li>
          </ul>
        </div>
      </div>
    </div>

  </section>
