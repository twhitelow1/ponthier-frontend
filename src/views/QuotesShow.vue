<template>
  <div class="quotes-show">
    <div class="container-fluid py-10 section" id="about">
      <div class="row justify-content-center">
        <h1>{{ quote.customer_info.client_name }}'s Quote</h1>
      </div>
      <div class="column justify-content-center about quote py-5">
    <h4 class="text-center"><router-link to="/quotes">Back To All Quotes</router-link></h4>
    <!--- Quote Details --->
    <v-card class="form-group py-3  pjustify-content-center">
      <v-container>
        <v-row>
          <v-col >
            <p class="h4 mb-10 text-center">Quote Details</p>
          </v-col>
        </v-row>
        <v-row>
          <v-col class="text-center"  >
            Quote Status:
          </v-col>
          <v-col class="text-center" >
            <v-select 
                        :items="statuses" 
                        v-model="quote.status" 
                        id="status" 
                        label=""
                        :change="updateQuote(quote)"
                        >
                    </v-select>
          </v-col>
          <v-col class="text-center"  >
            Quoted Price:
          </v-col>
          <v-col class="text-center" >
            <v-text-field
              dense
              v-model="quote.price"
              :change="updateQuote(quote)"
            >
            {{parseFloat(quote.price).toFixed(2)}}
            </v-text-field>
          </v-col>
        </v-row>
      </v-container>     
    </v-card>
    <!--- / Quote Details --->
    <!--- Customer Details --->
    <v-card class="form-group py-3  pjustify-content-center">
      <v-container>
        <v-row>
          <v-col >
            <p class="h4 mb-10 text-center">Customer Details</p>
          </v-col>
        </v-row>
        <v-row>
          <v-col class="text-center"  >
            Client Name:
          </v-col>
          <v-col class="text-center" >
            {{quote.customer_info.client_name}}
          </v-col>
        </v-row>
        <v-row>
          
          <v-col  class="text-center" >
            Phone Number:
          </v-col>
          <v-col class="text-center"  >
            {{quote.customer_info.phone}}
          </v-col>
        </v-row>
        <v-row>
          <v-col class="text-center" >
            Email:
          </v-col>
          <v-col class="text-center" >
            {{quote.customer_info.email}}
          </v-col>
        </v-row>
      </v-container>     
    </v-card>
    <!--- / Customer Details --->
    <!--- Property Details --->
    <v-card class="form-group p-3  justify-content-center">
      <v-container>
        <v-row>
          <v-col >
            <p class="h4 mb-10 text-center">Property Information</p>
          </v-col>
        </v-row>
        <v-row>
          <v-col  class="text-center" >
            Project Type:
          </v-col>
          <v-col class="text-center text-capitalize" >
            {{quote.property_info.project_type}}
          </v-col>
        </v-row>
        <v-row>
          <v-col class="text-center" >
            Floors:
          </v-col>
          <v-col class="text-center text-capitalize" >
            {{quote.property_info.floors}}
          </v-col>
        </v-row>
        <v-row>
          <v-col class="text-center" >
            Building Sqft:
          </v-col>
          <v-col class="text-center" >
            {{quote.property_info.building_sqft}} Sqft
          </v-col>
        </v-row>
        <v-row>
          <v-col class="text-center" >
            Has Garage?:
          </v-col>
          <v-col class="text-center" v-if="quote.property_info.garage">
            Yes
          </v-col>
          <v-col class="text-center" v-if="!quote.property_info.garage">
            No
          </v-col>
        </v-row>
      </v-container>     
    </v-card>
    <!---/ Property Details --->
    <!--- Building Wash --->
    <v-card class="form-group p-3  justify-content-center" v-if="quote.building_wash.selected">
      <v-container >
        <v-row >
          <v-col >
            <p class="h4 mb-10 text-center">Building Wash</p>
          </v-col>
        </v-row>
        <v-row >
          <v-col class="text-center text-capitalize" >
            Exterior Wall Material:
          </v-col>
          <v-col class="text-center text-capitalize" >
            {{quote.building_wash.ext_material}}
          </v-col>
        </v-row>
        <v-row >
          <v-col class="text-center text-capitalize" >
            Screen Removal :
          </v-col> 
          <v-col class="text-center text-capitalize" v-if="quote.building_wash.screen_removal" >
            Yes
          </v-col>
          <v-col class="text-center text-capitalize" v-if="!quote.building_wash.screen_removal" >
            No
          </v-col>
        </v-row>
        <v-row >
          <v-col class="text-center text-capitalize" >
            Door Material:
          </v-col>
          <v-col class="text-center text-capitalize" >
            {{quote.building_wash.door_material}}
          </v-col>
        </v-row>
      </v-container>     
    </v-card>
    <!--- /Building Wash --->
    <!--- Roof Services --->
    <v-card class="form-group p-3 justify-content-center" v-if="quote.roof_services.selected">
      <v-container>
        <v-row>
          <v-col >
            <p class="h4 mb-10 text-center">Roof Services</p>
          </v-col>
        </v-row>
        <v-row>
          <v-col class="text-center text-capitalize"  >
            Roof Material:
          </v-col>
          <v-col class="text-center text-capitalize" >
            {{quote.roof_services.roof_material}}
          </v-col>
        </v-row>
        <v-row>
          <v-col class="text-center text-capitalize"  >
            Roof Pitch:
          </v-col>
          <v-col class="text-center text-capitalize"  >
            {{quote.roof_services.pitch_of_roof}}
          </v-col>
        </v-row>
      </v-container>     
    </v-card>
    <!--- /Roof Cleaning --->
    <!--- Gutter Cleaning --->
    <v-card class="form-group p-3 justify-content-center" v-if="quote.gutter_cleaning.selected">
      <v-container class="w-75">
        <v-row>
          <v-col >
            <p class="h4 mb-10 text-center">Gutter Cleaning</p>
          </v-col>
        </v-row>
        <v-row>
          <v-col class="text-center" >
            Gutter Sqft:
          </v-col>
          <v-col class="text-center" >
            {{quote.gutter_cleaning.gutter_sqft}}
          </v-col>
        </v-row>
      </v-container>     
    </v-card>
    <!--- /Gutter Cleaning --->
    <!--- Driveway/Flat Surfaces --->
    <v-card class="form-group p-3 justify-content-center" v-if="quote.flat_surfaces.selected">
      <v-container>
        <v-row>
          <v-col >
            <p class="h4 mb-10 text-center">Driveway/Flat Surfaces</p>
          </v-col>
        </v-row>
        <v-row>
          <v-col class="text-center text-capitalize" >
            Flat Surface Sqft:
          </v-col>
          <v-col class="text-center text-capitalize" >
            {{quote.flat_surfaces.flt_surface_sqft}}
          </v-col>
        </v-row>
        <v-row>
          <v-col  class="text-center text-capitalize" >
            Is a Driveway?:
          </v-col>
          <v-col  class="text-center text-capitalize" v-if="quote.flat_surfaces.driveway">
            Yes
          </v-col>
          <v-col  class="text-center text-capitalize" v-if="!quote.flat_surfaces.driveway">
            No
          </v-col>
        </v-row>
        <v-row v-if="quote.flat_surfaces.driveway">
          <v-col class="text-center text-capitalize" >
            Driveway Size:
          </v-col>
          <v-col class="text-center text-capitalize" >
            {{quote.flat_surfaces.driveway_size}}
          </v-col>
        </v-row>
        <v-row v-if="!quote.flat_surfaces.driveway">
          <v-col class="text-center text-capitalize" >
            Flat Surface Type:
          </v-col>
          <v-col class="text-center text-capitalize" >
            {{quote.flat_surfaces.driveway_size}}
          </v-col>
        </v-row>
      </v-container>     
    </v-card>
    <!--- /Driveway/Flat Surfaces --->
    <!--- Comments --->
    <v-card class="form-group p-3 justify-content-center" v-if="quote.comments">
      <v-container>
        <v-row>
          <v-col >
            <p class="h4 mb-10 text-center">Comments</p>
          </v-col>
        </v-row>
        <v-row>
          <v-col class="text-center" >
            {{quote.comments}}
          </v-col>
        </v-row>
      </v-container>     
    </v-card>
    <!--- /Comments --->

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
      statuses: ["submitted", "reviewed", "finalized"],
    };
  },
  created: function () {
    axios.get("/api/quotes/" + this.$route.params.id).then((response) => {
      console.log("quotes show", response);
      this.quote = response.data;
    });
  },
  methods: {
    updateQuote: function (quote) {
      var params = {
        user: {
          status: quote.status,
          price: quote.price,
        },
      };
      axios
        .patch("https://tranquil-lake-49156.herokuapp.com/api/quotes/" + quote.id, params)
        .then((response) => {
          console.log("quote update", response);
        })
        .catch((error) => {
          console.log("quote update error", error.response);
        });
    },
  },
};
</script>