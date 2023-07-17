import $ from 'jquery';
import Handlebars from 'handlebars/runtime';

let page = 1; // We start on page 1

$('#load-more-button').on('click', function(event) {
    event.preventDefault();  // This line prevents the default action

    $.ajax({
      url: '/get-next-batch-of-products',  
      success: function(data) {
        var productTemplate = Handlebars.compile($("#product-template").html());
  
        data.products.forEach(function(product) {
          var html = productTemplate(product);
          $('.product-list').append(html);
        });
  
        if (data.noMoreProducts) {
          $('#load-more-button').hide();
        }
      }
    });
});
