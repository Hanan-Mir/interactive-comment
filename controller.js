import * as model from './model.js';
import commentView from './Views/commentView.js';
import upVoteAndDownVoteView from './Views/upVoteAndDownVoteView.js';
import replyCommentView from './Views/replyCommentView.js';
let commentData=async function(){
    let response=await model.getdata();
    const data=response;
    console.log(data);
   
    data.comments.forEach((commentData)=>{
        commentView._render(commentData);
            
                commentView._renderReply(commentData.replies);
        
        
    })
}

const init=function(){
    commentData();
    upVoteAndDownVoteView.addHandlerUpVote();
    replyCommentView.addHandlerReply();
}
init();