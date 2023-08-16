const trafficLightSection = document.querySelector('.traffic-light-section');

function printTrafficLight(color){
    const image = document.createElement('img');
    image.setAttribute('src',`./Images/luz-${color}.webp`);
    trafficLightSection.appendChild(image);
}

function deleteInfoSection(section){
    while(section.firstChild){
        section.removeChild(section.firstChild);
    }
}


function first(){
        setTimeout(()=>{
            deleteInfoSection(trafficLightSection);
            printTrafficLight('rojo');
        },1000);
        setTimeout(()=>{
            deleteInfoSection(trafficLightSection);
            printTrafficLight('verde');
        },5000);    
        setTimeout(()=>{
            deleteInfoSection(trafficLightSection);
            printTrafficLight('amarillo');
        },10000);
        setTimeout(()=>{
            deleteInfoSection(trafficLightSection);
            printTrafficLight('rojo');
        },12000);
}


function always(){
    setInterval(() => {
        setTimeout(()=>{
            deleteInfoSection(trafficLightSection);
            printTrafficLight('rojo');
        },1000);
        setTimeout(()=>{
            deleteInfoSection(trafficLightSection);
            printTrafficLight('verde');
        },5000);    
        setTimeout(()=>{
            deleteInfoSection(trafficLightSection);
            printTrafficLight('amarillo');
        },10000);
        setTimeout(()=>{
            deleteInfoSection(trafficLightSection);
            printTrafficLight('rojo');
        },12000);
    }, 13000);
        
}

first();
always();