var images	= ['img/h1.png', 'img/h2.png', 'img/h3.png'],
	length	= images.length,
	index	= 1;

setInterval(function() {
	if(index == length) index = 0;
    document.getElementById('headImg').style = "background-image: url(" + images[index++]+ ")";
}, 5000);
