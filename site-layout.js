// site-layout.js
// JavaScript to dynamically generate and inject the website header and footer

// HEADER HTML
const headerHTML = `
  <header>
    <div class="navbar">
      <a class="logo" href="/index.html" style="display:flex;align-items:center;gap:12px;">
        <img src="/images/LPGLogoOnly.png" alt="Log Post Games Logo" style="height:38px;width:auto;display:inline-block;vertical-align:middle;">
        Log Post Games
      </a>
      <nav>
        <ul>
          <li><a href="/index.html">Home</a></li>
          <li><a href="/games.html">Games</a></li>
          <li><a href="/news.html">News/Blog</a></li>
          <li><a href="/about.html">About Us</a></li>
          <li><a href="/contact.html">Contact</a></li>
        </ul>
      </nav>
    </div>
  </header>
`;

// FOOTER HTML
const footerHTML = `
  <footer>
    <div class="social-icons" style="display: flex; gap: 10px; flex-wrap: wrap; justify-content: center;">
        <a href="https://x.com/LogPostGames" target="_blank" rel="noopener" style="display: inline-flex; align-items: center; justify-content: center; width: 42px; height: 42px; background: linear-gradient(135deg, #c1121f 0%, #c1121f 100%); border-radius: 15px; padding: 8px; transition: all 0.3s ease; text-decoration: none;" onmouseover="this.style.transform='translateY(-4px)'; " onmouseout="this.style.transform=''; this.style.filter=''; this.style.animation=''; ">
           <svg class="niftybutton-twitterx" style="width: 32px; height: 32px; display: block;" data-donate="true" data-tag="twix" data-name="X (Twitter)" viewBox="0 0 512 512" preserveAspectRatio="xMidYMid meet"><title>X (Twitter) social icon</title>
                <g transform="translate(64, 64) scale(0.75, 0.75)">
                <path d="M403.2 48h78.643l-171.52 196.544L512 488h-158.016l-123.744-161.248L99.136 488H10.112l183.456-210.24L0 48h161.024l111.84 148.288L403.2 48zm-27.52 417.792h43.52L138.368 68.672H91.776z" style="width: 32px; height: 32px; display: block;"></path>
                </g>
            </svg>
        </a>
        <a href="https://www.instagram.com/logpostgames/" target="_blank" rel="noopener" style="display: inline-flex; align-items: center; justify-content: center; width: 42px; height: 42px; background: linear-gradient(135deg, #c1121f 0%, #c1121f 100%); border-radius: 15px; padding: 8px; transition: all 0.3s ease; text-decoration: none;" onmouseover="this.style.transform='translateY(-4px)'; " onmouseout="this.style.transform=''; this.style.filter=''; this.style.animation=''; ">
            <svg class="niftybutton-instagram" style="width: 32px; height: 32px; display: block;" data-donate="true" data-tag="ins" data-name="Instagram" viewBox="0 0 512 512" preserveAspectRatio="xMidYMid meet"><title>Instagram social icon</title>
                <path d="M256 109.3c47.8 0 53.4 0.2 72.3 1 17.4 0.8 26.9 3.7 33.2 6.2 8.4 3.2 14.3 7.1 20.6 13.4 6.3 6.3 10.1 12.2 13.4 20.6 2.5 6.3 5.4 15.8 6.2 33.2 0.9 18.9 1 24.5 1 72.3s-0.2 53.4-1 72.3c-0.8 17.4-3.7 26.9-6.2 33.2 -3.2 8.4-7.1 14.3-13.4 20.6 -6.3 6.3-12.2 10.1-20.6 13.4 -6.3 2.5-15.8 5.4-33.2 6.2 -18.9 0.9-24.5 1-72.3 1s-53.4-0.2-72.3-1c-17.4-0.8-26.9-3.7-33.2-6.2 -8.4-3.2-14.3-7.1-20.6-13.4 -6.3-6.3-10.1-12.2-13.4-20.6 -2.5-6.3-5.4-15.8-6.2-33.2 -0.9-18.9-1-24.5-1-72.3s0.2-53.4 1-72.3c0.8-17.4 3.7-26.9 6.2-33.2 3.2-8.4 7.1-14.3 13.4-20.6 6.3-6.3 12.2-10.1 20.6-13.4 6.3-2.5 15.8-5.4 33.2-6.2C202.6 109.5 208.2 109.3 256 109.3M256 77.1c-48.6 0-54.7 0.2-73.8 1.1 -19 0.9-32.1 3.9-43.4 8.3 -11.8 4.6-21.7 10.7-31.7 20.6 -9.9 9.9-16.1 19.9-20.6 31.7 -4.4 11.4-7.4 24.4-8.3 43.4 -0.9 19.1-1.1 25.2-1.1 73.8 0 48.6 0.2 54.7 1.1 73.8 0.9 19 3.9 32.1 8.3 43.4 4.6 11.8 10.7 21.7 20.6 31.7 9.9 9.9 19.9 16.1 31.7 20.6 11.4 4.4 24.4 7.4 43.4 8.3 19.1 0.9 25.2 1.1 73.8 1.1s54.7-0.2 73.8-1.1c19-0.9 32.1-3.9 43.4-8.3 11.8-4.6 21.7-10.7 31.7-20.6 9.9-9.9 16.1-19.9 20.6-31.7 4.4-11.4 7.4-24.4 8.3-43.4 0.9-19.1 1.1-25.2 1.1-73.8s-0.2-54.7-1.1-73.8c-0.9-19-3.9-32.1-8.3-43.4 -4.6-11.8-10.7-21.7-20.6-31.7 -9.9-9.9-19.9-16.1-31.7-20.6 -11.4-4.4-24.4-7.4-43.4-8.3C310.7 77.3 304.6 77.1 256 77.1L256 77.1z" style="width: 32px; height: 32px; display: block;"></path>
                <path d="M256 164.1c-50.7 0-91.9 41.1-91.9 91.9s41.1 91.9 91.9 91.9 91.9-41.1 91.9-91.9S306.7 164.1 256 164.1zM256 315.6c-32.9 0-59.6-26.7-59.6-59.6s26.7-59.6 59.6-59.6 59.6 26.7 59.6 59.6S288.9 315.6 256 315.6z" style="width: 32px; height: 32px; display: block;"></path>
                <circle cx="351.5" cy="160.5" r="21.5" style="width: 32px; height: 32px; display: block;"></circle>
            </svg>
        </a>
        <a href="https://www.youtube.com/channel/UCNcGTSUp8o8Wf2eMHnGuKeg" target="_blank" rel="noopener" style="display: inline-flex; align-items: center; justify-content: center; width: 42px; height: 42px; background: linear-gradient(135deg, #c1121f 0%, #c1121f 100%); border-radius: 15px; padding: 8px; transition: all 0.3s ease; text-decoration: none;" onmouseover="this.style.transform='translateY(-4px)'; " onmouseout="this.style.transform=''; this.style.filter=''; this.style.animation=''; ">
                <svg class="niftybutton-youtube" style="width: 32px; height: 32px; display: block;" data-donate="true" data-tag="you" data-name="YouTube" viewBox="0 0 512 512" preserveAspectRatio="xMidYMid meet"><title>YouTube social icon</title>
                <path d="M422.6 193.6c-5.3-45.3-23.3-51.6-59-54 -50.8-3.5-164.3-3.5-215.1 0 -35.7 2.4-53.7 8.7-59 54 -4 33.6-4 91.1 0 124.8 5.3 45.3 23.3 51.6 59 54 50.9 3.5 164.3 3.5 215.1 0 35.7-2.4 53.7-8.7 59-54C426.6 284.8 426.6 227.3 422.6 193.6zM222.2 303.4v-94.6l90.7 47.3L222.2 303.4z" style="width: 32px; height: 32px; display: block;"></path>
            </svg>
        </a>
    </div>
    <small>&copy; 2025 Log Post Games. All rights reserved.</small>
  </footer>
`;

// Inject header at the top of <body> (before any content)
function injectHeader() {
  if (!document.body) return;
  document.body.insertAdjacentHTML('afterbegin', headerHTML);
}

// Inject footer at the end of <body>
function injectFooter() {
  if (!document.body) return;
  document.body.insertAdjacentHTML('beforeend', footerHTML);
}

// Optionally, highlight active nav link based on current URL
function highlightActiveNav() {
  const navLinks = document.querySelectorAll('.navbar nav a');
  const currentUrl = window.location.pathname.toLowerCase();

  navLinks.forEach(link => {
    // Remove highlight first
    link.classList.remove('active');
    link.removeAttribute('aria-current');

    // Get the href target (strip leading ./ or /)
    let linkHref = link.getAttribute('href').replace(/^\.?\//, '').toLowerCase();

    // Special case: Home page (covers both "/" and "index.html")
    if (linkHref === "index.html" && (currentUrl === "/" || currentUrl.endsWith("/index.html"))) {
      link.classList.add('active');
      link.setAttribute('aria-current', 'page');
    }
    // Highlight if the URL contains the main chunk, e.g. "games" for any games subpage
    else if (
      linkHref !== "index.html" &&
      currentUrl.includes(linkHref.replace('.html',''))
    ) {
      link.classList.add('active');
      link.setAttribute('aria-current', 'page');
    }
  });
}

// Call inject functions after DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  injectHeader();
  injectFooter();
  highlightActiveNav();
});