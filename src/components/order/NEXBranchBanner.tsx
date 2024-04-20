const banner = {
  name: 'banner',
  img: '../../../public/images/banner/banner.jpg',
  title: '30% Off',
  subtitle: 'Comida de fitness',
  subtitle2: 'a partir de',
  subtitle3: '20.00',
  subtitle4: 'Bs'
}

const NEXbanner = () => {
  return (
    <div className="slider-item">
      <img src={banner.img} alt={banner.name} className="banner-img" />

      <div className="banner-content">
        <div className="banner-content2">
          <h2 className="banner-subtitle">{banner.subtitle}</h2>
          <p className="banner-title">{banner.title}</p>
          <a href="#" className="banner-btn-orden">
            Ordenar
          </a>
          <p className="banner-text">
            {banner.title} <b>29</b>
          </p>
        </div>
      </div>
    </div>
  )
}

export default NEXbanner
