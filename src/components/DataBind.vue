<template>
    <div>
        <h1 :class={style:isActive}>$emitでデータ受け渡し</h1>
        <input type="text" v-model="text" placeholder="入力">
        <button @click="click">送信</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            text: "",
            isActive: true
        }
    },
    methods: {
        click() {
            this.$emit("emit", this.text);
            this.isActive = !this.isActive
        }
    }
}
</script>

<style>
.style {
    color: red;
    font-size: 3rem;
}
</style>