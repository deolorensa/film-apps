<template>
  <carousel :autoplay="true">
  <slide v-for="(news,index) in newsList" :key="index">
    <div class="overflow-hidden relative h-96 shadow-xl dark:bg-slate-900  ">
      <router-link
        :to="{ name: 'detail', params: { id: news.show.name } }"
        tag="button"
      >
          <div class="static">
                <img v-if="news.show.image" :src="news.show.image.original" class="block absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2" alt="uploaded-image">
                <img v-else src="../assets/noImage.jpeg" class="block absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2" alt="default-image">
                <div class=" absolute max-w-sm p-4 text-center lg:text-left bg-white dark:bg-slate-900 top-2 left-2 rounded-xl opacity-70">
            <h1 class="text-xl dark:text-gray-200 font-bold pt-8 lg:pt-0"> {{ news.show.name }} </h1>
            <div class="mx-auto mx-0 w-4/5 pt-1 border-b-2 border-gray-300 opacity-25"></div>
                <div class="flex items-center mt-2">
                    <svg class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                    <p v-if="news.show.rating.average" class="ml-1 text-sm font-bold text-gray-700 dark:text-gray-200">{{ news.show.rating.average }}</p>
                    <p v-else class="ml-1 text-sm font-bold text-gray-700 dark:text-gray-200 ">unrated</p>
                </div>
            </div>
          </div>
      </router-link>
    </div>
  </slide>
</carousel>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel';
export default {
  components: {
    Carousel,
    Slide
  },
    computed: {
    newsList() {
      return this.$store.state.newsList
      
    }
  },
};
</script>

<style>

</style>