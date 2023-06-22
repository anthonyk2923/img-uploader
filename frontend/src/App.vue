<template>
  <div align="center" class="shadow-lg p-3 mb-5 bg-light rounded opacity-75">
    <Info />
    <BtnToggle @showFormButton="showFormButton" :btnClass="btnClass" :btnText="btnText" />
  </div>
  <Form v-show=showForm :btnClass="btnClass" @showFormButton="showFormButton" :btnText="btnText" @postData="postData" />
  <div id="cards-parent-container" class="row row-cols-1 row-cols-md-3 g-4 p-5 p-5 ">
    <Card v-for="index in data" :key="index" :data="index" />
  </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.css';
import BtnToggle from "./components/btnToggle"
import Form from "./components/form"
import Info from "./components/Info"
import Card from "./components/Card"

export default {
  name: 'App',
  components: {
    Form,
    BtnToggle,
    Info,
    Card

  },
  data() {
    return {
      showForm: false,
      btnClass: 'btn-success',
      btnText: "Show form",
      data: null,
    }
  },
  methods: {
    showFormButton() {
      this.showForm = !this.showForm
      if (this.showForm == true) {
        this.btnClass = "btn-danger"
        this.btnText = "Hide form"
      }
      else {
        this.btnClass = "btn-success"
        this.btnText = "Show form"

      }
    },

  },
  mounted: async function () {
    const fetchData = await fetch('/api/img').then(res => res.json())
    this.data = fetchData
  }
}


</script>

<style>
body {
  background-image: url('https://images.unsplash.com/32/Mc8kW4x9Q3aRR3RkP5Im_IMG_4417.jpg?crop=entropy&cs=srgb&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTV8fGJhY2tncm91bmQlMjBpbWFnZXxlbnwwfHx8fDE2ODczNjkwNjB8MA&ixlib=rb-4.0.3&q=85');
}
</style>