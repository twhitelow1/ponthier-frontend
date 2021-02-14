<template>
  <div class="quotes-show">
    <div class="container-fluid py-3 section" id="about">
      <div class="row justify-content-center">
        <h1>Single Quote</h1>
      </div>
      <div class="column justify-content-center about quote">
    <h2>{{ quote.name }}</h2>
    <img v-bind:src="quote.url" v-bind:alt="quote.name" />
    <p>Client Name: {{ quote.client_name }}</p>
    <p>Phone: {{ quote.phone }}</p>
    <p>Email: {{ quote.email }}</p>
    <p>Project Type: {{ quote.project_type }}</p>
    <p>Floors: {{ quote.floors }}</p>
    <p>Building_Sqft: {{ quote.building_sqft }}</p>
    <p>Roof Material: {{ quote.roof_material }}</p>
    <p>Pitch of Roof: {{ quote.pitch_of_roof }}</p>
    <p>Garage: {{ quote.garage }}</p>
    <p>Exterior Type: {{ quote.ext_type }}</p>
    <p>Flat Surface Sqft: {{ quote.flt_surface_sqft }}</p>
    <p>Enclosure Height: {{ quote.enclosure_height }}</p>
    <p>Pool Deck Type: {{ quote.pool_deck_type }}</p>
    <p>Gutter Guard Removal: {{ quote.gutter_guard_remove }}</p>
    <p>Gutter Guard Rinse: {{ quote.gutter_guard_rinse }}</p>
    <p>Roof Services: {{ quote.roof_services }}</p>
    <p>Gutter Cleaning: {{ quote.gutter_cleaning }}</p>
    <p>House Wash: {{ quote.house_wash }}</p>
    <p>Pool Enclosures: {{ quote.pool_enclosures }}</p>
    <p>Driveway: {{ quote.driveway }}</p>

    <router-link to="/quotes">Back to all quotes</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      quote: {},
    };
  },
  created: function () {
    axios.get("/api/quotes/" + this.$route.params.id).then((response) => {
      console.log("quotes show", response);
      this.quote = response.data;
    });
  },
  methods: {},
};
</script>