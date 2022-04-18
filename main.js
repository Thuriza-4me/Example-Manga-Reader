const imgCont = document.querySelector('.imgCont');

const imgs =[
  'image/1.jpg', 
  'image/2.jpg', 
  'image/3.jpg', 
  'image/4.jpg', 
  'image/5.jpg', 
  'image/6.jpg', 
  'image/7.jpg', 
  'image/8.jpg'

]

for(let i=0;i<imgs.length;i++){
  
  const imgPlace = document.createElement('img');
  imgPlace.classList.add('imgPlace');
  imgCont.append(imgPlace);
  imgPlace.src=imgs[i];
}
