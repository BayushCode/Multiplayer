const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');

const socket = io();

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;