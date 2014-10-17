document.addEventListener('DOMContentLoaded', function () {



    var divs = document.getElementsByClassName('src');
    var colors = ['rgb(255,0,0)', 'rgb(0,255,0)', 'rgb(0,0,255)'];
    for (var i = 0, len = divs.length; i < len; i++) {
        divs[i].style.backgroundColor = colors[i];
        divs[i].addEventListener('mouseenter', function (event) {
            console.log('you are inside ' + event.target.style.backgroundColor);
            event.target.addEventListener('wheel', mousewheelhandler);
        });
        divs[i].addEventListener('mouseleave', function (event) {
            console.log('you have left ' + event.target.style.backgroundColor);
            event.target.removeEventListener('wheel', mousewheelhandler);
        });
    }

    function mousewheelhandler (event) {

        // write code to change the component div (on which the wheel event was fired)
        // event.deltaY * normalizer

        console.log(event.deltaY);
        var divs = document.getElementsByClassName('src');
        var components = Array.prototype.map.call(divs, function (div, index) {
            return div.style.backgroundColor.match(/\d+/gmi)[index]
        });
        document.getElementsByClassName('target')[0].style.backgroundColor = 'rgb(' + components.join(', ') + ')';
    }



});