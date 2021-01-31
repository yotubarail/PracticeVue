<template>
  <div>
    <div class="btn-group btn-group-toggle mb-3">
      <label class="btn btn-outline-primary" v-for="(btnItem, key) in foods" :key="key" :class="[key == 0 ? {active: isActive == key} : '', {active: isActive == key}]">
        <input type="radio" :value="key" v-model="isActive">{{ btnItem.category }}
      </label>
    </div>

    <div class="cover-table">
      <table class="table table-border border mb-0 food-table">
        <thead>
          <tr>
            <th class="food-name border-right">名前</th>
            <th class="food-place">産地</th>
          </tr>
        </thead>
      </table>

      <div class="overflow-auto table-body" v-for="(item, key) in foods" :key="key">
        <table class="table table-border border food-table" v-show="isActive == key">
          <tbody>
            <tr v-for="(tableItem, key) in item.kinds" :key="key">
              <td class="food-name border-right">{{ tableItem.name }}</td>
              <td class="food-place">{{ tableItem.place }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      isActive: 0,
      foods: [
        {
          category: "野菜",
          kinds: [
            {
              name: "じゃがいも",
              place: "北海道"
            },
            {
              name: "人参",
              place: "北海道"
            },
            {
              name: "大根",
              place: "神奈川県"
            },
            {
              name: "トマト",
              place: "熊本県"
            },
          ]
        },
        {
          category: "肉",
          kinds: [
            {
              name: "豚肉",
              place: "鹿児島県"
            },
            {
              name: "鶏肉",
              place: "宮崎県"
            },
            {
              name: "牛肉",
              place: "北海道"
            },
            {
              name: "猪肉",
              place: "兵庫県"
            },
          ]
        },
        {
          category: "果物",
          kinds: [
            {
              name: "りんご",
              place: "青森県"
            },
            {
              name: "梨",
              place: "千葉県"
            },
            {
              name: "みかん",
              place: "和歌山県"
            },
            {
              name: "桃",
              place: "山梨県"
            },
            {
              name: "りんご",
              place: "青森県"
            },
            {
              name: "梨",
              place: "千葉県"
            },
            {
              name: "みかん",
              place: "和歌山県"
            },
            {
              name: "桃",
              place: "山梨県"
            },
            {
              name: "りんご",
              place: "青森県"
            },
            {
              name: "梨",
              place: "千葉県"
            },
            {
              name: "みかん",
              place: "和歌山県"
            },
            {
              name: "桃",
              place: "山梨県"
            },
          ]
        },
      ]
    }
  }
}
</script>

<style scoped>
.cover-table {
  width: 418px;
}

.table-body {
  max-height: 200px;
}

.food-table {
  width: 400px;
}

.food-name, .food-place {
  width: 200px;
}
</style>