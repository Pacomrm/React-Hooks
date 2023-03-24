import {useEffect, useState} from 'react';
import Picture from "./Picture";
import {getPictures} from "../../services/pictures";
import './index.css';

export default function Gallery(){
    const [pics, setPics] = useState();
    // console.log("Dentro de Gallery ");

    useEffect(() =>{
        let mounted = true;
        getPictures()
            .then(items => {
                // console.log("Dentro de items "+items);
                if(mounted){
                    setPics(items);
                }
            })
        return () => mounted = false;
        }
    ,[])

    return (
        <div className="gallery-container">
            <div className="gallery-header"><h1>Gallery header</h1></div>
            <div className="gallery-pictures">
                <Picture pictures={pics}/>
                <img src="https://unsplash.com/photos/nJdwUHmaY8A" alt="Aleks Dorohovich"/>
            </div>
        </div>
    )
}
