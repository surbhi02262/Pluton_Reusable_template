import React, { Component } from "react";
import { connect } from "react-redux";
import { getShopData } from "../../Store/Menus/actionCreator";
import PopUp from "../Popup/Popup";

class Menus extends Component {
  constructor() {
    super();
    this.state = {
      isActive: false,
      modalData: "",
      modalTitle: ""
    };
  }

  componentDidMount() {
    this.props.getShopData();
  }
  OnClick = () => {};
  showSubMenu = (subMenu, title) => {
    this.setState({
      isActive: !this.state.isActive,
      modalData: subMenu,
      modalTitle: title
    });
  };
  closePop = () => {
    this.setState({
      isActive: !this.state.isActive,
      modalData: "",
      modalTitle: ""
    });
  };
  updateOrder = (order, type) => {
    console.log(JSON.stringify(order), type);
  };
  render() {
    const { shopData } = this.props;
    const { isActive, modalData, modalTitle } = this.state;
    JSON.stringify(shopData);
    return (
      <div className="container">
        <div className="main-title">Coffee Shop</div>
        {isActive &&
          modalData.length > 0 && (
            <PopUp
              open={isActive}
              data={modalData}
              close={this.closePop}
              title={modalTitle}
              updateOrder={this.updateOrder}
            />
          )}
        {shopData.map((menuItems, index) => (
          <div key={index}>
            {menuItems.menu.map((items, index) => {
              let itemList = Object.keys(items);
              return (
                <div className="menu-item" key={index}>
                  {itemList.map((item, index) => {
                    return (
                      <div className="items-menu" key={index}>
                        <h1>{item}</h1>
                        <div key={index} className="top-menu">
                          {items[item].map((subMenus, index) => (
                            <div key={index} className="items">
                              <div>{subMenus.title.toUpperCase()}</div>
                              <div className="img-holder">
                                <img
                                  src={subMenus.imageUrl}
                                  alt={subMenus.category}
                                />
                              </div>
                              {subMenus.subMenu &&
                                subMenus.subMenu.length > 0 && (
                                  <button
                                    className="show-pop"
                                    onClick={() =>
                                      this.showSubMenu(
                                        subMenus.subMenu,
                                        subMenus.title
                                      )
                                    }
                                  >
                                    Show Menu
                                  </button>
                                )}
                            </div>
                          ))}
                        </div>
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </div>
        ))}
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getShopData: () => {
      dispatch(getShopData());
    }
  };
};

const mapStateToProps = state => {
  const { Menus } = state;
  return {
    shopData: Menus.Menu_Options
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Menus);
