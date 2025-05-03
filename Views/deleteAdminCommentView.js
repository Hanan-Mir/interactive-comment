import View from "./view";
import upVoteAndDownVoteView from "./upVoteAndDownVoteView";
class DeleteAdminCommentView extends View{

addHandlerDeleteComment(){
    let comment;
    let overlay;
    upVoteAndDownVoteView._container.addEventListener('click',(e)=>{
      e.preventDefault();
        if(e.target.classList.contains('delete')){
            comment=e.target.closest('.reply-comment');
            // upVoteAndDownVoteView._container.style.background=0.5;
            let html=this.renderDeleteMarkup();
            // upVoteAndDownVoteView._container.classList.add('blur');
            overlay=document.querySelector('.overlay');
            overlay.style.opacity=1;
            overlay.style.zIndex=0;
            window.scrollTo({
                top:0,
                behaviour:"smooth"
            })
            upVoteAndDownVoteView._container.insertAdjacentHTML('beforeend',html);
        }
        if(e.target.classList.contains('noBtn')){
            let deleteEl=document.querySelector('.delete-container');
            upVoteAndDownVoteView._container.classList.remove('blur');
            overlay.style.opacity=0;
            overlay.style.zIndex=-1;
            deleteEl.remove();
        }
        if(e.target.classList.contains('yesBtn')){
            comment.remove();
            let deleteEl=document.querySelector('.delete-container');
            overlay.style.opacity=0;
            overlay.style.zIndex=-1;
            deleteEl.remove();
            upVoteAndDownVoteView._container.classList.remove('blur');
        };
    })
}
renderDeleteMarkup(){

    return `<div class="delete-container">
            <h1>Delete Comment</h1>
            <p>Are you sure you want to delete this comment? This is remove the comment and cannot be undone.</p>
        <div class="btn-confirm">
            <a class='noBtn' href="">NO,CANCEL</a>
            <a class='yesBtn' href="">YES,DELETE</a>
        </div>
        </div>`
}

}
export default new DeleteAdminCommentView();