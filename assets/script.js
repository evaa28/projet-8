const slides = [
	{
		"image":"./assets/images/slideshow/slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"./assets/images/slideshow/slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"./assets/images/slideshow/slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"./assets/images/slideshow/slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]


// variable
const flecheG = document.getElementById("flecheG");
const flecheD = document.getElementById("flecheD");
let slideCourante = 0;
const nbrSlide = slides.length;
const monImage = document.querySelector(".banner-img");
const monTexte = document.querySelector("#banner p");

//creation point
// Sélectionner l'élément parent où vous voulez ajouter les éléments enfants
let bullets = document.querySelector(".dots");

for(i=1;i<nbrSlide;i++){

// Créer un nouvel élément span
let bullet = document.createElement("span");

// Ajouter la classe "dot" à l'élément span
bullet.classList.add("dot");

// Ajouter l'élément span en tant qu'enfant de l'élément parent
bullets.appendChild(bullet);
}


//defiler du coté gauche
flecheG.addEventListener("click", () => {
    console.log("Vous avez cliqué sur le bouton G");
	slideCourante--;
	if(slideCourante<0){
		slideCourante=nbrSlide-1;
	}
	nvSlide();
});
//defiler du coté droit 
flecheD.addEventListener("click", () => {
   console.log("Vous avez cliqué sur le bouton D");
   slideCourante++;
   if(slideCourante==nbrSlide){
	slideCourante=0;
   }
   nvSlide();
});

//change de slide
function nvSlide (){
	console.log(slideCourante);
	monImage.src= slides[slideCourante].image;
	monTexte.innerHTML= slides[slideCourante].tagLine;
	document.querySelector(".dot_selected").classList.remove("dot_selected"); //enlever le point blanc 
	document.querySelectorAll('.dot')[slideCourante].classList.add('dot_selected');
}
