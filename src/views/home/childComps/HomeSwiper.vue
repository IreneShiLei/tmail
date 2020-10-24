<template>
  <Swiper>
    <swiper-item v-for="item in banners ">
      <a :href="item.link">
        <img :src="item.image" alt="">
      </a>
    </swiper-item>
  </Swiper>

</template>

<script>
  import {Swiper, SwiperItem} from "@/components/common/swiper/index"
	export default {
		name: "HomeSwiper",
    components: {
		  Swiper,
      SwiperItem
    },
    props: {
		  banners: {
		    type: Array,
        default: []
      }
    }
	}
</script>

<style scoped>

</style>
