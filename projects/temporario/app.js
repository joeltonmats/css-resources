function defineSpeedCurve() {
    $("input[name=transitionTime][value='linear']").prop("checked", true);

    $('input[type=radio][name=transitionTime]').change(function () {
        $('#transition3').css('transition-timing-function', $('input:radio[name=transitionTime]:checked').val());
    });
}

function verifyDelay() {
    $('#delay').click(function () {
        if ($('#delay').is(':checked')) {
            $('#transition2').css('transition-delay', '2s');
        } else {
            console.log('ddd');
            $('#transition2').css('transition-delay', '0s');
        }
    });
}

var main = function () {
    defineSpeedCurve();
    verifyDelay();
}

$(document).ready(main);