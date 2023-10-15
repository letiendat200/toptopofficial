import React, { useState,useEffect } from 'react';
import Video from './Video';

function Homepage() {
  
  const videolinks=['https://scontent.fsgn8-3.fna.fbcdn.net/v/t42.3356-2/388918228_6738931982864934_8927380627222372072_n.mp4?_nc_cat=110&ccb=1-7&_nc_sid=4f86bc&_nc_ohc=A8A5bjyeW8UAX-ZCvGf&_nc_ht=scontent.fsgn8-3.fna&oh=03_AdQ4ITGbZbnVf7sB0Uehw4S7xiBK5tt3Z_qE29fArmsREQ&oe=652D377A&dl=1',
                    "https://scontent.xx.fbcdn.net/v/t42.3356-2/388867001_7018014578262731_1232850766919379535_n.mp4?_nc_cat=111&ccb=1-7&_nc_sid=4f86bc&_nc_ohc=zvGY-t7XmRQAX9yjlyK&_nc_ht=scontent.xx&oh=03_AdStESppVKGp4znIKuVwMg6PccVij3kQpyXWGzPI0oAwVQ&oe=652D607E&dl=1",
                    "https://scontent.xx.fbcdn.net/v/t42.3356-2/388866528_6870893116308950_6012612208046436888_n.mp4?_nc_cat=108&ccb=1-7&_nc_sid=4f86bc&_nc_ohc=9t1KPWu7Z30AX9E0ZB_&_nc_ht=scontent.xx&oh=03_AdQNZ1NaXmpjqhEH78hlsa3v8bR3sslaMphAbfpDrZhKmg&oe=652CFA3D&dl=1"];
  const avatarlinks = ["https://scontent.fsgn8-3.fna.fbcdn.net/v/t1.15752-9/387536664_862210075111562_1067181418563230859_n.png?_nc_cat=100&ccb=1-7&_nc_sid=ae9488&_nc_ohc=xOf_IcUH8poAX8PxrkO&_nc_ht=scontent.fsgn8-3.fna&oh=03_AdQM3i2oE_xLkLt13z60Mv2Uw4zmpWYxjsH3kXugQMzZVA&oe=654B641C",
                       "https://scontent.xx.fbcdn.net/v/t1.15752-9/387519608_1360716198180057_496216724560014772_n.jpg?stp=dst-jpg_s403x403&_nc_cat=100&ccb=1-7&_nc_sid=510075&_nc_ohc=Pbpe8xrcQHYAX-ZhKb0&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdQIfQU4Rl-sPuQwf6qYtNj1zW_w71NqzvYlwpmeYtwsYQ&oe=655322EC",
                       "https://scontent.xx.fbcdn.net/v/t1.15752-9/387611896_1198546614867970_3199675056036608159_n.jpg?stp=dst-jpg_s403x403&_nc_cat=104&ccb=1-7&_nc_sid=510075&_nc_ohc=POss99S07b4AX8Y2XYv&_nc_oc=AQnE-rgltMsWrbsIlaQxxEWofLdVabvdRKCAke4EvUky4BZAkqsveKG8a9s882qYsNwOGFC4fAILuVB-vjc1Bzny&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdTU5vZc2CeG0PaQDCR9_WC3FeBEPdNo8uHe8BstlyYLLw&oe=65530CC8"];
  const comments1 = ["Hehe mà em chưa bình luận được đâu, để cho dui thôi","Mấy con panda quậy phá"];
  const comments2 = ["Giống con Nâu hem, ngủ thả ga chả biết trời đất","Sorry anh bận bịu quá nên làm web này trễ"];
  const comments3 = ["Video cuối òi","Không biết em thoải mái để gặp anh chưa?"];

  const commentavatar1 = ["https://i.pinimg.com/474x/4a/4e/2b/4a4e2bb5dc8078b76c2a160deeb92882.jpg","https://pbs.twimg.com/media/E-BygnfVUAYXY98.jpg","Chó Ngáo O","Mồn Lèo"];
  const commentavatar2 = ["https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/197911142/original/043a07c41cad114ab97c5cf4722d50aa66baee3a/make-a-cute-avatar-for-you.jpeg","https://nhadepso.com/wp-content/uploads/2023/03/cap-nhat-99-hinh-anh-avatar-gau-cute-de-thuong-ngo-nghinh_1.jpg","Heo cưng nè", "Heo dận dữ"];
  const commentavatar3 = ["https://i.pinimg.com/1200x/fb/42/30/fb42303f0554c463ed89ed9dc34c624e.jpg","https://i.pinimg.com/1200x/19/93/e9/1993e98af9ccc87967b2df07150f1246.jpg", "Boi ngusi", "Béeee"];

  const titlevideo1 ="2 con panda chơi với nhau nè, em nhớ coi bình luận nhaaa ";
  const titlevideo2= "Con chó nằm ường ra ghế chổng bụng ngủ zzzzz, xem bình luận nhaaa ";
  const titlevideo3= "Lần đầu edit video, trong bình luận có gì á ";
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
      avatarlink = {avatarlinks[0]}
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
      avatarlink = {avatarlinks[1]}
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
      avatarlink = {avatarlinks[2]}
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