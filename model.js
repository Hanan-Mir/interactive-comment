export let data={

}
export let getdata=async function(){
    let response=await import('./data.json');
return response;
}
getdata();