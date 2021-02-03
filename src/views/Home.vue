<template>
  <div class="home">
    <Jumbotron/>
    <About/>
    <Services />
    <BeforeAfter/>
    <Testimonials />
    <ContactUs />
  </div>
</template>
<script>
import Jumbotron from "../components/Jumbotron";
import About from "../components/About";
import BeforeAfter from "../components/BeforeAfter";
import Services from "../components/Services";
import Testimonials from "../components/Testimonials";
import ContactUs from "../components/ContactUs";

export default {
  components: {
    Jumbotron,
    About,
    BeforeAfter,
    Services,
    Testimonials,
    ContactUs,
  },
  data: function () {
    return {
      photos: [],
    };
  },
};
</script>
