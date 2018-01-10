$(document).ready(function () {
  // add active
  // $('.category-list li:first').addClass('active');

  $('input[name="categoryId"]').val($('.category-list li:first').attr('id'));
  $('.category-list').on('click', ' li', function () {
    $('.category-list .active').removeClass('active');
    $(this).addClass('active');

    $('input[name="categoryId"]').val($(this).attr('id'));
  })

  // add category show
  $('.new-category-add').click(function () {
    $('.new-category-form').removeClass('hidden');

    $('#btn-create').click(function () {
      // validate
      let newcategoryName = $('input[name="newCategoryName"]').val();
      let csrf = $('input[name="_csrf"]').val()
      $.ajax({
        type: 'post',
        url: '/category/create',
        cache: false,
        dataType: 'json',
        data: {
          newcategoryName: newcategoryName,
          _csrf: csrf
        },
        success: function (data) {
          if (data == null) {
            alert('server error');
          }
          //- alert(data.result.categoryId)
          $('.category-list').append('<li class="category-item" id="' + data.result.categoryId + '">' + data.result.categoryName + '</li>')
        }
      })

      $('.new-category-form').addClass('hidden');

    });

    $('#btn-cancel').click(function () {
      $('.new-category-form').addClass('hidden');
    });
  })
});
