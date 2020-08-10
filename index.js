/* eslint-disable no-undef */
/* eslint-disable strict */


$(function() {
  $('#js-shopping-list-form').submit( event => {
    // prevent default beahvior of submit
    event.preventDefault();

    let newItem = $('input[name="shopping-list-entry"]').val();
    // console.log(newItem);

    // clear the text input field upon value entry
    $('input[name="shopping-list-entry"]').val('');

    // append the HTML file to include another list item with the value returned in newItem
    $('.shopping-list').append(`<li><span class="shopping-item">${newItem}</span><div class="shopping-item-controls"><button class="shopping-item-toggle"><span class="button-label">check</span></button> <button class="shopping-item-delete"><span class="button-label">delete</span></button></div></li>`);
  });

  // toggle shopping item "check button"
  $('.shopping-list').on('click', '.shopping-item-toggle', function() {
    // console.log('ToggleClicked');
    $(this).closest('li').find('.shopping-item').toggleClass('shopping-item__checked');
  });

  // remove the li item whe  delete button is clicked.
  $('.shopping-list').on('click', '.shopping-item-delete', function() {
   
    $(this).closest('li').remove();
  }); 
}); 
