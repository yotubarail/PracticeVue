<template>
  <div>
    <h1>Vue-cli</h1>
    <h2>画像アップロード</h2>
    <FileUpload/>
    <h2>Chart.js</h2>
    <Chart/>
    <DataBind @emit="recieve"/>
    <div id="databind-result">
      <p>{{ text }}</p>
    </div>
    <ChartBox class="mb-5"/>
    <TabTable/>
  </div>
</template>

<script>
import FileUpload from "@/components/FileUpload"
import Chart from "@/components/Chart.js"
import DataBind from "@/components/DataBind"
import ChartBox from "../src/components/ChartBox.vue"
import TabTable from "./components/TabTable.vue"

  export default {
    components: {
      FileUpload,
      Chart,
      DataBind,
      ChartBox,
      TabTable
    },
    data() {
      return {
        text: ""
      }
    },
    methods: {
      recieve(data1) {
        this.text = data1
      }
    }
  }
</script>

<style>

</style>
