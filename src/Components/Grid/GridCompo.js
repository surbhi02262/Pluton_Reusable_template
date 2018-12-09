import React, { Component } from "react";
import { Link } from "react-router-dom";

class GridCompo extends Component {
  render() {
    const { data, styles } = this.props;
    return (
      <div className={styles}>
        {data.data.map(item => (
          <div className="img-cont">
            {item.imageUrl && <img src={item.imageUrl} alt="heart" />}
            <div className="caption">
              <div className="thumb-label">{item.heading}</div>
              {item.imageSubcontent && (
                <div className="thumb-caption">{item.imageSubcontent}</div>
              )}
              {item.social && (
                <div className="social-container">
                  <div className="social-width">
                    {item.social.map((socialItems, index) => (
                      <div key={socialItems.name}>
                        <Link to={socialItems.link}>
                          <i class={socialItems.icon} />
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              <div className="price-content">
                {item.priceItems &&
                  item.priceItems.map(item => {
                    let priceItemKeys = Object.keys(item);
                    return priceItemKeys.map(keyItem => (
                      <div className="price-item">{item[keyItem]}</div>
                    ));
                  })}
              </div>
            </div>
            <div className="buttn">
              <button type="submit" className="btn">
                BUY
              </button>
            </div>
          </div>
        ))}
      </div>
    );
  }
}
export default GridCompo;
