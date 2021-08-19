<template>
     <div class="iq-sidebar" >
    <div class="iq-sidebar-logo d-flex justify-content-between">
      <router-link :to="{ name: 'dashboard.home-1' }">
        <div class="iq-light-logo">
          <img src="../../../../assets/images/logo.gif" class="img-fluid" alt="logo">
        </div>
        <div class="iq-dark-logo">
          <img src="../../../../assets/images/logo-dark.gif" class="img-fluid" alt="logo">
        </div>
        <span >{{ appName }}</span>
      </router-link>
      <div class="iq-menu-bt-sidebar">
        <div class="iq-menu-bt align-self-center">
          <div class="wrapper-menu" @click="sidebarMini">
            <div class="main-circle"><i class="ri-arrow-left-s-line"></i></div>
            <div class="hover-circle"><i class="ri-arrow-right-s-line"></i></div>
          </div>
        </div>
      </div>
    </div>
    <div id="sidebar-scrollbar">
      <nav class="iq-sidebar-menu" >
        <CollapseMenu :items="SideBarItems" :open="true"  :sidebarGroupTitle="true"/>
      </nav>
      <div class="p-3"></div>
    </div>
  </div>
</template>
<script>
import { core, APPNAME } from '../../../../config/pluginInit'
import CollapseMenu from '../../menus/CollapseMenu'
import SideBarItems from '../../../../FackApi/json/SideBar'

export default {
  name: 'SidebarStyle',
  components: {
    CollapseMenu
  },
  mounted () {
    core.SmoothScrollbar()
  },
  methods: {
    sidebarMini () {
      core.triggerSet()
    }
  },
  data () {
    return {
      appName: APPNAME,
      SideBarItems
    }
  }
}
</script>
