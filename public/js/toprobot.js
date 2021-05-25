$(document).on('change', '.custom-select', function() {
    var target = $(this).data('target');
    var show = $("option:selected", this).data('show');
    $(target).children().addClass('hide');
    $(show).removeClass('hide');
});
  
$(document).ready(function(){
      $('.custom-select').trigger('change');
});
