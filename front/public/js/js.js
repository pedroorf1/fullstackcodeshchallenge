window.onload = function () {

    var flashssucess = document.getElementById('flashsuccess');
    var flashserror = document.getElementById('flasherror');

    if (flashssucess || flashserror) {

        function dissmissmessage() {

            flashssucess.style.display = "none";
            flashserror.style.display = "none";
        }
        setTimeout(dissmissmessage, 3000);
    }

};

