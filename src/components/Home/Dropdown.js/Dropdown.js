import React from 'react';
import './Dropdown.css';
import FontAwesome from 'react-fontawesome'
class Dropdown extends React.Component{
    constructor(props){
      super(props)
      this.state = {
        listOpen: false,
        headerTitle: this.props.title
      }
      this.close = this.close.bind(this)
    }
  
    componentDidUpdate(){
      const { listOpen } = this.state
      setTimeout(() => {
        if(listOpen){
          window.addEventListener('click', this.close)
        }
        else{
          window.removeEventListener('click', this.close)
        }
      }, 0)
    }
  
    componentWillUnmount(){
      window.removeEventListener('click', this.close)
    }
  
    close(timeOut){
      this.setState({
        listOpen: false
      })
    }
  
    selectItem(title, id, stateKey){
      this.setState({
        headerTitle: title,
        listOpen: false
      }, this.props.resetThenSet(id, stateKey))
    }
  
    toggleList(){
      this.setState(prevState => ({
        listOpen: !prevState.listOpen
      }))
    }
  
    render(){
      const{list} = this.props
      const{listOpen, headerTitle} = this.state
      return(
        <div className="dd-wrapper">
          <div className="dd-header" onClick={() => this.toggleList()}>
            <div className="dd-header-title">{headerTitle}</div>
            {listOpen
              ? <FontAwesome name="angle-up" size="2x"/>
              : <FontAwesome name="angle-down" size="2x"/>
            }
          </div>
          {listOpen && <ul className="dd-list" onClick={e => e.stopPropagation()}>
          <input type="text" className="dd-input" placeholder="Search"/>
            {list.map((item)=> (
              <li className="dd-list-item" key={item.id} onClick={() => this.selectItem(item.title, item.id, item.key)}>{item.title} {item.selected && <FontAwesome name="check"/>}</li>
            ))}
          </ul>}
        </div>
      )
    }
  }  
export default Dropdown;