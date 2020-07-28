import React, { Component } from 'react'

class PageHeaderSection extends Component {
    constructor(props){
        super(props)
    
    }
  render() {
    return (
        <div className="PageHeader">
            <div className="PageText">
                {this.props.title}
            </div>
        </div>
    )
  }
}

export default PageHeaderSection;