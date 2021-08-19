<template>
  <div>
    <Loader />
    <div class="wrapper">
       <SidebarStyle1 logoClass="w-75" />
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
import SidebarStyle1 from '../components/core/partials/SidebarStyle/SidebarStyle1.vue'
import LayoutFooter from '../layouts/Components/LayoutFooter.vue'
import Loader from '../components/core/loader/Loader'
export default {
  name: 'Layout5',
  components: {
    Loader,
    HeaderStyle,
    SidebarStyle1,
    LayoutFooter
  },
  mounted () {
    document.body.classList = 'two-sidebar'
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
