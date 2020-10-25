<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src
import axios from "axios";

export default Vue.extend({
  name: "Home",
  components: {
    HelloWorld
  },
  mounted: function() {
    console.log("test");
    axios.get("/api/test").then(response => {
      console.log(response);
    });
  }
});
</script>
