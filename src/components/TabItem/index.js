import './index.css'

const TabItem = props => {
  const {tabDetails, changeTab, isActive} = props
  const {tabId, displayText} = tabDetails

  const onTabClick = () => changeTab(tabId)

  const extraListContainerName = isActive ? 'add-on-list-class' : ''
  const extraButtonClassName = isActive ? 'add-on-button-class' : ''

  return (
    <li className={`${extraListContainerName} each-tab-list-container`}>
      <button
        className={extraButtonClassName}
        onClick={onTabClick}
        type="button"
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
