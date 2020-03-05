<template>
  <div id="head">

    <div id="headHead">

      <div id="headHeadLeft">
        <div class="headHeadDecorate"></div>
      </div>

      <div id="headHeadMid">
        学生信息管理系统
      </div>

      <div id="headHeadRight">
        <div class="headHeadDecorate"></div>
      </div>

    </div>
  </div>
</template>

<script>
  export default {
    name: "Head"
  }
</script>

<style scoped>
  #head
  {
    width: 1200px;
    height: 111px;
    margin: 0 auto;
  }

  #headHead
  {
    width: 1200px;
    height: 39px;
    margin: 0 auto;
  }

  .headHeadDecorate
  {
    width: 400px;
    height: 4px;
    background-color: rgb(195,165,128);
  }

  #headHeadLeft
  {
    width: 400px;
    height: 39px;
    float: left;
    position: relative;
    top: 17px;
  }

  #headHeadMid
  {
    font-size: 26px;
    color:rgb(153,153,153);
    width: 400px;
    height: 39px;
    text-align: center;
    float: left;
  }

  #headHeadRight
  {
    width: 400px;
    height: 39px;
    float: right;
    position: relative;
    top: 17px;
  }
</style>