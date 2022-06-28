<template>
  <nav class="bg-white dark:bg-slate-900 border-gray-200 dark:border-black px-2 sm:px-4 py-2.5 mb-3 border shadow-lg shadow-gray-200 dark:shadow-black">
    <div class="container flex flex-wrap justify-between items-center mx-auto px-20 py-1 ">
      <button class="self-center text-xl font-black whitespace-nowrap text-black dark:text-white lg:text-3xl">CAMPFLIX</button>
        <div class="flex md:order-2">
            <div class=" relative mr-3 md:mr-0 md:block">
                <div class="flex absolute inset-y-0 left-0 items-center px-3   ">
                    <svg class="w-5 h-5 text-black dark:text-white" 
                    fill="currentColor" 
                    viewBox="0 0 20 20" 
                    xmlns="http://www.w3.org/2000/svg"><path 
                    fill-rule="evenodd" 
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" 
                    clip-rule="evenodd"></path></svg>
                </div>
            <input v-model="keyword"
                @keyup.enter="searchArticles(keyword)"
                type="search"
                name="search"
                id="search" 
                class="p-2 pl-10 mr-3 w-full text-black bg-gray-50 dark:bg-slate-700 rounded-lg border border-gray-300 dark:border-black sm:text-sm" 
                placeholder="Search...">
            </div>
            <button class="px-3" @click="toggleDarkMode">
              <svg
                v-if="dark"
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6 text-white"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"
                />
              </svg>
              <svg
                v-else
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                  clip-rule="evenodd"
                />
              </svg>
            </button>
                <button ref="btnRef" v-on:mouseenter="toggleTooltip()" v-on:mouseleave="toggleTooltip()" class=" flex text-sm text-black dark:text-white font-semibold p-2 px-2 rounded-lg hover:bg-black hover:text-white">
                <!-- <img class="w-8 h-8 rounded-full bg-black" src="#" alt="user photo"> -->
                <span>Deo Lorensa</span>
                <img class="w-6 h-6 ml-3 rounded-full border" src="../assets/foto.png" alt="">
                <div ref="tooltipRef" v-bind:class="{'hidden': !tooltipShow, 'block': tooltipShow}" class="bg-white dark:bg-slate-700 border-0 mt-3 block z-50 font-normal leading-normal text-sm max-w-xs text-center no-underline break-words border border-2 border-black rounded-lg">
                  <div>
                    <div class="bg-white dark:bg-slate-700 text-black font-semibold p-3 mb-0 border-b border-solid border-slate-100 uppercase rounded-t-lg">
                      <img class="w-28 h-28 rounded-xl border border-2 " src="../assets/foto.png" alt="">
                    </div>
                    <div class="text-black dark:text-white p-3 font-bold">
                      Deo Lorensa
                    </div>
                  </div>
                </div>
                </button>
        </div>
    </div>
  </nav>
</template>

<script>
import { createPopper } from "@popperjs/core";
import { mapGetters, mapMutations } from 'vuex';

export default {
    name:'NavbarMain',
    data: () => ({
      keyword: "",
      tooltipShow: false
    }),
    computed: {
      ...mapGetters(['dark'])
    },
    methods: {
      searchArticles(keyword) {
        this.$store.dispatch("fetchNews", {
          keyword,
        });
      },
      toggleTooltip: function(){
      if(this.tooltipShow){
        this.tooltipShow = false;
      } else {
        this.tooltipShow = true;
        createPopper(this.$refs.btnRef, this.$refs.tooltipRef, {
          placement: "bottom"
        });
      }
      },
      // toggleDarkMode(){
      // this.isDark = !this.isDark;
      // localStorage.setItem('darkMode', this.isDark);
      // },
      ...mapMutations(['SET_DARK']),
      toggleDarkMode() {
        this.SET_DARK(!this.dark);
      }
    },
}
</script>

<style>

</style>