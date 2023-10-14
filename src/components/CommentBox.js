import React from 'react';
import Commenting from './Commenting';

const CommentBox = (props) => {
  const commentSection = props.commentSection;
  const setShowCommentSection = props.setShowCommentSection;
  const comments = props.comments;
  const commentavatar = props.commentavatar;
  return (
    <div className=" flex flex-col items-center h-screen">
      <div className="absolute top-5 right-10">
            <div>
             <button onClick={()=>{setShowCommentSection(!commentSection)}}>
             <svg className="w-7 h-7 text-black-800 dark:text-black" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m13 7-6 6m0-6 6 6m6-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
            </svg>
             </button> 
            </div>
         </div>
      <div className=" absolute inset-x-4/5 bottom-16 h-5/6 overflow-auto rounded-3xl">        
        
           <div>          
            <Commenting comments={comments} commentavatar={commentavatar}/>
            </div>
        </div>  
    </div>
   
  );
};

export default CommentBox;