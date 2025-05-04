import View from "./view";
import upVoteAndDownVoteView from "./upVoteAndDownVoteView";
class EditComment extends View{
addHandlerEditComment(){
    let adminDescription;
    upVoteAndDownVoteView._container.addEventListener('click',(e)=>{  
        if(e.target.classList.contains('disabled')) return;
if(e.target.classList.contains('edit')){
    adminDescription=e.target.closest('.admin');
    const descriptionEl=adminDescription.querySelector('.description');
    const description=descriptionEl.textContent;
    descriptionEl.remove();
    const container=adminDescription.querySelector('.bottom');
    const html= `<p class="description">
                                    <textarea id="edit-area">${description.trim()}</textarea>
                                    </p>
                                    <a href="" class="updateBtn Btn">Update</a>`
    container.insertAdjacentHTML('beforeend',html);
    e.target.classList.add('disabled');

}
if(e.target.classList.contains('updateBtn')){
    let html;
    const wholeContainer=e.target.closest('.admin');
    const editBtn=wholeContainer.querySelector('.disabled');
    const commentContainer=wholeContainer.querySelector('.bottom');
    const textEntered=wholeContainer.querySelector('#edit-area').value;
    const wholeDescriptionEl=wholeContainer.querySelector('.description');
    const updateBtn=wholeContainer.querySelector('.updateBtn');
    editBtn.classList.remove('disabled');
    if(wholeContainer.classList.contains('adminCommentContainer')){
        html=`<p class="description">
                                    ${textEntered.trim()}
                                    </p>`
    }
    else{
    const index=textEntered.indexOf(' ')
    html=`<p class="description">
                                    <span class='replyingTo'>${textEntered.split(' ')[0]}</span> ${textEntered.trim().slice(index+1)}
                                    </p>`
    }
    updateBtn.remove();
    wholeDescriptionEl.remove();
    commentContainer.insertAdjacentHTML('afterbegin',html);
}

    })
}

}
export default new EditComment();