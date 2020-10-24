<template>
  <div class="goods-item">
    <img :src="goodsItem.show.img" alt="">
    <div class="goods-info">
      <p>{{ goodsItem.title }}</p>
      <span class="price">{{ goodsItem.price }}</span>
      <span class="collect"></span>
      <span class="cfav">{{ goodsItem.cfav }}</span>
    </div>

  </div>
</template>

<script>

export default {
  name: 'GoodsListItem',
  props: {
    goodsItem: {
      type: Object,
      default() {
        return {}
      }
    }
  }
}
</script>

<style scoped>
.goods-item {
  width: 48%;
  position: relative;
  padding-bottom: 60px;

}

.goods-item img {
  width: 100%;
  border-radius: 5px;
  margin-bottom: 10px;
}

.goods-info {
  position: absolute;
  left: 0;
  right: 0;
  overflow: hidden;
  text-align: center;
}

.goods-info p {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-bottom: 3px;
}
.goods-info .price{
  color: #ff8198;
  margin-right: 20px;
}
.goods-info .cfav{
  position: relative;
}
.goods-info .cfav::before{
  position: absolute;
  left: -15px;
  top: -1px;
  width: 14px;
  height: 14px;
  background:url("~assets/img/common/collect.svg") 0 0/14px 14px ;
  content: "";
}
</style>
