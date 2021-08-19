<template>
   <div>
    <Loader />
    <div class="wrapper">
       <SidebarStyle />
       <HeaderStyle />
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
import HeaderStyle from '../components/core/partials/HeaderStyle/HeaderStyle.vue'
import SidebarStyle from '../components/core/partials/SidebarStyle/SidebarStyle.vue'
import LayoutFooter from '../layouts/Components/LayoutFooter.vue'
import Loader from '../components/core/loader/Loader'
export default {
  name: 'Layout2',
  components: {
    Loader,
    HeaderStyle,
    SidebarStyle,
    LayoutFooter
  },
  mounted () {
    document.body.classList = ''
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
