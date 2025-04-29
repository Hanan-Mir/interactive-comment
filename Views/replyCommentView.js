import upVoteAndDownVoteView from "./upVoteAndDownVoteView";
import View from "./view";
class ReplyCommentView extends View{
addHandlerReply(){
    upVoteAndDownVoteView._container.addEventListener('click',(e)=>{
if(e.target.classList.contains('reply')){
    alert('Reply clicked');
}
    })

}
}
export default new ReplyCommentView();