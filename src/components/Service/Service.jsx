import React, {useState} from 'react'
import './Service.css'
import video from '../../video/intro.mp4'


import img10 from "../../image/posterDUNG.jpg"
import img9 from "../../image/quangcao.jpg"
import img8 from "../../image/film.jpg"
import img7 from "../../image/talkshow1.png"
import img6 from "../../image/mv1.jpg"
import img5 from "../../image/sukien.jpg"
import img4 from "../../image/livestream1.jpg"
import img3 from "../../image/kyxaodohoa.jpg"
import img2 from "../../image/lazada.jpg"
import img1 from "../../image/phongvan.jpg"
import img14 from "../../image/seriesphim.jpg"
import img13 from "../../image/teaser.jpg"
import img12 from "../../image/intro.png"
import img11 from "../../image/phimngan.jpg"




export const Service = () => {
    const [imgDefault, setImgDefault] = useState(img9);//img1
    const services = [
        {
            id: 1,
            name: 'Quảng cáo doanh nghiệp',
            video: '',
            img: img9
        },
        {
            id: 2,
            name: 'Phim tài liệu',
            video: '',
            img: img8

        },
        {
            id: 3,
            name: 'Talkshow',
            video: '',
            img: img7

        },
        {
            id: 4,
            name: 'MV ca nhạc',
            video: '',
            img: img6
        },
        {
            id: 5,
            name: 'Sự kiện',
            video: '',
            img: img5
        },
        {
            id: 6,
            name: 'Livestream',
            video: '',
            img: img4
        },
        {
            id: 7,
            name: 'Thiết kế đồ họa & kỹ xảo',
            video: '',
            img: img3
        },
        {
            id: 8,
            name: 'Giới thiệu sản phẩm',
            video: '',
            img: img2
        },
        {
            id: 9,
            name: 'Phỏng vấn',
            video: '',
            img: img1
        },
        {
            id: 10,
            name: 'Teaser',
            video: '',
            img: img13
        },
        {
            id: 11,
            name: 'Introduction',
            video: '',
            img: img12
        },
        {
            id: 12,
            name: 'Phim ngắn',
            video: '',
            img: img11
        },
        {
            id: 13,
            name: 'Series phim',
            video: '',
            img: img14
        },
    ]
    const handleClick = (item) => {
        setImgDefault(item.img)

    }
  return (
    <>
        <section className="service">
            <div className="container">
                <div className="service-main">
                    <ul className="service-list">
                        <div className="section-title">Dịch vụ</div>
                        {
                            services.map((item,index) => (
                                <li className="service-item boxed" key={index} onClick={() => {handleClick(item)}}>
                                    {item.name}
                                </li>
                            ))
                        }
                    </ul>
                    <div className="service-right">
                        <div className='service-img-10'>
                            <img src={img10} alt=""  />
                        </div>
                        <div className='service-img-9'>
                            <img src={img9} alt="" />
                        </div>
                         <div className='service-img-8'> 
                            <img src={img8} alt="" />
                        </div>
                        <div className='service-img-7'>
                            <img src={img7} alt="" />
                        </div>
                        <div className='service-img-6'>
                            <img src={img6} alt="" />
                        </div>
                        <div className='service-img-5'>
                            <img src={img5} alt="" />
                        </div>
                        <div className='service-img-4'>
                            <img src={img4} alt="" />
                        </div> 
                        <div className='service-img-3'>
                            <img src={img3} alt="" />
                        </div>
                        <div className='service-img-2'>
                            <img src={imgDefault} alt="" />
                        </div>

                        <div className='service-img-11'>
                            {/* <img src={img11} alt="" /> */}
                        </div>
                        {/* <div className='service-img-1'>
                            <img src={img1} alt="" />
                        </div>  */}
                        {/* <div className='service-img-4'>
                            <img src={img1} alt="" />
                        </div> */}
                            {/* <div className='service-img-4'>
                                <img src={imgDefault} alt="" />
                            </div> */}
                        

                      
                        

                    </div>
                </div>
            </div>
        </section>
    </>
  )
}
