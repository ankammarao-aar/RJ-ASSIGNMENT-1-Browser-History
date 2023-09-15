import './index.css'

const BrowserHistory = props => {
  const {historyList, deleteHistory} = props
  const {timeAccessed, logoUrl, title, domainUrl, id} = historyList
  const onDelete = () => {
    deleteHistory(id)
  }
  return (
    <li className="list-item">
      <div className="card">
        <p className="time">{timeAccessed}</p>
        <img src={logoUrl} alt="domain logo" className="image" />
        <p className="name">{title}</p>
        <p className="domain">{domainUrl}</p>
      </div>
      <button
        type="button"
        className="delete"
        onClick={onDelete}
        data-testid="delete"
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          alt="delete"
          className="delete-icon"
        />
      </button>
    </li>
  )
}

export default BrowserHistory
