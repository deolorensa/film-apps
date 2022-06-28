<template>
<body class=" leading-normal bg-white dark:bg-slate-900">
    <router-link to="/">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 mt-3 ml-4 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
      <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
      </svg>
    </router-link>
  <div class="max-w-4xl flex items-center h-auto lg:h-screen flex-wrap mx-auto my-32 lg:my-0">
  <div id="profile" class="w-3/5 rounded-lg lg:rounded-l-lg lg:rounded-r-none shadow-2xl bg-white opacity-75 mx-6 lg:mx-0">
    <div class="p-4 md:p-12 bg-gray-100 dark:bg-slate-700 text-center lg:text-left">
      <h1 class="text-3xl font-bold pt-8 lg:pt-0 dark:text-white"> {{ detail.show.name }} </h1>
      <div class="mx-auto lg:mx-0 w-4/5 pt-3 border-b-2 border-green-500 opacity-25"></div>
        <div class="flex items-center mt-2">
          <svg class="w-7 h-7 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
          <p v-if="detail.show.rating.average" class="ml-1 text-xl font-bold text-gray-700 dark:text-gray-200">{{ detail.show.rating.average }}</p>
          <p v-else class="ml-1 text-xl font-bold text-gray-700 dark:text-gray-200 ">unrated</p>
        </div>
          <p v-if="detail.show.summary" class="pt-8 text-sm text-gray-700 dark:text-gray-200">{{ detail.show.summary }}</p>
          <p v-else class="pt-8 text-sm text-gray-700 dark:text-gray-200"> No Description</p>
      </div>
    </div>
  <div class="w-full lg:w-2/5">
    <img v-if="detail.show.image" :src="detail.show.image.original" alt="" class="rounded-none lg:rounded-lg shadow-2xl hidden lg:block">
    <img v-else src="../assets/noImage.jpeg"  alt="" class="rounded-none lg:rounded-lg shadow-2xl hidden lg:block">
  </div>
</div>
</body>
</template>

<script>
export default {
    computed: {
    newsList() {
      return this.$store.state.newsList
    },
    detail() {
      return this.newsList.find(
        (newsList) => newsList.show.name === this.$route.params.id
      );
    },
  },
}
</script>

<style>

</style>