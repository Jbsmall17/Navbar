import React,{useState,useEffect,useRef} from 'react'
import {links,social} from './data'
import { FaBars } from 'react-icons/fa';
import logo from  './logo.svg';

export default function Navbar() {
    const [showing,setShowing] = useState(false)
    const ulRef = useRef(null)
    const linksRef = useRef(null)
    useEffect(()=>{
        if(showing){
            let ulHeight = ulRef.current.getBoundingClientRect().height
        linksRef.current.style.height = `${ulHeight}px`
        }
        else{
            linksRef.current.style.height = "0px"
        }
    },[showing])
  return (
    <nav>
        <div className="nav-center">
            <div className="nav-header">
                <img src={logo} alt="logo" className="logo"/>
                <button onClick={()=>setShowing(!showing)} className="nav-toggle">
                    <FaBars />
                </button>
            </div>
            <div ref={linksRef} className={`${showing ?'links-container show-container' : 'links-container'}`}>
                <ul ref={ulRef} className="links">
                    {
                        links.map((link,index)=>{
                            const {url,text} = link
                            return <li key={index}>
                                <a href={url}>{text}</a>
                            </li>     
                        })
                    }
                </ul>
            </div>
            <ul className="social-icons">
                {social.map((so,index)=>{
                    const {url,icon} = so
                    return <li key={index}><a href={url}>{icon}</a></li>
                })}
            </ul>
        </div>
    </nav>
  )
}
