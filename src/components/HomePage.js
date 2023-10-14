import React, { useState,useEffect } from 'react';
import Video from './Video';

function Homepage() {
  
  const videolinks=['https://v3.cdnpk.net/videvo_files/video/premium/partners0056/large_watermarked/BB_c24a8e83-7be2-45d2-83bf-916950d6aa48_preview.mp4',
                    "https://v3.cdnpk.net/videvo_files/video/premium/partners0056/large_watermarked/BB_c24a8e83-7be2-45d2-83bf-916950d6aa48_preview.mp4",
                    "https://v3.cdnpk.net/videvo_files/video/premium/partners0056/large_watermarked/BB_c24a8e83-7be2-45d2-83bf-916950d6aa48_preview.mp4"];
  const avatarlinks = ["https://scontent.fsgn8-3.fna.fbcdn.net/v/t1.15752-9/387536664_862210075111562_1067181418563230859_n.png?_nc_cat=100&ccb=1-7&_nc_sid=ae9488&_nc_ohc=xOf_IcUH8poAX8PxrkO&_nc_ht=scontent.fsgn8-3.fna&oh=03_AdQM3i2oE_xLkLt13z60Mv2Uw4zmpWYxjsH3kXugQMzZVA&oe=654B641C",
                       "https://scontent.fsgn8-3.fna.fbcdn.net/v/t1.15752-9/387536664_862210075111562_1067181418563230859_n.png?_nc_cat=100&ccb=1-7&_nc_sid=ae9488&_nc_ohc=xOf_IcUH8poAX8PxrkO&_nc_ht=scontent.fsgn8-3.fna&oh=03_AdQM3i2oE_xLkLt13z60Mv2Uw4zmpWYxjsH3kXugQMzZVA&oe=654B641C",
                       "https://scontent.fsgn8-3.fna.fbcdn.net/v/t1.15752-9/387536664_862210075111562_1067181418563230859_n.png?_nc_cat=100&ccb=1-7&_nc_sid=ae9488&_nc_ohc=xOf_IcUH8poAX8PxrkO&_nc_ht=scontent.fsgn8-3.fna&oh=03_AdQM3i2oE_xLkLt13z60Mv2Uw4zmpWYxjsH3kXugQMzZVA&oe=654B641C"];
  const comments1 = ["Hehe mà em chưa bình luận được đâu, để cho dui thôi","Con panda cute hen"];
  const comments2 = ["Nhìn em cười vui ghê á","Sorry anh bận nên làm web này trễ quá"];
  const comments3 = ["Video cuối òi","Không biết em thoải mái để gặp anh chưa?"];

  const commentavatar1 = ["https://i.pinimg.com/474x/4a/4e/2b/4a4e2bb5dc8078b76c2a160deeb92882.jpg","https://pbs.twimg.com/media/E-BygnfVUAYXY98.jpg","Chó Ngáo O","Mồn Lèo"];
  const commentavatar2 = ["https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/197911142/original/043a07c41cad114ab97c5cf4722d50aa66baee3a/make-a-cute-avatar-for-you.jpeg","https://nhadepso.com/wp-content/uploads/2023/03/cap-nhat-99-hinh-anh-avatar-gau-cute-de-thuong-ngo-nghinh_1.jpg","Heo cưng nè", "Heo dận dữ"];
  const commentavatar3 = ["https://i.pinimg.com/1200x/fb/42/30/fb42303f0554c463ed89ed9dc34c624e.jpg","https://i.pinimg.com/1200x/19/93/e9/1993e98af9ccc87967b2df07150f1246.jpg", "Boi ngusi", "Béeee"];

  const titlevideo1 ="2 con panda chơi với nhau nè, em nhớ coi bình luận nhaaa ";
  const titlevideo2= "Lần đầu làm capcut, nhớ coi bình luận nhaaa ";
  const titlevideo3= "Lần 2 làm capcut cũng í ẹ @@, vào xem bình luận nhoaaaa ";
  const [activeVideo, setActiveVideo] = useState(null);

  function handleVideoVisibility(videoId, isVisible) {
    if (isVisible) {
      setActiveVideo(videoId);
    } else if (activeVideo === videoId) {
      setActiveVideo(null);
    }
  }

 

  return (
    <div  className='flex flex-col items-center snap-y snap-mandatory overflow-scroll h-[calc(100vh-74px)] overflow-x-hidden bg-gradient-to-b from-slate-700 to-slate-900'>
      <div
      key='1'
      ref={(el) => {
        if (el) {
          const observer = new IntersectionObserver(
            ([entry]) => {
              handleVideoVisibility(1, entry.isIntersecting);
            },
            { threshold: 0.7 }
          );
          observer.observe(el);
        }
      }}>
      <Video 
      videoId = {1} 
      videolink={videolinks[0]} 
      isAutoPlay = {activeVideo===1}
      commentavatar = {commentavatar1}
      comments = {comments1}
      titlevideo = {titlevideo1}
      />
      </div>
      <div
      key='2'
      ref={(el) => {
        if (el) {
          const observer = new IntersectionObserver(
            ([entry]) => {
              handleVideoVisibility(2, entry.isIntersecting);
            },
            { threshold: 0.7 }
          );
          observer.observe(el);          
        }
      }}>
      <Video 
      videoId = {2} 
      videolink={videolinks[1]}
      isAutoPlay = {activeVideo===2}
      commentavatar = {commentavatar2}
      comments = {comments2}
      titlevideo = {titlevideo2}
      />
      </div>  
      <div
      key='3'
      ref={(el) => {
        if (el) {
          const observer = new IntersectionObserver(
            ([entry]) => {
              handleVideoVisibility(3, entry.isIntersecting);
            },
            { threshold: 0.7 }
          );
          observer.observe(el);          
        }
      }}>
      <Video 
      videoId = {3} 
      videolink={videolinks[2]}
      isAutoPlay = {activeVideo===3}
      commentavatar = {commentavatar3}
      comments = {comments3}
      titlevideo = {titlevideo3}
      />
      </div>    
    
    </div>
    
  );
}

export default Homepage;