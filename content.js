
$(document).click(function (event) {
    console.log($(event.target).text())
});

try {
    var style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = '.hoverExtnDiv { color: white; background-color:red } .hoverExtn{color: #F00; background-color:green}';
    document.getElementsByTagName('head')[0].appendChild(style);

    $(document).mousemove(function (event) {
        if (event.target.tagName === 'BODY' || event.target.tagName === 'HTML') return;

        var $target = $(event.target);
        targetOffset = $target[0].getBoundingClientRect();
        if (event.target.tagName === 'DIV'){
            $target.hover(function () {
                    $(this).addClass('hoverExtn')
                },
                function () {
                    $(this).removeClass('hoverExtn')
                });
        }
        if (event.target.tagName !== 'DIV'){
            $target.hover(function () {
                    $(this).addClass('hoverExtn')
                },
                function () {
                    $(this).removeClass('hoverExtn')
                });
            }
    });
}catch (err) {
    console.log(err);
}