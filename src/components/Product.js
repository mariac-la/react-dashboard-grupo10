import React, {Component} from 'react';
import Swal from 'sweetalert2';
import ProductList from './ProductList';

class Product extends Component{
    constructor(){
        super()
        this.state ={
            products : []
        }
    }
    //Creando un método
    mensaje(){
        Swal.fire(
            'Bienvenidos a nuestro sitio web!',
            'Tenemos los mejores tes e infusiones',
            'success'
        )
    }

    //Compomentes Ciclo de vida - Monto - Actualizo - Desmonto
    //Montaje
    componentDidMount(){
        fetch('/api/products')
        .then(respuesta =>{
            return respuesta.json()
        })
        .then(products =>{
            //console.log(productos)
            this.setState({products: products.data.products})
        })
        .catch(error => console.log(error))

    }


    render(){
        return (
            <React.Fragment>
            {/*<!-- PRODUCTS LIST -->*/}
            <h1  onClick= {this.mensaje}  className="h3 mb-2 text-gray-800">All the products in the Database</h1>
            
            {/*<!-- DataTales Example -->*/}
            <div className="card shadow mb-4">
                <div className="card-body">
                    <div className="table-responsive">
                        <table className="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                            <thead>
                                <tr>
                                    <th className= "text-center">Id</th>
                                    <th className= "text-center">Name</th>
                                    <th className= "text-center">Description</th>
                                    <th className= "text-center">Instructions</th>
                                    <th className= "text-center">Price</th>
                                </tr>
                            </thead>
                            <tfoot>
                                <tr>
                                    <th className= "text-center">Id</th>
                                    <th className= "text-center">Name</th>
                                    <th className= "text-center">Description</th>
                                    <th className= "text-center">Instructions</th>
                                    <th className= "text-center">Price</th>
                                </tr>
                            </tfoot>
                            <tbody>
                                {
                                    //console.log(this.state.productos)
                                    this.state.products.map((producto,index)=>{
                                        return <ProductList  {...producto} key={index}  />
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
        </div>


    
    </React.Fragment>
    )
}
}
export default Product;
