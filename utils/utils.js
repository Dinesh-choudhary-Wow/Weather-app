
const fetchWeather = async(inputElement) =>{
    const query = inputElement.value;
    inputElement.value = '';
    const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${query}%7D?unitGroup=us&key=HEG4F8F8KWRVJJMYWBWT267MR&contentType=json`;
    try{
        let response = await fetch(url);
        let data = await response.json();
        return data;
    }
    catch(error){
        return error
    }
   
}
const fahrenheitToCelsius = (temp) =>{
    return (temp-32) * (5/9);
}
//Function to get display (on divElement) weather whenever the buttonElement is clicked 
const queryLocation =(buttonElement,inputElement,divElement) =>{
    buttonElement.addEventListener('click',function(){
        fetchWeather(inputElement)
        .then(data=>{
            console.log(data);  
            divElement.innerText = "Address = "+data.resolvedAddress+" " +fahrenheitToCelsius(data.days[0].tempmax).toFixed(2) +" Degree Celcius";
        })
        .catch(error=>console.log(error))
    })
}


let obj = {
    queryLocation :queryLocation
}

export default obj;

