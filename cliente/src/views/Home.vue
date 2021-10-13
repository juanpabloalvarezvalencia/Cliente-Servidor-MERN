<template>

    <!-- Wrapper-->
    <div class="wrapper">
        <!-- Header -->
        <header class="header">
            <div class="container">
                <div class="row">
                    <!-- Logo -->
                    <div class="main-logo col-xs-12 col-md-3 col-md-2 col-lg-2 hidden-xs">
                        <router-link to="/bicicleta">
                            <img class="img-responsive" src="https://datosqr.com/biciregistro/images/transparent.png" alt="logo">
                        </router-link>
                    </div>
                    <!-- Logo Fin -->
                    <!-- Barra de Estidisticas -->
                    <div class="col-md-6 col-lg-6">
                        <!-- <ul class="unstyled bitcoin-stats text-center">
                            <li>
                                <h6>9,450</h6><span>Registros</span>
                            </li>
                            <li>
                                <h6>12.820</h6><span>Mensajes Enviados</span>
                            </li>
                            <li>
                                <h6>26</h6><span>Paises</span>
                            </li>
                            <li>
                                <h6>15.352</h6><span>Stickers Impresos</span>
                            </li>
                        </ul> -->
                    </div>
                    <!-- Barra de Estadisticas Fin -->
                    <!-- Barra de Login -->
                    <div class="col-md-4 col-lg-4">
                        <ul class="unstyled user">
                            <li class="sign-in">
                              <router-link to="/login" class="btn btn-primary">
                                <i class="fa fa-user"></i> Iniciar Sesión
                              </router-link>
                            </li>
                            <li class="sign-up">
                              <router-link to="/registro" class="btn btn-primary">
                                <i class="fa fa-user-plus"></i> Registrar
                              </router-link>
                            </li>
                        </ul>
                    </div>
                    <!-- Barra de Login Fin -->
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
                                <!-- Icono de Compra -->
                                <li class="cart"><a href="#"><i class="fa fa-shopping-cart"></i></a></li>
                                <!-- Icono de Busqueda -->
                                <li class="search"><button class="fa fa-search"></button></li>
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
        <!-- Slider -->
        <div id="main-slide" class="carousel slide carousel-fade" data-ride="carousel">
            <ol class="carousel-indicators visible-lg visible-md">
                <li data-target="#main-slide" data-slide-to="0" class="active"></li>
                <li data-target="#main-slide" data-slide-to="1"></li>
                <li data-target="#main-slide" data-slide-to="2"></li>
            </ol>
            <!-- Carrusel Inner -->
            <div class="carousel-inner">
                <!-- Carrusel Item -->
                <div class="item active bg-parallax item-1">
                    <div class="slider-content">
                        <div class="container">
                            <div class="slider-text text-center">
                                <h3 class="slide-title">Registro, <span>Identificación</span><br/> y <span>ubicación</span> de bicicletas</h3>
                                <p>
                                    <a href="#" class="slider btn btn-primary">Quienes Somos?</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- Carrusel Item Fin -->
                <!-- Carrusel Item -->
                <div class="item bg-parallax item-2">
                    <div class="slider-content">
                        <div class="col-md-12">
                            <div class="container">
                                <div class="slider-text text-center">
                                    <h3 class="slide-title">Registro, <span>Identificación</span><br/> y <span>ubicación</span> de bicicletas</h3>
                                    <p>
                                        <a href="#" class="slider btn btn-primary">Precios</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- Carrusel Item Fin -->
            </div>
            <!-- Carrusel Inner Fin -->
            <!-- Carrusel Controles -->
            <a class="left carousel-control" href="##main-slide" data-slide="prev">
				<span><i class="fa fa-angle-left"></i></span>
			</a>
            <a class="right carousel-control" href="##main-slide" data-slide="next">
				<span><i class="fa fa-angle-right"></i></span>
			</a>
            <!-- Carusel Controles Fin -->
        </div>
        <!-- Slider Fin -->
        
        <!-- Seccion de Caracteristicas -->
        <section class="features">
            <div class="container">
                <div class="row features-row">
                    <!-- Caja de Caracteristicas -->
                    <div class="feature-box col-md-4 col-sm-12">
                        <span class="feature-icon">
                            <i class="fa fa-bicycle fa-4x" aria-hidden="true"></i>
						</span>
                        <div class="feature-box-content">
                            <h3>1. Registro</h3>
                            <p>Ingrese la información de su bicicleta.</p>
                        </div>
                    </div>
                    <!-- Caja de Caracteristicas Fin -->
                    <!-- Caja de Caracteristicas -->
                    <div class="feature-box two col-md-4 col-sm-12">
                        <span class="feature-icon">
							<!-- <img src="/https://datosqr.com/biciregistro/images/icons/orange/add-bitcoins.png" alt="add bitcoins"> -->
                            <i class="fa fa-address-card-o fa-4x" aria-hidden="true"></i>
						</span>
                        <div class="feature-box-content">
                            <h3>2. Identificación</h3>
                            <p>Al escanear el QR identifique su bicicleta.</p>
                        </div>
                    </div>
                    <!-- Caja de Caracteristicas Fin -->
                    <!-- Caja de Caracteristicas -->
                    <div class="feature-box three col-md-4 col-sm-12">
                        <span class="feature-icon">
							<i class="fa fa-map-marker fa-4x" aria-hidden="true"></i>
						</span>
                        <div class="feature-box-content">
                            <h3>3. Ubicación</h3>
                            <p>Enter receiver's address, specify the amount and send.</p>
                        </div>
                    </div>
                    <!-- Caja de Caracteristicas Fin -->
                </div>
            </div>
        </section>
        <!-- Seccion de Caracteristicas Fin -->
        
        <!-- Seccion Quienes Somos -->
        <section class="about-us">
            <div class="container">
                <!-- Section Title -->
                <div class="row text-center">
                    <h2 class="title-head">Quienes <span>Somos</span></h2>
                    <div class="title-head-subtitle">
                        <p>Somos una empresa especializada en productos de identificación y ubicación de Bicicletas.</p>
                    </div>
                </div>
                <!-- Section Title Fin -->
                <!-- Section Content -->
                <div class="row about-content">
                    <!-- Image -->
                    <div class="col-sm-12 col-md-5 col-lg-6 text-center">
                        <img class="img-responsive img-about-us" src="https://datosqr.com/biciregistro/images/bike-cycling.gif" alt="about us">
                    </div>
                    <!-- Image Fin -->
                    <!-- Content -->
                    <div class="col-sm-12 col-md-7 col-lg-6">
                        <h3 class="title-about">Bici Registro</h3>
                        <p class="about-text">Es un sistema para el Registro, identificación y ubicación de Bicicletas.</p>
                        <ul class="nav nav-tabs">
                            <li class="active"><a data-toggle="tab" href="#menu1">Registro</a></li>
                            <li><a data-toggle="tab" href="#menu2">Identificación</a></li>
                            <li><a data-toggle="tab" href="#menu3">Ubicación</a></li>
                        </ul>
                        <div class="tab-content">
                            <div id="menu1" class="tab-pane fade in active">
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum, modi? Et, officia labore quis accusantium explicabo iste optio deleniti sunt culpa reiciendis delectus, eveniet, ipsam saepe ratione temporibus officiis ex!</p>
                            </div>
                            <div id="menu2" class="tab-pane fade">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio praesentium dolor incidunt, autem aspernatur reiciendis optio obcaecati, adipisci iure id dolore, animi harum ipsam exercitationem officiis fugiat quaerat molestias esse.</p>
                            </div>
                            <div id="menu3" class="tab-pane fade">
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab veritatis ipsa beatae aut, autem voluptatum nobis porro iure iste neque minus sunt aliquid sapiente fuga error amet natus rerum velit.</p>
                            </div>
                        </div>
                        <a class="btn btn-primary" href="#">Leer Más</a>
                    </div>
                    <!-- Content Fin -->
                </div>
                <!-- Section Content Fin -->
            </div>
        </section>
        <!-- Seccion Quienes Somos Fin -->

        <!-- Footer -->
        <footer class="footer">
            <!-- Footer Top Area -->
            <div class="top-footer">
                <div class="container">
                    <div class="row">
                        <!-- Footer Widget -->
                        <div class="col-sm-4 col-md-2">
                            <h4>Nuestra Empresa</h4>
                            <div class="menu">
                                <ul>
                                    <li><a href="#">Inicio</a></li>
                                    <li><a href="#">Quienes Somos</a></li>
                                    <li><a href="#">Servicios</a></li>
                                    <li><a href="#">Precios</a></li>
                                    <li><a href="#">Contactenos</a></li>
                                </ul>
                            </div>
                        </div>
                        <!-- Footer Widget Fin -->
                        <!-- Footer Widget -->
                        <div class="col-sm-4 col-md-2">
                            <h4>Ayuda y Soporte</h4>
                            <div class="menu">
                                <ul>
                                    <li><a href="#">FAQ</a></li>
                                    <li><a href="#">Terminos del servicio</a></li>
                                    <li><a href="register.html">Registrar</a></li>
                                    <li><a href="login.html">Login</a></li>
                                </ul>
                            </div>
                        </div>
                        <!-- Footer Widget Fin -->
                        <!-- Footer Widget -->
                        <div class="col-sm-4 col-md-3">
                            <h4>Contactenos </h4>
                            <div class="contacts">
                                <div>
                                    <span>juanpabloalvarezvalencia@gmail.com</span>
                                </div>
                                <div>
                                    <span>311 341 3378</span>
                                </div>
                                <div>
                                    <span>Armenia, Quindio</span>
                                </div>
                                <div>
                                    <span>Lunes a Viernes 08:00 am &#x21FE; 05:00 pm</span>
                                </div>
                            </div>
							<!-- Social Media Profiles -->
                            <div class="social-footer">
                                <ul>
                                    <li><a href="#" target="_blank"><i class="fa fa-facebook"></i></a></li>
                                    <li><a href="#" target="_blank"><i class="fa fa-twitter"></i></a></li>
                                    <li><a href="#" target="_blank"><i class="fa fa-google-plus"></i></a></li>
                                    <li><a href="#" target="_blank"><i class="fa fa-linkedin"></i></a></li>
                                </ul>
                            </div>
							<!-- Social Media Profiles Fin -->
                        </div>
                        <!-- Footer Widget Fin -->
						<!-- Footer Widget -->
                        <div class="col-sm-12 col-md-5">
							<!-- Facts -->
							<div class="facts-footer">
								<div>
									<h5>9.450</h5>
									<span>Registros</span>
								</div>
								<div>
									<h5>12.820</h5>
									<span>Mensajes Enviados</span>
								</div>
								<div>
									<h5>26</h5>
									<span>Paises</span>
								</div>
								<div>
									<h5>15.352</h5>
									<span>Stickers Impresos</span>
								</div>
							</div>
							<!-- Facts Fin -->
							<hr>
							<!-- Supported Payment Cards Logo -->
							<div class="payment-logos">
								<h4 class="payment-title">Formas de pago soportadas</h4>
								<img src="https://datosqr.com/biciregistro/images/icons/payment/american-express.png" alt="american-express">
								<img src="https://datosqr.com/biciregistro/images/icons/payment/mastercard.png" alt="mastercard">
								<img src="https://datosqr.com/biciregistro/images/icons/payment/visa.png" alt="visa">
								<img src="https://datosqr.com/biciregistro/images/icons/payment/paypal.png" alt="paypal">
								<img class="last" src="https://datosqr.com/biciregistro/images/icons/payment/maestro.png" alt="maestro">
							</div>
							<!-- Supported Payment Cards Logo Fin -->
                        </div>
                        <!-- Footer Widget Fin -->
                    </div>
                </div>
            </div>
            <!-- Footer Top Area Fin -->
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
export default {
  name: 'Home',
}
</script>
