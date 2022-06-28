<template>
  <div class="bg-white dark:bg-slate-900">
    <navbar-main/>
    <body class="container mx-auto px-20 py-5 bg-white dark:bg-slate-900">
      <div class="rounded-xl">
        <carousel-bar/>
      </div>
      <div class="py-8">
        <div class="border py-5 bg-white dark:bg-slate-800 rounded-lg border-gray-200 dark:border-gray-900">
          <p class="text-2xl text-black font-bold p-3 ml-5 dark:text-white">Find Your Movie</p>
          <card-content/>
          <!-- <div class="flex flex-col bg-white m-auto p-auto">
          <h1 class="flex py-5 lg:px-20 md:px-10 px-5 lg:mx-40 md:mx-20 mx-5 font-bold text-4xl text-gray-800">Example</h1>
          </div> -->
        </div>
      </div>
    </body>
  </div>
</template>

<script>
// import JumbotronMain from '../components/JumbotronMain.vue'
import NavbarMain from '../components/NavbarMain.vue'
import CardContent from '@/components/CardContent.vue'
import CarouselBar from '@/components/CarouselBar.vue'

export default {
  components: {
    NavbarMain,
    // JumbotronMain,
    CardContent,
    CarouselBar
},
  computed: {
    newsList() {
      return this.$store.state.newsList
    }
  },
  mounted() {
    this.fetchNews({
      keyword:"" || "girls",
    })
  },
  methods: {
    async fetchNews({keyword}) {
      await this.$store.dispatch('fetchNews',{
        keyword,
      })
    }
  },
}
</script>
