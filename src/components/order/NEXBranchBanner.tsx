import React from 'react'

const NEXBranchBanner = () => {
  const banners = [
    {
      name: 'banner',
      img: '../../../public/images/banner/banner.jpg',
      title: '30% Off',
      subtitle: 'Comida de fitness',
      subtitle2: 'a partir de',
      subtitle3: '20.00',
      subtitle4: 'Bs'
    },
    {
      name: 'banner',
      img: '../../../public/images/banner/banner.jpg',
      title: '40% Off',
      subtitle: 'Comida saludable',
      subtitle2: 'a partir de',
      subtitle3: '25.00',
      subtitle4: 'Bs'
    }
  ]

  return (
    <div className="container">
      <div className="slider-container has-scrollbar">
        {banners.map((banner, index) => (
          <div className="slider-item" key={index}>
            <img src={banner.img} alt={banner.name} className="banner-img" />
            <div className="banner-content">
              <div className="banner-content2">
                <h2 className="banner-subtitle">
                  {banner.subtitle} {banner.subtitle2} {banner.subtitle3} {banner.subtitle4}
                </h2>
                <p className="banner-title">{banner.title}</p>
                <a href="#" className="banner-btn-orden">
                  Ordenar
                </a>
                <p className="banner-text">
                  <b>{banner.title}</b>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default NEXBranchBanner
