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
									<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, soluta? Quo, dicta officia nam soluta tempore ipsum molestias! Dolores sapiente accusantium iusto placeat vel, consequuntur libero voluptas magnam ab cupiditate?</p>
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
									<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus autem ut quia, aliquam nulla illo distinctio quidem neque, a eos perferendis obcaecati harum blanditiis quisquam? Debitis eveniet voluptates sint illum!</p>
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
				<a class="visible-xs" href="index.html">
					<img class="img-responsive mobile-logo" src="https://datosqr.com/biciregistro/images/transparent.png" alt="logo">
				</a>
				<!-- Logo Ends -->
				<div class="form-container">
					<div>
						<!-- Section Title Starts -->
						<div class="row text-center">
							<h2 class="title-head hidden-xs">Inicio de <span>Sesión</span></h2>
							 <p class="info-form">Por Favor, Ingrese los siguientes Cambpos</p>
						</div>
						<!-- Section Title Ends -->
						<!-- Form Starts -->
						<form @submit.prevent="Login(campo)">
							<div class="form-group">
								<b-alert :show="dismissCountDown" dismissible :variant="mensaje.color" @dismissed="dismissCountDown=0" @dismiss-count-down="countDownChanged">
									{{mensaje.texto}}
								</b-alert>
							</div>							
							<!-- Input Field Starts -->
							<div class="form-group">
								<input class="form-control" v-model="campo.email" name="email" id="email" placeholder="EMAIL" type="email" required autofocus>
							</div>
							<!-- Input Field Ends -->
							<!-- Input Field Starts -->
							<div class="form-group">
								<input class="form-control" v-model="campo.password" name="password" id="password" placeholder="PASSWORD" type="password" required>
							</div>
							<!-- Input Field Ends -->
							<!-- Submit Form Button Starts -->
							<div class="form-group">
                                <b-button class="btn btn-primary btn-block" type="submit">Iniciar Sesión</b-button>
								<p class="text-center">Aun no tienes una cuenta ?  <router-link to="/registro">Registrese Ahora</router-link></p>
							</div>
							<!-- Submit Form Button Ends -->
						</form>
						<!-- Form Ends -->
					</div>
				</div>
				<!-- Copyright Text Starts -->
				<p class="text-center copyright-text">Copyright © 2018 Juan Pablo Alvarez Todos los Derechos Reservados</p>
				<!-- Copyright Text Ends -->
			</div>
		</div>

		<div v-if="mensaje">
			<p>{{msg}}</p>
		</div>

    </div>
    <!-- Wrapper Ends -->



</template>
<script>
export default 
{
    name:'Login',
    
    data(){
        return {
            campo: {},
			usuario: {email: 'prueba1@bluuweb.cl', pass: '123123'},
			msg: '',

            //Boostrap-vue Alert
            mensaje: {color: '', texto: ''},
            dismissSecs: 5,
            dismissCountDown: 0

        };
    },
    methods:{

		//Boostrap-vue Alert
        countDownChanged(dismissCountDown) {
            this.dismissCountDown = dismissCountDown
        },
        showAlert() {
            this.dismissCountDown = this.dismissSecs
        },


        Login(item)
        {
            this.axios.post('/login',item)
            .then(res => {

				console.log(res);

  				if(res.data.token)
				{
					this.showAlert();
                    this.mensaje.texto = res.data.user.nombre;
                    this.mensaje.color = "success";

					const token = res.data.token;
					console.log('este es el tocken '+token);

					window.localStorage.setItem('token',token);
					window.localStorage.setItem('usuario',res.data.user.email);
					this.$router.push({path:'/Bicicleta'});

					// this.usuarioDB = res.data.usuarioDB
					this.msg = res.data.user.nombre;

				}
				else
				{
					this.showAlert();
                    this.mensaje.texto = res.data.message;
                    this.mensaje.color = "danger";
				}
                
            })
            .catch(e => {
				    //console.log(e.response.data.mensaje);
          			 //this.mensaje = err.response.data.mensaje;
                	console.log(e);
            })
            this.campo = {}
        }

    }
};
</script>
