var Jobs = [["Senior Android Developer", "4 Hour Ago", "10/03/2022", "Temporary", "Bonteuos", "Yes", "Mexico", "https://www.bounteous.com", "", "Senior", "IT & Cybersecurity"],
["Security Architect", "9 Hours Ago", "10/03/2022", "Full Time", "American Tower", "No", "MA-Other", "https://www.americantower.com/", "", "Senior", "IT & Cybersecurity"],
["Software Engineer (L5) - AVTnT (Audio Video Test & Tools)", "3 days ago", "09/30/2022", "Full Time", "Netflix", "No", "CA-Other ", "https://jobs.netflix.com/?utm_campaign=LIHomePage&utm_source=linkedin", "", "Mid", "Engineering"],
["Sr Mobile UX/UI Designer", "3 days ago", "09/30/2022", "Internship", "Charles Schwab", "No", "AZ-Phoenix ; CA-San Francisco ; FL-Orlando ; IL-Chicago ; IN-Indianapolis ; MI-Other ; MO-St. Louis ; NJ-Jersey City ; TX-Austin ; TX-Dallas ;", "https://jobs.schwabjobs.com/", "remotefriendly ; paidparentalleave ; latinxintech ; womenintecherg ; lgbtqierg-2 ;", "Senior", "Design"],
["Project Manager", "3 days ago", "09/30/2022", "Full Time", "Charles Schwab", "No", "CO-Denver ; TX-Austin ; TX-Dallas ;", "https://jobs.schwabjobs.com/", "remotefriendly ; paidparentalleave ; latinxintech ; womenintecherg ; lgbtqierg-2 ;", "Senior", "Project Management"],
["Software Engineering Manager", "3 days ago", "09/30/2022", "Full Time", "Latinas in Tech", "No", "TX-Austin ; TX-Dallas ;", "https://jobs.schwabjobs.com/", "remotefriendly ; paidparentalleave ; latinxintech ; womenintecherg ; lgbtqierg-2 ;", "Management", "Engineering"],
["Product Owner", "3 days ago", "09/30/2022", "Full Time", "Charles Schwab", "No", "Remote ; AZ-Phoenix ; CA-San Francisco ; CO-Denver ; IL-Chicago ; TX-Austin ; TX-Dallas ;", "https://jobs.schwabjobs.com/", "remotefriendly ; paidparentalleave ; latinxintech ; womenintecherg ; lgbtqierg-2 ;", "Senior", "Other"],
["LAC Software Engineering Manager","3 days ago", "09/30/2022", "Full Time", "Qualtrics", "No", "Mexico ", "http://qualtrics.com", "remotefriendly ; paidparentalleave ; womenintecherg ; lgbtqierg-2 ;", "	Management", "Engineering"],
["Database Administrator","4 days ago","09/29/2022","Full Time","Wikimedia Foundation","No","Remote ;","http://wikimediafoundation.org","","Mid","Engineering"],
["Senior Manager, Site Reliability Engineering","4 days ago","09/29/2022","Full Time","Wikimedia Foundation","No","Remote ;","https://wikimediafoundation.org/","","Management","Engineering"],
["Website Marketing Manager","1 week ago","09/23/2022","Internship","Chronosphere","No","Remote ","https://chronosphere.io/","","Junior","Marketing"]
];

var selectedS;
var selectedC;
var selectedP;
var selectedL;
document.getElementById("subirFiltro").onclick = function () {
    selectedS = document.getElementById("Seniority").value;
    selectedC = document.getElementById("Contingency").value;
    selectedP = document.getElementById("Perks").value;
    selectedL = document.getElementById("Location").value;
    for (var i = 0; i <= Trabajos.length; i++) {
        if (selectedS != Trabajos[i].Seniority || selectedC != Trabajos[i].Contingency) {
            jobBoard.removeChild(document.getElementById('' + i));
        }
    }
}


document.getElementById("ordenar").onclick = function () {
    var selectedO = document.getElementById("order").value;
    console.log(selectedO);
}
document.getElementById("reload").onclick = function () {
    location.reload();
}
function Job(nombre, Tiempo, fecha, Tipo, nombreC, Contingency, Location, link, perks, Seniority, FunctionalArea) { // prototype for job	
    this.nombre = nombre;
    this.Tiempo = Tiempo;
    this.fecha = fecha;
    this.Tipo = Tipo;
    this.nombreC = nombreC;
    this.Contingency = Contingency;
    this.Location = Location;
    this.link = link;
    this.perks = perks;
    this.Seniority = Seniority;
    this.FunctionalArea = FunctionalArea;
}

var Trabajos = [];
for (var i = 0; i < Jobs.length; i++) {
    Trabajos.push(new Job(Jobs[i][0], Jobs[i][1], Jobs[i][2], Jobs[i][3], Jobs[i][4], Jobs[i][5], Jobs[i][6], Jobs[i][7], Jobs[i][8], Jobs[i][9], Jobs[i][10]));
}
console.log(Trabajos);

const jobBoard = document.createElement("div");
document.body.appendChild(jobBoard);
var jobcards = [];
var btn = [];
var aux = 0;
function deployJobCards() {
    for (var i = 0; i <= Trabajos.length; i++) {
        jobcards[i] = document.createElement("div");
        jobcards[i].classList.add("container");

        var img = document.createElement("img");
        img.src = "Img/joblogo.png";

        var nombre = document.createElement("h4");
        nombre.textContent = Trabajos[i].nombre;

        var nombreC = document.createElement("h4");
        nombreC.textContent = Trabajos[i].nombreC;

        var Tiempo = document.createElement("h4");
        Tiempo.textContent = Trabajos[i].Tiempo;

        var Tipo = document.createElement("h4");
        Tipo.textContent = Trabajos[i].Tipo;

        var Location = document.createElement("h4");
        Location.textContent = Trabajos[i].Location;

        var Seniority = document.createElement("h4");
        Seniority.textContent = Trabajos[i].Seniority;

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
        Perks.textContent = Trabajos[i].perks;

        btn[i] = document.createElement("BUTTON");
        btn[i].innerText = "Job Details";
        btn[i].setAttribute('id', '' + i);
        btn[i].onclick = function (arg) {
            return function () {
                sessionStorage.setItem('Jobs', JSON.stringify(Jobs[arg]))
                sessionStorage.setItem('allJobs', JSON.stringify(Jobs))
                location.href = "jobDeploy.html"
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
deployJobCards();


/*
    <div class="container">
        <img src="Img/joblogo.png">       Trabajos[i].Tipo  Trabajos[i].Location  Trabajos[i].Seniority
        <div class="grid">
            <div class="col">
                <h4>Name</h4>
                <h4>hola</h4>
                <h4>trabajo</h4>
            </div>
            <div class="col">
                <h4>Name</h4>
                <h4>hola</h4>
                <h4>trabajo</h4>
            </div>

        </div>
    </div>

          (function (el) {

            };
        })(i);
        
*/
