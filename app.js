let socket = io();

var canvas = document.querySelector('canvas');


canvas.width = window.innerWidth-4;
canvas.height = window.innerHeight-7;


var c = canvas.getContext('2d');
