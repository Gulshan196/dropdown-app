import React, { useEffect, useState } from 'react'

const subjects = [
    'science','commerce','arts'
];

  const science = ['maths','physics','chemistry'];
 const commerce = ['accounts','bussiness','maths'];
const arts = ['humanities','english','political science'];
const DropMenu = () => {
    const [sub,setSub] = useState(null);
    const [show ,setShow] = useState(false);
    const [num,setNum] = useState([]);

    // console.log(sub

    useEffect(()=>{

    },[num])

    function handleClick() {
        setShow((show)=>!show)
    }

  return (
    <div>
       <div className="dropdown" > <button onClick={handleClick}>subjects</button>

  {subjects && subjects.map((el)=>{
   return( <div className={!show ? "dropdown-content":""} key = {el} value={el} onClick ={(e)=>setSub(el)}>{el}</div>)
  })}

  
</div>

<div className='subs-info'>

  {sub && sub === 'science' && science.map((el)=>{
    return( <div className = "" key = {el} value={el} onClick = {()=>setNum([20,40,30])}>{el}</div>)
  })}

{sub && sub === 'commerce' && commerce.map((el)=>{
    return( <div className = "" key = {el} value={el} onClick = {()=>setNum([60,40,10])} >{el}</div>)
  })}

{sub && sub === 'arts' && arts.map((el)=>{
    return( <div className = "" key = {el} value={el} onClick = {()=>setNum([10,90,50])} >{el}</div>)
  })}


</div>

<div className='num-info'>
{num  && num.map((el)=>{
    return( <div className = "" key = {el} value={el}  >{el}</div>)
  })}
  
    </div> 




    </div>
  )
}

export default DropMenu
