import React from 'react';
import '../css/Album.css'

const Album = () => {
    const albumLinks = ['https://scontent.fsgn8-4.fna.fbcdn.net/v/t1.15752-9/67235965_419433398782275_7886932760147787776_n.jpg?stp=dst-jpg_s2048x2048&_nc_cat=101&ccb=1-7&_nc_sid=8cd0a2&_nc_ohc=a2O0EpJdgUwAX-VKaEh&_nc_oc=AQm6JqTwQgfWJunbRg1_mSrH0Uk0BA7h0G4m7lqpmbvvh0peNKOqBd3U50Y84pQO_-0&_nc_ht=scontent.fsgn8-4.fna&oh=03_AdSpHsLPwBxfWh6DwvcEGGx6zHfRie1NY3iRSzPjXSOV7A&oe=65530DC8',
        'https://scontent.fsgn8-3.fna.fbcdn.net/v/t1.15752-9/363063505_293951933150980_4858983818299120728_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=8cd0a2&_nc_ohc=ccw_LRWJIVIAX8Xo6rG&_nc_oc=AQm2GFH80z-jlqVw6olk2JUNfURq-4hz9mJdSUoK9kae-MaAVJlEUEtD4CAOTiqpBao&_nc_ht=scontent.fsgn8-3.fna&oh=03_AdRDPSaxuVp3jhLLScjhYZ4SqXbqWpV7YAlxlxx7VKRLFA&oe=6553092C',
        'https://scontent.fsgn8-3.fna.fbcdn.net/v/t1.15752-9/384547462_1026021948543434_3450889140581757421_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=8cd0a2&_nc_ohc=LSZlTQm3QucAX-0qRAK&_nc_ht=scontent.fsgn8-3.fna&oh=03_AdRDXb6s19iPArCYhXinUEYPUjmcB3b3hAgDYW9enaJcmQ&oe=6552F3C2',
        'https://scontent.fsgn8-3.fna.fbcdn.net/v/t1.15752-9/384543796_845578393887431_8757523746811424371_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=8cd0a2&_nc_ohc=-s5WjXMnMH8AX_CjG-k&_nc_ht=scontent.fsgn8-3.fna&oh=03_AdSl4y4QxwJqt3r4yCsU69dG2frQu7nLpB-flNJfso_2YQ&oe=65530CD4',
        'https://scontent.fsgn8-4.fna.fbcdn.net/v/t1.15752-9/387331638_1977566212601202_7328144605108260728_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=8cd0a2&_nc_ohc=lyKXr4rxTRIAX-By30g&_nc_ht=scontent.fsgn8-4.fna&oh=03_AdSOeEyoeIvvmh0KI3cVrLcQMeXq-r44aF85tA3xbEXa_w&oe=6552E561',
        'https://scontent.fsgn8-3.fna.fbcdn.net/v/t1.15752-9/370338799_348117217610626_8563805656787372278_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=8cd0a2&_nc_ohc=YSImOclt1lsAX8qCKX0&_nc_ht=scontent.fsgn8-3.fna&oh=03_AdQpKUZpQ69ht2cL3BN-j2-jSZhQTVb1JqG14rL2mhDLPA&oe=655304AF',
        'https://scontent.fsgn8-3.fna.fbcdn.net/v/t1.15752-9/384543139_234269855995004_738092056576066004_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=8cd0a2&_nc_ohc=m1oG6reuMOwAX9ddUkr&_nc_ht=scontent.fsgn8-3.fna&oh=03_AdRaifYffjD6yazrxxevIkE_ZuGuciDXszxNNBfRQecoYg&oe=6553072F',
        'https://scontent.fsgn8-4.fna.fbcdn.net/v/t1.15752-9/387542352_297972936358037_5862338707000370777_n.png?_nc_cat=108&ccb=1-7&_nc_sid=8cd0a2&_nc_ohc=JAMWpARVRPUAX_ar4QY&_nc_ht=scontent.fsgn8-4.fna&oh=03_AdTlIVT4DJoYJe1Yv11zcF4GsCc5hRh9tOEpykEEA-fjjw&oe=6552FE37',
        'https://scontent.fsgn8-3.fna.fbcdn.net/v/t1.15752-9/387632770_851567366619327_7824666554614133048_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=8cd0a2&_nc_ohc=gcKYkyhlcHEAX8DBqR5&_nc_ht=scontent.fsgn8-3.fna&oh=03_AdS7xh03RaHjtG3qbJSzcw2tfcObWWpmt1W21ZcYUFQe4Q&oe=6552EA20',
        'https://scontent.fsgn8-3.fna.fbcdn.net/v/t1.15752-9/387535626_731817725644702_8654009709624111572_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=8cd0a2&_nc_ohc=IF-h5vhcFF0AX9e4Ee7&_nc_ht=scontent.fsgn8-3.fna&oh=03_AdQLsxqdE5pJgSY3yfVZGUzwXRjEl-Kuqp6qek6ePVYrBQ&oe=65530F4C',
        'https://scontent.fsgn8-4.fna.fbcdn.net/v/t1.15752-9/370311674_1040320583655635_4031966760749909349_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=8cd0a2&_nc_ohc=DyeLTHiBQbYAX-chF6g&_nc_oc=AQlOn-TTOWitjoe_wVDPBciZBWhGhZ01wVmc4z-oaZBWUIhdGDAOOPC8Pg2Gguk7TWw&_nc_ht=scontent.fsgn8-4.fna&oh=03_AdQm9GKKh-YFuQGCDduPccMHYKISt8DAfQt8v9VyH_O8zw&oe=6552FBF4',
        'https://scontent.fsgn8-3.fna.fbcdn.net/v/t1.15752-9/370338799_3545742319005760_4150470633956073776_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=8cd0a2&_nc_ohc=DoskE39neGcAX_47Nh_&_nc_ht=scontent.fsgn8-3.fna&oh=03_AdRAH3jJR4CWIzWuFhg9M8NbXMbn5wi9jfxqoJ93yv_K_A&oe=65530FB1',
        'https://scontent.fsgn8-4.fna.fbcdn.net/v/t1.15752-9/330957589_1712785312478809_3182732460969189392_n.png?_nc_cat=103&ccb=1-7&_nc_sid=8cd0a2&_nc_ohc=hTCYi2Rd7Z0AX-ywUFV&_nc_ht=scontent.fsgn8-4.fna&oh=03_AdREDvHxQ3pSeR8MqrbepARudS_t8lK2JLfQpc9iLbt87g&oe=655306C3',
        'https://scontent.fsgn8-3.fna.fbcdn.net/v/t1.15752-9/387542203_2062512604093352_58609970369168069_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=8cd0a2&_nc_ohc=llQDEF41PlgAX-fJ0c4&_nc_ht=scontent.fsgn8-3.fna&oh=03_AdTfGnLVQoZY3wQhNVsq4b3aF-KHbc5a6llTE1dAOY4Ysg&oe=6552E509',
        'https://scontent.fsgn8-4.fna.fbcdn.net/v/t1.15752-9/384541863_1728111461027681_3955535289804970782_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=8cd0a2&_nc_ohc=VY3VPC-W4KsAX9NAZz_&_nc_ht=scontent.fsgn8-4.fna&oh=03_AdSSVZpU5ZgcqCY-mglsLXMaQFBOE1uXVN_gyuSbiYgoUQ&oe=65530EE6',
        'https://scontent.fsgn8-4.fna.fbcdn.net/v/t1.15752-9/387489954_729416279066307_7872861131418709828_n.png?_nc_cat=111&ccb=1-7&_nc_sid=8cd0a2&_nc_ohc=i-GA9KhMdPsAX-q9tpJ&_nc_ht=scontent.fsgn8-4.fna&oh=03_AdR7DdwNZn0svEPlLqTd3qDWfhA_XY9juq02r5-8drrz7A&oe=6552F9C1',
        'https://scontent.fsgn8-4.fna.fbcdn.net/v/t1.15752-9/371461087_6980034382007658_3872827715718782789_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=8cd0a2&_nc_ohc=tDViZXVifkAAX-J4OQF&_nc_ht=scontent.fsgn8-4.fna&oh=03_AdRtMD1oK_jii013UwlefXlXzC0tEal7P2mtPUaZbOOF2w&oe=655302B2',
        'https://scontent.fsgn8-3.fna.fbcdn.net/v/t1.15752-9/387599930_283445544602193_3520267332932758451_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=8cd0a2&_nc_ohc=0qm7q6qbEJEAX99z-h6&_nc_ht=scontent.fsgn8-3.fna&oh=03_AdQP_nu0WvaLNG3l4OnV-dhdb5Wn8aTnfZRi7qks0AhIbQ&oe=6552FCC2',
        'https://scontent.fsgn8-4.fna.fbcdn.net/v/t1.15752-9/385464302_1617178468690591_2237466877604061525_n.png?_nc_cat=102&ccb=1-7&_nc_sid=8cd0a2&_nc_ohc=yyqHVF4-83QAX8fmQxo&_nc_ht=scontent.fsgn8-4.fna&oh=03_AdQFMtxE7VwilfRXaMNK4qzMnGSvEIfGUBgeiRXfXzpooQ&oe=6552E791',
        'https://scontent.fsgn8-4.fna.fbcdn.net/v/t1.15752-9/370218330_877813483959913_3997706194916944611_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=8cd0a2&_nc_ohc=cImjPzKHaxQAX9unW1x&_nc_ht=scontent.fsgn8-4.fna&oh=03_AdRqunJt30ocAOPdPb5TAbsLvv0w_5hoBVcyyuOBK_FL0A&oe=655303B6',
        'https://scontent.fsgn8-4.fna.fbcdn.net/v/t1.15752-9/385486502_1705018913653121_2784057027251285863_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=8cd0a2&_nc_ohc=6Ad6QWRtdMMAX_H3opC&_nc_ht=scontent.fsgn8-4.fna&oh=03_AdRf87fXQl7zWmrfJDzlzqLrzATvG1Wj71VGZm_iCMP0Zg&oe=6552E580',
        'https://scontent.fsgn8-3.fna.fbcdn.net/v/t1.15752-9/370115257_706909604215550_7653676158698727609_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=8cd0a2&_nc_ohc=ok1qscPO5pUAX-uOvAF&_nc_ht=scontent.fsgn8-3.fna&oh=03_AdTkazsdxgyk5wxI7NtF29HaXIqUrnndLsO6J-yFXO0pjg&oe=6552F948',
        'https://scontent.fsgn8-4.fna.fbcdn.net/v/t1.15752-9/384547591_237675389296150_2435401489060723741_n.png?_nc_cat=108&ccb=1-7&_nc_sid=8cd0a2&_nc_ohc=S950U_1U3ygAX8V83Is&_nc_ht=scontent.fsgn8-4.fna&oh=03_AdRBSqneAz2xcB4xVNSmL2ZBm9Excu_jCpVum4saeNtbCQ&oe=6552FD03',
        'https://scontent.fsgn8-3.fna.fbcdn.net/v/t1.15752-9/384541925_703874971605741_540849156924315031_n.png?_nc_cat=110&ccb=1-7&_nc_sid=8cd0a2&_nc_ohc=LvBzuo1kA4oAX9hP9-G&_nc_ht=scontent.fsgn8-3.fna&oh=03_AdRO7niVplR-2ms3IHDtlXe9yrwHdkCd2VkkU4HtkQoFxA&oe=65530B0F',
        'https://scontent.fsgn8-4.fna.fbcdn.net/v/t1.15752-9/370194181_289783673870600_8380525430836112545_n.png?_nc_cat=108&ccb=1-7&_nc_sid=8cd0a2&_nc_ohc=tziXhZds_hYAX_91FF4&_nc_ht=scontent.fsgn8-4.fna&oh=03_AdTlsX8yuILmqEFdsqbwYsZBPdIhuCr4LDswkj3shgLa7g&oe=6553170F']
    return (
        
        <div class="flex flex-col items-center object-contain overflow-scroll h-[calc(100vh-80px)] bg-gradient-to-b from-slate-700 to-slate-900 overflow-x-hidden">
        <br/>
        <div className="title-text text-7xl text-white">ALBUM</div>
        <div>
            <img class="mt-10 mb-10 object-contain rounded-lg" src={albumLinks[7]} alt=""/>
            <div className="text-2xl text-white object-contain">Tấm hình trẻ nhất mà anh tìm được của em, cô gái từ cấp 2 đã thích hóa học, thi pha chế rượu nho </div>            
        </div>
        <div>
            <img class="mt-10 mb-10 h-auto object-contain rounded-lg" src={albumLinks[20]} alt=""/>
            <div className="text-2xl text-white object-contain">Anh nhớ đây là lần đầu heo chụp hình bản thân gửi anh, anh còn nhớ đôi giày đó là lần đầu anh được shopping chung với em, shop giày trên đường Nguyễn Văn Luông gần trường </div> 
        </div>
        <div>
            <img class="mt-10 mb-10 h-auto object-contain rounded-lg" src={albumLinks[21]} alt=""/>
            <div className="text-2xl text-white object-contain">Anh biết em không thích tấm hình này nhưng mà anh thấy em mặc áo dài đẹp lắm nên anh include vô album, với em tùng nói anh là giờ tự dưng muốn làm cô giáo ko phải để dạy mà để được mặc áo dài</div>
        </div> 
        <div>
            <img class=" mt-10 mb-10 h-auto object-contain rounded-lg" src={albumLinks[9]} alt=""/>
            <div className="text-2xl text-white object-contain">Anh không nhớ đây phải lần đầu không nhưng mà hình như lần đầu em té từ lúc bắt đầu đi xe máy, thương chân em ghê</div>
        </div>
        <div>
            <img class=" mt-10 mb-10 h-auto object-contain rounded-lg" src={albumLinks[0]} alt=""/>
            <div className="text-2xl text-white object-contain">Hehehe cả lớp đi Dalas cũng là lần cuối lớp họp mặt đông thế, tiếc anh không tìm được tấm 2 đứa mình, anh nghĩ lại thì thấy anh nên để ý em nhiều hơn vì lúc đó em không được khỏe</div>
        </div>
        <div>
            <img class="mt-10 mb-10 h-auto object-contain rounded-lg" src={albumLinks[5]} alt=""/>
            <div className="text-2xl text-white object-contain">Gòi quỷ Nâu và chiêu trò cạ đít nằm lỳ ra giả điếc ko chịu ra ngoài, không biết Nâu giờ ra sao rồi</div>
        </div>
        <div>
            <img class="mt-10 mb-10 h-auto object-contain rounded-lg" src={albumLinks[15]} alt=""/>
            <div className="text-2xl text-white object-contain">Tấm hình anh ưng nhất của em nhìn em cười như tỏa nắng á, mới đó hơn 4 năm rồi nhanh quá em ha</div>
        </div>
        <div>
            <img class="mt-10 mb-10 h-auto object-contain rounded-lg" src={albumLinks[6]} alt=""/>
            <div className="text-2xl text-white object-contain">Em lúc còn học võ nè, từ ngày đó em biết cách phòng vệ bản thân, đôi khi cũng lấy anh ra thử vài đòn mà biết em phòng vệ được bản thân cũng yên tâm</div>
        </div>
        <div>
            <img class="mt-10 mb-10 h-auto object-contain rounded-lg" src={albumLinks[13]} alt=""/>
            <div className="text-2xl text-white object-contain">Em cắt tóc ngắn òi nè dần dần rồi anh lại thích em tóc ngắn hơn</div>
        </div>       
        <div>
            <img class="mt-10 mb-10 h-auto object-contain rounded-lg" src={albumLinks[12]} alt=""/>
            <div className="text-2xl text-white object-contain">Em đi chơi với mái tóc ngắn để gửi anh nè, anh xin lỗi anh cũng biết là em không thích tấm này nên có gì em kéo qua nhanh nha</div>
        </div> 
        <div>
            <img class="mt-10 mb-10 h-auto object-contain rounded-lg" src={albumLinks[14]} alt=""/>
            <div className="text-2xl text-white object-contain">Lần thứ [nhiều] em bị thương ở chân mà anh nhớ lần này nó bầm lâu ơi là lâu anh có hơi sợ á, may mà em không sao</div>
        </div> 
        <div>
            <img class="mt-10 mb-10 h-auto object-contain rounded-lg" src={albumLinks[4]} alt=""/>
            <div className="text-2xl text-white object-contain">Con cọp lần đầu được dì em nhận nuôi nè mới có chút éc à, giờ chắc thành đũy mèo mặp địt òi</div>
        </div> 
        <div>
            <img class="mt-10 mb-10 h-auto object-contain rounded-lg" src={albumLinks[10]} alt=""/>
            <div className="text-2xl text-white object-contain">Hehehe anh còn tính 2 đứa mình lắp nhiều con nữa cơ,Mà giờ thấy hơi khó, anh đi làm rồi thấy công việc bề bộn mệt cm, thời gian rảnh ko nhiều</div>
        </div> 
        <div>
            <img class="mt-10 mb-10 h-auto object-contain rounded-lg" src={albumLinks[8]} alt=""/>
            <div className="text-2xl text-white object-contain">Nên thôi có 2 đứa này được rồi anh giữ con hồng còn em giữ con xanh, à anh để nó kế máy bàn nhà anh á</div>
        </div> 
        <div>
            <img class="mt-10 mb-10 h-auto object-contain rounded-lg" src={albumLinks[11]} alt=""/>
            <div className="text-2xl text-white object-contain">Quào mới có vài tuần mà cọp nó lớn nhanh thật chưa chi đã phá òi</div>
        </div>
        <div>
            <img class="mt-10 mb-10 h-auto object-contain rounded-lg" src={albumLinks[3]} alt=""/>
            <div className="text-2xl text-white object-contain">Tính mua trên Dalas về mà em nói thôi,.....(anh cũng mua à nó dễ thương ghê với coi như lưu niệm)</div>
        </div> 
        <div>
            <img class="mt-10 mb-10 h-auto object-contain rounded-lg" src={albumLinks[2]} alt=""/>
            <div className="text-2xl text-white object-contain">Tấm này hình như em đi về quê ăn tiệc đúng hem, ước gì được đi cùng em chụp nhiều tấm nữa tại thấy cảnh vật cũng mát mẻ á</div>
        </div>         
                 
        <div>
            <img class="mt-10 mb-10 h-auto object-contain rounded-lg" src={albumLinks[16]} alt=""/>
            <div className="text-2xl text-white object-contain">Coi ai kìa, phải sinh viên xuất sắc hong á hehe, được mời đi dự lễ trước trao thưởng nữa</div>
        </div> 
        <div>
            <img class="mt-10 mb-10 h-auto object-contain rounded-lg" src={albumLinks[17]} alt=""/>
            <div className="text-2xl text-white object-contain">Cameraman có chụp nhiều người mà sao thấy có em là nổi bật nhất à</div>
        </div> 
        <div>
            <img class="mt-10 mb-10 h-auto object-contain rounded-lg" src={albumLinks[18]} alt=""/>
            <div className="text-2xl text-white object-contain">Tấm này để đây không đúng trình tự lắm mà anh lại muốn để thế để thấy là thời gian trôi nhanh, mới tốt nghiệp cấp 3 đã tốt nghiệp đại học rồi; Anh đứng cùng em nè :D</div>
        </div> 
        <div>
            <img class="mt-10 mb-10 h-auto object-contain rounded-lg" src={albumLinks[22]} alt=""/>
            <div className="text-2xl text-white object-contain">Quàoooo em lúc đó trang điểm làm anh ngạc nhiên á, đẹp quá chừng luôn</div>
        </div> 
        <div>
            <img class="mt-10 mb-10 h-auto object-contain rounded-lg" src={albumLinks[23]} alt=""/>
            <div className="text-2xl text-white object-contain">Sorry ảnh hong rõ nét lắm tại facebook livestream chất lượng kém với camera man quay nhanh hết 1 lượt</div>
        </div> 
        <div>
            <img class="mt-10 mb-10 h-auto object-contain rounded-lg" src={albumLinks[24]} alt=""/>
            <div className="text-2xl text-white object-contain">Anh mừng cho em lắm, nỗ lực suốt 4 năm gánh team mệt mỏi được đền đáp xứng đáng yayyyy, hơi buồn vì không thể tận tay trao hoa cho em</div>
        </div>
        <div>
            <img class="mt-10 mb-10 h-auto object-contain rounded-lg" src={albumLinks[19]} alt=""/>
            <div className="text-2xl text-white object-contain">Sự kiện mới đây nhất thì là em được vào big4 làm (ảnh này hồi em apply pWC), chúc em luôn thành công trong công việc nha</div>
        </div> 
        <br/>
        <br/>
        <div>
            <div class="mt-10 mb-10 h-auto object-contain" >
                <iframe width="300" height="60" src="https://vocaroo.com/embed/1cWQrDlk83Wj?autoplay=0" frameborder="0" allow="autoplay"></iframe>
                              
            </div>            
        </div>
        <br/>
        <br/> 
        <br/> 
        <div className="text-xl text-gray-100 album-text text-center">ĐÂY LÀ QUÀ SINH NHẬT ANH TÍNH TẶNG EM MÀ ANH ĐI LÀM BẬN QUÁ KHÔNG RẢNH ĐỂ HOÀN THÀNH, ANH HY VỌNG EM VẪN KHỎE
        MẤY NAY MƯA TO LÚC CHIỀU TỐI NÊN EM CHẠY XE CẨN THẬN, GIỮ GÌN SỨC KHỎE GIỮ ĐẦU ÓC THOẢI MÁI VÀ NHẠY BÉN TRONG CÔNG VIỆC</div>
        <br/> 
        <div className="text-xl album-text text-center text-rose-300">KHI NÀO RẢNH 2 MÌNH ĐI CAFE NHA</div>
    </div>

    );
}

export default Album;