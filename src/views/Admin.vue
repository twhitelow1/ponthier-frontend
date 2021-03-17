<template>
  <div class="container-fluid py-3 section" id="admin">
      <div class="row justify-content-center">
        <h2 class="text-center py-4 display-5">Admin Panel</h2>
      </div>
      <div class="row align-items-center about">
        <div class="col-lg px-20">
          <p><a href="/quotes">Manage Quotes</a></p>
          <p><a href="">Manage Before & After Photos</a></p>
        </div>
      </div>
    </div>
    <!--End about section-->
</template>
<script>
export default {
  components: {},
  data: function () {
    return {
      photos: [],
    };
  },
};
</script>
