import { LitElement, html, css, property } from 'lit-element';

const logoUrl = new URL('../assets/open-wc-logo.svg', import.meta.url).href;

class PsuBlock extends LitElement {
  @property({ type: String, reflect: true }) lineShape;
  @property({ type: String, reflect: true }) link;

  @property({ type: String, reflect: true }) textContent1;
  @property({ type: String, reflect: true }) textContent2;

  @property({ type: Boolean, reflect: true }) isStateOne;
  @property({ type: Boolean, reflect: true }) isStateTwo;
  @property({ type: Boolean, reflect: true }) isStateThree;
  @property({ type: Boolean, reflect: true }) isStateFour;
  @property({ type: Boolean, reflect: true }) isStateFive;
  @property({ type: Boolean, reflect: true }) isStateSix;

  static styles = css`
    :host([textContent1]) .content {
      font-family: 'Roboto', sans-serif;
      font-size: 2.2rem;
      font-weight: 700;
      padding-top: 85px;
      padding-left: 60px;
      padding-right: 60px;
    }

    :host([textContent2]) .content2 {
      color: #1e407c;
      font-family: 'Roboto', sans-serif;;
      font-size: 1rem;
      font-weight: 600;
      padding-top: 13px;
      z-index: 2;
    }

    .lineshape {
      color: #1e407c;
      background-color: #1e407c;
      font-size: 1.9px;
      margin-top: 30px;
    }

    .card {
      background-color: var(--backgroundColor);
      color: var(--textColor);
      width: var(--cardWidth);
      height: var(--cardHeight);
      box-shadow: var(--boxShadow);
    }

    .cardoverlay {
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.6);
      z-index: 3;
    }

    .link {
      padding-left: 365px;
    }

    .card[state='stateThree'] {
      background-image: linear-gradient(to bottom, #144fb6, #0b2344);
      font-size: .5rem;
      color: white;
    }

    .card[state='stateFour'] {
      color: white;
      background-image: url(https://www.psu.edu/psu-edu-assets/images/power-facts/penn-state-tuition.jpg);
      background-size: cover;
    }

    .card[state='stateFive'] {
      background-color: #001e44;
      color: #FFFFFF;
    }

    .card[state='stateSix'] {
      color: white;
      background-image: url(https://datadigest.psu.edu/files/2020/05/FallCampus2016-11.jpg);
      background-size: cover;
      padding-bottom: 10px;
    }


    :host(:hover) .link {
      transform: scale(1.3);
      padding-right: 400px;
      padding-bottom: 20px;
    }
  `;

  constructor() {
    super();
    this.link = null;
  }

  render() {
    return html`
      <main>
        <div class="card">
          <div class="card-overlay">
            <div class="content">
              ${this.textContent1}
              <div class="line-shape">
                ${this.lineShape}
              </div>
              <div class="content2">
                ${this.textContent2}
              </div>
            </div>
            <div class="link">
              ${this.link
                ? html`
                    <a href="${this.link}" class="card-link" aria-hidden="true">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="#CCE9FF">
                      <path d="M4.22 22C3.61 22 3.09 21.78 2.65 21.35C2.22 20.91 2 20.39 2 19.78V4.22C2
                       3.61 2.22 3.09 2.65 2.65C3.09 2.22 3.61 2 4.22 2H10.89C11.20 2 11.47 2.11 11.68 
                       2.32C11.89 2.53 12 2.80 12 3.11C12 3.43 11.89 3.69 11.68 3.90C11.47 4.11 11.20 4.22 10.89 
                       4.22H4.22V19.78H19.78V13.11C19.78 12.80 19.88 12.53 20.10 12.32C20.31 12.11 20.57 12 20.89 
                       12C21.20 12 21.47 12.11 21.68 12.32C21.89 12.53 22 12.80 22 13.11V19.78C22 20.39 21.78 20.91
                        21.35 21.35C20.91 21.78 20.39 22 19.78 22H4.22ZM8.67 15.33C8.46 15.13 8.36 14.87 8.36 14.56C8.36
                         14.24 8.46 13.98 8.67 13.78L18.22 4.22H15.33C15.02 4.22 14.75 4.12 14.54 3.90C14.33 3.69 14.22 3.43
                          14.22 3.11C14.22 2.80 14.33 2.53 14.54 2.32C14.75 2.11 15.02 2 15.33 2H20.89C21.20 2 21.47 2.11 
                          21.68 2.32C21.89 2.53 22 2.80 22 3.11V8.67C22 8.98 21.89 9.25 21.68 9.46C21.47 9.67 21.20 9.78 
                          20.89 9.78C20.57 9.78 20.31 9.67 20.10 9.46C19.88 9.25 19.78 8.98 19.78 8.67V5.78L10.19 15.36C9.99 
                          15.56 9.74 15.67 9.44 15.67C9.14 15.67 8.89 15.56 8.67 15.33Z" fill="#CCE9FF"></path>
                      </svg>
                    </a>
                  `
                : ''}
            </div>
          </div>
        </div>
      </main>
    `;
  }
}

customElements.define('psu-block', PsuBlock);


