import React from 'react'
import tech1 from '../../image/tech1.jpg'
import './Technology.css'
import brain from '../../image/brain.png'
import develop from '../../image/develop.png'
import share from '../../image/share.png'
import hour from '../../image/hour.png'
export const Technology = () => {
    const listTech = [
        {
            id: 1,
            name: "Não người tiếp nhận thông tin tốt hơn từ video",
            img: brain
        },
        {
            id: 2,
            name: "Thị trường cạnh tranh chỉ chiếm khoảng 9%",
            img: develop
        },
        {
            id: 3,
            name: "Video phổ biến & lan truyền rộng trên mạng xã hội",
            img: share
        },
        {
            id: 4,
            name: "Xem video thu hút hơn là đọc văn bản hay xem hình ảnh",
            img: hour
        },
    ]
  return (
    <>
        <section className="technology">
            <div className="container">
                <div className="section-title text-center bg-image   ">Sử dụng video marketing thời đại 4.0</div>
                <div className="technology-list">
                    {
                        listTech.map((item,index) => (
                            <div key={index} className="technology-item crd--reffect-1 crd-img">
                                <div className="section-text">{item.name}</div>
                                <div className="technology-image boxed crd-img">
                                    <img src={item.img} alt={item.name}/>
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
