var sessionRescate = sessionStorage.getItem('Jobs');
var trabajo = JSON.parse(sessionRescate);
var sessionRescate2 = sessionStorage.getItem('allJobs');
var Alljobs = JSON.parse(sessionRescate2);
console.log(Alljobs);

var titulo = document.createElement('h1')
titulo.textContent = trabajo[0];
document.body.appendChild(titulo);

var jobcard = document.createElement("div");
jobcard.classList.add("container");

var img = document.createElement("img");
img.src = "Img/joblogo.png";

var nombreC = document.createElement("h4");
nombreC.textContent = trabajo[4]

var fecha = document.createElement("h4");
fecha.textContent= trabajo[2]

var Tiempo = document.createElement("h4");
Tiempo.textContent = trabajo[1]

var Tipo = document.createElement("h4");
Tipo.textContent = trabajo[3]

var country = document.createElement("h4");
country.textContent = trabajo[6]

var Seniority = document.createElement("h4");
Seniority.textContent = trabajo[9]

var contin = document.createElement("h4")
contin.textContent = "Contingency: "+trabajo[5]

var link = document.createElement("h4")
link.textContent = "Contact us: "+trabajo[7]

var perks = document.createElement("h4")
perks.textContent = trabajo[8]

var fAreas = document.createElement("h4")
fAreas.textContent = trabajo[10]

var divGrid = document.createElement("div");
divGrid.classList.add("grid");

var divCol1 = document.createElement("div");
divCol1.classList.add("col");
divCol1.appendChild(nombreC);
divCol1.appendChild(Tiempo);
divCol1.appendChild(fecha);

var divCol2 = document.createElement("div");
divCol2.classList.add("col")
divCol2.appendChild(Tipo)
divCol2.appendChild(country)
divCol2.appendChild(Seniority)

var divCol3 = document.createElement("div")
divCol3.classList.add("col")
divCol3.appendChild(fAreas)
divCol3.appendChild(perks)
divCol3.appendChild(contin)
divCol3.appendChild(link)

divGrid.appendChild(divCol1);
divGrid.appendChild(divCol2);
divGrid.appendChild(divCol3);


jobcard.appendChild(img);
jobcard.appendChild(divGrid);

document.body.appendChild(jobcard);

var similar = document.createElement('h1')
similar.textContent = "Similar JOBS";
document.body.appendChild(similar);

const jobBoard = document.createElement("div");
document.body.appendChild(jobBoard);
var jobcards = [];
var btn = [];
var aux = 0;
function deployJobCards() {
    for (var i = 0; i <= Alljobs.length; i++) {
        if(Alljobs[i][10]==trabajo[10]){
            jobcards[i] = document.createElement("div");
            jobcards[i].classList.add("container");
    
            var img = document.createElement("img");
            img.src = "Img/joblogo.png";
    
            var nombre = document.createElement("h4");
            nombre.textContent = Alljobs[i][0];
    
            var nombreC = document.createElement("h4");
            nombreC.textContent = Alljobs[i][4];
    
            var Tiempo = document.createElement("h4");
            Tiempo.textContent = Alljobs[i][1];
    
            var Tipo = document.createElement("h4");
            Tipo.textContent = Alljobs[i][3];
    
            var Location = document.createElement("h4");
            Location.textContent = Alljobs[i][6];
    
            var Seniority = document.createElement("h4");
            Seniority.textContent = Alljobs[i][9];
    
            var divGrid = document.createElement("div");
            divGrid.classList.add("grid");
    
            var divCol1 = document.createElement("div");
            divCol1.classList.add("col");
            divCol1.appendChild(nombre);
            divCol1.appendChild(nombreC);
            divCol1.appendChild(Tiempo);
    
            var divCol2 = document.createElement("div");
            divCol2.classList.add("col")
            divCol2.appendChild(Tipo)
            divCol2.appendChild(Location)
            divCol2.appendChild(Seniority)
    
            var Perks = document.createElement("h4");
            Perks.textContent = Alljobs[i][8];
    
            btn[i] = document.createElement("BUTTON");
            btn[i].innerText = "Job Details";
            btn[i].setAttribute('id', '' + i);
            btn[i].onclick= function(arg) {
                return function() {
                    sessionStorage.setItem('Jobs', JSON.stringify(Alljobs[arg]))
                    sessionStorage.setItem('allJobs',JSON.stringify(Alljobs))
                    location.href="jobDeploy.html"
                }
            }(i);
    
      
            var divCol3 = document.createElement("div");
            divCol3.classList.add("col")
            divCol3.appendChild(Perks)
            divCol3.appendChild(btn[i])
    
            divGrid.appendChild(divCol1);
            divGrid.appendChild(divCol2);
            divGrid.appendChild(divCol3);
    
            jobcards[i].appendChild(img);
            jobcards[i].appendChild(divGrid);
    
            jobcards[i].setAttribute('id', '' + i);
    
            jobBoard.appendChild(jobcards[i]);
        
        }

    }
}
deployJobCards();
/**
 * 
 *  
 * 

 */