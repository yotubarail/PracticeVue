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
    <VforTable/>
  </div>
</template>

<script>
import FileUpload from "@/components/FileUpload"
import Chart from "@/components/Chart.js"
import DataBind from "@/components/DataBind"
import ChartBox from "../src/components/ChartBox.vue"
import TabTable from "./components/TabTable.vue"
import　VforTable from "./components/VforTable.vue"

  export default {
    components: {
      FileUpload,
      Chart,
      DataBind,
      ChartBox,
      TabTable,
      VforTable
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
