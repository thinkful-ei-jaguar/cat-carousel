/* eslint-disable no-undef */
'use strict';

function handleClick() {
  $('.thumbnail').click(function(event) {
    let selectedImg = $(this).find('img').attr('src');
    let selectedAlt = $(this).find('img').attr('alt');
    $('.hero img').attr('src', selectedImg).attr('alt', selectedAlt);
  });
}

$(handleClick);

