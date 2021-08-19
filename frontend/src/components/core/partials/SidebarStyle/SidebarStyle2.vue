<template>
    <div class="iq-sidebar sidebar-dark-blue">
         <div class="iq-sidebar-logo d-flex justify-content-between">
            <router-link :to="{ name: 'dashboard.home-1' }">
                <img src="../../../../assets/images/logo-2.png"  class="img-fluid" alt="logo">
            </router-link>
         </div>
         <div id="sidebar-scrollbar">
            <nav class="iq-sidebar-menu" >
                <CollapseMenu :items="SideBarItems" :open="true"  :sidebarGroupTitle="false"/>
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
  name: 'SidebarStyle2',
  components: {
    CollapseMenu
  },
  mounted () {
    core.SmoothScrollbar()
  },
  data () {
    return {
      appName: APPNAME,
      SideBarItems
    }
  }
}
</script>
