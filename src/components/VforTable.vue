<template>
  <div class="container">
    <table class="table table-border">
      <thead>
        <tr>
          <th>名前</th>
          <th>値段</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in items" :key="index">
          <td>{{ item.name }}</td>
          <td>
            <input type="text" class="form-control form-control-sm" v-model="item.price">
          </td>
        </tr>
      </tbody>
    </table>
    <button class="btn btn-primary" :disabled = "!updatePrive">更新</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [{
        name: "肉",
        price: 0
      },
      {
        name: "野菜",
        price: 0
      }],
      preprice: 0
    }
  },
  computed: {
    updatePrive() {
      return this.items.some(item => item.price !== this.preprice);
    }
  }
}
</script>