myButton.onclick = function(){
    var newImage = document.createElement("img")
    newImage.src = URL.createObjectURL(img)
    container.append(newImage)
}

var img;

myFile.onchange = function(e){
   img = e.target.files[0]
}