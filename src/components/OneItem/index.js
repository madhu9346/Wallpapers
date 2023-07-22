import './index.css'

const OneItem = props => {
  const {eachItemList} = props
  const {imageUrl, imageAltText} = eachItemList

  return (
    <li className="li-con">
      <img src={imageUrl} className="conImage" alt={imageAltText} />
    </li>
  )
}
export default OneItem
