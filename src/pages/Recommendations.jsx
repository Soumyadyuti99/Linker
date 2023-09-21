import React from "react";

export default function Recommendations() {
    const [websites, setWebsites] = React.useState({});

    React.useEffect(()=>{
        async function fetchWebsites() {
            try {
                let data = await fetch('http://localhost:3001/user/recommendations');
                let resp = await data.json();
                setWebsites(resp);                
                
            } catch (error) {
                console.error(error);                
            }
            
        }
        fetchWebsites();        
    },[])

    const domains = (Object.keys(websites).length > 0) && websites.websites.map((website, index)=>    
    <a key = {index} className = 'websites' href={website} target="_blank">    
        <img height = '30px' width='30px' src={`https://www.google.com/s2/favicons?domain=${website}`} alt={website} />
    </a>

 )
    return (
        <div>{(Object.keys(websites).length > 0) && <div className="webElm">{domains}</div>}</div>
    )
    
}