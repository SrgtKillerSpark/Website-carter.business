const projects = [
  {
    title: "Project Alpha",
    description: "A cool project I worked on. This is placeholder text that you can edit later.",
    tags: ["JavaScript", "Node.js", "React"],
    link: "https://github.com"
  },
  {
    title: "Project Beta",
    description: "Another awesome project with interesting features and functionality.",
    tags: ["Python", "FastAPI", "PostgreSQL"],
    link: "https://github.com"
  },
  {
    title: "Project Gamma",
    description: "Something creative and fun that showcases my skills.",
    tags: ["TypeScript", "Vite", "TailwindCSS"],
    link: null
  }
];

let currentProjectIndex = 0;
let hasAnimated = false;

export function renderV2() {
  return `
  <div class="v2-container">
    <header class="v2-header">
      <div class="v2-name-container">
        <div class="rocket-container" id="rocket">
          <svg viewBox="0 0 64 64" fill="none" class="rocket-svg">
            <path d="M32 4C32 4 20 16 20 32C20 40 24 48 32 56C40 48 44 40 44 32C44 16 32 4 32 4Z" fill="var(--accent)"/>
            <circle cx="32" cy="28" r="6" fill="var(--card-bg)"/>
            <path d="M20 32L12 40L20 44V32Z" fill="var(--accent)" opacity="0.8"/>
            <path d="M44 32L52 40L44 44V32Z" fill="var(--accent)" opacity="0.8"/>
            <path d="M28 56L32 64L36 56H28Z" fill="#ff6b6b"/>
            <path d="M30 56L32 60L34 56H30Z" fill="#ffd93d"/>
          </svg>
        </div>
        <h1 class="v2-name" id="v2-name">Andrew Carter</h1>
      </div>
    </header>

    <div class="v2-main">
      <aside class="v2-sidebar">
        <div class="v2-profile-image">
          <img src="/websitephoto.jpg" alt="Photo of Andrew" />
        </div>
        <nav class="v2-social-links">
          <svg class="constellation-lines" viewBox="0 0 100 300" preserveAspectRatio="none">
            <line x1="50" y1="20" x2="50" y2="70" stroke="var(--accent)" stroke-width="1" opacity="0.3"/>
            <line x1="50" y1="70" x2="30" y2="120" stroke="var(--accent)" stroke-width="1" opacity="0.3"/>
            <line x1="50" y1="120" x2="70" y2="170" stroke="var(--accent)" stroke-width="1" opacity="0.3"/>
            <line x1="50" y1="170" x2="40" y2="220" stroke="var(--accent)" stroke-width="1" opacity="0.3"/>
            <line x1="50" y1="220" x2="50" y2="270" stroke="var(--accent)" stroke-width="1" opacity="0.3"/>
            <circle cx="50" cy="20" r="3" fill="var(--accent)" opacity="0.5"/>
            <circle cx="50" cy="70" r="3" fill="var(--accent)" opacity="0.5"/>
            <circle cx="30" cy="120" r="3" fill="var(--accent)" opacity="0.5"/>
            <circle cx="70" cy="170" r="3" fill="var(--accent)" opacity="0.5"/>
            <circle cx="40" cy="220" r="3" fill="var(--accent)" opacity="0.5"/>
            <circle cx="50" cy="270" r="3" fill="var(--accent)" opacity="0.5"/>
          </svg>
          <a href="https://x.com/SrgtKillerSpark" target="_blank" rel="noopener noreferrer" class="v2-social-link">
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            <span>Twitter</span>
          </a>
          <a href="https://discord.gg/kuseDR8Xz4" target="_blank" rel="noopener noreferrer" class="v2-social-link">
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/></svg>
            <span>Discord</span>
          </a>
          <a href="https://www.youtube.com/@SrgtKillerSpark" target="_blank" rel="noopener noreferrer" class="v2-social-link">
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
            <span>YouTube</span>
          </a>
          <a href="https://steamcommunity.com/id/srgtsparky" target="_blank" rel="noopener noreferrer" class="v2-social-link">
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M11.979 0C5.678 0 .511 4.86.022 11.037l6.432 2.658c.545-.371 1.203-.59 1.912-.59.063 0 .125.004.188.006l2.861-4.142V8.91c0-2.495 2.028-4.524 4.524-4.524 2.494 0 4.524 2.031 4.524 4.527s-2.03 4.525-4.524 4.525h-.105l-4.076 2.911c0 .052.004.105.004.159 0 1.875-1.515 3.396-3.39 3.396-1.635 0-3.016-1.173-3.331-2.727L.436 15.27C1.862 20.307 6.486 24 11.979 24c6.627 0 11.999-5.373 11.999-12S18.605 0 11.979 0zM7.54 18.21l-1.473-.61c.262.543.714.999 1.314 1.25 1.297.539 2.793-.076 3.332-1.375.263-.63.264-1.319.005-1.949s-.75-1.121-1.377-1.383c-.624-.26-1.29-.249-1.878-.03l1.523.63c.956.4 1.409 1.5 1.009 2.455-.397.957-1.497 1.41-2.454 1.012H7.54zm11.415-9.303c0-1.662-1.353-3.015-3.015-3.015-1.665 0-3.015 1.353-3.015 3.015 0 1.665 1.35 3.015 3.015 3.015 1.663 0 3.015-1.35 3.015-3.015zm-5.273-.005c0-1.252 1.013-2.266 2.265-2.266 1.249 0 2.266 1.014 2.266 2.266 0 1.251-1.017 2.265-2.266 2.265-1.253 0-2.265-1.014-2.265-2.265z"/></svg>
            <span>Steam</span>
          </a>
          <a href="https://www.twitch.tv/srgtkillerspark" target="_blank" rel="noopener noreferrer" class="v2-social-link">
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M11.571 4.714h1.715v5.143H11.57zm4.715 0H18v5.143h-1.714zM6 0L1.714 4.286v15.428h5.143V24l4.286-4.286h3.428L22.286 12V0zm14.571 11.143l-3.428 3.428h-3.429l-3 3v-3H6.857V1.714h13.714z"/></svg>
            <span>Twitch</span>
          </a>
        </nav>
      </aside>

      <div class="v2-content">
        <section class="v2-bio-panel">
          <p>Fellow nerd named Andrew. Can also call me Sparky, Srgt, etc. I'm obsessed with games and music, and enjoy wasting my life playing them (:</p>
        </section>

        <section class="v2-projects-panel">
          <div class="projects-header">
            <h2>Projects</h2>
          </div>
          <div class="projects-slideshow">
            <button class="slide-arrow slide-prev" id="prev-project">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/></svg>
            </button>
            <div class="project-slide" id="project-slide">
              ${renderProject(projects[0])}
            </div>
            <button class="slide-arrow slide-next" id="next-project">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/></svg>
            </button>
          </div>
          <div class="project-dots" id="project-dots">
            ${projects.map((_, i) => `<span class="dot ${i === 0 ? 'active' : ''}" data-index="${i}"></span>`).join('')}
          </div>
        </section>
      </div>

      <aside class="v2-actions">
        <a href="/resume.pdf" download="Andrew_Carter_Resume.pdf" class="v2-action-link">
          <div class="action-icon-wrapper">
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zm-1 2l5 5h-5V4zM6 20V4h6v6h6v10H6z"/></svg>
          </div>
          <span>Resume</span>
        </a>
        <a href="mailto:andrew@carter.business" class="v2-action-link">
          <div class="action-icon-wrapper">
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
          </div>
          <span>Contact</span>
        </a>
        <a href="tel:252-367-1600" class="v2-action-link">
          <div class="action-icon-wrapper">
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
          </div>
          <span>Call</span>
        </a>
      </aside>
    </div>
  </div>
  `;
}

function renderProject(project) {
  return `
    <h3 class="project-title">${project.title}</h3>
    <p class="project-description">${project.description}</p>
    <div class="project-tags">
      ${project.tags.map(tag => `<span class="project-tag">${tag}</span>`).join('')}
    </div>
    ${project.link ? `<a href="${project.link}" target="_blank" rel="noopener noreferrer" class="project-link">View Project</a>` : ''}
  `;
}

export function initV2() {
  if (!hasAnimated) {
    hasAnimated = true;
    const rocket = document.getElementById('rocket');
    const name = document.getElementById('v2-name');
    
    if (rocket && name) {
      rocket.classList.add('animate');
      name.classList.add('animate');
    }
  }

  const prevBtn = document.getElementById('prev-project');
  const nextBtn = document.getElementById('next-project');
  const slide = document.getElementById('project-slide');
  const dots = document.getElementById('project-dots');

  if (prevBtn && nextBtn && slide && dots) {
    prevBtn.addEventListener('click', () => {
      currentProjectIndex = (currentProjectIndex - 1 + projects.length) % projects.length;
      updateSlide();
    });

    nextBtn.addEventListener('click', () => {
      currentProjectIndex = (currentProjectIndex + 1) % projects.length;
      updateSlide();
    });

    dots.addEventListener('click', (e) => {
      if (e.target.classList.contains('dot')) {
        currentProjectIndex = parseInt(e.target.dataset.index);
        updateSlide();
      }
    });
  }

  function updateSlide() {
    slide.classList.add('fade-out');
    setTimeout(() => {
      slide.innerHTML = renderProject(projects[currentProjectIndex]);
      slide.classList.remove('fade-out');
      
      document.querySelectorAll('.dot').forEach((dot, i) => {
        dot.classList.toggle('active', i === currentProjectIndex);
      });
    }, 200);
  }
}
