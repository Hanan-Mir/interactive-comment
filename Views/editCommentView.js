import View from "./view";
import upVoteAndDownVoteView from "./upVoteAndDownVoteView";
class EditComment extends View{
addHandlerEditComment(){
    upVoteAndDownVoteView._container.addEventListener('click',(e)=>{
if(e.target.classList.contains('edit')){
    alert('edit clicked');
}
    })
}


}
export default new EditComment();