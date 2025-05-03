import View from "./view";
import iconPlus from 'url:../images/icon-plus.svg';
import iconMinus from 'url:../images/icon-minus.svg'; 
import iconReply from 'url:../images/icon-reply.svg';
import amyrobson from 'url:../images/avatars/image-amyrobson.png';
import maxblagun from 'url:../images/avatars/image-maxblagun.png';
import juliusomo from 'url:../images/avatars/image-juliusomo.png';
import ramesesmiron from 'url:../images/avatars/image-ramsesmiron.png';
import deleteIcon from 'url:../images/icon-delete.svg';
import editIcon from 'url:../images/icon-edit.svg'
class CommentView extends View{
    generateMarkup(data){
        let imgArray=[amyrobson,maxblagun,juliusomo,ramesesmiron];
        let imgAddress=data.user.image.webp.split('/');
        imgAddress=imgAddress[imgAddress.length-1].split('.');
        imgAddress=imgAddress[0].split('-')[1];
        imgArray.forEach((arr)=>{
            if(arr.includes(imgAddress)){
                imgAddress=arr;
            }
        })
        return `<div class="comment">
            <div class="left">
<a href="#" class="response"><img class="plus" src="${iconPlus}" alt=""></a>
<p class="score">${data.score}</p>
<a href="#" class="response"><img class="minus" src="${iconMinus}" alt=""></a>
            </div>
            <div class="right">
                <div class="top">
                <div class="comment-top-left">
<img src="${imgAddress}" alt="" class="avatar">
<p class="name">${data.user.username}</p>
<p id="duration">${data.createdAt}</p>
                </div>
                <div class="comment-top-right">
                    <img src="${iconReply}" alt="" class="replyIcon">
                    <p class="reply mainReply">Reply</p>
                </div>
                </div>
                <div class="bottom">
                    <p class="description">
                      ${data.content}
                    </p>
                    <input type="text" class="text-input hide">
                    <a href="" class="updataBtn Btn hide">Update</a>
                  
                </div>
            </div>
        </div> 
        `
    }
    isRepliesPresent(data,user){
        console.log(data.user.username);
        console.log(user);
        let imgArray=[amyrobson,maxblagun,juliusomo,ramesesmiron];
        let imgAddress=data.user.image.webp.split('/');
        imgAddress=imgAddress[imgAddress.length-1].split('.');
        imgAddress=imgAddress[0].split('-')[1];
        imgArray.forEach((arr)=>{
            if(arr.includes(imgAddress)){
                imgAddress=arr;
            }
        })
        if(data.user.username!=user){
                    return `<div class="reply-comment">
                <div class="left">
                    <a href="#" class="response"><img class="plus" src="${iconPlus}" alt=""></a>
                    <p class="score">${data.score}</p>
                    <a href="#" class="response"><img class="minus" src="${iconMinus}" alt=""></a>
                                </div>
                                <div class="right">
                                    <div class="top">
                                    <div class="comment-top-left">
                    <img src="${imgAddress}" alt="" class="avatar">
                    <p class="name">${data.user.username}</p>
                    <p id="duration">${data.createdAt}</p>
                                    </div>
                                    <div class="comment-top-right">
                                        <img src="${iconReply}" alt="" class="replyIcon">
                                        <p class="reply secondaryReply">Reply</p>
                                    </div>
                                    </div>
                                    <div class="bottom">
                                        <p class="description">
                                       <span class='replyingTo'> @${data.replyingTo}</span>  ${data.content}
                                        </p>
                                    </div>
                                </div>
            </div> `
        }
        else{
            return `<div class="reply-comment admin">
            <div class="left">
                <a href="#" class="response"><img class='plus' src="${iconPlus}" alt=""></a>
                <p class="score">${data.score}</p>
                <a href="#" class="response"><img class='minus' src="${iconMinus}" alt=""></a>
                            </div>
                            <div class="right">
                                <div class="top">
                                <div class="comment-top-left">
                <img src="${imgAddress}" alt="" class="avatar">
                <p class="name">${data.user.username}</p>
                <p class="adminName">you</p>
                <p id="duration">${data.createdAt}</p>
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
                                    <span class='replyingTo'> @${data.replyingTo}</span> ${data.content}
                                    </p>
                                </div>
                                
                            </div>
        </div>`
        }
                
                }
         
        }

    


export default new CommentView();