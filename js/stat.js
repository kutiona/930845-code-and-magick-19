'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 50;
var FONT_GAP = 20;
var TEXT_WIDTH = 40;
var BAR_HEIGHT = 150;
var GAP_SHADOW = 10;

    function getRandomColor(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return ('hsl(240, ' + (Math.floor(Math.random() * (max - min)) + min) + '%,' + ' 50%)');
    };
    console.log (getRandomColor(1, 100));


var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function (arr) {
  var maxElement = arr[0];

  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};

window.renderStatistics = function (ctx, players, times) {
  renderCloud(ctx, CLOUD_X + GAP_SHADOW, CLOUD_Y + GAP_SHADOW, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  ctx.fillStyle = '#000';
  ctx.textBaseline = 'hanging';
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура вы победили!', 120, 30);
  ctx.fillText('Список результатов:', 120, 50);

  var maxTime = getMaxElement(times);
  

  for (var i = 0; i < players.length; i++) {
      if (players[i] = 'Вы') {
        ctx.fillStyle = 'rgba(255, 0, 0, 1)';
      } else {getRandomColor (1, 100)};
    };


  for (var i = 0; i < players.length; i++) {
    ctx.fillStyle = '#000';
    ctx.fillText(players[i], CLOUD_X + GAP + (TEXT_WIDTH + GAP) * i, CLOUD_Y + GAP + FONT_GAP * 2 + BAR_HEIGHT);
    ctx.fillRect(CLOUD_X + GAP + (TEXT_WIDTH + GAP) * i, CLOUD_Y + GAP + FONT_GAP + BAR_HEIGHT, TEXT_WIDTH, -(BAR_HEIGHT * times[i]) / maxTime);
    
  };
};
