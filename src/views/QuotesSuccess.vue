<template>
  <div class="quote-success">
    <div class="container-fluid py-3 section" id="about">
      <div class="row justify-content-center">
        <h1>Success</h1>
      </div>
      <div class="column justify-content-center about quote">
        Quote Submitted Successfully. We will be in contact with you soon.
    </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      quotes: [],
    };
  },
  created: function () {},
  methods: {},
};
</script>

<style >
.quote-success {
  min-height: 100%;
}
.footer {
}
</style>