import React from 'react'
import './App.css'
import jsonData from'./jsonData.json'
import { useDispatch } from 'react-redux'
import { inc } from './redux/reducer'
import { dec } from './redux/reducer'
const product=()=>{
  const dis=useDispatch();
  return (
    <div>
      {jsonData.products.map(data=>{
        return(
        <div key={data.id}>
            <div className='satya'>
                <img src={data.src} style={{width:"400px", height:"400px"}} alt='not found'></img> &nbsp;
                <p>name:{data.name}|price:{data.price}</p>
                <button className='sss' onClick={()=>{dis(inc({dataName:data.name,dataPrice:data.price}))}}>Add</button> &nbsp;
                <button className='sss' onClick={()=>dis(dec({dataName:data.name,dataPrice:data.price}))}>Remove</button>
            </div>
        </div>
        )
      })}
    </div>
  )
}
export default product