import commentView from "./commentView";
import View from "./view";
class UpvoteAndDownVote extends View{
    _container=document.querySelector('.container');
addHandlerUpVote(handler){
this._container.addEventListener('click',(e)=>{
    let plusEl;
    let minusEl;
    if(e.target.classList.contains('disabled')) return;
    if(e.target.classList.contains('plus')){
        let leftEl=e.target.closest('.left');
        let myLabel=leftEl.querySelector('.score');
        plusEl=leftEl.querySelector('.plus');
        minusEl=leftEl.querySelector('.minus');
        myLabel.textContent=+myLabel.textContent+1;
        plusEl.classList.add('disabled');
    
        minusEl.classList.remove('disabled');
    }
    if(e.target.classList.contains('minus')){
        let leftEl=e.target.closest('.left');
        let myLabel=leftEl.querySelector('.score');
      minusEl=leftEl.querySelector('.minus');
      plusEl=leftEl.querySelector('.plus');
        myLabel.textContent=+myLabel.textContent-1;
    minusEl.classList.add('disabled');
    plusEl.classList.remove('disabled');
    }
})
}
}
export default new UpvoteAndDownVote();