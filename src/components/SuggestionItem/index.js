// Write your code here
import './index.css'

const SuggestionItem = props => {
  const {suggestionDetails, updateSearchInput} = props
  const {suggestion} = suggestionDetails

  const onClickButton = () => {
    updateSearchInput(suggestion)
  }
  return (
    <li className="insidecon">
      <p className="description">{suggestion}</p>
      <button type="button" className="butt" onClick={onClickButton}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
          alt="arrow"
          className="image"
        />
      </button>
    </li>
  )
}
export default SuggestionItem
