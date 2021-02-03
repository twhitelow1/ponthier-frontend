<template>
  <!--Start Contact-->
    <div class="container-fluid" id="contact">
      <div class="row justify-content-center">
        <div class="col-sm">
          <h2 class="text-center py-4">Contact Us</h2>
          <p class="text-center h4">This form if for general inquiries.</p>
          <a href="/quote"><p class="text-center text-warning h5">Click This Link For A Free Quote</p></a><br>
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="form-container col-sm">
          <form class="form-container" method="POST" action="https://formspree.io/myynqrqp">
            <div class="form-group row">
              <label class="col-form-label col-4" for="name">Name: </label>
              <div class="col-8">
                <input type="text" name="name" placeholder="Your Name" id="name" class="form-control" required>
              </div>
            </div>
            <div class="form-group row">
              <label class="col-form-label col-4" for="email">Email: </label>
              <div class="col-8">
                <input type="email" name="email" placeholder="example@email" id="email" class="form-control" required>
              </div>
            </div>
            <div class="form-group row">
              <label class="col-form-label col-4" for="phone">Phone: </label>
              <div class="col-8">
                <input type="text" name="phone" placeholder="555-555-5555" id="phone" class="form-control" required>
              </div>
            </div>
            <div class="form-group row">
              <label class="col-form-label col-4" for="phone">Phone: </label>
              <div class="col-8">
                <textarea name="message" placeholder="What would you like to say..." id="message" class="form-control"
                  required></textarea>
              </div>
            </div>
            <div class="form-group row">
              <div class="offset-4 offset-lg-5">
                <button name="submit" type="submit" class="btn btn-primary">Submit</button>
                <button name="clear" type="reset" class="btn btn-primary">Reset</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
    <!--End Contact-->
</template>
<script>
export default {};
</script>
