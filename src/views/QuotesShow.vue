<template>
  <div class="quotes-show">
    <div class="container-fluid py-3 section" id="about">
      <div class="row justify-content-center">
        <h1>{{ quote.client_name }}'s Quote</h1>
      </div>
      <div class="column justify-content-center about quote">
    <h4 class="text-center"><router-link to="/acp">Back To Admin Panel</router-link></h4>
    <v-card class="form-group p-2 justify-content-center">
      <v-container>
        <v-row>
          <v-col >
            <p class="h4 mb-10 text-center">Customer Details</p>
          </v-col>
        </v-row>
        <v-row>
          <v-col  >
            Client Name:
          </v-col>
          <v-col >
            {{quote.client_name}}
          </v-col>
        </v-row>
        <v-row>
          
          <v-col  class="text-left">
            Phone Number:
          </v-col>
          <v-col  class="text-left">
            {{quote.phone}}
          </v-col>
        </v-row>
        <v-row>
          <v-col >
            Email:
          </v-col>
          <v-col class="text-left">
            {{quote.email}}
          </v-col>
        </v-row>
      </v-container>     
    </v-card>
    <v-card class="form-group p-2 justify-content-center">
      <v-container>
        <v-row>
          <v-col >
            <p class="h4 mb-10 text-center">Property Information</p>
          </v-col>
        </v-row>
        <v-row>
          <v-col  >
            Project Type:
          </v-col>
          <v-col >
            {{quote.project_type}}
          </v-col>
        </v-row>
        <v-row>
          <v-col  class="text-left">
            Floors:
          </v-col>
          <v-col  class="text-left">
            {{quote.floors}}
          </v-col>
        </v-row>
        <v-row>
          <v-col >
            Building Sqft:
          </v-col>
          <v-col class="text-left">
            {{quote.building_sqft}} Sqft
          </v-col>
        </v-row>
      </v-container>     
    </v-card>
    <v-card class="form-group p-2 justify-content-center">
      <v-container>
        <v-row>
          <v-col >
            <p class="h4 mb-10 text-center">Services</p>
          </v-col>
        </v-row>
        <v-row>
          <v-col  >
            Client Name:
          </v-col>
          <v-col >
            {{quote.client_name}}
          </v-col>
        </v-row>
        <v-row>
          <v-col  class="text-left">
            Phone Number:
          </v-col>
          <v-col  class="text-left">
            {{quote.phone}}
          </v-col>
        </v-row>
        <v-row>
          <v-col >
            Email:
          </v-col>
          <v-col class="text-left">
            {{quote.email}}
          </v-col>
        </v-row>
      </v-container>     
    </v-card>
    <v-card class="form-group p-2 justify-content-center">
      <v-container>
        <v-row>
          <v-col >
            <p class="h4 mb-10 text-center">Building Wash</p>
          </v-col>
        </v-row>
        <v-row>
          <v-col  >
            Client Name:
          </v-col>
          <v-col >
            {{quote.client_name}}
          </v-col>
        </v-row>
        <v-row>
          <v-col  class="text-left">
            Phone Number:
          </v-col>
          <v-col  class="text-left">
            {{quote.phone}}
          </v-col>
        </v-row>
        <v-row>
          <v-col >
            Email:
          </v-col>
          <v-col class="text-left">
            {{quote.email}}
          </v-col>
        </v-row>
      </v-container>     
    </v-card>
    <v-card class="form-group p-2 justify-content-center">
      <v-container>
        <v-row>
          <v-col >
            <p class="h4 mb-10 text-center">Roof Cleaning</p>
          </v-col>
        </v-row>
        <v-row>
          <v-col  >
            Client Name:
          </v-col>
          <v-col >
            {{quote.client_name}}
          </v-col>
        </v-row>
        <v-row>
          <v-col  class="text-left">
            Phone Number:
          </v-col>
          <v-col  class="text-left">
            {{quote.phone}}
          </v-col>
        </v-row>
        <v-row>
          <v-col >
            Email:
          </v-col>
          <v-col class="text-left">
            {{quote.email}}
          </v-col>
        </v-row>
      </v-container>     
    </v-card>
    <v-card class="form-group p-2 justify-content-center">
      <v-container>
        <v-row>
          <v-col >
            <p class="h4 mb-10 text-center">Gutter Cleaning</p>
          </v-col>
        </v-row>
        <v-row>
          <v-col  >
            Client Name:
          </v-col>
          <v-col >
            {{quote.client_name}}
          </v-col>
        </v-row>
        <v-row>
          <v-col  class="text-left">
            Phone Number:
          </v-col>
          <v-col  class="text-left">
            {{quote.phone}}
          </v-col>
        </v-row>
        <v-row>
          <v-col >
            Email:
          </v-col>
          <v-col class="text-left">
            {{quote.email}}
          </v-col>
        </v-row>
      </v-container>     
    </v-card>
    <v-card class="form-group p-2 justify-content-center">
      <v-container>
        <v-row>
          <v-col >
            <p class="h4 mb-10 text-center">Driveway/Flat Surfaces</p>
          </v-col>
        </v-row>
        <v-row>
          <v-col  >
            Client Name:
          </v-col>
          <v-col >
            {{quote.client_name}}
          </v-col>
        </v-row>
        <v-row>
          <v-col  class="text-left">
            Phone Number:
          </v-col>
          <v-col  class="text-left">
            {{quote.phone}}
          </v-col>
        </v-row>
        <v-row>
          <v-col >
            Email:
          </v-col>
          <v-col class="text-left">
            {{quote.email}}
          </v-col>
        </v-row>
      </v-container>     
    </v-card>
    
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