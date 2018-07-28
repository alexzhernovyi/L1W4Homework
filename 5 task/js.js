var links, updatestate, contentEl, updatebuttons, navEL;

contentEl = document.querySelector('.content');
navEL = document.querySelector('.nav'); 

links = {
    main: 'The <strong>Main</strong> page',
    about: 'The <strong>About</strong> page',
    downloads:'The <strong>Downloads</strong> page'
}

updatestate = function (state) {
    if(!state) return;
    contentEl.innerHTML = links[state.page];
    updatebuttons(state);

}

updatebuttons = function(state){
    [].slice.call(navEL.querySelectorAll('A'))
    .forEach(function(e){
        var classList = e.parentNode.classList;
        state.page === e.getAttribute('href')
        ? classList.add('active')
        : classList.remove('active');
    })
}

navEL.addEventListener('click', function(e) {
    e.preventDefault();
    var state;

    if(e.target.tagName !== 'A') return;


    state = {
        page: e.target.getAttribute('href')
    }

    history.pushState(state, '', state.page);
    updatestate(state)


})
window.addEventListener('popstate', function(e){
    updatestate(e.state);



});
window.addEventListener('hashchange', updatestate);
window.addEventListener('load', updatestate);
