import upVoteAndDownVoteView from "./upVoteAndDownVoteView";
import View from "./view";
import juliusomo from 'url:../images/avatars/image-juliusomo.png';
import iconPlus from 'url:../images/icon-plus.svg';
import iconMinus from 'url:../images/icon-minus.svg'; 
import deleteIcon from 'url:../images/icon-delete.svg';
import editIcon from 'url:../images/icon-edit.svg'
class ReplyCommentView extends View{
addHandlerReply(){
    let mainCommentSection;
    let replyCommentSection;
    let replyTo;
    let replyBtn;
    upVoteAndDownVoteView._container.addEventListener('click',(e)=>{
        e.preventDefault();
        if(e.target.classList.contains('disabled')){
            return;
        }
       
if(e.target.classList.contains('mainReply')){
    mainCommentSection=e.target.closest('.comment');
    replyTo=mainCommentSection.querySelector('.name').textContent;
    // console.log(replyTo.textContent);
    let html=this.generateMainCommentReplyMarkup();
    mainCommentSection.insertAdjacentHTML('afterend',html);
    replyBtn=e.target;
    e.target.classList.add('disabled');
   
   
}
if(e.target.classList.contains('secondaryReply')){
    replyCommentSection=e.target.closest('.reply-comment');
    replyTo=replyCommentSection.querySelector('.name').textContent;
    let html=this.generateReplyMarkup();
     replyCommentSection.insertAdjacentHTML('afterend',html);
     replyBtn=e.target;
     console.log(replyBtn);
     e.target.classList.add('disabled');
}
if(e.target.classList.contains('sendBtn')){
 let userInputFeild=document.querySelector('#userInputComment');
 let userReplyText=userInputFeild.value;
 let userInputContainer=e.target.closest('.reply-textinput')
replyBtn.classList.remove('disabled');
 if(!userReplyText){
     alert("Please enter your reply");
 }
 if(userReplyText && !userInputContainer.classList.contains('reply')){
     let markup=this.generateReply(userReplyText,replyTo);
     mainCommentSection.insertAdjacentHTML('afterend',markup);
     userInputContainer.remove();
 }
 if(userReplyText && userInputContainer.classList.contains('reply')){
    let markup=this.generateReply(userReplyText,replyTo);
     replyCommentSection.insertAdjacentHTML('afterend',markup);
     userInputContainer.remove();
 }
 }

    })
    
}
generateMainCommentReplyMarkup(){
    return `<div class="reply-textinput">
            <img src="${juliusomo}" alt="" class="avatar">
            <textarea name="" id="userInputComment" placeholder="Add your comments here....."></textarea>
            <a class="sendBtn Btn">Send</a>
        </div>`
}
generateReplyMarkup(){
    return `<div class="reply-textinput reply">
            <img src="${juliusomo}" alt="" class="avatar">
            <textarea name="" id="userInputComment" placeholder="Add your comments here....."></textarea>
            <a href="" class="sendBtn Btn">Send</a>`
      
}
generateReply(usertext,to){
  return `
  <div class="reply-comment admin">
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
                                        <img src="${deleteIcon}" alt="">
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
                                   <span class='replyingTo'> @${to}</span>  ${usertext}
                                    </p>
                                    
                                </div>
                            </div>
        </div>
  
  `
}
}
export default new ReplyCommentView();