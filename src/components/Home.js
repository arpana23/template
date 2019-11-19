import React, { Component } from 'react';
import './Home.css';
import './Stylehome.css';

export default class Home extends Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-8 col-md-offset-2">
                        <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                            <div className="box1 bg-primary" id="common">DEL<span className="size">916</span></div>
                        </div>
                        <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                            <div className="box2 bg-info" id="common">INT<span className="size">232</span></div>
                        </div>
                        <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                            <div className="box3 bg-info" id="common">OOD<span className="size">342</span></div>
                        </div>
                        <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                            <div className="box4 bg-info" id="common">DEX<span className="size">916</span></div>
                        </div>
                        <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                            <div className="box5 bg-info" id="common">NFI<span className="size">916</span></div>
                        </div>
                    
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4" id="myFirstTable">
                        <table className="table">
                            
                            <tbody id="firstTbody">
                                <tr id="tableRow" className="alert alert-success">
                                    <td colSpan="2">Delivered</td>
                                    <td>4-07-2019</td>
                                    <td>14:00</td>
                                </tr>
                                <br/>
                                <tr id="tableRow">
                                    <td colSpan="2">Out for Delivery</td>
                                    <td>8-07-2019</td>
                                    <td>8:00</td>
                                </tr>
                                <br/>
                                <tr id="tableRow">
                                    <td colSpan="2">Arrived at Mysore</td>
                                    <td>6-07-2019</td>
                                    <td>10:54</td>
                                </tr>
                                <br/>
                                <tr id="tableRow">
                                    <td colSpan="2">Arrived at Banglore</td>
                                    <td>5-07-2019</td>
                                    <td>11:20</td>
                                </tr>
                                <br/>
                                <tr id="tableRow">
                                    <td colSpan="2">Transit to Next Hub</td>
                                    <td>4-07-2019</td>
                                    <td>11:54</td>
                                </tr>
                                <br/>
                            </tbody>
                            
                        </table>
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-8 col-lg-8" id="mySecondTable">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th>AWB NUMBER</th>
                                        <th>TRANSPORTER</th>
                                        <th>SOURCE</th>
                                        <th>DESTINATION</th>
                                        <th>BRAND</th>
                                        <th>START DATE</th>
                                        <th>ETD</th>
                                        <th>STATUS</th>
                                    </tr>
                                    <br/>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>#273126375</td>
                                        <td>DTDC</td>
                                        <td>Banglore</td>
                                        <td>Delhi</td>
                                        <td>USPA</td>
                                        <td>01/07/2019</td>
                                        <td>01/07/2019</td>
                                        <td className="del">Delivered</td>
                                    </tr>
                                    <br/>
                                    <tr>
                                        <td>#273126375</td>
                                        <td>DTDC</td>
                                        <td>Banglore</td>
                                        <td>Delhi</td>
                                        <td>USPA</td>
                                        <td>01/07/2019</td>
                                        <td>01/07/2019</td>
                                        <td className="del">Delivered</td>
                                    </tr>
                                    <br/>
                                    <tr>
                                        <td>#273126375</td>
                                        <td>DTDC</td>
                                        <td>Banglore</td>
                                        <td>Delhi</td>
                                        <td>USPA</td>
                                        <td>01/07/2019</td>
                                        <td>01/07/2019</td>
                                        <td className="del">Delivered</td>
                                    </tr>
                                    <br/>
                                    <tr>
                                        <td>#273126375</td>
                                        <td>DTDC</td>
                                        <td>Banglore</td>
                                        <td>Delhi</td>
                                        <td>USPA</td>
                                        <td>01/07/2019</td>
                                        <td>01/07/2019</td>
                                        <td className="del">Delivered</td>
                                    </tr>
                                    <br/>
                                    <tr>
                                        <td>#273126375</td>
                                        <td>DTDC</td>
                                        <td>Banglore</td>
                                        <td>Delhi</td>
                                        <td>USPA</td>
                                        <td>01/07/2019</td>
                                        <td>01/07/2019</td>
                                        <td className="del">Delivered</td>
                                    </tr>
                                    <br/>
                                    <tr>
                                        <td>#273126375</td>
                                        <td>DTDC</td>
                                        <td>Banglore</td>
                                        <td>Delhi</td>
                                        <td>USPA</td>
                                        <td>01/07/2019</td>
                                        <td>01/07/2019</td>
                                        <td className="del">Delivered</td>
                                    </tr>
                                    <br/>
                                    <tr>
                                        <td>#273126375</td>
                                        <td>DTDC</td>
                                        <td>Banglore</td>
                                        <td>Delhi</td>
                                        <td>USPA</td>
                                        <td>01/07/2019</td>
                                        <td>01/07/2019</td>
                                        <td className="del">Delivered</td>
                                    </tr>
                                    <br/>
                                    <tr>
                                        <td>#273126375</td>
                                        <td>DTDC</td>
                                        <td>Banglore</td>
                                        <td>Delhi</td>
                                        <td>USPA</td>
                                        <td>01/07/2019</td>
                                        <td>01/07/2019</td>
                                        <td className="del">Delivered</td>
                                    </tr>
                                </tbody>
                            </table>
                    </div>
                </div>
                
            </div>
        )
    }
}
