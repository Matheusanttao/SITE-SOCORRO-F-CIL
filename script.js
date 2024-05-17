
  window.addEventListener('DOMContentLoaded', function() {
    const ratingStars = document.querySelectorAll('.rating-stars input[type="radio"]');
    const ratingLabels = document.querySelectorAll('.rating-stars label');

    ratingLabels.forEach(function(label, index) {
      label.addEventListener('click', function() {
        const selectedRating = index + 1;
        console.log('Avaliação:', selectedRating);
      });
    });
  });

  <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
  
    $(document).ready(function () {
      var phoneNumber = "192";
      var message = "Discagem rápida! SOS!";
      var button = '<a href="tel:' + phoneNumber + '" class="phone-button">' + message + '</a>';
      $('body').append(button);
    });
