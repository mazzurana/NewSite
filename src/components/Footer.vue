<template>
  <b-footer color="stylish-color-dark" class="page-footer font-small pt-4 mt-4">
    <b-container class="text-left">
      <b-row>
        <b-col md="6">
          <h5 class="text-uppercase mb-4 mt-3 font-weight-bold">
            Footer Content
          </h5>
          <p>
            Here you can use rows and columns here to organize your footer
            content. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </p>
        </b-col>
        <hr class="clearfix w-100 d-md-none" />
        <b-col md="2">
          <h5 class="text-uppercase mb-4 mt-3 font-weight-bold">Links</h5>
          <ul class="list-unstyled">
            <li><a href="#!">Link 1</a></li>
            <li><a href="#!">Link 2</a></li>
            <li><a href="#!">Link 3</a></li>
            <li><a href="#!">Link 4</a></li>
          </ul>
        </b-col>
        <hr class="clearfix w-100 d-md-none" />
        <b-col md="2">
          <h5 class="text-uppercase mb-4 mt-3 font-weight-bold">Links</h5>
          <ul class="list-unstyled">
            <li><a href="#!">Link 1</a></li>
            <li><a href="#!">Link 2</a></li>
            <li><a href="#!">Link 3</a></li>
            <li><a href="#!">Link 4</a></li>
          </ul>
        </b-col>
        <hr class="clearfix w-100 d-md-none" />
        <b-col md="2">
          <h5 class="text-uppercase mb-4 mt-3 font-weight-bold">Links</h5>
          <ul class="list-unstyled">
            <li><a href="#!">Link 1</a></li>
            <li><a href="#!">Link 2</a></li>
            <li><a href="#!">Link 3</a></li>
            <li><a href="#!">Link 4</a></li>
          </ul>
        </b-col>
      </b-row>
    </b-container>
    <hr />
    <div class="text-center py-3">
      <ul class="list-unstyled list-inline mb-0">
        <li class="list-inline-item">
          <h5 class="mb-1">Register for free</h5>
        </li>
        <li class="list-inline-item">
          <a href="#" class="btn btn-danger btn-rounded">Sign up!</a>
        </li>
      </ul>
    </div>
    <hr />
    <div class="text-center">
      <ul class="list-unstyled list-inline">
        <li class="list-inline-item">
          <a class="btn-floating btn-sm btn-fb mx-1"
            ><i class="fa fa-facebook"> </i
          ></a>
        </li>
        <li class="list-inline-item">
          <a class="btn-floating btn-sm btn-tw mx-1"
            ><i class="fa fa-twitter"> </i
          ></a>
        </li>
        <li class="list-inline-item">
          <a class="btn-floating btn-sm btn-gplus mx-1"
            ><i class="fa fa-google-plus"> </i
          ></a>
        </li>
        <li class="list-inline-item">
          <a class="btn-floating btn-sm btn-li mx-1"
            ><i class="fa fa-linkedin"> </i
          ></a>
        </li>
        <li class="list-inline-item">
          <a class="btn-floating btn-sm btn-dribbble mx-1"
            ><i class="fa fa-dribbble"> </i
          ></a>
        </li>
      </ul>
    </div>
    <div class="footer-copyright text-center py-3">
      <b-container fluid>
        &copy; 2019 Copyright:
        <a href="https://www.bootstrap.com"> bootstrap.com </a>
      </b-container>
    </div>
  </b-footer>
</template>
<style></style>
<script>
export default {
  name: "Footer",
  data() {
    return {
      email: "",

      sessao: "",

      tipo: ""
    };
  }
};
</script>
