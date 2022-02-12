
const container = document.getElementById('container');
const containerk = document.getElementById('containerk');
const container2 = document.getElementById('container2');
const button = document.getElementById('but');



fetch("https://api.pexels.com/v1/search?query=people",{
  headers: {
    Authorization: "563492ad6f917000010000013f7225d0a53c43dd9ad164f0968c94ea"
  }
})
   .then(resp => {
     return resp.json()
   })
   .then(data => {

     console.log(data)
      
      button.addEventListener('click', () => {
          rid =  Math.floor(Math.random()*15);
          console.log(rid);
          
      let alt = data.photos[rid].alt;
      let photographer = data.photos[rid].photographer;
      let imgUrl = data.photos[rid].src.original;
      container2.innerHTML = `<p>${alt}<br>By: ${photographer}</p>`;
      
      container.innerHTML = `<img src=${imgUrl}>`
      
      console.log(alt);
      document.querySelector('img').classList.add('ima');
  

      })



   });


