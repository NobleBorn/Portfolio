<template>
  <section class="mission-control" aria-labelledby="mission-control-title">
    <header class="mission-control-header">
      <h2 id="mission-control-title">MISSION CONTROL</h2>
      <font-awesome-icon :icon="['fas', 'satellite-dish']" aria-hidden="true" />
    </header>

    <dl class="mission-control-details">
      <div class="mission-control-status">
        <dt>Current status</dt>
        <dd class="mission-status-badge">
          <span class="mission-status-dot" aria-hidden="true"></span>
          Available
        </dd>
      </div>
      <div class="mission-control-row">
        <dt>Focus</dt>
        <dd>AI &amp; Software</dd>
      </div>
      <div class="mission-control-row">
        <dt>Location</dt>
        <dd>Sweden</dd>
      </div>
      <div class="mission-control-row">
        <dt>Opportunities</dt>
        <dd class="mission-opportunities">Open</dd>
      </div>
    </dl>
  </section>

  <figure class="mission-quote">
    <span class="mission-quote-mark" aria-hidden="true">“</span>
    <blockquote>
      The purpose of software engineering is to control complexity, not to create it.
    </blockquote>
    <figcaption class="mission-quote-author">— Pamela Zave</figcaption>
    <div class="mission-quote-line" aria-hidden="true"></div>
    <div class="mission-quote-dots" aria-hidden="true"></div>
  </figure>
</template>
