var input = document.querySelector('.inputTxt')
var main = document.querySelector('#name')
var country = document.querySelector('.country')
var temp = document.querySelector('.temp')
var button = document.querySelector('.btn')


button.addEventListener('click', weather)
function weather(name){
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+input.value+'&appid=50a7aa80fa492fa92e874d23ad061374')
    
    .then(function(response){
        return response.json();
    })

    .then(function(data){
        
        var tempValue = data['main']['temp'];
        var nameValue = data['name'];
        var countryValue = data['sys']['country']

        var kelvinToCelsius = Math.round(parseInt(tempValue) -  273.15)
        
        main.innerHTML = nameValue 
        country.innerHTML = countryValue
        temp.innerHTML = "Temperature - " + kelvinToCelsius + " °C"
        input.value = "";
       
    })
    .catch(function(err){
        alert("Name is incorrect")
    });
  
    
}

// show dropdown menu
function dropDown(){
    var divDropdown = document.querySelector('.dropdown-menu')
    var pDropdown = document.querySelector('.dropdown-p')
    
    divDropdown.style.display = "block";
}

// remove dropdown menu
function remove(){
    var divDropdown = document.querySelector('.dropdown-menu')
    divDropdown.style.display = "none"
}

// change header color
window.addEventListener('scroll', function () {
    var header = document.querySelector('.header-container')
    var top = window.scrollY
    if(top > 70){
    header.style.backgroundColor = 'rgb(155, 58, 58)'
    header.style.opacity = "0.7"
    }else if(top < 70){
        header.style.backgroundColor = 'rgb(155, 58, 58)'
        header.style.opacity = "1"
    }
});

