<template>
    <div class="flex overflow-x-scroll pb-10 scrollbar ">
        <div class="flex flex-nowrap ml-5">
          <div v-for="(news,index) in newsList" :key="index" class="inline-block px-3">
                <router-link
                  :to="{ name: 'detail', params: { id: news.show.name } }"
                  tag="button"
                >
            <div class="w-40 h-72 max-w-xs overflow-hidden rounded-lg shadow-md bg-white dark:bg-slate-800 border border-gray-50 dark:border-slate-900 hover:shadow-2xl transform transition duration-500 hover:scale-110 my-3">
              <img v-if="news.show.image" :src="news.show.image.medium" alt="uploaded-image">
              <img v-else src="../assets/noImage.jpeg"  alt="default-image">
                <!-- <img :src="news.show.image ? news.show.image.medium : '@/src/assets/page.jpg' " alt=""> -->
                <h5 class="pl-2 pt-2 text-sm text-left font-bold tracking-tight text-gray-900 dark:text-white">{{ news.show.name }}</h5>
                <div class="flex items-center pl-2">
                    <svg class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                    <!-- <p class="ml-2 text-sm font-bold text-gray-900 dark:text-white">{{ news.show.rating ? news.show.rating.average : 'unrated' }}</p> -->
                    <p v-if="news.show.rating.average" class="ml-1 text-xs font-semibold text-gray-700 dark:text-gray-200">{{ news.show.rating.average }}</p>
                    <p v-else class="ml-1 text-xs font-semibold text-gray-700 dark:text-gray-200 ">unrated</p>
                </div>
                <!-- {{ news.show.image ? news.show.image.medium : "test" }} -->
            </div>
            </router-link>
          </div>
        </div>
      </div>
</template>

<script>
export default {
    computed: {
    newsList() {
      return this.$store.state.newsList
      
    }
  },
}
</script>

<style>
.hide-scroll-bar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
.hide-scroll-bar::-webkit-scrollbar {
  display: none;
}

</style>