'use strict';
const btn = document.querySelector('.get-advice');
const advice = document.querySelector('.advice');
const adviceId = document.querySelector('.advice-id');
const divider = document.querySelector('.divider');

const getAdvice = async function () {
  try {
    const res = await fetch(
      `https://api.adviceslip.com/advice/${Math.floor(Math.random() * 224 + 1)}`
    );
    const data = await res.json();
    adviceId.textContent = `Advice #${data.slip.id}`;
    advice.innerHTML = `<q>${data.slip.advice}</q>`;
  } catch (err) {
    alert(`Reload the page`);
  }
};

getAdvice();
btn.onclick = function (e) {
  e.preventDefault();
  getAdvice();
};

function responsive(media) {
  if (media.matches) {
    // If media query matches
    divider.innerHTML = `
      <svg width="295" height="16" xmlns="http://www.w3.org/2000/svg">
        <g fill="none" fill-rule="evenodd">
          <path fill="#4F5D74" d="M0 8h122v1H0zM173 8h122v1H173z" />
          <g transform="translate(138)" fill="#CEE3E9">
            <rect width="6" height="16" rx="3" />
            <rect x="14" width="6" height="16" rx="3" />
          </g>
        </g>
      </svg>
    `;
  } else {
    divider.innerHTML = `
    <svg width="444" height="16" xmlns="http://www.w3.org/2000/svg">
          <g fill="none" fill-rule="evenodd">
            <path fill="#4F5D74" d="M0 8h196v1H0zM248 8h196v1H248z" />
            <g transform="translate(212)" fill="#CEE3E9">
              <rect width="6" height="16" rx="3" />
              <rect x="14" width="6" height="16" rx="3" />
            </g>
          </g>
        </svg>
  `;
  }
}

const media = window.matchMedia('(max-width: 550px)');
responsive(media);
media.addListener(responsive);
