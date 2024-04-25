// Write your code here
import {Component} from 'react'

import SuggestionItem from '../SuggestionItem'

import './index.css'

class GoogleSuggestion extends Component {
  state = {searchInput: ''}

  updateSearchInput = value => {
    this.setState({searchInput: value})
  }
  onChangeSearchInput = event => {
    this.setState({
      searchInput: event.target.value,
    })
  }

  render() {
    const {searchInput} = this.state
    const {suggestionList} = this.props
    const searchResults = suggestionList.filter(eachSuggestion => {
      eachSuggestion.suggestion.includes(searchInput)
    })
    return (
      <div className="bg-conatiner">
        <div className="container">
          <div className="googlecon">
            <img
              src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
              alt="google logo"
              className="image"
            />
          </div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
            alt="search icon"
            className="search"
          />
          <input
            type="search"
            placeholder="Search Google"
            onChange={this.onChangeSearchInput}
          />

          <ul className="backcon">
            {searchResults.map(eachSuggestion => {
              ;<SuggestionItem
                key={eachSuggestion.id}
                suggestionDetails={eachSuggestion}
                updateSearchInput={this.updateSearchInput}
              />
            })}
          </ul>
        </div>
      </div>
    )
  }
}
export default GoogleSuggestion
