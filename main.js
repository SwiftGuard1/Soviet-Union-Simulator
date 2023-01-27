const required = 100;
const countdown = ((Math.floor(Math.random() * 11)) * 1000);
var ending = false;
var destroyed = false;
var counter = 0;
var built = counter/3;
var debounce = false;

const nukeCounter = document.createElement("label");
nukeCounter.style.fontFamily = '"Lucida Console", "Courier New", monospace';
nukeCounter.style.top = "30px";
nukeCounter.style.right = "375px";
nukeCounter.style.fontSize = "40px";
nukeCounter.style.position = "fixed";
nukeCounter.style.color = "black";
nukeCounter.style.textAlign = "center";

setInterval(function () {
    nukeCounter.innerHTML = Math.round(built);
})

const gameWindow = document.createElement("div");
gameWindow.style.width = "400px";
gameWindow.style.height = "400px";
gameWindow.style.border = "2px solid darkgrey";
gameWindow.style.position = "fixed";
gameWindow.style.top = "10px";
gameWindow.style.right = "10px";
gameWindow.style.backgroundSize = "200px 200px";
gameWindow.style.backgroundRepeat = "repeat";
gameWindow.style.backgroundImage = "url('https://media.istockphoto.com/id/653967114/vector/hammer-and-sickle-seamless-pattern.jpg?s=612x612&w=0&k=20&c=R4104ZT0uIniV9_kVe-xT8FBIGoWFBb6IGZOTtIvj8U=')";

const nuke = document.createElement("img");
nuke.style.width = "350px";
nuke.style.height = "225px";
nuke.style.position = "fixed";
nuke.style.top = "90px";
nuke.style.right = "35px";
nuke.src = "https://www.brusselsreport.eu/wp-content/uploads/2022/05/atomic-bomb-g37cdc76d2_1280.png";

const buildSound = document.createElement("audio");
buildSound.src = "https://sndup.net/nh38/d";
buildSound.style.display = "none";
buildSound.loop = false;

const siren = document.createElement("audio");
siren.src = "https://sndup.net/h32c/d";
siren.style.display = "none";
siren.loop = false;

const explosion = document.createElement("audio");
explosion.src = "https://www.shockwave-sound.com/sound-effects/explosion-sounds/Arcade%20Explo%20A.wav";
explosion.style.display = "none";

nuke.onclick = function () {
    if (debounce) {
        return;
    } else {
        debounce = true;
        buildSound.play();
        counter++;
        built = counter/3;
        setTimeout(function () {
            debounce = false;
        }, buildSound.duration + 1)
    }
};

const nukeWarning = document.createElement("img");
nukeWarning.style.width = "80px";
nukeWarning.style.height = "80px";
nukeWarning.style.position = "fixed";
nukeWarning.style.display = "none";
nukeWarning.style.top = "20px";
nukeWarning.style.right = "21px";
nukeWarning.src = "https://media.tenor.com/wtY8p60PXwUAAAAj/nuke-radio-active.gif";

const nukeExplosion = document.createElement("img");
nukeExplosion.style.width = "400px";
nukeExplosion.style.height = "400px";
nukeExplosion.style.border = "2px solid darkgrey";
nukeExplosion.style.position = "fixed";
nukeExplosion.style.display = "none";
nukeExplosion.style.top = "10px";
nukeExplosion.style.right = "10px";
nukeExplosion.src = "https://media.tenor.com/igZCc-gVpjsAAAAj/%D0%B2%D0%B7%D1%80%D1%8B%D0%B2.gif";

const destination = document.createElement("img");
destination.style.width = "400px";
destination.style.height = "400px";
destination.style.border = "2px solid darkgrey";
destination.style.position = "fixed";
destination.style.display = "none";
destination.style.top = "10px";
destination.style.right = "10px";
destination.src = "https://media.istockphoto.com/id/1281603402/photo/north-america-from-space.jpg?s=612x612&w=0&k=20&c=zpcVWdAidlU2BXXuXUgmHhc-8RPerStelip32HkJOBM=";

setInterval(function () {
    if (ending == false) {
        if (Math.round(built) >= required) {
            ending = true;
        }
    }
})

setInterval(function(){
    if(ending && destroyed == false) {
        destroyed = true;
        nukeCounter.remove();
        nukeWarning.style.display = "block";
        destination.style.display = "block";
        siren.play();
        setTimeout(function() {
            nukeExplosion.style.display = "block";
            explosion.play();
            setTimeout(function(){
                gameWindow.remove();
                siren.pause();
                siren.remove();
                explosion.pause();
                explosion.remove();
                nuke.remove();
                nukeWarning.remove();
                nukeExplosion.remove();
                buildSound.remove();
                destination.remove();
            },1800)
        }, 25000)
    }
})

document.body.appendChild(gameWindow);
document.body.appendChild(nuke);
document.body.appendChild(buildSound);
document.body.appendChild(nukeCounter);
document.body.appendChild(destination);
document.body.appendChild(nukeExplosion);
document.body.appendChild(nukeWarning);