import React, { useRef, useState, useEffect } from 'react'
import { FaHeart,FaComment, FaShare } from 'react-icons/fa'; 
 const VideoContent = (props) => {
    const videoId = props.videoId;
    const videolink = props.videolink;
    const isAutoPlay = props.isAutoPlay;    
    const commentSection = props.commentSection;    
    const titlevideo = props.titlevideo; 
    const setShowCommentSection = props.setShowCommentSection;    
    const [videoLiked,setVideoLiked] = useState(false); 
    const [bgColor, setBgColor] = useState('bg-slate-200');
    const [heartColor, setHeartColor] = useState('text-black');
    const [numberofLike, setNumberOfLike] = useState(0); 
    const videoRef = useRef(null);   
    var numberOfLike = 0;
    var numberOfComment = 0;
    var numberOfShare = 0;
     if(videoId===1){
        numberOfLike = 13;
        numberOfComment = 2;
        numberOfShare = 5;
    } 
    if(videoId===2){
        numberOfLike = 9;
        numberOfComment = 2;
        numberOfShare = 1;
    } 
    if(videoId===3){
        numberOfLike = 26;
        numberOfComment = 2;
        numberOfShare = 2;
    } 

    useEffect( () => {
        
        if(videoLiked)
        {
            setBgColor('bg-rose-500');
            setHeartColor('text-white');
            setNumberOfLike(numberOfLike+1);
        }        
        else
        {
            setBgColor('bg-slate-200');
            setHeartColor('text-black');
            setNumberOfLike(numberOfLike-1);
        }
    }, [videoLiked]) 
        
            
        
    
    const likeButtonCLick = () =>{
        setVideoLiked(!videoLiked);
        
    }
    
    if(videoRef.current)
    {        
        if(isAutoPlay){
            videoRef.current.play();
        } else if(!isAutoPlay) {            
            videoRef.current.pause();
            videoRef.current.currentTime = 0;
        }      
    }   
    
    
    
    return(
        <div className = "flex flex-col">
<       div className="flex flex-row mb-5">
            <video 
            id = {videoId}            
            ref = {videoRef}
            controls
            className="w-[250px] h-[420px] ml-[60px] rounded-2xl mt-1 border-2 border-slate-700 bg-black" 
            src={videolink} 
            autoPlay
            loop  
            >                
            </video>
            <div className="flex flex-col justify-end ml-7">
                <div className="flex flex-col items-center mb-3">
                    <button onClick ={likeButtonCLick}>                        
                        <div className={`w-[40px] h-[40px] rounded-full ${bgColor} flex items-center justify-center`}>
                            <FaHeart className={`text-xl ${heartColor}`}/>
                        </div>
                    </button>                    
                    <span className="text-gray-100">{videoLiked && numberofLike} {!videoLiked && numberOfLike}</span>
                </div> 
                <div className="flex flex-col items-center mb-3">
                    <button>
                        <div className="w-[40px] h-[40px] rounded-full bg-slate-200 flex items-center justify-center" onClick={()=>{setShowCommentSection(!commentSection)}}>
                            <FaComment className="text-xl"/>
                        </div>
                    </button>                    
                    <span className="text-gray-100">{numberOfComment}</span>
                </div>   
                <div className="flex flex-col items-center">
                    <div className="w-[40px] h-[40px] rounded-full bg-slate-200 flex items-center justify-center">
                        <FaShare className="text-xl"/>
                    </div>
                    <span className="text-gray-100">{numberOfShare}</span>
                    </div>             
            </div> 
               
        </div>
        <div className="ml-[60px] w-[250px] text-white font-bold">{titlevideo}</div>  
        </div>
        
        
    )
}

export default VideoContent;