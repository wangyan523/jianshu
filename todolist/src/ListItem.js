import React, {Component} from 'react';
import PropTypes from 'prop-types'

class ListItem extends Component{
  constructor(props) {
    super(props)
  }
  delete(index) {
    this.props.delete(index)
  }
  render() {
    return (
      <div>
        {
          this.props.list.map((item, index) => {
            return <li onClick={this.delete.bind(this, index)} key={index}>{item}</li>
          })
        }
      </div>
    )
  }
}

ListItem.propTypes = {
  delete: PropTypes.func,
  list: PropTypes.array
}

export default ListItem;