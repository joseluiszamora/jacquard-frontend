<template>
    <div>
          <div class="iq-sidebar-small bg-primary">
            <div class="sidebar-top">
                <div class="iq-sidebar-small-logo">
                    <router-link to="/">
                    <img src="../../../../assets/images/logo-2.png" :class="`img-fluid ${logoClass}`" alt="">
                    </router-link>
                </div>
                <div class="sidebar-menu-icon">
                    <router-link :to="item.link" class="iq-waves-effect" v-b-tooltip.right.hover :title="item.title" v-for="(item, index) in bookmark" :key="index">
                    <i :class="`${item.icon}`"></i>
                    </router-link>
                </div>
            </div>
            <div class="sidebar-bottom">
            <div class="sidebar-menu-icon">
                <a href="account-setting.html" class="iq-waves-effect" data-toggle="tooltip" data-placement="right" title="" data-original-title="Setting"><i class="ri-settings-2-fill"></i></a>
                <div class="iq-menu-bt align-self-center">
                    <div class="wrapper-menu" @click="sidebarMini">
                        <div class="menu-close"><i class="ri-arrow-left-line"></i></div>
                        <div class="menu-open"><i class="ri-arrow-right-line"></i></div>
                    </div>
                </div>
            </div>
            </div>
          </div>
          <div class="iq-sidebar">
               <div class="iq-sidebar-logo d-flex justify-content-between">
                    <router-link :to="{ name: 'dashboard.home-1' }">
                        <span >{{ appName }}</span>
                    </router-link>
               </div>
               <div id="sidebar-scrollbar">
                    <nav class="iq-sidebar-menu" >
                        <CollapseMenu :items="SideBarItems" :open="true"  :sidebarGroupTitle="true"/>
                    </nav>
                     <div class="p-3"></div>
                </div>
          </div>
    </div>
</template>
<script>
import { core, APPNAME } from '../../../../config/pluginInit'
import { mapGetters } from 'vuex'
import CollapseMenu from '../../menus/CollapseMenu'
import SideBarItems from '../../../../FackApi/json/SideBar'
export default {
  name: 'SidebarStyle1',
  props: {
    logoClass: { type: String, default: '' }
  },
  components: {
    CollapseMenu
  },
  mounted () {
    core.SmoothScrollbar()
  },
  data () {
    return {
      appName: APPNAME,
      SideBarItems: SideBarItems
    }
  },
  computed: {
    ...mapGetters({
      bookmark: 'Setting/bookmarkState'
    })
  },
  methods: {
    sidebarMini () {
      core.triggerSet()
    }
  }

}
</script>
