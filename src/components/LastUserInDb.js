import React, {Component} from 'react';
import product_dummy from '../assets/images/product_dummy.svg';

class LastUserInDb extends Component{

    constructor () {
        super();
        this.state= {
            users: [],
            image: ""
        }
    }

    componentDidMount () {

        fetch('/api/users/')
        .then( response =>  { return response.json() })
        .then( users => {
            this.setState({users: users.data.users[users.data.users.length -1]})
            this.setState({image: "http://localhost:5000/images/users/" + this.state.users.image})
            console.log(this.state.users)
        })
        .catch(error => console.log(error));
    }
    
    


    render(){
    return(

        <React.Fragment>
            <div className="col-lg-6 mb-4">
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">Last User In Database</h6>
                </div>
                <div className="card-body">
                        <div className="text-center">
                            <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: 25+'rem'}} src={product_dummy} alt="image dummy"/>
                        </div>
                    {/* <div className="text-center">
                        <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: 15+'rem'}} src={this.state.image} alt="lastdb"/>
                    </div> */}
                    <h2 className= "text-center">{this.state.users.name}</h2>
                    <p className= "text-center">{this.state.users.email}</p>
                    <a target="_blank" rel="nofollow" href="/">View last user</a>
                </div>
            </div>
            </div>
        </React.Fragment>
    )}
}

export default LastUserInDb;