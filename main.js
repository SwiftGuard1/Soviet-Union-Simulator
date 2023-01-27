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

const nukeWarning = document.createElement("img");
nukeWarning.src = "https://media.tenor.com/wtY8p60PXwUAAAAj/nuke-radio-active.gif";

const nukeExplosion = document.createElement("img");
nukeExplosion.src = "https://media.tenor.com/igZCc-gVpjsAAAAj/%D0%B2%D0%B7%D1%80%D1%8B%D0%B2.gif";

const destination = document.createElement("img");
destination.src = "https://media.istockphoto.com/id/1281603402/photo/north-america-from-space.jpg?s=612x612&w=0&k=20&c=zpcVWdAidlU2BXXuXUgmHhc-8RPerStelip32HkJOBM=";

document.body.appendChild(gameWindow);
document.body.appendChild(nuke);