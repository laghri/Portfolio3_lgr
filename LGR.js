
let stars =document.getElementById('stars');
let moon =document.getElementById('moon');
let montain3=document.getElementById('mountains3');
let mountains4=document.getElementById('mountains4')
let river=document.getElementById('river')
let boat=document.getElementById('boat');
let mountains7=document.getElementById('mountains7');
let lgr=document.querySelector('.lgr');

window.onscroll =function(){
    let value =scrollY;
    stars.style.left=value+"px";
    moon.style.top=value*3+"px";
    montain3.style.top=value*2+"px";
    mountains4.style.top=value*1.5+"px";
     river.style.top=value+"px";
     boat.style.top=value+"px";
     boat.style.left=value*3+"px";
     lgr.style.fontSize =value+'px';
     if(scrollY>=67){
         lgr.style.fontSize=67+'px';
         lgr.style.position='fixed';
         if(scrollY>=458){
             lgr.style.display='none';
            
         }
         else{
            lgr.style.display='block';
         }
         if(scrollY>=127){
             document.querySelector('.main').style.background='linear-gradient(#376281,#10001F)'
         }
         else{
            document.querySelector('.main').style.background=' linear-gradient(to top, #200016, transparent)'
         }
     }
}