import React, { Component } from "react";
import Modal from "react-modal";
class PopUp extends Component {
  componentWillMount() {
    Modal.setAppElement("body");
  }
  render() {
    const { open, data, close, title, updateOrder } = this.props;
    return (
      <Modal isOpen={open} className="pop-up-box">
        <div className="close">
          <div>{title}</div>
          <button onClick={() => close()}>Close</button>
        </div>
        <div className="item">
          {data.map((subMenuItem, index) => (
            <div className="items" key={index}>
              <div>{subMenuItem.title}</div>
              <div>
                <img src={subMenuItem.imageUrl} alt="" />
              </div>
              <div>{subMenuItem.price}</div>
              <div>
                <button onClick={() => updateOrder(subMenuItem, "ADD")}>
                  +
                </button>
                <button onClick={() => updateOrder(subMenuItem, "ADD")}>
                  -
                </button>
              </div>
            </div>
          ))}
        </div>
      </Modal>
    );
  }
}
export default PopUp;
