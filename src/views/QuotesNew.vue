<template>
  <!-- Start Quote Section-->
    <div class="container-fluid py-3 section justify-content-center" id="about">
      <div class="row justify-content-center">
        <h2 class="text-center p-4 display-2">
          Fill out the form below to get your <b class="text-success">FREE</b> quote
        </h2>
      </div>
      <div class="row justify-content-center about">
        <validation-observer
          ref="observer"
          v-slot="{ invalid }"
        >
          <v-form ref="form" class="p-2 quote justify-content-center" v-on:submit.prevent="createQuote()">
            <v-card class="form-group p-3 ">
              <p class="h4 mb-10 text-center">Your Details</p>
              <validation-provider
                v-slot="{ errors }"
                name="Name"
                rules="required|max:10"
              >
                <v-text-field
                  v-model="newClientName"
                  label="Full Name"
                  id="name"
                  :counter="10"
                  :error-messages="errors"
                  required>
                </v-text-field>
              </validation-provider>
              <validation-provider v-slot="{ errors }" name="email" rules="required|email">
                <v-text-field
                  v-model="newEmail"
                  label="Email"
                  id="email"
                  :error-messages="errors"
                  required>
                </v-text-field>
              </validation-provider>
              <validation-provider
                v-slot="{ errors }"
                name="phoneNumber"
                :rules="{
                  required: true,
                  digits: 7,
                  regex: '^(71|72|74|76|81|82|84|85|86|87|88|89)\\d{5}$'
                }"
              >
                <v-text-field
                  v-model="newPhone"
                  label="Phone Number"
                  id="email"
                  :counter="7"
                  :error-messages="errors"
                  required>
                </v-text-field>
              </validation-provider>
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
              <p class="h4 mb-8 text-center">Select Services</p>
              <v-container>
                <v-row style="height:100%;">
                  <v-col lg="4" sm="6" xs="12" :key="service.id" v-for="service in services" class="form-check justify-content-center align-middle" > 
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
                    <v-col cols="11">
                      <v-select 
                          :items="roofPitches" 
                          v-model="newPitchOfRoof" 
                          id="roofPitch" 
                          label="How's The Walkability/Pitch of the Roof?">
                      </v-select>
                    </v-col>
                    <v-col class="align-baseline" cols="1">
                      <v-dialog
                        v-model="dialog"
                        width="500"
                      >
                      <template v-slot:activator="{on, attrs}">
                        <font-awesome-icon v-bind="attrs" v-on="on" :icon="['fas', 'info-circle']" alt="More Information"></font-awesome-icon>
                      </template>

                    <!--- Dialog --->
                      <v-card>
                        <v-card-title class="headline grey lighten-2">
                          Roof Pitches Diagram
                        </v-card-title>

                        <v-img 
                          src="/roof-pitch-diagram.png"
                        >
                        </v-img>

                        <v-divider></v-divider>

                        <v-card-actions>
                          <v-spacer></v-spacer>
                          <v-btn
                            color="primary"
                            text
                            @click="dialog = false"
                          >
                            Close
                          </v-btn>
                        </v-card-actions>
                      </v-card>
                    </v-dialog>
                    </v-col>
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
                  <v-radio-group v-model="newScreenRemoval" id="screenRemoval" label="Will the screens from the windows need to be removed and tracks cleaned?">
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
              <v-container>
                <v-row>
                  <v-text-field
                    v-model="newGutterSqft"
                    label="Total Sqft of gutters?"
                    id="gutterSqft"
                    required>
                  </v-text-field>
                </v-row>
              </v-container>
            </v-card>
            <!-- End Gutter Cleaning Section -->
            <!-- Start Driveway/Flat Surfaces Section -->
            <v-card class="form-group p-3" id="driveway-flat" v-if="services[4].visibility">
              <p class="h4 mb-10 text-center">Driveway/Flat Surfaces Cleaning</p>
              <v-container>
                <v-row>
                  <v-text-field
                    v-model="newFltSurfaceSqft"
                    label="Total Sqft of Driveway/Flat Surfaces?"
                    id="flatSurfaceSqft"
                    required>
                  </v-text-field>
                </v-row>
                <v-row>
                  <v-select 
                      :items="drivewaySizes" 
                      v-model="newDrivewaySize" 
                      id="drivewaySize" 
                      label="What Size Driveway?">
                  </v-select>
                </v-row>
              </v-container>
            </v-card>
            <!-- End Driveway/Flat Surfaces Section -->
            <button class="btn btn-info btn-block my-4" type="submit">Submit</button>
          </v-form>
        </validation-observer>
      </div>
    </div>
    <!--End quote section-->
</template>
<script>
import { required, digits, email, max, regex } from "vee-validate/dist/rules";
import { extend, ValidationObserver, ValidationProvider, setInteractionMode } from "vee-validate";
import axios from "axios";

setInteractionMode("eager");

extend("digits", {
  ...digits,
  message: "{_field_} needs to be {length} digits. ({_value_})",
});

extend("required", {
  ...required,
  message: "{_field_} can not be empty",
});

extend("max", {
  ...max,
  message: "{_field_} may not be greater than {length} characters",
});

extend("regex", {
  ...regex,
  message: "{_field_} {_value_} does not match {regex}",
});

extend("email", {
  ...email,
  message: "Email must be valid",
});

export default {
  components: {
    ValidationProvider,
    ValidationObserver,
  },
  data: function () {
    return {
      valid: true,
      dialog: false,
      //Form Validation
      nameRules: [
        (v) => !!v || "Name is required",
        (v) => (v && v.length <= 10) || "Name must be less than 10 characters",
      ],
      emailRules: [(v) => !!v || "E-mail is required", (v) => /.+@.+\..+/.test(v) || "E-mail must be valid"],
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
      drivewaySizes: ["1 Car", "2 Car", "3 Car", "4 Car"],
    };
  },
  created: function () {},
  methods: {
    clickServiceCheckbox: function (e, id) {
      this.services[id - 1].visibility = !this.services[id - 1].visibility;
      console.log(`services: ${this.services}`);
    },
    createQuote: function () {
      this.$refs.observer.validate();
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

<style>
.form-group p,
.form-group label {
  color: #2a5478;
}
.form-group {
  background-color: whitesmoke !important;
}
.v-input__slot {
  align-items: baseline !important;
}
.v-input__slot H5 {
  color: #2a5478;
}
.btn-info {
  color: white !important;
  background-color: #2a5478;
  border-color: #2a5478;
}
</style>
