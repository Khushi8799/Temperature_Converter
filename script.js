let celsius=document.getElementById('celsius');
let fahrenheit=document.getElementById('fahrenheit');
let btn=document.querySelector('.button button');

celsius.oninput=() => {
    let output=(parseFloat(celsius.value)*9)/5 +32;
    fahrenheit.value=parseFloat(output.toFixed(2));
};

fahrenheit.oninput=() => {
    let output=((parseFloat(fahrenheit.value)-32)*5)/9;
    celsius.value=parseFloat(output.toFixed(2));
};

btn.addEventListener('click', ()=>{
    celsius.value = "";
    fahrenheit.value="";
    
})