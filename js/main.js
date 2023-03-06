// const url_x = new URL ('game.html?player=xo');

const active_x = document.getElementById('active_x')
const active_o = document.getElementById('active_o')
const player1marc = localStorage.getItem('tu est le joueur x');
const player2marc = localStorage.getItem('tu est le joueur o');

active_x.addEventListener('click', () => {
    active_x.id = 'x_button_player_active';
    active_o.id = 'x_button_player_inactife';
});

active_o.addEventListener('click', () => {
    active_o.id = 'o_button_player_active';
    active_x.id = 'o_button_player_inactife';
});


const player = document.querySelector('player');

test.addEventListener('click', () => {
    document.test.game.backgroundImages = "url('images\icon-x-outline.svg')";
});

alert('hello')