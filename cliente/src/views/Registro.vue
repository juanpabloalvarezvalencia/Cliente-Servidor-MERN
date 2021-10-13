<template>

    <!-- Wrapper Starts -->
    <div class="wrapper">
        <div class="container-fluid user-auth">
			<div class="hidden-xs col-sm-4 col-md-4 col-lg-4">
				<!-- Logo Starts -->
				<a class="logo" href="#">
                    <router-link to="/" class="btn btn-primary">
                    <i class="fa fa-home"></i> Inicio
                    </router-link>
				</a>
				<!-- Logo Ends -->
				<!-- Slider Starts -->
				<div id="carousel-testimonials" class="carousel slide carousel-fade" data-ride="carousel">
					<!-- Indicators Starts -->
					<ol class="carousel-indicators">
						<li data-target="#carousel-testimonials" data-slide-to="0" class="active"></li>
						<li data-target="#carousel-testimonials" data-slide-to="1"></li>
						<li data-target="#carousel-testimonials" data-slide-to="2"></li>
					</ol>
					<!-- Indicators Ends -->
					<!-- Carousel Inner Starts -->
					<div class="carousel-inner">
						<!-- Carousel Item Starts -->
						<div class="item active item-1">
							<div>
								<blockquote>
									<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta, accusantium totam dolor facere eius doloribus sapiente tenetur rem ex minima nulla perspiciatis, beatae omnis laudantium, officia reiciendis dolorem cupiditate sed?</p>
									<footer><span>Andres Felipe</span>, Colombia</footer>
								</blockquote>
							</div>
						</div>
						<!-- Carousel Item Ends -->
						<!-- Carousel Item Starts -->
						<div class="item item-2">
							<div>
								<blockquote>
									<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta, accusantium totam dolor facere eius doloribus sapiente tenetur rem ex minima nulla perspiciatis, beatae omnis laudantium, officia reiciendis dolorem cupiditate sed?</p>
									<footer><span>María </span>, México</footer>
								</blockquote>
							</div>
						</div>
						<!-- Carousel Item Ends -->
						<!-- Carousel Item Starts -->
						<div class="item item-3">
							<div>
								<blockquote>
									<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta, accusantium totam dolor facere eius doloribus sapiente tenetur rem ex minima nulla perspiciatis, beatae omnis laudantium, officia reiciendis dolorem cupiditate sed?</p>
									<footer><span>Susas Boubaker</span>, USA</footer>
								</blockquote>
							</div>
						</div>
						<!-- Carousel Item Ends -->
					</div>
					<!-- Carousel Inner Ends -->
				</div>
				<!-- Slider Ends -->
			</div>
			<div class="col-xs-12 col-sm-8 col-md-8 col-lg-8">

				<!-- Logo Starts -->
				<a class="visible-xs" href="/">
					<img class="img-responsive mobile-logo" src="https://datosqr.com/biciregistro/images/transparent.png" alt="logo">
				</a>
				<!-- Logo Ends -->
				<div class="form-container">
					<div>
						<!-- Section Title Starts -->
						<div class="row text-center">
							<h2 class="title-head hidden-xs">Registrar <span>Usuario</span></h2>
							 <p class="info-form">Por favor ingresa los siguientes datos!</p>
						</div>
						<!-- Section Title Ends -->
 

						<!-- Form Starts -->
						<form @submit.prevent="agregarRegistro(campo)">
							<div class="form-group">
								<b-alert :show="dismissCountDown" dismissible :variant="mensaje.color" @dismissed="dismissCountDown=0" @dismiss-count-down="countDownChanged">
									{{mensaje.texto}}
								</b-alert>
							</div>							
							<!-- Input Field Starts -->
							<div class="form-group">
								<input class="form-control text-uppercase" v-model="campo.nombre" placeholder="NOMBRE COMPLETO" type="text"  autofocus required>
							</div>
							<div class="form-group">
								<input class="form-control" v-model="campo.email" placeholder="EMAIL" type="email" required>
							</div>
							<div class="form-group">
								<input class="form-control" v-model="campo.password" placeholder="PASSWORD" type="password" required>
							</div>
							<div class="form-group">
								<input class="form-control" v-model="campo.confirm_password" placeholder="PASSWORD" type="password" required>
							</div>
							<div class="form-group">
                                <b-button class="btn btn-primary btn-block" type="submit">Crear Cuenta</b-button>
								<p class="text-center">Ya tiene una cuenta ?  <router-link to="/login">Login</router-link></p>
							</div>
						</form>
						<!-- Form Ends -->



					</div>
				</div>
				<!-- Copyright Text Starts -->
				<p class="text-center copyright-text">Copyright © 2021 Juan Pablo Alvarez Todos los Derechos Reservados</p>
				<!-- Copyright Text Ends -->
			</div>
		</div>

    </div>
    <!-- Wrapper Ends -->


</template>


<script>
export default 
{
    name:'Registro',

    data(){
        return {
            campo: {},
			
            //Boostrap-vue Alert
            mensaje: {color: '', texto: ''},
            dismissSecs: 5,
            dismissCountDown: 0
        };
    },
    methods:
    {
        //Boostrap-vue Alert
        countDownChanged(dismissCountDown) {
            this.dismissCountDown = dismissCountDown
        },
        showAlert() {
            this.dismissCountDown = this.dismissSecs
        },

        //AgregarRegistro       
        agregarRegistro(item)
        {
            this.axios.post('/registrO',item)
            .then(res => {

            console.log(res);
            
                if(res.data.message){
                    this.showAlert();
                    this.mensaje.texto = res.data.message;
                    this.mensaje.color = "danger";
                }
                else{
                    this.$router.push('login');
                }

            })
            .catch(e => {
                console.log(e)
            })
            this.campo = {}
        }

    }
};
</script>
