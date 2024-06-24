function loadtime(){

  var status = window.document.getElementById('status');
  var imagem = window.document.getElementById('fotos');
  var saudar = window.document.getElementById('saudacoes');
  var data = new Date()
  var horas = data.getHours()
  status.innerHTML = `Agora são exatamente ${horas} Horas `

  if(horas>=0 && horas < 12){
      window.document.body.style.background = '#abdbe3'
      imagem.innerHTML = '<img src="../projeto1dia/imgs/manha.jpg" alt="cafe de manhã xicara">'
      saudar.innerHTML = 'Bom dia ! '

  } else if (horas >=12 && horas <18) {
      window.document.body.style.background = '#fcba03'
      imagem.src = '../projeto1dia/imgs/tarde.jpg'
      saudar.innerHTML ='Boa tarde!'
     
  }else {
      window.document.body.style.background = '#252329'
      imagem.src = '../projeto1dia/imgs/noite.jpg'
      saudar.innerHTML = 'Boa noite!'
  }
 }