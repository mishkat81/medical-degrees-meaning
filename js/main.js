const myAbbreviation=[
     {'word':'mbbs', 'meaning':'Bachelor of medicine, bachelor of surgery'},
     {'word':'fcps', 'meaning':'Fellow of the College of Physicians and Surgeons'},
     {'word':'mcps', 'meaning':'Member of College of Physicians and Surgeons'},
     {'word':'frcs', 'meaning':'Fellowship of the Royal Colleges of Surgeons'},
     {'word':'mrcp', 'meaning':'Membership of the Royal Colleges of Physicians of the United Kingdom'},
     {'word':'d.l.o', 'meaning':'Diploma in Otorhinolaryngology'},
     {'word':'d.ortho', 'meaning':'Diploma in Orthopedic Surgery'},
     {'word':'d.card', 'meaning':'Diploma in Cardiology'},
     {'word':'ddv', 'meaning':'Diploma in Dermatology & Venereology'},
     {'word':'dco', 'meaning':'Diploma in Community Ophthalmology'},
     {'word':'dtcd', 'meaning':'Diploma in Tuberculosis and Chest Diseases'},
     {'word':'dgo', 'meaning':'Diploma in Gynecology and Obstetrics'},
     {'word':'md', 'meaning':'Doctor of Medicine'},
     {'word':'ccd', 'meaning':'Certificate Course on Diabetology'},
     {'word':'M Phill', 'meaning':'Master of Philosophy'},
     {'word':'fmas', 'meaning':'fellowship in minimal access surgery'},
     {'word':'pgt', 'meaning':'Postgraduate Training'},
     {'word':'ms', 'meaning':'Master of Surgery'},
     {'word':'d.o', 'meaning':'Doctor of Osteopathic Medicine'},
     {'word':'mph', 'meaning':'Masters in Public Health'},
     {'word':'fcgp', 'meaning':'Fellow of the College of General Practitioners'},
]

function myFunc(data){

let myDiv = document.getElementById("rowID");
myDiv.innerHTML = '';

for(let i = 0; i < data.length; i++){
 
 let myRow = `<div class="col-lg-3 col-md-6">
                 <div class="main-part">
                         <h5>${data[i].word}</h5>
                         <h6>${data[i].meaning}</h6>
                    </div>
                 </div>` 

             myDiv.innerHTML += myRow;
}


}
myFunc(myAbbreviation);