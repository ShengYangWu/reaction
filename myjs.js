$(document).ready(main);
var createTime;
var clickTime;
var reactionTime;
function makeBox() {
  var randomTime = Math.random()*3000;
  var top = Math.random()*500;
  var left = Math.random()*800;
  setTimeout(function() {
    createTime = Date.now();
    $('#box').css('display', 'block')
    .css('background-color', getRandomColor())
    .css('top', top+'px')
    .css('left', left+'px');
    if (Math.random()>0.5) {
      $('#box').css('border-radius', '100px');
    } else {
      $('#box').css('border-radius', '0px');
    }
    
  }, randomTime);
};

function getRandomColor() {
  var letters = '0123456789ABCDEF'.split('');
  var color = '#';
  for (var i=0; i<6; i++) {
    color += letters[Math.floor(Math.random()*16)];
  }
  
  return color;
}

function main() {
  $('#box').click(function(){
    $(this).css('display', 'none');
    // the same as $(this).hide();
    clickTime = Date.now();
    reactionTime = (clickTime - createTime)/1000;
    $('#time').text(reactionTime);
    makeBox();
  });
};
makeBox();

