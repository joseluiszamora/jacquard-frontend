<template>
   <div>
    <Loader />
    <div class="wrapper">
       <HeaderStyle2 />
       <div class="content-page" id="content-page">
           <transition name="router-anim" enter-active-class="animated  fadeInUp" mode="out-in"
                    leave-active-class="animated fadeOut" >
              <router-view />
            </transition>
        </div>
     </div>
    <LayoutFooter />
  </div>
</template>
<script>
import HeaderStyle2 from '../components/core/partials/HeaderStyle/HeaderStyle2.vue'
import LayoutFooter from '../layouts/Components/LayoutFooter.vue'
import Loader from '../components/core/loader/Loader'
export default {
  name: 'Layout4',
  components: {
    Loader,
    HeaderStyle2,
    LayoutFooter
  },
  mounted () {
    document.body.classList = 'top-tab-horizontal'
  },
  destroyed () {
    document.body.classList = ''
  }
}
</script>
<style>
  @import url("../assets/css/custom.css");
  @import url("../assets/css/PriceSlider.css");
</style>
