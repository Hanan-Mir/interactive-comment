import * as model from './model.js';
import commentView from './Views/commentView.js';
import upVoteAndDownVoteView from './Views/upVoteAndDownVoteView.js';
import replyCommentView from './Views/replyCommentView.js';
import deleteAdminCommentView from './Views/deleteAdminCommentView.js';
import editCommentView from './Views/editCommentView.js';
let commentData=async function(){
    let response=await model.getdata();
    const data=response;
    console.log(data);
    let currentUser=data.currentUser.username;
    console.log(currentUser);
   
    data.comments.forEach((commentData)=>{
        commentView._render(commentData);
                commentView._renderReply(commentData.replies,currentUser);

        
        
    })
}

const init=function(){
    commentData();
    upVoteAndDownVoteView.addHandlerUpVote();
    replyCommentView.addHandlerReply();
    deleteAdminCommentView.addHandlerDeleteComment();
    replyCommentView.generateReply();
    editCommentView.addHandlerEditComment();
}
init();