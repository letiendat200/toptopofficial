import React, {useState,useEffect} from 'react'
import VideoInfo from './VideoInfo';
import VideoContent from './VideoContent';
import CommentBox from './CommentBox';
 const Video = (props) => {
    const [commentSection,setShowCommentSection] = useState(false); 
    
    const videoId = props.videoId;
    const videolink = props.videolink;
    const isAutoPlay = props.isAutoPlay; 
    const commentavatar = props.commentavatar;
    const titlevideo = props.titlevideo;  
    const comments = props.comments;
    return(
        <div>             
                <div className={commentSection && 'blur-md '}>    
                    <div className='snap-start min-w-fit min-h-screen border-b-2 border-gray-200 pb-10 pt-5'>
                        <VideoInfo  videoId = {videoId} />
                        <VideoContent 
                        commentSection={commentSection} 
                        setShowCommentSection={setShowCommentSection} 
                        videoId = {videoId} 
                        videolink = {videolink} 
                        isAutoPlay = {isAutoPlay}
                        titlevideo ={titlevideo}                         
                        />
                    </div>                    
                </div>  
              
            <div className={commentSection && 'pointer-events-auto'}>
                {commentSection && (<CommentBox commentSection={commentSection} setShowCommentSection={setShowCommentSection} commentavatar={commentavatar} comments = {comments}/>)}   
            </div>                   
        </div>
    )
}

export default Video;