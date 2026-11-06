const aMettreEnRouge=document.querySelector("#a-mettre-en-rouge")
aMettreEnRouge.style.color="red"

const enRougeSuiteAclick = document.querySelector("#en-rouge-suite-a-click")
enRougeSuiteAclick.addEventListener("click",()=>{
    enRougeSuiteAclick.style.color="red"
});

const collH2=document.querySelectorAll("h2")
collH2.forEach((h2)=>{
    h2.addEventListener("click",(evt)=>{
        evt.target.style.color="red";
    }); });