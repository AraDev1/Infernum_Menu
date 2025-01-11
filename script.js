
var n = 0

function menuSwitch(){

    debugger;

    if(n === 0){
        document.body.style.backgroundImage = "url('CatalystTheme.webp')"
        document.getElementById("Logo").src = "CatalystLogo.webp"
        document.getElementById("SwitchA").innerText = "Переключить тему меню: Стиль Астрагельдона"
        document.getElementById("Logo").style.transform = "rotate(0deg)"
    }

    if(n === 1){
        document.body.style.backgroundImage = "url('CataclysmTheme.webp')"
        document.getElementById("Logo").src = "CataclysmLogo.png"
        document.getElementById("SwitchA").innerText = "Переключить тему меню: Calamity Style"
    }

    if(n === 2){
        document.body.style.backgroundImage = "url('infernumTheme.jpg')"
        document.getElementById("Logo").src = "infernumLogo.jpg"
        document.getElementById("SwitchA").innerText = "Переключить тему меню: Infernum Style"
        document.getElementById("Logo").style.transform = "rotate(10deg)"
    }

    n = n + 1

    if(n === 3){
        n = 0
    }

    return n;
}