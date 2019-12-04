'use strict';

$('.thumbnail').on('click', e => {
  console.log(e.target);
});

function handleClick() {
  $('.thumbnail').click(function(event) {
    var selectedImg = $(event.currentTarget).find('img').attr('src');
    $('.hero img').attr('src', selectedImg);
  });
}

$(function() {
  handleClick();
});

