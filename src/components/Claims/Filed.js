import React from 'react';
import './css/Filed.css';
import Header from '../constants/Header'
import Footer from '../constants/Footer'
import { Card } from 'reactstrap'
import { Link } from 'react-router-dom';
class Filed extends React.Component {
  state = {
    works: [
      { productTitle: 'SAMSUNG GALAXY S9', reported: 'Screen Damage', submitOn: 'Jan 23, 2019', resolvedOn: 'Jan 29, 2019', image: require('../../assets/mybox-selected (2)/cellhelmet-tempered-glass-for-samsung-galaxy-s9.png') },
      { productTitle: 'OPPO F11 PRO', reported: 'Screen Damage', submitOn: 'Jan 23, 2019', resolvedOn: 'Jan 29, 2019', image: require('../../assets/mybox-selected (2)/cellhelmet-tempered-glass-for-samsung-galaxy-s9.png') },
    ]
  };
  render() {
    return (
      <div>
        <Header />
        <div className="My-Claims">
          <h2>My Claims</h2>
          <div className="mt-4">
            <div className="col-lg-10 offset-lg-1" id="cuurent-claims">
              <h3 className="Current-Claim">Current Claim</h3>
              <div className="row" id="cuurent-claims-row">
                <div className="col-lg-8 col-sm-12">
                  <div className="product-details" id="claim-product-details">
                    <h6 className="SAMSUNG-GALAXY-S9" id="order1">SAMSUNG GALAXY S9</h6>
                    <div className="product-image-display-mobile">
                      <img src={require('../../assets/mybox-selected (2)/cellhelmet-tempered-glass-for-samsung-galaxy-s9.png')} alt="productImage" />
                    </div>
                    <div className="row" id="order3">
                      <div className="col-6">
                        <ul>
                          <li>
                            <img src={require('../../assets/mybox-selected (2)/23.1(1).svg')} alt="" className="damage-icon" />
                            Damage Reported:
                                </li>
                          <li>
                            <img src={require('../../assets/mybox-selected (2)/23.2.svg')} alt="" className="status-icon" /> Status:
                                </li>
                        </ul>
                      </div>
                      <div className="col-6">
                        <ul>
                          <li>
                            <span className="info">Screen Damage</span>
                          </li>
                          <li>
                            <span className="info">Processing</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="progress-bar-container container">
                    <ul className="progressbar">
                      <li className="active-bar">
                        <div className="tick">
                        </div>
                        Reporting
                        Damage
                      </li>
                      <li className="active-bar"><div className="tick">
                      </div>
                        Processing
                      </li>
                      <li className="unactive-bar" id="unactive-bar">
                      Claim
                      Resolved
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-4 col-sm-12" id="order2">
                  <div className="product-image-display">
                    <img src={require('../../assets/mybox-selected (2)/cellhelmet-tempered-glass-for-samsung-galaxy-s9.png')} alt="productImage" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* product history */}
          <div className="product-history">
            <div className="mt-4" id="product-detail-cards">
              <div className="col-lg-10 offset-lg-1" id="cuurent-claims">
                <h3 className="Claim-history">Claim History</h3>
              </div>
              <div id="product-card-history">
                <Card id="card">
                  <p className="Rejected">Rejected</p>
                  <div className="row">
                    <div className="col-lg-8 col-sm-6">
                      <div id="claim-product-card-details">
                        <h6 className="SAMSUNG-GALAXY-S9">SAMSUNG GALAXY S9</h6>
                        <div className="row">
                          <div className="col-6">
                            <ul>
                              <li>
                                Damage Reported:
                                </li>
                              <li>
                                Claim submitted on :
                                </li>
                              <li>
                                Claim resolved on :
                                </li>
                            </ul>
                          </div>
                          <div className="col-6">
                            <ul>
                              <li>
                                <span className="info">Screen Damage</span>
                              </li>
                              <li>
                                <span className="info">Jan 23, 2019</span>
                              </li>
                              <li>
                                <span className="info">Jan 29, 2019</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-sm-6">
                      <div className="product">
                        <img src={require('../../assets/mybox-selected (2)/cellhelmet-tempered-glass-for-samsung-galaxy-s9.png')} alt="productImage" />
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
              <div id="product-card-history">
                <Card id="card">
                  <p className="approved">Approved</p>
                  <div className="row">
                    <div className="col-lg-8 col-sm-6">
                      <div id="claim-product-card-details">
                        <h6 className="SAMSUNG-GALAXY-S9">OPPO F11 PRO</h6>
                        <div className="row">
                          <div className="col-6">
                            <ul>
                              <li>
                                Damage Reported:
                                </li>
                              <li>
                                Claim submitted on :
                                </li>
                              <li>
                                Claim resolved on :
                                </li>
                            </ul>
                          </div>
                          <div className="col-6">
                            <ul>
                              <li>
                                <span className="info">Screen Damage</span>
                              </li>
                              <li>
                                <span className="info">Jan 23, 2019</span>
                              </li>
                              <li>
                                <span className="info">Jan 29, 2019</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-sm-6">
                      <div className="product">
                        <img src={require('../../assets/mybox-selected (2)/cellhelmet-tempered-glass-for-samsung-galaxy-s9.png')} alt="productImage" />
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
        <div className="suggestion">
          <h2><Link to="/">How to Report a Claim?</Link> <img src={require('../../assets/dropdown.svg')} alt="productImage" className="claim-dropdown" /></h2>
          <h2> <Link to="/">Is Your Protected Device Not Switching On? </Link>  <img src={require('../../assets/dropdown.svg')} alt="productImage" className="claim-dropdown" /></h2>
        </div>
        <Footer />
      </div>
    );
  };
}

export default Filed;