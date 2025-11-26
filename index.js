const burgerMenu=document.querySelector(".burger-menu");
const menuButton=document.querySelector(".menu");
menuButton.addEventListener("mouseover",function(){
 burgerMenu.style.display="block";
	burgerMenu.style.width="10vw";
	burgerMenu.style.height="21vh";
	burgerMenu.style.background="white";
	
});
burgerMenu.addEventListener("mouseover",function(){
  burgerMenu.style.display="block";
	burgerMenu.style.width="10vw";
	burgerMenu.style.height="21vh";
	burgerMenu.style.background="white";
	
});
burgerMenu.addEventListener("mouseout",function(){
 burgerMenu.style.display="none";
	burgerMenu.style.width="0vw";
	burgerMenu.style.height="0vh";
	
	
});
const productBanner=document.getElementById("productBanner");
const colorOne=document.getElementById("c1").addEventListener("mouseover",function(){
	productBanner.style.background="url('luanda.jpg')";
	productBanner.style.backgroundPosition="center";
	productBanner.style.backgroundSize="cover";
});

const colorTwo=document.getElementById("c2").addEventListener("mouseover",function(){
	productBanner.style.background="url('aenxrd.jpg')";
	productBanner.style.backgroundPosition="center";
	productBanner.style.backgroundSize="cover";
});

const colorThree=document.getElementById("c3").addEventListener("mouseover",function(){
	productBanner.style.background="url('anchi.jpg')";
	productBanner.style.backgroundPosition="center";
	productBanner.style.backgroundSize="cover";
});
const colorFour=document.getElementById("c4").addEventListener("mouseover",function(){
	productBanner.style.background="url('promax.jpg')";
	productBanner.style.backgroundPosition="center";
	productBanner.style.backgroundSize="cover";
});
const colorFive=document.getElementById("c5").addEventListener("mouseover",function(){
	productBanner.style.background="url('arun.jpg')";
	productBanner.style.backgroundPosition="center";
	productBanner.style.backgroundSize="cover";
});
const colorSix=document.getElementById("c6").addEventListener("mouseover",function(){
	productBanner.style.background="url('toseek.jpg')";
	productBanner.style.backgroundPosition="center";
	productBanner.style.backgroundSize="cover";
});

const colorSeven=document.getElementById("c7").addEventListener("mouseover",function(){
	productBanner.style.background="url('fengsl.jpg')";
	productBanner.style.backgroundPosition="center";
	productBanner.style.backgroundSize="cover";
});
const colorEight=document.getElementById("c8").addEventListener("mouseover",function(){
	productBanner.style.background="url('simon.jpg')";
	productBanner.style.backgroundPosition="center";
	productBanner.style.backgroundSize="cover";
});
const colorNine=document.getElementById("c9").addEventListener("mouseover",function(){
	productBanner.style.background="url('garuda.jpg')";
	productBanner.style.backgroundPosition="center";
	productBanner.style.backgroundSize="cover";
});
 productBanner.addEventListener("mouseover",function(){
	productBanner.style.background="url('banner2.jpg')";
	productBanner.style.backgroundPosition="center";
	productBanner.style.backgroundSize="cover";
});
 productBanner.addEventListener("mouseout",function(){
	productBanner.style.background="url('brands.png')";
	productBanner.style.backgroundPosition="center";
	productBanner.style.backgroundSize="cover";
});
