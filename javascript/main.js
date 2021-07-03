$('.ask').on('click', function (e) {
    e.preventDefault();
    $('.ask').not($(this)).removeClass('active')
    $('.answer').not($(this).next()).slideUp(500)
    $(this).toggleClass('active').next().stop().slideToggle(500)
})
$('button[data-filter]').click(function(){

    let attr = $(this).attr('data-filter')

    if (attr === 'all') {
        $('div[data-filter]').stop().slideDown(500)
    }else{
        $('div[data-filter]').stop().slideUp(500)
    }

    $(`div[data-filter=${attr}]`).stop().slideDown(500)

})


function writing(element) {
    let inner = element.html(),
    fullText = '',
    letterCount = 0,
    interval = setInterval(() => {
        fullText += inner[letterCount]
        element.html(fullText)
        letterCount++;
        if (fullText === inner) {
            clearInterval(interval)
        }
    }, 100);
}

writing($('h1'))

$('.read-more').click(function () {
    $('.text-hidden').toggleClass('hidden')
    let read = document.querySelector('.read-more')
    if (read.innerHTML === 'Hidden') {
        read.innerHTML = 'Read More'
    }else{
        read.innerHTML = 'Hidden'
    }
})

$('.js-modal-show').click(function (e) {
    e.preventDefault()
    $('.modal').fadeIn(500);
})

$('.modal .btn-dark').click(function (e) {
    e.preventDefault()
    $('.modal').fadeOut(250)
})

$('.modal .close').click(function (e) {
    e.preventDefault()
    $('.modal').fadeOut(250)
})

$('.modal').click(function (e) {
    if (e.target === e.currentTarget) {
        $(this).fadeOut(250)
    }
})

$('.nav').css({
    position: 'fixed',
    top: $(window).height() - $('.nav').outerHeight() + 'px',
    width: 100 + '%',
    zIndex: 10
})

$(window).scroll(function () {
    let aditPosition = $(window).height() - $('.nav').outerHeight() - $(window).scrollTop()
    if (aditPosition > 0) {
        $('nav').css({
            top: aditPosition+'px'
        })
    }else{
        $('nav').css({
            top: 0
        })
    }

    let btnTop =  $(window).height() - $('.js-btn-top').innerHeight() - $(window).scrollTop()
    if(btnTop > ($(window).height() - 250)){
        $('.js-btn-top').removeClass('show')
        $('.js-btn-top').addClass('hidden')
    }else{
        $('.js-btn-top').removeClass('hidden')
        $('.js-btn-top').addClass('show')
    }
})
$('.js-btn-top').stop().click(function (e) {
    e.preventDefault()
    let attr = $(this).attr('href'),
    toEl = $(attr).offset().top
    $('html,body').animate({
        scrollTop: toEl
    },{
        duration: 1000
    })
})
$('.js-sroll-to-id').stop().click(function (e) {
    e.preventDefault()
    let attr = $(this).attr('href'),
    toEl = $(attr).offset().top
    $('html,body').stop().animate({
        scrollTop: toEl - $('nav').outerHeight()
    },{
        duration: 1000
    })
})
