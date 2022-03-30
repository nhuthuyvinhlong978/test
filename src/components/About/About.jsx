import React from 'react'
import tech1 from '../../image/tech1.jpg'
import about from '../../image/bg-about.png'
import './About.css'
import twopeople from '../../image/twopeople.png'
import plan from '../../image/plan.png'
import news from '../../image/news.png'
import happy from '../../image/happy.png'
import active from '../../image/active.png'
export const About = () => {
    const listInfo = [
        {
            id: 1,
            name: "Đội ngũ tư vấn nhiệt tình",
            img: twopeople
        },
        {
            id: 2,
            name: "Tư vấn chiến lược hiệu quả",
            img: plan
        },
        {
            id: 3,
            name: "Cập nhật xu hướng mới nhất",
            img: news
        },
        {
            id: 4,
            name: "Quy trình khép kín chuyên nghiệp",
            img: happy
        },
        {
            id: 5,
            name: "Hoạt động 24/7",
            img: active
        },
    ]
  return (
    <>
        <section className="about">
            <div className="container">
                <div className="about-main">
                    <div className="section-title about-item">Đến với chúng tôi bạn được gì?</div>  
                    {
                        listInfo.map((item,index) => (
                            <div key={index} className="about-item boxed">

                                {index ===1 ? <img className='bg-image' src={about} /> : '' }

                                <div className="section-text">{item.name}</div>
                                <div className='cd crd--reffect-1'>
                                <div className="about-image crd-img">
                                    <img src={item.img} alt={item.name}/>
                                </div>
                            </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    </>
  )
}
