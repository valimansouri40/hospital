const finder=(data,id)=>{
    let dt
    if(data){
        dt= data.filter(e=> e._id === id);
      
      
    }
    return dt;
}
export default finder;