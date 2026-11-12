const WA_NUMBER='358417945460';
const services={classic:{name:'Klassinen hieronta · 60 min',price:30},neck:{name:'Niskahieronta · 30 min',price:20},lower:{name:'Alavartalon hieronta · 45 min',price:30}};
const locations={studio:{name:'Punkaharju (ei kotikäyntiä)',price:0},punkaharju:{name:'Kotikäynti Punkaharjulla',price:10},savonlinna:{name:'Kotikäynti Savonlinnassa',price:20}};
const form=document.getElementById('bookingForm');
const total=document.getElementById('total');
function updateTotal(){const s=services[form.elements.service.value],l=locations[form.elements.location.value];total.textContent=s&&l?`Kokonaishinta: ${s.price+l.price} € (hieronta ${s.price} € + kotikäyntilisä ${l.price} €)`:'Valitse palvelu ja paikka nähdäksesi kokonaishinnan.';}
form.elements.service.addEventListener('change',updateTotal);
form.elements.location.addEventListener('change',updateTotal);
const dateInput=form.elements.date;
const today=new Date();const localToday=new Date(today.getTime()-today.getTimezoneOffset()*60000).toISOString().slice(0,10);dateInput.min=localToday;
form.addEventListener('submit',e=>{e.preventDefault();if(!form.reportValidity())return;const f=form.elements,s=services[f.service.value],l=locations[f.location.value];if(!s||!l)return;const msg=`Hei! Haluaisin varata hieronta-ajan.\n\nNimi: ${f.name.value.trim()}\nPuhelin: ${f.phone.value.trim()}\nPalvelu: ${s.name}\nPaikka: ${l.name}\nKokonaishinta: ${s.price+l.price} €\nToivottu päivämäärä: ${f.date.value}\nToivottu kellonaika: ${f.time.value}\nLisätietoja: ${f.message.value.trim()||'-'}\n\nVoisitko vahvistaa ajan?`;window.open(`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`,'_blank','noopener,noreferrer');});
document.getElementById('year').textContent=new Date().getFullYear();
