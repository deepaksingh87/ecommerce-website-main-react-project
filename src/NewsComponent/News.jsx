import React, { useEffect, useState } from 'react'
import Loading from './Loading';
import Newed from './Newed';
export default function News() {
    let [loading,setLoading]=useState(true);
    let [dated,setData]=useState([]);

    const fetchNews=async ()=>{
        
        const response=await fetch(`https://newsapi.org/v2/top-headlines?country=in&apiKey=f28250bc73c747928379100b3e1af325`);
        const data=await response.json();
        console.log(data)
        setData(data)
        setLoading(false)
        }
    useEffect(()=>{
        fetchNews();
         },[])
    if(loading == true ){
        return <Loading/>
    }
    return (
        <div className="space-from-top">
           <Newed data={dated}/>
       </div>
    )
}
