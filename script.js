const paragraphs = [
`Dear Humi💗`,
`I have no idea how to even start this but I want to thank you so much for the amazing year you had given me`,
`Like seriously even though it was soooo shit you made it so much better for me,,whether it was me going through all the stress with my mom or all this stuff in school in general..i really appreciate how much you’ve done for me even if it was advice or just a bright smile on a cloudy day ⛅️..`,
`And don’t get me started on how fun gold reef was this year with you and Kyle (my parents for the day🥹❤️) it was soooo much fun being with you two and just going on all the rides together 😭💗`,
`I know this isn’t much and i know it isn’t a hand made gifts but you know how i am about writing letters to those i love dearly`,
`I just wanted these to be my thank you for everything you’ve done for me from when we met till now and i feel like i don’t tell you enough how much i appreciate you as a teacher and you really mean the world to me..`,
`(Did i tear up writing this..maybe😅)`
];

const scene = document.querySelector('.scene');
const envelope = document.getElementById('envelopeButton');
const letter = document.getElementById('letter');
const openButton = document.getElementById('openButton');
const closeButton = document.getElementById('closeButton');
const instruction = document.getElementById('instruction');
const messageBox = document.getElementById('letterMessage');

paragraphs.forEach((text) => {
  const p = document.createElement('p');
  p.textContent = text;
  messageBox.appendChild(p);
});

function openLetter() {
  scene.classList.add('is-open');
  envelope.setAttribute('aria-expanded', 'true');
  letter.setAttribute('aria-hidden', 'false');
  instruction.textContent = 'A little note, just for you.';
  openButton.hidden = true;
  closeButton.hidden = false;
  window.setTimeout(() => letter.focus({ preventScroll: true }), 250);
}

function closeLetter() {
  scene.classList.remove('is-open');
  envelope.setAttribute('aria-expanded', 'false');
  letter.setAttribute('aria-hidden', 'true');
  instruction.textContent = 'Tap the envelope to open it.';
  openButton.hidden = false;
  closeButton.hidden = true;
  envelope.focus({ preventScroll: true });
}

envelope.addEventListener('click', openLetter);
openButton.addEventListener('click', openLetter);
closeButton.addEventListener('click', closeLetter);
