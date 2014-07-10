jQuery(document).ready(function($){
  $(".gallery-embed-rajce-mini-preview a.link-to-wordpress").click(function(){
    var mini_preview = $(this).parents(".gallery-embed-rajce-mini-preview");
    var mini_preview_next = mini_preview.next();
    while (!mini_preview_next.hasClass("gallery-embed-rajce"))
      mini_preview_next = mini_preview_next.next();
    mini_preview.hide();
    mini_preview_next.show();
    return false;
  });
});
