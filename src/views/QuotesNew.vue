<template>
  <!-- Start Quote Section-->
    <div class="container-fluid py-3 section justify-content-center" id="about">
      <div class="row justify-content-center">
        <h2 class="text-center py-4 display-2">Fill out the details below to get your instant quote</h2>
      </div>
      <div class="row justify-content-center about">
        <v-form class="p-2 quote justify-content-center" v-on:submit.prevent="createQuote()">
          <v-card class="form-group p-3">
            <p class="h4 mb-10 text-center">Your Details</p>
            <v-text-field
              v-model="newClientName"
              label="Full Name"
              id="name"
              required>
            </v-text-field>
            <v-text-field
              v-model="newEmail"
              label="Email"
              id="email"
              required></v-text-field>
            <v-text-field
              v-model="newPhone"
              label="Phone Number"
              id="email"
              required></v-text-field>
          </v-card>
          <!-- Start Property Info Section -->
          <v-card class="form-group p-3 mb-4" id="property-info">
            <p class="h4 mb-10 text-center">Property Information</p>
            <v-container>
              <v-row class="form-row">
                <v-col class="d-flex" cols="12"> 
                  <v-select 
                    :items="projectTypes" 
                    v-model="newProjectType" 
                    id="projectTypeSelect" 
                    label="What type of project is this?">
                  </v-select>
                </v-col>
              </v-row>
              <v-row class="form-row">
                <v-col class="d-flex" cols="12">
                  <v-select 
                    :items="howManyFloors" 
                    v-model="newFloors" 
                    id="buildingStories" 
                    label="How many floors does the building have?">
                  </v-select>
                </v-col>
              </v-row>
              <v-row>
                <v-col>
                  <v-text-field 
                    v-model="newBuildingSqft"
                    label="Building Sqft">
                  </v-text-field>
                </v-col>
              </v-row>
            </v-container>
          </v-card>
          <!-- End Property Info Section -->
          <!-- Start Select Services Section-->
          <v-card class="form-group p-5">
            <v-container>
              <v-row class="text-center">
                <p class="h4 mb-8 text-center">Select Services</p>
              </v-row>
              <v-row style="height:100%;">
                <v-col no-gutters justify-space-around cols="6" :key="service.id" v-for="service in services" class="form-check justify-content-center align-middle" > 
                    <v-checkbox v-model="checkedServices" :id="service.title" @change="clickServiceCheckbox($event, service.id)" :value="service.id" class="align-middle ">
                      <template v-slot:label class="pt-3 align-middle"><H5 class="align-middle">{{service.title}}</h5></template>
                    </v-checkbox>
                </v-col>
              </v-row>
            </v-container>
          </v-card>
          <!-- End Services Section -->
          <!-- Start Roof Cleaning Section -->
          <v-card class="form-group p-3 mb-4" id="roof-cleaning" v-if="services[0].visibility">
            <p class="h4 mb-10 text-center">Roof Cleaning</p>
            <v-container>
              <v-row>
                <v-select 
                    :items="roofMaterials" 
                    v-model="newRoofMaterial" 
                    id="roofType" 
                    label="What Material is the roof made of?">
                </v-select>
              </v-row>
              <v-row>
                <v-select 
                    :items="roofPitches" 
                    v-model="newPitchOfRoof" 
                    id="roofPitch" 
                    label="How's The Walkability/Pitch of the Roof?">
                </v-select>
              </v-row>
            </v-container>
          </v-card>
          <!-- End Roof Cleaning Section -->
          <!-- Start House/Building Section -->
          <v-card class="form-group p-3 mb-4" id="house-washing" v-if="services[3].visibility">
            <p class="h4 mb-10 text-center">House/Building Wash</p>
            <v-container>
              <v-row>
                <v-select 
                    :items="exteriorMaterials" 
                    v-model="newExtType" 
                    id="exteriorType" 
                    label="What Material are the exterior walls made of?">
                </v-select>
              </v-row>
              <v-row>
                <label for="screenRemoval">Will the screens from the windows need to be removed and tracks cleaned?</label>
              </v-row>
              <v-row>
                <v-radio-group v-model="newScreenRemoval" id="screenRemoval" >
                  <v-radio color="blue" value="true" label="Yes">Yes</v-radio>
                  <v-radio color="blue" value="false" label="No">No</v-radio>
                </v-radio-group>
              </v-row>
              <v-row>
                <v-select 
                    :items="doorTypes" 
                    v-model="newBuildingDoorType" 
                    id="doorType" 
                    label="What Material are the exterior doors made of?">
                </v-select>
              </v-row>
            </v-container>
          </v-card>
          <!-- End House/Building Section -->
          <!-- Start Gutter Cleaning Section -->
          <v-card class="form-group p-3 mb-4" id="gutter-cleaning" v-if="services[1].visibility">
            <p class="h4 mb-10 text-center">Building Gutters Wash</p>
            <div class="container">
              <div class="form-row">
                <div class="form-row form-group my-2m">
                    <label for="sqft" class="col-ms-2 col-form-label">Total Sqft of gutters?</label>
                      <input v-model="newGuttersSqft" type="text" id="gutterSqft" placeholder="sqft" class="form-control mb-4 ">
                  </div>
              </div>
            </div>
          </v-card>
          <!-- End Gutter Cleaning Section -->
          <!-- Start Driveway/Flat Surfaces Section -->
          <v-card class="form-group p-3" id="drivewat-flat" v-if="services[4].visibility">
            <p class="h4 mb-10 text-center">Driveway/Flat Surfaces Cleaning</p>
            <div class="container">
              <div class="form-row">
                <div class="form-row form-group my-2m">
                    <label for="sqft" class="col-ms-2 col-form-label">Total Sqft of Driveway/Flat Surfaces?</label>
                      <input v-model="newFltSurfaceSqft" type="text" id="flatSurfaceSqft" placeholder="sqft" class="form-control mb-4 ">
                  </div>
              </div>
              <div class="form-row">
                <div class="form-row form-group my-2m">
                  <label for="buildingStories">What size drive way?</label>
                  <select v-model="newDrivewaySize"  class="form-control" id="drivewaySize">
                    <option>Select</option>
                    <option>1 car</option>
                    <option>2 car</option>
                    <option>3 car</option>
                    <option>4 car</option>
                  </select>
                </div>
              </div>
            </div>
          </v-card>
          <!-- End Driveway/Flat Surfaces Section -->
          <button class="btn btn-info btn-block my-4" type="submit">Submit</button>
        </v-form>
      </div>
    </div>
    <!--End quote section-->
</template>
<script>
import axios from "axios";
export default {
  data: function () {
    return {
      //form values
      newClientName: "",
      newEmail: "",
      newPhone: "",
      newProjectType: "",
      newFloors: "",
      newBuildingSqft: "",
      newRoofMaterial: "",
      newPitchOfRoof: "",
      newGarage: "",
      newExtType: "",
      newFltSurfaceSqft: "",
      newEnclosureHeight: "",
      newPoolDeckType: "",
      newGutterGuardRemove: "",
      newBuildingDoorType: "",
      newGutterGuardRinse: "",
      newRoofServices: "",
      newGutterCleaning: "",
      newGutterSqft: "",
      newPoolEnclosures: "",
      newHouseWash: "",
      newDriveway: "",
      newRustRemoval: "",
      checkedServices: [],
      // Types of services
      services: [
        {
          id: 1,
          title: "Roof Services",
          visibility: false,
        },
        {
          id: 2,
          title: "Gutter Cleaning",
          visibility: false,
        },
        {
          id: 3,
          title: "Rust Removal",
          visibility: false,
        },
        {
          id: 4,
          title: "House/Building Wash",
          visibility: false,
        },
        {
          id: 5,
          title: "Driveway/Flat Surfaces",
          visibility: false,
        },
      ],
      //Answers to dropdown boxes
      projectTypes: ["Residential", "Commercial"],
      howManyFloors: ["1", "2", "3", "4"],
      roofMaterials: ["Asphalt Shingle", "Tile", "Metal Rust", "Cedar", "Other"],
      roofPitches: ["1/12", "2/12", "3/12", "4/12", "5/12", "6/12", "7/12", "8/12", "9/12", "10/12", "11/12", "12/12"],
      exteriorMaterials: [
        "Brick",
        "Vinyl Siding",
        "Drywall/EIFS",
        "Stucco",
        "Wood",
        "Aluminum",
        "Hardie Board",
        "Other",
      ],
      doorTypes: ["Wood", "Fiberglass-Composite", "Steel", "Aluminum", "Other"],
    };
  },
  created: function () {},
  methods: {
    clickServiceCheckbox: function (e, id) {
      this.services[id - 1].visibility = !this.services[id - 1].visibility;
      console.log(`services: ${this.services}`);
    },
    createQuote: function () {
      var params = {
        clientName: this.newClientName,
        email: this.newEmail,
        phone: this.newPhone,
        projectType: this.newProjectType,
        floors: this.newFloors,
        buildingSqft: this.newBuildingSqft,
        roofMaterial: this.newRoofMaterial,
        pitchOfRoof: this.newPitchOfRoof,
        garage: this.newGarage,
        extType: this.newExtType,
        fltSurfaceSqft: this.newFltSurfaceSqft,
        enclosureHeight: this.newEnclosureHeight,
        poolDeckType: this.newPoolDeckType,
        gutterGuardRemove: this.newGutterGuardRemove,
        gutterGuardRinse: this.newGutterGuardRinse,
        roofServices: this.newRoofServices,
        gutterCleaning: this.newGutterCleaning,
        houseWash: this.newHouseWash,
        poolEnclosures: this.newPoolEnclosures,
        driveway: this.newDriveway,
        rustRemoval: this.newRustRemoval,
      };
      axios
        .post("/api/quotes", params)
        .then((response) => {
          console.log("quotes create", response);
          this.$router.push("/");
        })
        .catch((error) => {
          console.log("quote create error", error.response);
          this.errors = error.response.data.errors;
        });
    },
  },
};
</script>
