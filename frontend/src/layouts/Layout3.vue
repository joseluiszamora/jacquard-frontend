<template>
  <div>
    <Loader />
    <div class="wrapper">
       <HeaderStyle1 />
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
import HeaderStyle1 from '../components/core/partials/HeaderStyle/HeaderStyle1.vue'
import LayoutFooter from '../layouts/Components/LayoutFooter.vue'
import Loader from '../components/core/loader/Loader'
export default {
  name: 'Layout3',
  components: {
    Loader,
    HeaderStyle1,
    LayoutFooter
  },
  mounted () {
    document.body.classList = 'iq-page-menu-horizontal'
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
