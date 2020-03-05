<template>
  <div id="content">
    <table>
      <tr style="background-color: rgb(218,222,235);">
        <th><input type="checkbox" id="allchecks" name="ck" onclick="ckAll()"/></th>
        <th style="width: 60px;height: 55px;">序号</th>
        <th style="width: 200px;height: 55px;">学号</th>
        <th style="width: 120px;height: 55px;">姓名</th>
        <th style="width: 260px;height: 55px;">学院</th>
        <th style="width: 120px;height: 55px;">专业</th>
        <th style="width: 100px;height: 55px;">年级</th>
        <th style="width: 60px;height: 55px;">班级</th>
        <th style="width: 80px;height: 55px;">年龄</th>
        <th style="width: 160px;height: 55px;">操作</th>
      </tr>
      <tr style="background-color: rgb(218,222,235);">
        <th><input type="checkbox"/></th>
        <th style="width: 60px;height: 55px;"> </th>
        <th style="width: 200px;height: 55px;">学号</th>
        <th style="width: 120px;height: 55px;">姓名</th>
        <th style="width: 260px;height: 55px;">学院</th>
        <th style="width: 120px;height: 55px;">专业</th>
        <th style="width: 100px;height: 55px;">年级</th>
        <th style="width: 60px;height: 55px;">班级</th>
        <th style="width: 80px;height: 55px;">年龄</th>
        <th style="width: 160px;height: 55px;">操作</th>
      </tr>
    </table>
  </div>
</template>

<script>
  export default {
    name: "Table"
  }
</script>

<style scoped>
  #content
  {
    width: 1200px;
    height: 457px;
    margin: 0 auto;
  }
</style>