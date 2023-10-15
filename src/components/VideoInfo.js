import React, {useState, useEffect} from 'react'
import { FaMusic } from 'react-icons/fa'; 
 const VideoInfo = (props) => {  
    const avatarlink = props.avatarlink;        
    const [channelFollowed,setChannelFollowed] = useState(false); 
    const [followText,setFollowText] = useState("Follow"); 
    const [followTextColor,setFollowTextColor] = useState("text-white");
    const [followBgColor,setFollowBgColor] = useState("bg-rose-500");
    const [followBorderColor,setFollowBorderColor] = useState("border-red-500");

    const followButtonClicked = () =>{       
        setChannelFollowed(!channelFollowed);       
    }
   
    useEffect(() => {
        if(channelFollowed){
            setFollowText("Following");
            setFollowBgColor("")
            setFollowTextColor("text-white")
            setFollowBorderColor("border-gray-500")
        }
        else{
            setFollowText("Follow");
            setFollowBgColor("bg-rose-500")
            setFollowTextColor("text-white")
            setFollowBorderColor("border-rose-500")
        }        
    },[channelFollowed])
    return(
        <div className="flex flex-row max-w-md">
            <img className="w-[50px] max-h-[70px] rounded-full" src ={avatarlink} alt="avt" />
            <div className="ml-3 mr-10">
                <div>
                    <a href="#" className="text-xl font-bold hover:underline text-cyan-400 font-sans"> Bé Đạt</a>
                    <a href="#" className="text-l text-sky-500"> @ledattien </a>
                </div>
                <div className="max-w-[170px] text-white">
                    A newly made channel 
                </div>
                <div className = "flex flex-row items-center">
                    <FaMusic/> <span className="ml-4 text-gray-400 font-sans hover:underline"> The song is playing</span>
                </div>
            </div>
            <div>
                <button onClick={followButtonClicked} className={`pl-3 pr-3 pt-1 pb-1 border-2 ${followBorderColor} ${followTextColor} ${followBgColor} rounded-md`}> 
                    {followText}
                </button> 
            </div>
        </div>
        
    )
}

export default VideoInfo;