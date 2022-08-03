exports.deleteById=(arr,id)=>{
    return arr.filter(user=>user.id !== id);
}