import * as model from './model.js';
import commentView from './Views/commentView.js';
import upVoteAndDownVoteView from './Views/upVoteAndDownVoteView.js';
import replyCommentView from './Views/replyCommentView.js';
import deleteAdminCommentView from './Views/deleteAdminCommentView.js';
import editCommentView from './Views/editCommentView.js';
import adminCommentView from './Views/adminCommentView.js';
//function to sort on the basis of time;
const timeStamp={
second:1,
seconds:1,
week:604800,
weeks:604800
}
function secondAgo(time){
    const match = time.match(/(\d+)\s(\w+)/);
    console.log(match);
  if (!match) return Infinity;

  const value = parseInt(match[1]);
  const unit = match[2].toLowerCase();
  const seconds = timeStamp[unit] || 0;

  return value * seconds;
}
let commentData=async function(){
    let response=await model.getdata();
    const data=response;
    let currentUser=data.currentUser.username;
const sortedComments=data.comments.sort((a,b)=>a.score-b.score);
sortedComments.forEach((comment)=>{
    commentView._render(comment);
    console.log(comment.replies)
    if(comment.replies){
   let sortedReplies= comment.replies.sort((a,b)=>secondAgo(a.createdAt)-secondAgo(b.createdAt));
    console.log(sortedReplies);
    }
     commentView._renderReply(comment.replies,currentUser);
})
   
}

const init=function(){
    commentData();
    upVoteAndDownVoteView.addHandlerUpVote();
    replyCommentView.addHandlerReply();
    deleteAdminCommentView.addHandlerDeleteComment();
    replyCommentView.generateReply();
    editCommentView.addHandlerEditComment();
    adminCommentView.addHandlerAdminComment();
}
init();