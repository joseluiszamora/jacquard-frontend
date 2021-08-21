<template>
<div>
  <footer class="iq-footer">
    <div class="container-fluid">
      <div class="row">
        <div class="col-lg-6">
          <!-- <ul class="list-inline mb-0">
            <li class="list-inline-item"><a href="#">Privacy Policy</a></li>
            <li class="list-inline-item"><a href="#">Terms of Use</a></li>
          </ul> -->
        </div>
        <div class="col-lg-6 text-right">
          @ 2021 <a href="#">{{ appName }}</a>.
        </div>
      </div>
    </div>
  </footer>
  <FloatingButton />
</div>
</template>
<script>
import FloatingButton from './FloatingButton.vue'
import { APPNAME } from '../../config/pluginInit'
export default {
  name: 'LayoutFooter',
  components: {
    FloatingButton
  },
  data () {
    return {
      appName: APPNAME
    }
  }
}
</script>
