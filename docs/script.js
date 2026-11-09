// Requirement-level check: show the level and note for the phrase the visitor taps.
(function () {
  var buttons=document.querySelectorAll('#phrases .phrase');
  var tag=document.getElementById('vtag'), note=document.getElementById('vnote');
  buttons.forEach(function(b){
    b.addEventListener('click',function(){
      buttons.forEach(function(x){x.setAttribute('aria-pressed','false')});
      b.setAttribute('aria-pressed','true');
      tag.textContent=b.dataset.tag;
      tag.className='vtag '+b.dataset.cls;
      note.textContent=b.dataset.note;
    });
  });
})();
