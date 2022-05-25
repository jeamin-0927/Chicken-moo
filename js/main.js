$('.windows').on('click', () => {
    $('.windows-c').css('animation', `click 0.3s forwards`);
    
    setTimeout(() => {
        $('.windows-c').css('animation', 'none');
        location.href = './';
    }, 300);
});

$('.files').on('click', () => {
    $.ajax({
        url: './potofil.html',
        success: (res) => {
            $('.tap').empty();
            $('.tap').append(res);
            $('.tap').css('z-index', '1000');
            $('.tap').css('opacity', `1`);
        }
    });
});