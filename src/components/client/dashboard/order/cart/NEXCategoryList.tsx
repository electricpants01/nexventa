
const category = {
  name: 'category',
  title: 'Comida de fitness',
  img:'@images/banner/banner.jpg',
}




const NEXCategoryList = () => {
  return (

<div className="category-item">
  <ul className="sidebar-menu-category-list">
    <div className="menu-title-flex">
      <img src={category.img} alt={category.name} 
      className="menu-title-img" />
      <p className="menu-title">{category.title}</p>
    </div>
  </ul>
</div>

  )
}

export default NEXCategoryList


