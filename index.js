const downArrowBtn = document.querySelector('#scrollBottom');

downArrowBtn.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo(0, document.body.scrollHeight);
});
