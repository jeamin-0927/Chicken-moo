const ref = () => {
    let scrollHeight = Math.round($(document).scrollTop() * 2);
    let documentHeight = $(document).height();
    let scrollPrecent = scrollHeight / documentHeight;

    $('.background').css('transform', `scale(${2 - scrollPrecent})`);
    $('.background-c').css('background', `rgba(0, 0, 0, ${0.4 * scrollPrecent})`);
    $('.down').css('opacity', `${scrollPrecent <= 0.3 ? 1 - scrollPrecent : 0}`);
    $('.background-c').css('backdrop-filter', `saturate(180%) blur(${50 * 0.4 * scrollPrecent}px)`);
    $('.c-text').css('opacity', `${1 - (scrollPrecent * 3)}`);
    $('.login').css('opacity', `${scrollPrecent >= 0.3 ? (scrollHeight * 0.3) / (documentHeight * 0.3) : 0}`);
};
const stou = () => {
    $('.background-c').css('background', `rgba(0, 0, 0, 0)`);
    $('.login').css('opacity', `0`);
    setTimeout(() => {
        location.replace('./main');
    }, 300);
}
ref();
$(window).scroll(ref);
$('*').css('transition', 'none');
$('.l-login').on('click', () => stou());
$('.down').on('click', () => $(document).scrollTop($(document).height() / 2));