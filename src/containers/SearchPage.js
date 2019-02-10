import React from 'react'
import Axios from 'axios';

class SearchPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      list: []
    }
  }

  componentWillMount() {
    Axios.get('https://api.openbrewerydb.org/breweries')
      .then(res => {
        console.log(res)
        this.setState({ list: res.data })
      })
      .catch(err => {
        console.log(err)
      })
  }

  render() {
    let { list } = this.state
    return (
      <div>
        {
          list.map(item => (
            <a href={item.website_url} target="_blank">
              {
                item.name
              }
            </a>
          ))
        }
      </div>
    )
  }
}

export default SearchPage