import React, { useRef, useState } from 'react'
import VIDEO from './video.mp4';
const RefExample = () => {
    const [play, setPlay] = useState(true);


    const tagRef = useRef();
    const videoRef = useRef();


    const playOrPause = () =>{
        if (play === true){
            videoRef.current.play()
            console.log(play)
            setPlay(false);
        }else{
            videoRef.current.pause()
            console.log(play)
            setPlay(true);
        }
    }


    return (
        <div>
            <div ref={tagRef}>RefExample</div>
            <video src= {VIDEO} ref={videoRef} onClick={playOrPause}></video>
        </div>
    )
}

export default RefExample;