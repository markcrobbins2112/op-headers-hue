const { Plugin } = require('obsidian');

module.exports = class HeadersHuePlugin extends Plugin {
  constructor(app, manifest) {
    super(app, manifest);
    this.observer = null;
    this.activeAnimations = new Set();
  }

  async onload() {
    console.log('%c[Headers Hue]%c Initializing Custom Header Theme Engine...', 'color: #70a1ff; font-weight: bold;', 'color: default;');

    // 1. Inject the core layout CSS stylesheet ruleset into the global head document
    this.injectStyles();

    // 2. Setup MutationObserver to watch fold/unfold class state modifications instantly
    this.initializeFoldObserver();

    // 3. Register a standard Markdown Post Processor to apply classes inside static Reading Views
    this.registerMarkdownPostProcessor((element) => {
      this.hookReadingModeHeaders(element);
    });

    // Run an initial sweep across the workspace layout right at boot
    this.app.workspace.onLayoutReady(() => this.sweepActiveViewport());
    this.registerEvent(this.app.workspace.on('layout-change', () => this.sweepActiveViewport()));
    this.registerEvent(this.app.workspace.on('active-leaf-change', () => this.sweepActiveViewport()));
  }

  onunload() {
    console.log('%c[Headers Hue]%c Restoring native theme header configurations...', 'color: #70a1ff; font-weight: bold;', 'color: default;');
    if (this.observer) this.observer.disconnect();

    const styleEl = document.getElementById('obsidian-headers-hue-styles');
    if (styleEl) styleEl.remove();
  }

  // Monitor DOM token structural switches to fire custom animations on code folds
  initializeFoldObserver() {
    this.observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
          const target = mutation.target;
          
          const isFoldTrigger = target.matches('.cm-fold-indicator, .cm-gutterElement, .markdown-heading-collapse-button');
          if (isFoldTrigger) {
            const lineParent = target.closest('.cm-line, .markdown-rendered, h1, h2, h3, h4, h5, h6');
            if (lineParent) this.triggerFoldAnimationLoop(lineParent);
          }
        }
      });
    });

    this.observer.observe(document.body, {
      attributes: true,
      subtree: true,
      attributeFilter: ['class']
    });
  }

  sweepActiveViewport() {
    const activeHeaders = document.querySelectorAll(
      '.cm-header, h1, h2, h3, h4, h5, h6, .markdown-preview-view h1, .markdown-preview-view h2, .markdown-preview-view h3, .markdown-preview-view h4, .markdown-preview-view h5, .markdown-preview-view h6'
    );
    
    activeHeaders.forEach((header) => {
      this.assignHeaderIdentifierTraits(header);
    });
  }

  hookReadingModeHeaders(previewElement) {
    const headings = previewElement.querySelectorAll('h1, h2, h3, h4, h5, h6');
    headings.forEach((heading) => {
      this.assignHeaderIdentifierTraits(heading);
      
      const collapseBtn = heading.querySelector('.markdown-heading-collapse-button');
      if (collapseBtn && !collapseBtn.dataset.hueBound) {
        collapseBtn.dataset.hueBound = "true";
        collapseBtn.addEventListener('click', () => {
          this.triggerFoldAnimationLoop(heading);
        });
      }
    });
  }

  assignHeaderIdentifierTraits(element) {
    let level = 0;

    const tagName = element.tagName;
    if (tagName && /^H[1-6]$/.test(tagName)) {
      level = parseInt(tagName.charAt(1));
    } else {
      const classList = element.className;
      const match = classList.match(/cm-header-([1-6])/);
      if (match) {
        level = parseInt(match[1]);
      }
    }

    if (level >= 1 && level <= 6) {
      if (element.getAttribute('data-hue-level') !== String(level)) {
        element.setAttribute('data-hue-level', String(level));
        element.classList.add('headers-hue-processed');
      }
    }
  }

  triggerFoldAnimationLoop(containerElement) {
    const targets = containerElement.matches('[data-hue-level]') ? 
      [containerElement] : 
      containerElement.querySelectorAll('[data-hue-level]');

    targets.forEach((el) => {
      if (this.activeAnimations.has(el)) return;

      this.activeAnimations.add(el);
      el.classList.add('headers-hue-folding');

      window.setTimeout(() => {
        el.classList.remove('headers-hue-folding');
        this.activeAnimations.delete(el);
      }, 1000);
    });
  }

  injectStyles() {
    if (document.getElementById('obsidian-headers-hue-styles')) return;

    const styleEl = document.createElement('style');
    styleEl.id = 'obsidian-headers-hue-styles';

    const levelsMap = {
      "1": { rest: "hsl(0, 75%, 45%)",   hover: "hsl(0, 85%, 65%)" },
      "2": { rest: "hsl(280, 70%, 45%)", hover: "hsl(280, 85%, 65%)" },
      "3": { rest: "hsl(210, 75%, 45%)", hover: "hsl(210, 85%, 65%)" },
      "4": { rest: "hsl(120, 65%, 40%)", hover: "hsl(120, 80%, 60%)" },
      "5": { rest: "hsl(50, 80%, 40%)",  hover: "hsl(50, 95%, 55%)" },
      "6": { rest: "hsl(25, 80%, 45%)",  hover: "hsl(25, 95%, 60%)" }
    };

    let cssRules = `
      .headers-hue-processed,
      .cm-s-obsidian .cm-header {
        transition: color 0.3s ease, border-image 0.3s ease !important;
        text-decoration: none !important;
        text-decoration-line: none !important;
      }

      /* Explicitly target and reset header hashtags/markup tokens everywhere */
      .cm-s-obsidian .cm-formatting-header,
      .cm-s-obsidian [class*="cm-formatting-header"] {
        color: var(--text-muted, #a6a6a6) !important;
        text-decoration: none !important;
        text-decoration-line: none !important;
        border-bottom: none !important;
        background-image: none !important;
        display: inline-block;
      }
    `;

    Object.keys(levelsMap).forEach((lvl) => {
      const colors = levelsMap[lvl];
      
      cssRules += `
        /* FIX: Added display layout modifications and explicit 60% min-width parameters */
        [data-hue-level="${lvl}"]:not(.cm-formatting-header),
        .cm-s-obsidian .cm-header-${lvl}:not(.cm-formatting-header) {
          display: inline-block !important;
          min-width: 60% !important;
          color: ${colors.rest} !important;
          border-bottom: 2px solid transparent !important;
          border-image: linear-gradient(to right, ${colors.rest}, transparent) 1 !important;
          text-decoration: none !important;
        }

        [data-hue-level="${lvl}"]:not(.cm-formatting-header):hover,
        .cm-s-obsidian .cm-header-${lvl}:not(.cm-formatting-header):hover {
          color: ${colors.hover} !important;
          border-image: linear-gradient(to right, ${colors.hover}, transparent) 1 !important;
        }
      `;
    });

    cssRules += `
      .headers-hue-folding {
        animation: headersHueShiftRotate 1s ease-in-out !important;
      }

      @keyframes headersHueShiftRotate {
        0%   { filter: hue-rotate(0deg); }
        50%  { filter: hue-rotate(180deg); }
        100% { filter: hue-rotate(360deg); }
      }
    `;

    styleEl.innerHTML = cssRules;
    document.head.appendChild(styleEl);
    console.log('[Headers Hue] Global layout theme style sheets successfully registered.');
  }
};
