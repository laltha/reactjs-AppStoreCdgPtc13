// Write your code here
import './index.css'

const TabItem = props => {
  const {tabDetails, setActiveTabId, isActive} = props
  const {tabId, displayText} = tabDetails

  const onClickTab = () => {
    setActiveTabId(tabId)
  }

  const activeBtnButton = isActive ? 'button-color' : ''

  return (
    <li className="tabs">
      <button type="button" onClick={onClickTab} className={activeBtnButton}>
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
