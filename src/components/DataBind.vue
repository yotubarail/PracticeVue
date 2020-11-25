<template>
    <div>
        <h1>$emitでデータ受け渡し</h1>
        <input type="text" v-model="text">
        <button @click="click">送信</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            text: "hoge"
        }
    },
    methods: {
        click() {
            this.$emit("emit", this.text)
        }
    }
}
</script>

<style>

</style>