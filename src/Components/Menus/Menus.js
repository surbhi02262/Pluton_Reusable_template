import React, { Component } from 'react';
import {connect} from 'react-redux'
import {getShopData} from '../../Store/Menus/actionCreator'
import Modal from 'react-modal'

class Menus extends Component {
    constructor(){
        super()
        this.state= {
            isActive:false
        }
    }
    componentWillMount(){
        Modal.setAppElement('body');
    }
    componentDidMount(){
        this.props.getShopData();
    }
    OnClick = () => {
    }
    toggleModal = () => {
     this.setState({
    isActive: !this.state.isActive
})
    }
    render() {
        const {shopData} = this.props;
        JSON.stringify(shopData);
        return (
            <div className="container">
            <div className="head-text">Hot drinks</div>
            {shopData.map(menuitems => 
            <div>{menuitems.menu.map((items) =>
            <ul className="menu-item">{items.hotdrinks.map((i) => 
            <li><img src={i.imageUrl} alt="logo"></img>
            <button className="category-items"
             onClick = {this.toggleModal}>
             {i.category}
             </button>
              {/* <Modal isOpen={this.state.isActive}>
             hello from modal</Modal> 
            {i.subMenu && (<ul>{i.subMenu.map(o => 
            <li className="modal">{o.title}{o.price}</li>)}</ul>) }
            </li>)} </ul>)} */}        
            <Modal isOpen={this.state.isActive}>
            {i.subMenu && (<ul>{i.subMenu.map(o => 
             <li className="modal">{o.title}
             <div>{o.price}</div></li>
             ) }</ul>)}
             </Modal>  
            </li>)} </ul>)}
            </div>)}      
            </div>
        );
    }

}

const mapDispatchToProps = dispatch => {
    return {
        getShopData: () => {
       dispatch(getShopData());
    }};
}

const mapStateToProps = state => {
        const {Menus} = state;
    return {
        shopData : Menus.Menu_Options
    }
}
 

export default connect(mapStateToProps,mapDispatchToProps)(Menus);