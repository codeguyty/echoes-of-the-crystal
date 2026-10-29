'use strict';
window.addEventListener('error',e=>{const box=document.getElementById('error');box.style.display='block';box.textContent='Game error: '+e.message+'\n'+(e.filename||'')+':'+(e.lineno||'')});
const held={up:false,down:false,left:false,right:false};let interact=()=>{};
for(const b of document.querySelectorAll('[data-dir]')){const d=b.dataset.dir;const release=e=>{if(e)e.preventDefault();held[d]=false;b.classList.remove('pressed')};b.addEventListener('pointerdown',e=>{e.preventDefault();b.setPointerCapture(e.pointerId);held[d]=true;b.classList.add('pressed')});b.addEventListener('pointerup',release);b.addEventListener('pointercancel',release);b.addEventListener('lostpointercapture',release)}
document.getElementById('action').addEventListener('pointerdown',e=>{e.preventDefault();interact()});window.addEventListener('blur',()=>Object.keys(held).forEach(k=>held[k]=false));
const hud=document.getElementById('hud'),dialog=document.getElementById('dialog');
