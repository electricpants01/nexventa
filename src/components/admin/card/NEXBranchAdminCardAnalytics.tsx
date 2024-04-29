const NEXBranchAdminCardAnalytics = () => {
  return (
    <div className="analytics">
      <div className="analytics-container">
        <div className="total-events">
          <div className="event-number card">
            <h1>Analytics</h1>
            <canvas id="doughnut"></canvas>
            <h2>data 1</h2>
            {/* <p>20</p> */}
            <i className="bx bx-check-circle"></i>
          </div>
          <div className="event-number card">
            <h1>Earning Flow</h1>
            <canvas id="doughnut"></canvas>
            <h2>Data 2</h2>
            {/* <p>data 2</p> */}
            <i className="bx bx-timer"></i>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NEXBranchAdminCardAnalytics
