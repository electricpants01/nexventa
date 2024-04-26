const category = {
  name: 'category',
  img: '../../../public/images/banner/banner.jpg',
  title: '30% Off',
  subtitle: 'Comida de fitness',
  subtitle2: 'a partir de',
  subtitle3: '20.00',
  subtitle4: 'Bs'
}
const NEXBranchOrderSideBarCategoryList= () => {
  return (
    <div className="category-item">
      <ul className="sidebar-menu-category-list">
        <div className="menu-title-flex">
          <img src={category.img} alt={category.name} className="menu-title-img" />
          <p className="menu-title">Detalle</p>
          <p className="menu-title">Detalle</p>
          <p className="menu-title">Detalle</p>
        </div>
      </ul>
    </div>
  )
}

export default NEXBranchOrderSideBarCategoryList
