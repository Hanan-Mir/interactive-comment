import View from "./view";
import upVoteAndDownVoteView from "./upVoteAndDownVoteView";
import deleteIcon from 'url:../images/icon-delete.svg';
import editIcon from 'url:../images/icon-edit.svg';
import iconPlus from 'url:../images/icon-plus.svg';
import iconMinus from 'url:../images/icon-minus.svg'; 
import juliusomo from 'url:../images/avatars/image-juliusomo.png';
class AdminComment extends View{
addHandlerAdminComment(){
    let enteredText;
    upVoteAndDownVoteView._container.addEventListener('click',(e)=>{
if(e.target.classList.contains('adminComment')){
let input=document.querySelector('#adminInputComment');
enteredText=input.value;
if(!enteredText){
    alert('Enter the comment first');
    return;
}
let html=this.generateMarkup(enteredText);
upVoteAndDownVoteView._container.insertAdjacentHTML('afterbegin',html);
input.value='';
}

        
    })
}
generateMarkup(data){
    return ` <div class="reply-comment admin adminCommentContainer">
                <div class="left">
                    <a href="#" class="response"><img class='plus' src="${iconPlus}" alt=""></a>
                    <p class="score">0</p>
                    <a href="#" class="response"><img class='minus' src="${iconMinus}" alt=""></a>
                                </div>
                                <div class="right">
                                    <div class="top">
                                    <div class="comment-top-left">
                    <img src="${juliusomo}" alt="" class="avatar">
                    <p class="name">juliusomo</p>
                    <p class="adminName">you</p>
                    <p id="duration">${this.getCurrentTime(new Date())}</p>
                                    </div>
                                    <div class="comment-top-right">
                                        <div class="delete">
                                            <img src="${deleteIcon}"  alt="">
                                            <p class="delete">Delete</p>
                                        </div>
                                        <div class="edit">
                                        <img src="${editIcon}" alt="" class="replyIcon">
                                        <p class="edit">Edit</p>
                                        </div>
                                    </div>
                                    </div>
                                    <div class="bottom">
                                        <p class="description">
                                        ${data}
                                        </p>
                                    </div>
                                    
                                </div>
            </div>`
}


}
export default new AdminComment()