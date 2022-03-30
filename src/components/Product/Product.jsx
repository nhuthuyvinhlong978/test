import React, {useState, useEffect} from 'react'
import './Product.css'
import img from '../../image/tech1.jpg'
import service8 from '../../image/service8.jpg'
import rapviet from '../../image/rapviet.jpg'
import mv from '../../image/mv1.jpg'
import video from '../../video/intro.mp4'
// import happy from '../../image/happy.png'
export const Product = () => {
  const [videoDefault, setVideoDefault] = useState("https://www.youtube.com/embed/HsgTIMDA6ps?autoplay=1&mute=1")
 
  const products = [
    {
      id: 1,
      image: service8,
      name: 'Intro video',
      url:"https://www.youtube.com/embed/HsgTIMDA6ps?autoplay=1&mute=1"
    },
    {
      id: 2,
      image: rapviet,
      name: 'Rap Việt - Concert',
      url:"https://www.youtube.com/embed/D1eY4VjMLS4?autoplay=1&mute=1"
    },
    {
      id: 3,
      image: mv,
      name: 'MV ca nhạc - Vệ sĩ siêu đẳng',
      url:"https://www.youtube.com/embed/ftAnaGIVevA?autoplay=1&mute=1"
    },

  ]

  const handleClick = (item) => {
    setVideoDefault(item.url)
  }
  console.log(videoDefault)
  return (
    <>
        <section className="product">
            <div className="product-main">
              <div className="product-list">
                {
                  products.map((item,index) => (
                    <div key={index} className="product-item" onClick={() => {handleClick(item)}}>
                        <div className="product-image">
                          <img src={item.image} alt="" />
                          <i class='bx bx-play'></i>
                          <div className="boxed"></div>
                        </div>
                        <div className="product-name">{item.name}</div>
                    </div>
                  ))
                }  
              </div>
              <div className="product-right">
                <div className="section-title text-center">Sản phẩm</div>
                <div className="product-video">
                  
                <iframe className='product-video'src={videoDefault}>
                </iframe>
                </div>
              </div>

            </div>
        </section>
    </>
  )
}
