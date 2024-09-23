'use strict';
const burger = document.getElementById('burger');
const navMenu = document.getElementById('nav-menu');
const body = document.querySelector('body');

burger.addEventListener('click', () => {
	burger.classList.toggle('active');
	navMenu.classList.toggle('active');
});
burger.addEventListener('click', () => {
	body.classList.toggle('no-scroll');
});
