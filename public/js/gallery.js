$(document).on("click", '[data-toggle="lightbox"]', function(event) {
    event.preventDefault();
    $(this).ekkoLightbox();
  });


// var folder = "images/";

// $.ajax({
//     url : folder,
//     success: function (data) {
//         $(data).find("a").attr("href", function (i, val) {
//             if( val.match(/\.(jpe?g|png|gif)$/) ) { 
//               // document.getElementById("#img-lightbox").innerHTML = "<a href='"+ folder + val +"' data-toggle='lightbox' data-gallery='gallery' class='col-md-4'><img src='" + folder + val + "' class='img-fluid rounded'/></a>";
//               $("#img-lightbox").append( "<a href='"+ folder + val +"' data-toggle='lightbox' data-gallery='gallery' class='col-md-4'><img src='" + folder + val + "' class='img-fluid rounded'/></a>" );
//               alert(folder + ": " + val);
//             } 
//         });
//     }
// });