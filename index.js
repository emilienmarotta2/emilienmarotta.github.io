function switch_theme(){

    const body = document.body;
    const networks = document.getElementById("networks");
    const networks_style = window.getComputedStyle(networks);
    const networks_background_color = networks_style.getPropertyValue("background-color"); 
    const darktheme = "Index/darktheme.png";
    const lighttheme = "Index/lighttheme.png";
    const img = document.getElementById("img_theme");
    const borders_div = document.getElementById("titlediv");
    const borders_subtitle = document.getElementById("subtitle");

    body.classList.toggle("dark_theme");

    if(networks_background_color === "rgb(200, 200, 200)"){ // Switcho to dark theme
        networks.style.backgroundColor = "#142432";
        img.setAttribute("src", lighttheme);
        borders_div.style.borderBottom = "2px solid #96B1DC";
        borders_subtitle.style.borderTop = "2px solid #96B1DC";
        borders_subtitle.style.borderBottom = "2px solid #96B1DC";
        networks.style.border = "2px solid #96B1DC";
    }
    else{
        networks.style.backgroundColor = "rgb(200, 200, 200)"; // Switch to light theme
        img.setAttribute("src", darktheme);
        borders_div.style.borderBottom = "2px solid #000";
        borders_subtitle.style.borderTop = "2px solid #000";
        borders_subtitle.style.borderBottom = "2px solid #000";
        networks.style.border = "2px solid #000";
    }   
}

function default_theme(){ // Set dark theme as default if it is between 8:00pm and 7:00am

    const now = new Date();
    const hours = now.getHours();

    if(hours >= 20 || hours < 7){
        switch_theme(); // Light theme is set as default in the HTML code, so switch to dark theme
    }
}
