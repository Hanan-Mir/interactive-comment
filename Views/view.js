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
getCurrentTime(timestamp){
    const now=new Date();
    const diff=(now-timestamp)/1000;
    const rtf = new Intl.RelativeTimeFormat('en', { numeric: 'auto' });

    if (diff < 60) return rtf.format(-Math.floor(diff), 'second');
    if (diff < 3600) return rtf.format(-Math.floor(diff / 60), 'minute');
    if (diff < 86400) return rtf.format(-Math.floor(diff / 3600), 'hour');
    if (diff < 604800) return rtf.format(-Math.floor(diff / 86400), 'day');
    if (diff < 2592000) return rtf.format(-Math.floor(diff / 604800), 'week');
}

}