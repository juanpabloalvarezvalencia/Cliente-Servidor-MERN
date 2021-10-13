<template>


    <!-- Wrapper-->
    <div class="wrapper">
        <!-- Header -->
        <header class="header">
            <div class="container">
                <div class="row">
                    <!-- Logo -->
                    <div class="main-logo col-xs-12 col-md-3 col-md-2 col-lg-2 hidden-xs">
                        <img class="img-responsive" src="https://datosqr.com/biciregistro/images/transparent.png" alt="logo">
                    </div>
                    <!-- Logo Fin -->
                    <!-- Barra del Medio -->
                    <div class="col-md-6 col-lg-6">
                    </div>
                    <!-- Barra de Estadisticas Fin -->
                    <!-- Barra de Logout -->
                    <div class="col-md-4 col-lg-4">
                        <ul class="unstyled user">
                            <li class="sign-up">
                              <b-button @click="cerrarSesion()" class="btn btn-primary">
                                <i class="fa fa-sign-out "></i> Cerrar Sesión
                              </b-button>
                            </li>
                        </ul>
                    </div>
                    <!-- Barra de Logout Fin -->
                </div>
            </div>
            <!-- Menu de Navegacion -->
 
            <nav class="site-navigation navigation" id="site-navigation">
                <div class="container">
                    <div class="site-nav-inner">
                        <!-- Logo para Movil -->
                        <a class="logo-mobile" href="#">
						    <img class="img-responsive" src="/https://datosqr.com/biciregistro/images/transparent.png" alt="">
						</a>
                        <!-- Logo para Movil Fin -->
                        <!-- Toggle Mobile -->
                        <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                          <span class="sr-only">Toggle navigation</span>
                          <span class="icon-bar"></span>
                          <span class="icon-bar"></span>
                          <span class="icon-bar"></span>
                        </button>
                        <!-- Toggle Mobile Fin -->
                        <div class="collapse navbar-collapse navbar-responsive-collapse">
                            <!-- Menu de Inicio -->
                            <ul class="nav navbar-nav">
                                <li class="active"><a href="#">Inicio</a></li>
                                <li><a href="#">Quienes Somos</a></li>
                                <li><a href="#">Servicios</a></li>
                                <li><a href="#">Precio</a></li>
                                <li><a href="#">Contactenos</a></li>
                                <li><a @click="cerrarSesion()"><i class="fa fa fa-sign-out"> Salir</i></a></li>
                            </ul>
                            <!-- Menu de Inicio Fin -->
                        </div>
                    </div>
                </div>
                <!-- Boton de Busqueda -->
                <div class="site-search">
                    <div class="container">
                        <input type="text" placeholder="Buscar...">
                        <span class="close">×</span>
                    </div>
                </div>
                <!-- Boton de Busqueda Fin -->
            </nav>
 
            <!-- Menu de Navegacion Fin -->
        </header>
        <!-- Header Fin -->
        
       <!-- Banner Area Starts -->
        <section class="banner-area">
            <div class="banner-overlay">
                <div class="banner-text text-center">
                    <div class="container">
                        <!-- Section Title Starts -->
                        <div class="row text-center">
                            <div class="col-xs-12">
                                <!-- Title Starts -->
                                <h2 class="title-head">Bici<span>Registro</span></h2>
                                <!-- Title Ends -->
                                <hr>
                                <!-- Breadcrumb Starts -->
                                <ul class="breadcrumb">
                                    <li><a href="#"> Inicio</a></li>
                                    <li>Registro de Bicicletas</li>
                                </ul>
                                <!-- Breadcrumb Ends -->
                            </div>
                        </div>
                        <!-- Section Title Ends -->
                    </div>
                </div>
            </div>
        </section>
        <!-- Banner Area Starts -->
        <!-- Shopping Checkout Section Starts -->
        <section class="shop-checkout">
			<!-- Billing Details Starts -->
            <div class="container">
                <div class="row">
                    <div class="col-xs-12">
                        <h3>Hola <a>{{usuario}}</a>, Si desea registrar una Bicicleta por favor Diligencie los siguientes Campos:</h3>
                        <h3>Información de la Bicicleta</h3>
                        
                        
                        <form @submit.prevent="agregarBici(bicicleta)" v-if="agregar" class="row">
                            <!-- Input Field Starts -->
                            <div class="col-xs-12 col-md-4">
                                <div class="form-group">
                                    <input type="text" placeholder="MARCA" class="form-control text-uppercase" v-model="bicicleta.marca" required>
                                </div>
                            </div>
							<!-- Input Field Ends -->
                            <!-- Input Field Starts -->
                            <div class="col-xs-12 col-md-4">
                                <div class="form-group">
                                    <input type="text" placeholder="COLOR" class="form-control text-uppercase" v-model="bicicleta.color" required>
                                </div>
                            </div>
							<!-- Input Field Ends -->
                            <!-- Input Field Starts -->
                            <div class="col-xs-12 col-md-4">
                                <div class="form-group">
                                    <input type="text" placeholder="SERIAL" class="form-control text-uppercase" v-model="bicicleta.serial" required>
                                </div>
                            </div>
							<!-- Input Field Ends -->
                            <!-- Input Field Starts -->
                            <div class="col-xs-12 col-md-4">
                                <div class="form-group">
                                    <input type="text" placeholder="PAIS" class="form-control text-uppercase" v-model="bicicleta.pais" required>
                                </div>
                            </div>                            <!-- Input Field Starts -->
                            <div class="col-xs-12 col-md-4">
                                <div class="form-group">
                                    <input type="text" placeholder="CIUDAD" class="form-control text-uppercase" v-model="bicicleta.ciudad" required>
                                </div>
                            </div>
							<!-- Input Field Ends -->
                            <!-- Input Field Starts -->
                            <div class="col-xs-12 col-md-4">
                                <div class="form-group">
                                    <input type="text" placeholder="DIRECCION" class="form-control text-uppercase" v-model="bicicleta.direccion" required>
                                </div>
                            </div>
							<!-- Input Field Ends -->
         
                            <!-- Input Field Starts -->
                            <div class="col-xs-12">
                                <div class="form-group">
                                    <textarea placeholder="DESCRIPCIÓN GENERAL" class="form-control text-uppercase" v-model="bicicleta.descripcion"></textarea>
                                </div>
                            </div>
							<!-- Input Field Ends -->
							<!-- Input Field Ends -->
                            <div class="col-xs-12 col-md-12">
                                <h3>Información del Propietario</h3>
                            </div>
                            <!-- Input Field Starts -->
                            <div class="col-xs-12 col-md-4">
                                <div class="form-group">
                                    <input type="text" placeholder="NOMBRE" class="form-control text-uppercase" v-model="bicicleta.nombre" required>
                                </div>
                            </div>
							<!-- Input Field Ends -->
                            <!-- Input Field Starts -->
                            <div class="col-xs-12 col-md-4">
                                <div class="form-group">
                                    <input type="text" placeholder="TELEFONO" class="form-control text-uppercase" v-model="bicicleta.telefono" required>
                                </div>
                            </div>
							<!-- Input Field Ends -->
                            <!-- Input Field Starts -->
                            <div class="col-xs-12 col-md-4">
                                <div class="form-group">
                                    <input type="text" placeholder="EMAIL" class="form-control text-uppercase" v-model="bicicleta.email" required>
                                </div>
                            </div>
							<!-- Input Field Ends -->
                            <div class="col-xs-12 col-md-12">
                                <div class="form-group">
                                    <b-button class="btn btn-primary btn-block" type="submit">REGISTRAR</b-button>
                                    <!-- <b-button class="btn-sm btn-block btn-warning" type="submit">Editar</b-button> -->
                                    <!-- <b-button class="btn-sm btn-block btn-warning" @click="agregar = true">Cancelar</b-button> -->
                                </div>
                            </div>
                        </form>
                        <form @submit.prevent="editarBici(biciEditar)" v-else>
                            <!-- Input Field Starts -->
                            <div class="col-xs-12 col-md-4">
                                <div class="form-group">
                                    <input type="text" placeholder="MARCA" class="form-control text-uppercase" v-model="biciEditar.marca" required>
                                </div>
                            </div>
							<!-- Input Field Ends -->
                            <!-- Input Field Starts -->
                            <div class="col-xs-12 col-md-4">
                                <div class="form-group">
                                    <input type="text" placeholder="COLOR" class="form-control text-uppercase" v-model="biciEditar.color" required>
                                </div>
                            </div>
							<!-- Input Field Ends -->
                            <!-- Input Field Starts -->
                            <div class="col-xs-12 col-md-4">
                                <div class="form-group">
                                    <input type="text" placeholder="SERIAL" class="form-control text-uppercase" v-model="biciEditar.serial" required>
                                </div>
                            </div>
							<!-- Input Field Ends -->
                            <!-- Input Field Starts -->
                            <div class="col-xs-12 col-md-4">
                                <div class="form-group">
                                    <input type="text" placeholder="PAIS" class="form-control text-uppercase" v-model="biciEditar.pais" required>
                                </div>
                            </div>                            <!-- Input Field Starts -->
                            <div class="col-xs-12 col-md-4">
                                <div class="form-group">
                                    <input type="text" placeholder="CIUDAD" class="form-control text-uppercase" v-model="biciEditar.ciudad" required>
                                </div>
                            </div>
							<!-- Input Field Ends -->
                            <!-- Input Field Starts -->
                            <div class="col-xs-12 col-md-4">
                                <div class="form-group">
                                    <input type="text" placeholder="DIRECCION" class="form-control text-uppercase" v-model="biciEditar.direccion" required>
                                </div>
                            </div>
							<!-- Input Field Ends -->
         
                            <!-- Input Field Starts -->
                            <div class="col-xs-12">
                                <div class="form-group">
                                    <textarea placeholder="DESCRIPCIÓN GENERAL" class="form-control text-uppercase" v-model="biciEditar.descripcion"></textarea>
                                </div>
                            </div>
							<!-- Input Field Ends -->
							<!-- Input Field Ends -->
                            <div class="col-xs-12 col-md-12">
                                <h3>Información del Propietario</h3>
                            </div>
                            <!-- Input Field Starts -->
                            <div class="col-xs-12 col-md-4">
                                <div class="form-group">
                                    <input type="text" placeholder="NOMBRE" class="form-control text-uppercase" v-model="biciEditar.nombre" required>
                                </div>
                            </div>
							<!-- Input Field Ends -->
                            <!-- Input Field Starts -->
                            <div class="col-xs-12 col-md-4">
                                <div class="form-group">
                                    <input type="text" placeholder="TELEFONO" class="form-control text-uppercase" v-model="biciEditar.telefono" required>
                                </div>
                            </div>
							<!-- Input Field Ends -->
                            <!-- Input Field Starts -->
                            <div class="col-xs-12 col-md-4">
                                <div class="form-group">
                                    <input type="text" placeholder="EMAIL" class="form-control text-uppercase" v-model="biciEditar.email" required>
                                </div>
                            </div>
							<!-- Input Field Ends -->
                            <div class="col-xs-12 col-md-12">
                                <div class="form-group">
                                    <b-button class="btn btn-success btn-block" type="submit">EDITAR</b-button>
                                    <b-button class="btn btn-info btn-block" @click="agregar = true">CANCELAR</b-button>                                    
                                </div>
                            </div>
                        </form>

                    </div>
                </div>
            </div>
            <!-- Billing Details Ends -->
			<!-- Checkout Starts -->
            <div class="checkout">
                <div class="container">
                    <h3>Bicicletas Registradas</h3>
                    <div class="row">
						<!-- Purchased Products Starts -->
                        <div class="col-sm-12 col-md-12 table-responsive">
                            <table class="table products">
                                <colgroup>
                                    <col class="col-xs-2">
                                    <col class="col-xs-1">
                                    <col class="col-xs-1">
                                    <col class="col-xs-1">
                                    <col class="col-xs-1">
                                    <col class="col-xs-2">
                                    <col class="col-xs-3">
                                    <col class="col-xs-1">
                                </colgroup>
                                <thead>
                                    <tr>
                                        <th>SERIAL</th>
                                        <th>MARCA</th>
                                        <th>COLOR</th>
                                        <th>PAIS</th>
                                        <th>CIUDAD</th>
                                        <th>DIRECCION</th>
                                        <th>PROPIETARIO</th>
                                        <th>OPCIONES</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="(item, index) in bicicletas" :key="index">
                                        <th class="with-bg">{{ item.serial }}</th>
                                        <td class="text-price">{{ item.marca }}</td>
                                        <td class="text-price">{{ item.color }}</td>
                                        <td class="text-price">{{ item.pais }}</td>
                                        <td class="text-price">{{ item.ciudad }}</td>
                                        <td class="text-price">{{ item.direccion }}</td>
                                        <td class="text-price">Nombre: {{ item.nombre }} <br> Teléfono: {{ item.telefono }} <br> Email: {{ item.email }}

                                        </td>
                                        <td>
                                            <b-button class="btn btn-danger mx-4" @click="eliminarBici(item._id)"><i class="fa fa-eraser"></i></b-button>
                                            <b-button class="btn btn-info mx-2 p-2" @click="activarEdicion(item._id)"><i class="fa fa-edit"></i></b-button>
                                        </td>
                                    </tr>
                       
                                </tbody>
                            </table>
                        </div>
						<!-- Purchased Products Ends -->
                    </div>
                </div>
            </div>
			<!-- Checkout Ends -->
        </section>
        <!-- Shopping Checkout Section Ends -->


        <!-- Footer -->
        <footer class="footer">
            <!-- Footer Bottom Area -->
            <div class="bottom-footer">
                <div class="container">
                    <div class="row">
                        <div class="col-xs-12">
                            <!-- Copyright Text -->
                            <p class="text-center">Copyright © 2021 Juan Pablo Alvarez Valencia Todos los Derechos Reservados </p>
                            <!-- Copyright Text Fin -->
                        </div>
                    </div>
                </div>
            </div>
            <!-- Footer Bottom Area Fin -->
        </footer>
        <!-- Footer Fin -->
		    
        <!-- Back To Top  -->
        <a href="#" id="back-to-top" class="back-to-top fa fa-arrow-up"></a>
		    <!-- Back To Top Fin  -->
		
    </div>
    <!-- Wrapper Fin -->


</template>

<script>
export default 
{
  beforeCreate(){
    const token = window.localStorage.getItem('token');
    console.log("Se inicia el beforeCreate");
    if(!token){
      this.$router.push({path:'/login'});
    }
  },

data(){
        return {
            token: window.localStorage.getItem('token'),
            bicicletas: [],
            
            bicicleta: {},
            usuario: window.localStorage.getItem('usuario'),
            agregar:true,
            biciEditar:{},
        };
    },
    created()
    {
        this.listarBicicletas();
    },
    methods:{
        cerrarSesion(){
            window.localStorage.removeItem('token');
            window.localStorage.removeItem('usuario');
            this.$router.push({path:'/'});
        },
        listarBicicletas()
        {
            let config = { headers: {token: this.token}}

            this.axios.get('/bicicleta',config)
            .then(res => {
                this.bicicletas=res.data;
            }).catch(e=>{
                console.log('error' + e)
            })
        },
        agregarBici(item)
        {
            let config = { headers: {token: this.token}}

            //item.token = window.localStorage.removeItem('token');
            this.axios.post('/bicicleta',item,config)
            .then(res => {
                //Agregar al inicio de nuestro array bicicleta
                this.bicicletas.unshift(res.data);
            })
            .catch(e => {
                console.log(e);
            })
            this.bicicleta = {}
        },

        eliminarBici(id)
        {
            let config = { headers: {token: this.token}}

            this.axios.delete(`/bicicleta/${id}`,config).then(res => {
                const index = this.bicicletas.findIndex(item=>item._id===res.data._id);
                this.bicicletas.splice(index,1);
            }).catch(e=>{
                alert(e)
                console.log('error' + e.response)
            })
        },
        activarEdicion(id)
        {
            let config = { headers: {token: this.token}}

            this.agregar = false;
            console.log(id);
            
            this.axios.get(`/bicicleta/${id}`,config).then(res => {
                this.biciEditar = res.data;
                console.log(res.data);
            })
            .catch(e =>{
                console.log(e.response);
            })
        },
        editarBici(item){

            let config = { headers: {token: this.token}}

            this.axios.put(`/bicicleta/${item._id}`,item,config).then(res => {
                let index = this.bicicletas.findIndex(itemBicileta => itemBicicleta._id === this.biciEditar._id);
                this.bicicletas[index].marca = this.biciEditar.marca;
                this.bicicletas[index].color = this.biciEditar.color;
                this.bicicletas[index].serial = this.biciEditar.serial;
                this.bicicletas[index].pais = this.biciEditar.pais;
                this.bicicletas[index].ciudad = this.biciEditar.ciudad;
                this.bicicletas[index].direccion = this.biciEditar.direccion;
                this.bicicletas[index].descripcion = this.biciEditar.descripcion;
                this.bicicletas[index].nombre = this.biciEditar.nombre;
                this.bicicletas[index].telefono = this.biciEditar.telefono;
                this.bicicletas[index].email = this.biciEditar.email;
                this.biciEditar = {};
                
            })
            .catch(e => {
                console.log(e);
            })

            this.bicicletas = [];
            this.listarBicicletas();

            this.agregar = true;
            
        },
    }
};
</script>
