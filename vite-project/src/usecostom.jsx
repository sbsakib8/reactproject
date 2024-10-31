import React, { useEffect, useState } from 'react'

function usecostom() {
const [count , setcount] = useState(null);

useEffect((src)=>{
    fetch(src).then((jcn)=>jcn.json()).then((data)=>setcount(data));
},[])
 
  return count;
}

export default usecostom