const NEXBranchAdminCardData = () => {
  const data = [
    {
      title: 'Total Balance',
      total: '$4,156.45',
      iconClass: 'bx bxs-credit-card'
    },
    {
      title: 'Total Income',
      total: '$4,156.45',
      iconClass: 'bx bx-dollar'
    },
    {
      title: 'Total Expenses',
      total: '$4,156.45',
      iconClass: 'bx bx-dollar'
    },
    {
      title: 'Total Savings',
      total: '$4,156.45',
      iconClass: 'bx bxs-credit-card'
    }
  ]

  return (
    <div className="subjects">
      {data.map((item, index) => (
        <div className="eg" key={index}>
          <span className="icono-i">
            {' '}
            <i className={item.iconClass}></i>
          </span>
          <p className="icono-i-1">
            <i className="bx bx-dots-vertical-rounded"></i>
          </p>
          <h3>{item.title}</h3>
          <h2>{item.total}</h2>
          <small className="text-muted">{item.total}</small>
        </div>
      ))}
    </div>
  )
}

export default NEXBranchAdminCardData
