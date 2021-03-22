<template>
  <!-- Start Quote Section-->
    <div class="container-fluid py-3 section" id="about">
      <div class="row justify-content-center">
        <h2 class="text-center py-4 display-2">Fill out the details below to get your instant quote</h2>
      </div>
      <div class="row justify-content-center about quote">
        <form class="p-2 quote" v-on:submit.prevent="createQuote()">
          <v-card class="form-group p-3">
            <p class="h4 mb-10 text-center">Your Details</p>
            <label for="name">Full Name</label>
            <input v-model="newClientName" type="text" id="name" class="form-control mb-4" placeholder="Please enter your name...">
            <label for="email">Email</label>
            <input v-model="newEmail" type="email" id="email" class="form-control mb-4" placeholder="name@example.com">
            <label for="phone">Phone Number</label>
            <input v-model="newPhone" type="phone" id="phone" class="form-control mb-4" placeholder="(555) 555-555">
          </v-card>
          <!-- Start Select Services Section-->
          <v-card class="form-group p-3">
            <p class="h4 mb-10 text-center">Select Services</p>
            <div class="container">
              <div class="form-row">
                <div class="col-sm">
                    <div v-for="service in services" class="form-check flex-row">
                      <v-col cols="4 align-self-center">
                        <v-checkbox v-model="checkedServices" :id="service.title" @change="clickServiceCheckbox($event, service.id)" :value="service.id" class="align-self-center">
                          <!-- <input v-model="checkedServices" class="form-check-input" type="checkbox" :id="service.title" :value="service.id" @change="clickServiceCheckbox($event, service.id)"> -->
                          <template v-slot:label class="pt-5"><label style="top:15px">{{service.title}}</label></template>
                          <!-- <template v-slot:label class="row align-self-center" style="top:5px">{{service.title}}</template> --->
                        </v-checkbox>
                      </v-col>
                    </div>
                  <!-- For Debugg purposes -->
                  <!-- {{ checkedServices }} -->
                  <!-- <div class="form-check form-check">
                    <input v-model="newRoofServices" class="form-check-input" type="checkbox" id="roofsercices" value="roof-services">
                    <label class="form-check-label" for="roofsercices">Roof Services</label>
                  </div>
                  <div class="form-check form-check">
                    <input v-model="newGutterCleaning" class="form-check-input" type="checkbox" id="guttercleaning" value="gutter-cleaning">
                    <label class="form-check-label" for="guttercleaning">Gutter Cleaning</label>
                  </div>
                  <div class="form-check form-check">
                    <input v-model="newRustRemoval" class="form-check-input" type="checkbox" id="rustremoval" value="rust-removal">
                    <label class="form-check-label" for="rustremoval">Rust Removal</label>
                  </div> -->
                </div>
                <!-- <div class="col-sm">
                  <div class="form-check form-check">
                    <input v-model="newBuildingSqft" class="form-check-input" type="checkbox" id="house-building-wash" value="house-building-wash">
                    <label class="form-check-label" for="house-building-wash">House/Building Wash</label>
                  </div>
                  <div class="form-check form-check">
                    <input v-model="newPoolEnclosures"  class="form-check-input" type="checkbox" id="pool-enclosures" value="pool-enclosures">
                    <label class="form-check-label" for="pool=enclosures">Pool Enclosures</label>
                  </div>
                  <div class="form-check form-check">
                    <input v-model="newDriveway" class="form-check-input" type="checkbox" id="driveway-flat-surfaces" value="driveway-flat-services">
                    <label class="form-check-label" for="driveway-flat-surfaces">Driveway/Flat Surfaces</label>
                  </div>
                </div> -->
              </div>
            </div>
          </v-card>
          <!-- End Services Section -->
          <!-- Start Property Info Section -->
          <v-card class="form-group p-3" id="property-info">
            <p class="h4 mb-10 text-center">Property Information</p>
            <div class="container">
              <div class="form-row">
                <label for="projectTypeSelect">What type of project is this?</label>
                <select v-model="newProjectType" class="form-control" id="projectTypeSelect">
                  <option>Pick Project Type</option>
                  <option>Commercial</option>
                  <option>Residential</option>
                </select>
                <label for="buildingStories">How many floors are there?</label>
                <select v-model="newFloors"  class="form-control" id="buildingStories">
                  <option>Select The Number of Floors </option>
                  <option>1 story</option>
                  <option>2 stories</option>
                  <option>3 stories</option>
                  <option>4+ stories</option>
                </select>
                  <div class="form-row form-group my-2">
                    <label for="sqft" class="col-ms-2 col-form-label">Building Sqft</label>
                    <div class="col-sm-8">
                      <input v-model="newBuildingSqft" type="text" id="sqft" placeholder="sqft" class="form-control mb-4 ">
                    </div>
                  </div>
              </div>

            </div>
          </v-card>
          <!-- End Property Info Section -->
          <!-- Start Roof Cleaning Section -->
          <v-card class="form-group p-3 mb-2" id="roof-cleaning" v-if="services[0].visibility">
            <p class="h4 mb-10 text-center">Roof Cleaning</p><i class="fas fa-info-circle"></i>
            <div class="container">
              <div class="form-row">
                <label for="roofType">What Material Is The Roof Made Of?</label>
                <select v-model="newRoofMaterial" class="form-control" id="roofType">
                  <option>Select A Roof Type</option>
                  <option>Asphalt Shingle</option>
                  <option>Tile</option>
                  <option>Metal Rust</option>
                  <option>Cedar</option>
                  <option>Other</option>
                </select>
                <label for="roofPitch">How's The Walkability/Pitch of the Roof?</label>
                <select v-model="newPitchOfRoof"  class="form-control" id="roofPitch">
                  <option>Select Roof Pitch</option>
                  <option>1/12</option>
                  <option>2/12</option>
                  <option>3/12</option>
                  <option>4/12</option>
                  <option>5/12</option>
                  <option>6/12</option>
                  <option>7/12</option>
                  <option>8/12</option>
                  <option>9/12</option>
                  <option>10/12</option>
                  <option>11/12</option>
                  <option>12/12</option>
                </select>
              </div>
            </div>
          </v-card>
          <!-- End Roof Cleaning Section -->
          <!-- Start House/Building Section -->
          <v-card class="form-group p-3" id="house-washing" v-if="services[3].visibility">
            <p class="h4 mb-10 text-center">House/Building Wash</p>
            <div class="container">
              <div class="form-row">
                <label for="exteriorType">Exterior Material?</label>
                <select v-model="newExtType"  class="form-control" id="exteriorType">
                  <option>Select Exterior Type</option>
                  <option>Brick</option>
                  <option>Drywal/EIFS</option>
                  <option>Vinyl Sliding</option>
                  <option>Stucco</option>
                  <option>Wood</option>
                  <option>Aluminum</option>
                  <option>Hardie Board</option>
                  <option>Other</option>
                </select>
              </div>
              <div class="form-row">
                <label for="doorType">Will the screens from the windows need to be removed and tracks cleaned?</label>
                <v-radio-group v-model="newScreenRemoval">
                  <v-radio color="blue" value="true">Yes</v-radio>
                  <v-radio color="blue" value="false">No</v-radio>
                </v-radio-group>
              </div>
              <div class="form-row">
                <label for="doorType">Type of Door</label>
                <select v-model="newBuildingDoorType"  class="form-control" id="doorType">
                  <option>Select Door Type</option>
                  <option>Wood</option>
                  <option>Fiberglass Gel Coated</option>
                  <option>Glass</option>
                  <option>Steel</option>
                  <option>Other</option>
                </select>
              </div>
            </div>
          </v-card>
          <!-- End House/Building Section -->
          <!-- Start Gutter Cleaning Section -->
          <v-card class="form-group p-3" id="gutter-cleaning" v-if="services[1].visibility">
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
          <!-- End Gutter Cleaning Section -->
          <button class="btn btn-info btn-block my-4" type="submit">Submit</button>
        </form>
      </div>
    </div>
    <!--End quote section-->
</template>
<script>
import axios from "axios";
export default {
  data: function () {
    return {
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
