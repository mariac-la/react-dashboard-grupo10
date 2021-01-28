import React, {Component} from 'react';
import SmallCard from './SmallCard';

let productInDataBase = {
    color:   "primary",
    titulo: "Productos en DB",
    valor: 0,
    icono: "fa-clipboard-list",
    moneda: false 
}

let amount ={
    color:   "success",
    titulo: "Valor total",
    valor: 11210,
    icono: "fa-dollar-sign",
    moneda: true
}

let user = {
    color:   "danger",
    titulo: "Cantidad de usuarios",
    valor: 0,
    icono: "fa-user-check",
    moneda: false
}

class ContentRowTop extends Component{

    constructor(){
        super()
        this.state={
            productos:[],
            users:[],
        }
    }

    componentDidMount(){
        fetch('/api/products')
        .then(response=>{
            return response.json()
        })
        .then(productos => {
            this.setState({productos:productos.metadata})
            
        }) 
        .catch(error => console.log(error))

        fetch("/api/users")
        .then(response=>{
            return response.json()
        })
        .then(users => {
            this.setState({users:users.metadata})
        }) 
        .catch(error => console.log(error))
    }

    render() { 
    return (
        <React.Fragment>
        {/*<!-- Content Row -->*/}
        <div className="row">
            <SmallCard  {...productInDataBase} valor={this.state.productos.count} key= {0}/>
            <SmallCard  {...amount}  key= {1}/>
            <SmallCard  {...user} valor={this.state.users.count} key= {2}/>
        </div>
        </React.Fragment>
    )
    }
}
export default ContentRowTop;