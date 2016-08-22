(function($){
  $(function(){

    // Floating-Fixed table of contents
    setTimeout(function() {
     $('.toc-wrapper').pushpin({ top:$('#brotherdropdown').offset().top, bottom: $('footer').offset().top});
    },100);
      
     
      
    $('.button-collapse').sideNav();
    $('.parallax').parallax();
    $(".dropdown-button").dropdown();
    $('.scrollspy').scrollSpy();
      
  }); // end of document ready
})(jQuery); // end of jQuery name space


//populate class dropdown
(function(){
  var template = document.querySelector('.template');
  var brotherdropdown = document.querySelector('#brotherdropdown');

  for(var i = 0; i < classesInfo.length; ++i){
    var classElement = template.cloneNode(true);
    classElement.classList.remove('template');
    classElement.style.display = 'block';
    classElement.childNodes[0].innerText = classesInfo[i].className;
    classElement.childNodes[0].href = '/brothers?who='+classesInfo[i].className;
    brotherdropdown.appendChild(classElement);
  }
})();

