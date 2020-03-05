<template>
  <div id="app">
    <Head></Head>
    <Headbody></Headbody>
    <Table></Table>
  </div>
</template>

<script>
import Head from "@/components/Head";
import Headbody from "@/components/Headbody";
import Table from "@/components/Table";

export default {
  name: 'App',
  components: {
    Head,
    Headbody,
    Table
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
