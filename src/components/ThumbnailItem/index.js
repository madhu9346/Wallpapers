import './index.css'

const ThumbnailItem = props => {
  const {eachItem, updateId, isActive} = props
  const {id, thumbnailUrl, thumbnailAltText} = eachItem

  const resultChange = () => {
    updateId(id)
  }
  const isTabActive = isActive ? 'btn-con' : ''
  return (
    <li className="kk">
      <button
        type="button"
        onClick={resultChange}
        className={`btn ${isTabActive}`}
      >
        <img src={thumbnailUrl} className="image-con" alt={thumbnailAltText} />
      </button>
    </li>
  )
}
export default ThumbnailItem
