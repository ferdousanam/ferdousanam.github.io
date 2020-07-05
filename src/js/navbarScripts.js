$(document).ready(function () {
  if (window.location.href.split('#').length >= 0) {
    const hash = window.location.href.split('#')[1]
    if (hash) {
      $('.navbar').find('.active').removeClass('active')
      const allMenus = $('.navbar').find('a')
      allMenus.each((index, item) => {
        if ($(item).attr('href').split('#')[1] === hash) {
          $(item).closest('li').addClass('active')
        }
      })
    }
  }

  $('.navbar').click(event => {
    setTimeout(() => {
      const hash = window.location.href.split('#')[1]
      $('.navbar').find('.active').removeClass('active')
      // $(event.target).closest('li').addClass('active')
      $('body').find('a').each((index, item) => {
        if ($(item).attr('href') === '#' + hash) {
          $(item).closest('li').addClass('active')
        }
      })
    }, 100)
  })
});
