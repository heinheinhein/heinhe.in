var currentscrollHeight = 0;
var count = 0;

$(window).on("scroll", function () {

    const scrollHeight = $(document).height();
    const scrollPos = Math.floor($(window).height() + $(window).scrollTop());
    const isBottom = scrollHeight - 100 < scrollPos;
    const list = $(".list");

    if (isBottom && currentscrollHeight < scrollHeight) {

        for(var i = 0; i < 5; i++) {
            // This is for example purposes, I would use something like Vue x-template
            list.append(`<p>paniek paniek paniek paniek paniek paniek paniek paniek paniek paniek paniek paniek paniek</p>`
            );
            count++;
        }
        currentscrollHeight = scrollHeight;
    }
});