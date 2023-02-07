// Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var imgs = document.getElementsByClassName("picture");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");

for (let i = 0, img; img = imgs[i]; i++) {
  img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
  }
} 

// Get the <span> element that closes the modal
//change "modal" to close to close on X only
var span = document.getElementsByClassName("modal")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}