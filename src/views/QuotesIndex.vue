<template>
  <div class="quotes-index">
    <div class="container-fluid py-3 section" id="about">
      <div class="row justify-content-center">
        <h1>All Quotes</h1>
      </div>
      <div class="column justify-content-center about quote">
        <table class="table">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Client Name</th>
              <th scope="col">Email</th>
              <th scope="col">Phone</th>
            </tr>
          </thead>
          <tbody> 
            <tr v-for="quote in quotes">
              <th scope="row"> {{quote.id}}</th>
              <td><a v-bind:href="'/quotes/'+ quote.id" :key="quote.id" alt="Click To View Quote">{{ quote.customer_info.client_name }}</a></td>
              <td><a v-bind:href="'mailto:' + quote.customer_info.email" alt="Click To Email Client">{{ quote.customer_info.email }}</a></td>
              <td><a v-bind:href="'tel:' + quote.customer_info.phone" alt="Click To Call Client">{{ quote.customer_info.phone }}</a></td>
            </tr>
          </tbody>
        </table>  
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
  created: function () {
    axios.get("/api/quotes").then((response) => {
      console.log("quotes index", response);
      this.quotes = response.data;
    });
  },
  methods: {},
};
</script>