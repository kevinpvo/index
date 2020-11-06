//user search input
$(document).ready(function() {
  $("#update").click(function () {
      var searchTag = $("#searchTag").val();
      var numPhotos = $("#numSelect option:selected").val();
      var url = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=5ff761b52783f30b739aef84f409c2b3&tags=${searchTag}&per_page=${numPhotos}&privacy_filter=1&format=json&nojsoncallback=1&extras=url_m`;
      makeApiCall(url); // ajax call get data from server and load photos into the div
      console.log(url);
  });
});

//jquery infinity-scroll function
$(window).scroll(function() {
  if ($(window).scrollTop() == $(document).height() - $(window).height()) {
    var searchTag = $("#searchTag").val();
    var numPhotos = $("#numSelect option:selected").val();
    var url = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=5ff761b52783f30b739aef84f409c2b3&tags=${searchTag}&per_page=${numPhotos}&privacy_filter=1&format=json&nojsoncallback=1&extras=url_m`;
    makeApiCall(url); // ajax call get data from server and append to the div
  } 
});

//function to call API when the document object model is ready or when scrolled to bottom
function makeApiCall(url) {
  console.log("3fdsaf");
  $.ajax({url:url, dataType:"json"}).then(function(data){
    console.log("hi");//Review all of the data returned
    var html='';
    for (var i=0; i<data.photos.photo.length; i++)
    {
      console.log(html);
      var title = data.photos.photo[i].title;
      var photoURL = data.photos.photo[i].url_m;

      html += `
        <div class="card">
          <img class="card-img-top" src="${photoURL}" alt="flickr_img">
          <div class="card-body">
            <h6 class="card-title">${title}</h6>
          </div>
        </div>
        `
    }

    if($(window).scrollTop() == $(document).height() - $(window).height()) {
      $('#flickr').append(html);
    }

    else{
      $('#flickr').html(html);
    }

  })
};


// javascript infinity-scroll variant syntax for practice
// window.onscroll = function(ev) {
//   if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
//     var searchTag = $("#searchTag").val();
//     var numPhotos = $("#numSelect option:selected").val();
//     var url = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=5ff761b52783f30b739aef84f409c2b3&privacy_filter=1&tags=${searchTag}&per_page=${numPhotos}&format=json&nojsoncallback=1&extras=url_m`;
//     makeApiCall(url); // if at the bottom of the page: then make ajax call get data from server and append to the div

//   }
// };