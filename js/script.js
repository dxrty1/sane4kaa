let phrases = [
    { text: 'Лучше 5 сантиметров спереди, чем 20 сзади', image: 'https://i.postimg.cc/J4yZ1W2g/123-Photoroom.png' },
    { text: 'Аллу Пугачёву знаешь? Я напугал', image: 'https://i.postimg.cc/HsQ5JtT4/321-Photoroom.png' },
    { text: 'Когда я перехожу дорогу, машины смотрят по сторонам', image: 'https://i.postimg.cc/rwjxZm9P/ka4ok-1.png' },
    { text: 'А мне бы крышу повыше, ночи потише, слова послаще и пиваса почаще', image: 'https://i.postimg.cc/vZ2D66hb/1.png' },
    { text: 'Когда я упал, звезда загадала желание', image: 'https://i.postimg.cc/QdfR31Kh/padart.png' },
    { text: 'Однажды меня укусила королевская кобра, но спустя три дня мучений она сдохла', image: 'https://i.postimg.cc/90cckWbL/image.png' },
    { text: 'Когда я прыгаю в бассейн, то бассейн задерживает дыхание', image: 'https://i.postimg.cc/t432qpN3/1.png' },
    { text: 'Это я гулял на выходных, сейчас уже дома', image: 'https://i.postimg.cc/2jsrB7nz/1.png' },
    { text: 'Сфоткай типа по телефону общаюсь', image: 'https://i.postimg.cc/xdpcrNhc/image.png' },
    { text: 'Вообще у меня свой бизнес, а такси это хобби', image: 'https://i.postimg.cc/zft504Fw/car1-Photoroom.png' },
    { text: 'Однажды я прогуливал школу два дня, так и появились выходные', image: 'https://i.postimg.cc/PxZh6LjG/image.png' },
  ];
  
  let currentIndex = 0; 
  function getNextElement(arr) { 
    if (currentIndex >= arr.length) { 
      currentIndex = 0; 
    } 
    let nextElement = arr[currentIndex]; 
    currentIndex++; 
    return nextElement; 
  } 
   
  let button = document.querySelector('.button'); 
  let phrase = document.querySelector('.phrase'); 
  let advice = document.querySelector('.advice'); 
  let image = document.querySelector('.image'); 
   
  button.addEventListener('click', function () { 
    let nextElement = getNextElement(phrases); 
    smoothly(phrase, 'textContent', nextElement.text); 
    smoothly(image, 'src', nextElement.image); 
   
    if (nextElement.text.length > 40) { 
      advice.style.fontSize = '33px'; 
    } else { 
      advice.style.fontSize = '42px'; 
    } 
  });
