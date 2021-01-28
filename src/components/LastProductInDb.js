import React, {Component} from 'react';


class LastProductInDb extends Component{

    constructor () {
        super();
        this.state= {
            products: [],
            image: ""
        }
    }

    componentDidMount () {

        fetch('/api/products/')
        .then( response =>  { return response.json() })
        .then( products => {
            this.setState({products: products.data.products[products.data.products.length -1]})
            this.setState({image: "http://localhost:5000/images/" + this.state.products.image})
            console.log(this.state.products)
        })
        .catch(error => console.log(error));
    }
    
    


    render(){
    return(

        <React.Fragment>
            <div className="col-lg-6 mb-4">
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">Last Product In Database</h6>
                </div>
                <div className="card-body">
                    <div className="text-center">
                        <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: 15+'rem'}} src={this.state.image} alt="lastdb"/>
                    </div>
                    <h2 className= "text-center">{this.state.products.name}</h2>
                    <p>{this.state.products.description}</p>
                    <a target="_blank" rel="nofollow" href="/">View product detail</a>
                </div>
            </div>
            </div>
        </React.Fragment>
    )}
}

export default LastProductInDb;