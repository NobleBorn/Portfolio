<template>
    <!-- LEFT CONTENT -->
    <div class="hero-left">

    <p class="hero-intro">Hi, I’m</p>

    <h1 class="hero-name">Mojtaba Alizade</h1>

    <h2 class="hero-title">Software Engineer & Developer</h2>

    <div class="hero-line"></div>

    <p class="hero-description">
        I enjoy turning ideas into working software, solving challenging problems, and learning new technologies along the way.
    </p>

    <div class="hero-actions">
        <RouterLink to="/projects" class="hero-button hero-button-primary">
        Open Projects
        <span>↗</span>
        </RouterLink>

        <RouterLink to="/contact" class="hero-button hero-button-secondary">
        Get in Touch
        <span>✈</span>
        </RouterLink>
    </div>

    </div>

    <!-- RIGHT IMAGE -->
    <div class="hero-right">
    <div class="hero-orbit"></div>
    <div class="hero-image-wrapper">
        <img src="@/assets/images/figure.png" alt="NobleBorn" class="hero-image" />
    </div>
    </div>
</template>
