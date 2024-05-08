const category = {
  name: 'category',
  img: '../../../public/images/banner/banner.jpg',
  title: 'Comida de fitness',
}
const NEXBranchOrderSideBarCategoryList= () => {
  return (
    <div className="category-item">
      <ul className="sidebar-menu-category-list">
        <div className="menu-title-flex">
          <img src={category.img} alt={category.name} className="menu-title-img" />
          <p className="menu-title">{category.title}</p>
        </div>
      </ul>
    </div>
  )
}

export default NEXBranchOrderSideBarCategoryList
