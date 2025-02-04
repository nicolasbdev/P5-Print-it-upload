

// Définition du tableau contenant les diapositives du carrousel
const slides = [
	{
	  image: "slide1.jpg",
	  tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
	},
	{
	  image: "slide2.jpg",
	  tagLine: "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
	},
	{
	  image: "slide3.jpg",
	  tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
	},
	{
	  image: "slide4.png",
	  tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
	},
  ];
  
  // Initialisation de la position actuelle du carrousel
  let position = 0;
  
  // Calcul du nombre total de diapositives
  const numberOfSlide = slides.length;
  
  // Affichage du nombre total d'images dans la console pour le débogage
  console.log("Le nombre des images est de :" + numberOfSlide);
  
  // Affichage initial du carrousel
  createCaroussel(position);
  
  // Création des points de navigation sous le carrousel
  createDots();
  
  // Mise à jour des points pour afficher le point actif
  updateDot();
  
  // Sélection des flèches de navigation dans le DOM
  const left = document.querySelector('.arrow_left');
  const right = document.querySelector('.arrow_right');
  
  // Ajout d'un écouteur d'événement sur la flèche gauche pour passer à l'image précédente
  left.addEventListener("click", function () {
	// Vérification si la position est à 0 (première image)
	if (position == 0) {
	  // Si oui, revenir à la dernière image
	  position = numberOfSlide - 1;
	} else {
	  // Sinon, passer à l'image précédente
	  position--;
	}
	// Mise à jour de l'affichage du carrousel
	createCaroussel(position);
  
	// Affichage dans la console pour le débogage
	console.log(left);
  });
  
  // Ajout d'un écouteur d'événement sur la flèche droite pour passer à l'image suivante
  right.addEventListener("click", function () {
	// Vérification si on est à la dernière image
	if (position == numberOfSlide - 1) {
	  // Si oui, revenir à la première image
	  position = 0;
	} else {
	  // Sinon, passer à l'image suivante
	  position++;
	}
	// Mise à jour de l'affichage du carrousel
	createCaroussel(position);
  });
  
  // Fonction pour créer les points de navigation sous le carrousel
  function createDots() {
	// Sélection de l'élément contenant les points
	const dots = document.querySelector(".dots");
  
	// Boucle pour créer un point pour chaque diapositive
	for (let index = 0; index < slides.length; index++) {
	  // Création d'un élément <div> pour le point
	  const dot = document.createElement("div");
  
	  // Attribution de la classe CSS "dot"
	  dot.setAttribute("class", "dot");
  
	  // Ajout du point à l'élément parent ".dots"
	  dots.appendChild(dot);
	}
  }
  
  // Fonction pour mettre à jour l'apparence des points de navigation
  function updateDot() {
	// Sélection de tous les points existants
	const listPoints = document.querySelectorAll(".dot");
  
	// Boucle pour parcourir chaque point
	for (let index = 0; index < listPoints.length; index++) {
	  // Sélection du point courant
	  const dot = listPoints[index];
  
	  // Vérification si l'index correspond à la position actuelle du carrousel
	  if (index == position) {
		// Ajout de la classe "dot_selected" pour mettre en surbrillance le point actif
		dot.classList.add('dot_selected');
	  } else {
		// Suppression de la classe "dot_selected" pour les autres points
		dot.classList.remove('dot_selected');
	  }
	}
  }
  
  // Fonction pour afficher une diapositive spécifique dans le carrousel
  function createCaroussel(position) {
	// Récupération des informations de la diapositive actuelle
	const element = slides[position];
  
	// Affichage de la diapositive en cours dans la console pour le débogage
	console.log(element);
  
	// Sélection de l'élément <img> du carrousel
	const img = document.querySelector(".banner-img");
  
	// Mise à jour de l'image du carrousel avec la source correspondante
	img.setAttribute("src", "./assets/images/slideshow/" + element.image);
  
	// Sélection de l'élément contenant le texte de la diapositive
	const p = document.querySelector(".banner-txt");
  
	// Mise à jour du texte du carrousel (avec les balises <span> incluses)
	p.innerHTML = element.tagLine;
  
	// Mise à jour des points de navigation pour refléter la diapositive active
	updateDot();
  }