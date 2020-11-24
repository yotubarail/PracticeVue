<template>
  <div>
    <h1>Vue-cli</h1>
    <h2>画像アップロード</h2>
    <FileUpload/>
    <h2>Chart.js</h2>
    <Chart/>
  </div>
</template>

<script>
import FileUpload from "@/components/FileUpload"
import Chart from "@/components/Chart.js"

  export default {
    components: {
      FileUpload,
      Chart
    }
  }
</script>

<style>

</style>
