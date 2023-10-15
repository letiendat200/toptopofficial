import React from "react";
const Commenting = (props) => {
    const comments = props.comments;
    const commentavatar = props.commentavatar;
  return (    
<section className="bg-stone-200 dark:bg-stone-200 py-8 lg:py-16 antialiased ">
    <div className="max-w-2xl mx-auto px-4 ">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg lg:text-2xl font-bold text-black dark:text-black">Bình luận (2)</h2>
    </div>
    <div className="mb-6">
        <div className="py-2 px-4 mb-4 bg-stone-200 rounded-lg rounded-t-lg border border-gray-700 dark:bg-stone-200 dark:border-gray-700">
            <label htmlFor="comment" className="sr-only">Your comment</label>
            <textarea id="comment" rows="2"
                className="px-0 w-full text-sm text-slate-950  border-0 focus:ring-0 focus:outline-none bg-stone-200 placeholder-gray-400 dark:text-slate-950 dark:placeholder-gray-400 dark:bg-stone-200"
                placeholder="Nhập bình luận của bạn" required></textarea>
        </div>
        <button 
            className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-primary-900 dark:focus:ring-primary-900 hover:bg-primary-800">
            Đăng bình luận
        </button>
    </div>
    <article className="p-6 text-base bg-stone-200 rounded-lg dark:bg-stone-200">
        <footer className="flex justify-between items-center mb-2">
            <div className="flex items-center">
                <p className="inline-flex items-center mr-3 text-sm text-slate-950 dark:text-slate-950 font-semibold"><img
                        className="mr-2 w-6 h-6 rounded-full"
                        src={commentavatar[0]}
                        alt="Michael Gough"/>{commentavatar[2]}</p>
                <p className="text-sm text-black-600 dark:text-black-600">04-10-2023</p>
            </div>            
        </footer>
        <p className="text-black-900 dark:text-black-900">{comments[0]}</p>
        <div className="flex items-center mt-4 space-x-4">
            <button type="button"
                className="flex items-center text-sm hover:underline text-black-600 dark:text-black-600 font-medium">
                <svg className="mr-1.5 w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 18">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 5h5M5 8h2m6-3h2m-5 3h6m2-7H2a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h3v5l5-5h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1Z"/>
                </svg>
                Phản hồi
            </button>
        </div>
    </article>
    
    <article className="p-6 mb-3 text-base bg-stone-200 border-t  dark:bg-stone-200">
        <footer className="flex justify-between items-center mb-2">
            <div className="flex items-center">
                <p className="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-slate-950 font-semibold"><img
                        className="mr-2 w-6 h-6 rounded-full"
                        src={commentavatar[1]}
                        alt="Bonnie Green"/>{commentavatar[3]}</p>
                <p className="text-sm text-black-600 dark:text-black-600">10-10-2023</p>
            </div>
            
        </footer>
        <p className=" text-black-900 dark:text-black-900">{comments[1]}</p>
        <div className="flex items-center mt-4 space-x-4">
            <button type="button"
                className="flex items-center text-sm hover:underline text-black-600 dark:text-black-600 font-medium">
                <svg className="mr-1.5 w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 18">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 5h5M5 8h2m6-3h2m-5 3h6m2-7H2a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h3v5l5-5h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1Z"/>
                </svg>
                Phản hồi
            </button>
        </div>
    </article>    
    <br/>    
  </div>
</section>    
  )
}

export default Commenting;