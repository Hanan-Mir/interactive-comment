export default class View{
_parentEl=document.querySelector('.comment-section');
_data;
_render(data){
    this._data=data;
    const markup=this.generateMarkup(this._data);
    this._parentEl.insertAdjacentHTML('afterend',markup)
}
_renderReply(data,username){
if(this._parentEl.children){
    let commentEl=document.querySelector('.comment');
    data.forEach((dataN)=>{
        const markup=this.isRepliesPresent(dataN,username);
        commentEl.insertAdjacentHTML('afterend',markup)
    })
   
}
}

}