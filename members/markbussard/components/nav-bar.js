const $ = selector => document.querySelector(selector);

const navbar = document.createElement('template');
navbar.innerHTML = `
<style>
  .main-menu {
    width: 12rem;
    margin: 0;
    padding: 0;
    z-index: 3;
  }

  a {
    text-decoration: none;
  }
  
  .main-menu__top {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 1.5rem 0 2rem;
  }

  .main-menu__top a {
    font-size: 2.2rem;
    font-weight: 600;
    color: var(--black);
  }

  .main-menu__top>span {
    font-size: 0.8rem;
    color: #808080;
    margin-top: 0.4rem;
  }

  .main-menu__nav {
    padding: 0 0 2rem;
    display: flex;
    flex-direction: column;
    /* border-top: 1px solid var(--grey); */
  }

  .main-menu__nav a {
    text-align: left;
    display: block;
    color: var(--light-black);
    line-height: 2;
    padding: 0.2rem;
    font-size: 14px;
    letter-spacing: 0.1rem;
  }

  .main-menu__nav a:hover,
  .main-menu__nav a:focus {
    color: var(--black);
  }

  .social {
    color: var(--grey);
    margin: 0 0 0 5px;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
  }

  .social li {
    margin-right: 10px;
  }

  @media screen and (max-width: 1280px) {
    .main-menu {
      align-items: center;
      position: fixed;
      z-index: -1;
      left: 0;
      right: 0;
      bottom: 0;
      top: 0;
      width: 100%;
      opacity: 0;
      text-align: center;
    }

    .main-menu__top {
      padding-top: 6rem;
    }

    .main-menu, 
    .main-menu__nav,
    .social,
    .user-status {
      text-align: center;
      align-items: center;
      justify-content: center;
    }

    .main-menu.mobile-open {
      opacity: 1;
      z-index: 10;
      background-color: #999;
    }

    .main-menu__top>span {
      color: #fff
    }
  }

  /****** Main Menu Button (Mobile) ******/
  .main-menu-button {
    display: none;
  }

  @media screen and (max-width: 1280px) {
    .main-menu-button {
      display: block;
      cursor: pointer;
      position: fixed;
      top: 20px;
      right: 20px;
      width: 3rem;
      z-index: 11;
    }

    .bar-1, .bar-2, .bar-3 {
      width: 35px;
      height: 5px;
      margin: 6px auto;
      transition: 0.4s;
      background-color: var(--black);
      z-index: 4;
    }

    .transform .bar-1 {
      -webkit-transform: rotate(-45deg) translate(-9px, 6px);
      transform: rotate(-45deg) translate(-9px, 6px);
    }

    .transform .bar-2 {
      opacity: 0;
    }

    .transform .bar-3 {
      -webkit-transform: rotate(45deg) translate(-8px, -8px);
      transform: rotate(45deg) translate(-8px, -8px);
    }
  }
</style>
<header>
  <div class="main-menu-button">
    <div class="bar-1"></div>
    <div class="bar-2"></div>
    <div class="bar-3"></div>
  </div>
  <div class="main-menu">
    <div class="main-menu__top">
      <a href="markbussard.html">
        <span>Mark</span>
      </a>
      <span>Web Developer</span>
    </div>
    <nav class="main-menu__nav">
      <a rel="about" href="markbussard.html">About</a>
      <a rel="skills" href="markbussard-experience.html">Experience</a>
      <a rel="projects" href="markbussard-projects.html">Projects</a>
      <a rel="contact" href="markbussard-contact.html">Contact</a>
    </nav>
    <ul class="social">
      <li>
        <a href="https://www.linkedin.com/in/mark-bussard/"  target="_blank">
          <img src="markbussard/images/linkedin-icon.svg" height="18" width="18" alt="linkedin" />
        </a>
      </li>
      <li>
        <a href="https://github.com/markbussard" target="_blank">
          <img src="markbussard/images/github-icon.svg" height="22" width="22" alt="github" />
        </a>
      </li>
    </ul>
  </div>
</header>
`;

class Navbar extends HTMLElement {
  constructor () {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(navbar.content.cloneNode(true));
  }

  connectedCallback () {
    const mainMenu = this.shadowRoot.querySelector('.main-menu');
    const mainMenuButton = this.shadowRoot.querySelector('.main-menu-button');
    const mainMenuNavItems = this.shadowRoot.querySelectorAll('header menu nav a');

    mainMenuButton.addEventListener('click', (e) => {
      e.preventDefault();
      mainMenu.classList.toggle('mobile-open');
      mainMenuButton.classList.toggle('transform');
    });

    mainMenuNavItems.forEach((navItem)=> {
      navItem.addEventListener('click', () => {
        if (mainMenu.classList.contains('mobile-open')) {
          mainMenu.classList.toggle('mobile-open');
          mainMenuButton.classList.toggle('transform');
        }
      })
    })
  }
}

customElements.define('nav-bar', Navbar);
