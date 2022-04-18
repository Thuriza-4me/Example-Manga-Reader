const imgCont = document.querySelector('.imgCont');

const imgs =[
  '1.jpg', 
  '2.jpg', 
  '3.jpg', 
  '4.jpg', 
  '5.jpg', 
  '6.jpg', 
  '7.jpg', 
  '8.jpg'

]

for(let i=0;i<imgs.length;i++){
  
  const imgPlace = document.createElement('img');
  imgPlace.classList.add('imgPlace');
  imgCont.append(imgPlace);
  imgPlace.src=imgs[i];
}
