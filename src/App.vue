<template>
<v-app>
  <div id="app">
    <div class="container-lg p-0 main-class">
      <!-- start topnav-->
      <nav class="navbar navbar-dark bg-primary text-white px-2 py-0 d-none d-md-flex mx-auto">
        <p><a class="text-white" href="tel:+13526825921">(352) 682 - 5921</a> | <a
            href="mailto:contact@ponthierandson.com" style="color:white;">contact@ponthierandson.com</a></p>
        <p><a class="text-white" href="/quote-new">Get A Free Quote Today!</a></p>
      </nav>
      <!--Start Main Nav-->
      <nav class="navbar navbar-expand-lg navbar-light p-0 sticky-top">
        <!--Start Nav Container-->
        <div class="container m-0 p-0 " id="nav-container">
          <!--Logo/Brand-->
          <a class="navbar-brand mb-0 pl-0" href="index"><img class="img-fluid nav-logo" src="/PSPW_Logo-01.png"></a>
          <!--End Brand-->
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#mainNav"
            aria-controls="mainNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="container menu-container">
            <!--Start Boostrap Menu Links-->
            <div class="collapse navbar-collapse ml-auto mt-2 mt-lg-2 justify-content-end" id="mainNav">
              <div class="navbar-nav">
                <a class="nav-link active" href="/">HOME <span class="sr-only">(current)</span></a>
                <a class="nav-link" href="/#about">ABOUT</a>
                <a class="nav-link" href="/#services">SERVICES</a>
                <a class="nav-link" href="/#beforeafter">PHOTOS</a>
                <a class="nav-link" href="/#testimonials">TESTIMONIALS</a>
                <a class="nav-link" href="/#contact">CONTACT</a>
              </div>
            </div>
            <!--End Bootstrap Menu Links-->
          </div>
        </div>
        <!--End Nav Container-->
      </nav>
      <router-view/>
      <!--Start Footer-->
      <footer class="d-flex flex-column align-items-center p-2">
        Copyright 2020 Ponthier & Son.
        Website Developed by <a href="https://todd.whitelow.tech">Todd Whitelow Jr.</a>
        <a href="/acp">Control Panel</a><br />
      </footer>
      <!--End Footer-->
    </div>
  </div>
</v-app>
</template>

<style>
</style>