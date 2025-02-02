const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]



const numberOfSlides = slides.length;
console.log(numberOfSlides);

const arrowLeft = document.querySelector(".arrow_left");

const arrowRight = document.querySelector(".arrow_right");

let positionImage = 0;

const dots = document.querySelector(".dots");

arrowLeft.addEventListener("click", function()
{
 if (positionImage == 0) {
	positionImage == numberOfSlides - 1;
 }
 else (positionImage -- )

} )


arrowRight.addEventListener("click", function()
{
 if (positionImage == numberofSlides -1 ) {
	positionImage == 0;
 }
 else (positionImage ++ )

} )



