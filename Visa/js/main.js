
//Modal windows
$(function () {
  var modalPhone = document.getElementById("phoneModal");
  var callModal = document.getElementById("callModal");
  var modalCallMe = document.getElementById("callMeModal");

  var callMe = document.getElementById("callMe");
  var phone = document.getElementById("phone");
  var call = document.getElementById("orderCall");
  

  phone.onclick = function () {

    modalPhone.classList.add('modal-call-focus');
    modalPhone.style.zIndex = 1050;
    $('#bg_layer').show();
  }

  call.onclick = function () {
    modalPhone.classList.remove('modal-call-focus');
    modalPhone.style.zIndex = 0;

    callModal.classList.add('modal-call-focus');
    callModal.style.zIndex = 1049;
    $('#bg_layer').show();
  }

  callMe.onclick = function () {
    callModal.classList.remove('modal-call-focus');
    callModal.style.zIndex = 0;

    modalCallMe.classList.add('modal-call-focus');
    modalCallMe.style.zIndex = 1050;
    $('#bg_layer').show();
  }

  window.onclick = function (event) {
    if (event.target.id == "bg_layer") {
      modalPhone.classList.remove('modal-call-focus');
      modalPhone.style.zIndex = 0;

      callModal.classList.remove('modal-call-focus');
      callModal.style.zIndex = 0;

      callMeModal.classList.remove('modal-call-focus');
      callMeModal.style.zIndex = 0;
      $('#bg_layer').hide();
    }
  }
});

$(function () {
  $(".flags-block").click(function () {
    $('.flag-us').toggle("slow", "linear");
  })
});


