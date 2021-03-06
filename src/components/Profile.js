import React, { useState } from 'react';
import '../App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { NavLink } from 'react-router-dom';
import pics from '../images/house.jpg';
import { Tabs, Tab } from 'react-bootstrap'
import Information from './Information.js';
import Reservaciones from './Reservaciones';
import LocalFriend from './LocalFriend';

function Profile() {
    const [key, setKey] = useState('home');
    return (
        <div className="Mprof">
            <div className="prof">
                <div className="profileinfo">
                    <div class="module-border-wrap" ><img src={pics} alt="picss" className="profileimage" /></div>
                    <div className="profilename">
                        <h2>
                            Akash Anjum
                        </h2>
                        <h6>
                        España ● akashanjum282@gmail.com
                        </h6>
                    </div>
                </div>
                <hr />
                <div className="linkbutton">
                    <div  ><NavLink to="/profile/information/personal" className="linkss" activeStyle={{
                        fontWeight: "bold",
                        borderBottomWidth: 3,
                        borderBottomStyle: 'solid',
                        borderBottomColor: 'red',
                    }}>Información</NavLink></div>
                    <div ><NavLink to="/profile/reservations/groups" className="linkss" activeStyle={{
                        fontWeight: "bold",
                        borderBottomWidth: 3,
                        borderBottomStyle: 'solid',
                        borderBottomColor: 'red',
                    }}>Reservaciones</NavLink></div>
                    <div><NavLink to="/profile/localfriend/data" className="linkss" activeStyle={{
                        fontWeight: "bold",
                        borderBottomWidth: 3,
                        borderBottomStyle: 'solid',
                        borderBottomColor: 'red',
                    }}>Local Friend</NavLink></div>



                </div>
                <Switch>
                    <Route exact path="/profile/information" component={Information} />
                    <Route exact path="/profile/reservations" component={Reservaciones} />
                    <Route exact path="/profile/localfriend" component={LocalFriend} />
                    <Route exact path="/profile/information/personal" component={Information} />
                    <Route exact path="/profile/information/location" component={Information} />
                    <Route exact path="/profile/information/contact" component={Information} />
                    <Route exact path="/profile/information/payment-methods" component={Information} />
                    <Route exact path="/profile/information/payments" component={Information} />

                    <Route exact path="/profile/reservations/groups" component={Reservaciones} />
                    <Route exact path="/profile/reservations/experiences" component={Reservaciones} />

                    <Route exact path="/profile/localfriend/data" component={LocalFriend} />
                    <Route exact path="/profile/localfriend/experiences" component={LocalFriend} />
                    <Route exact path="/profile/localfriend/reservations" component={LocalFriend} />
                    <Route exact path="/profile/reservations/groups/details" component={Reservaciones} />
                    <Route exact path="/profile/localfriend/experiences/update" component={LocalFriend} />
                    <Route exact path="/profile/localfriend/experiences/new" component={LocalFriend} />
                    <Route path="*" component={() => <h2>404 Not Found</h2>} />
                </Switch>

            </div>
        </div>
    );
}

export default Profile;
