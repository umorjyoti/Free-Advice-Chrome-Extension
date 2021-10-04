var i=0;

    fetch("https://api.adviceslip.com/advice")
    .then(data=>data.json())
    .then(response=>{
        const advice = response.slip.advice;
        const adviceElement = document.getElementById('adviceElement');
        
        adviceElement.innerHTML = advice;
    })


