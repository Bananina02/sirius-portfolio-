document.addEventListener('DOMContentLoaded', () => {
	const oppsWrapper = document.querySelectorAll('.opps__wrapper');
  const eventLeft = document.querySelectorAll('.event__left');
  const listItm = document.querySelectorAll('.list__itm');

  function accordion(wrap) {
    wrap.forEach(el => {
      el.addEventListener('click', (e) => {
        const self = e.currentTarget;
        const control = self.querySelector('.accordion-control');
        const content = self.querySelector('.accordion-content');

        self.classList.toggle('open');

        if (self.classList.contains('open')) {
          control.setAttribute('aria-expanded', true);
          content.setAttribute('aria-hidden', false);
          content.style.maxHeight = content.scrollHeight + 'px';
        } else {
          control.setAttribute('aria-expanded', false);
          content.setAttribute('aria-hidden', true);
          content.style.maxHeight = null;
        }
      });
    });
  }

  accordion(oppsWrapper);
  accordion(eventLeft);
  accordion(listItm);
});
