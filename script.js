const images = [
 "images/image-1.jpeg", 
 "images/image-2.jpeg", 
 "images/image-3.jpeg", 
 "images/image-4.jpeg", 
 "images/image-5.jpeg", 
 "images/image-6.jpeg", 

]

const btns = document.getElementsByTagName('button'); 
const image = document.getElementsByTagName('img')[0];

let serial = 0; 
const prevFn = () => {
 serial--; 
 serial = serial < 0 ? 5 : serial;
 console.log(serial);
 image.setAttribute('src', images[serial])
}
const nextFn = () => {
 serial++; 
 serial = serial > images.length -1 ? 0 : serial; 
 console.log(serial)
 image.setAttribute('src', images[serial])
}

btns[0].addEventListener('click', prevFn) 
btns[1].addEventListener('click', nextFn) 