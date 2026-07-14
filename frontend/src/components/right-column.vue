<template>
    <div class="apps-panel-header">
        <h2>PROJECTS</h2>
        <font-awesome-icon :icon="['fas', 'grip']" />
        </div>

        <div class="apps-list">
        <a href="#projects" class="app-card">
            <div class="app-icon app-icon-blue">
            <font-awesome-icon :icon="['fas', 'folder']" />
            </div>

            <div class="app-text">
            <strong>Projects</strong>
            </div>

            <font-awesome-icon class="app-arrow" :icon="['fas', 'chevron-right']" />
        </a>

        <a href="#resume" class="app-card">
            <div class="app-icon app-icon-red">
            <font-awesome-icon :icon="['fas', 'file-lines']" />
            </div>

            <div class="app-text">
            <strong>Resume</strong>
            </div>

            <font-awesome-icon class="app-arrow" :icon="['fas', 'chevron-right']" />
        </a>

        <a href="#about" class="app-card">
            <div class="app-icon app-icon-indigo">
            <font-awesome-icon :icon="['fas', 'user']" />
            </div>

            <div class="app-text">
            <strong>About</strong>
            </div>

            <font-awesome-icon class="app-arrow" :icon="['fas', 'chevron-right']" />
        </a>

        <a href="#skills" class="app-card">
            <div class="app-icon app-icon-green">
            <font-awesome-icon :icon="['fas', 'code']" />
            </div>

            <div class="app-text">
            <strong>Skills</strong>
            </div>

            <font-awesome-icon class="app-arrow" :icon="['fas', 'chevron-right']" />
        </a>
        </div>

        <div class="quote-card">
        <div class="quote-mark">“</div>
        <p>
            Code with purpose.<br />
            Build with passion.<br />
            Inspire through impact.
        </p>

        <div class="quote-line"></div>
        <div class="quote-dots"></div>
     </div>
</template>