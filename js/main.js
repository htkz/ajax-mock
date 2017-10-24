var index = 3;
var isDataArrive = true;
var content = $('.content')

$('#more').click(function(event) {
    event.preventDefault();
    $.ajax({
        url: '/moreContent/',
        dataType: 'json',
        data: {index: index, num: 5}
    })
    .done(function(data) {
        index += 5;
        $(data).each(function(index, el) {
            $(`<p>${el}</p>`).appendTo(content)
        });
    })
});
