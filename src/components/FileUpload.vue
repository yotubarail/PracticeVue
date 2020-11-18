<template>
  <div>
    <label>
        ファイルアップロード
        <input type="file" ref="file" @change="setImage">
    </label>
    <img :src="data.image" alt="">
    <p>{{ data.name }}</p>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        data: {
          name: "",
          image: ""
        }
      };
    },
    methods: {
      setImage(e) {
        const files = this.$refs.file;
        const fileImg = files.files[0];
        if (fileImg.type.startsWith("image/")) {
          this.data.image = window.URL.createObjectURL(fileImg);
          this.data.name = fileImg.name;
          this.data.type = fileImg.type;
        }
      },
    }
  }
</script>

<style>
    label input {
        display: none;
    }

    label {
        padding: 0 1rem;
        border: solid 1px #888;
    } 
    
    img {
      width: 20%;
    }
</style>