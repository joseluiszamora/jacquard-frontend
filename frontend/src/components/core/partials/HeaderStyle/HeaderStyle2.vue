<template>
  <div class="iq-top-navbar">
        <div class="top-menu">
             <div class="container">
                  <div class="row">
                        <div class="col-sm-12">
                            <div class="iq-navbar-custom-menu d-flex align-items-center justify-content-between">
                                <div class="iq-sidebar-logo">
                                    <div class="top-logo">
                                        <router-link :to="{ name: 'dashboard.home-1' }" class="logo">
                                            <div class="iq-light-logo">
                                                <img src="../../../../assets/images/logo.gif" class="img-fluid" alt="logo">
                                            </div>
                                            <div class="iq-dark-logo">
                                                <img src="../../../../assets/images/logo-dark.gif" class="img-fluid" alt="logo">
                                            </div>
                                            <span>{{ appName }}</span>
                                        </router-link>
                                    </div>
                                </div>
                                  <nav class="navbar navbar-expand-lg navbar-light p-0">
                                <b-navbar-toggle target="nav-collapse" class="">
                                <i class="ri-menu-3-line"></i>
                                </b-navbar-toggle>
                                <div class="iq-menu-bt align-self-center" v-if="$route.meta.layout !== 'two-sidebar'">
                                <div class="wrapper-menu" @click="sidebarMini">
                                    <div class="main-circle"><i class="ri-arrow-left-s-line"></i></div>
                                    <div class="hover-circle"><i class="ri-arrow-right-s-line"></i></div>
                                </div>
                                </div>
                                <b-collapse id="nav-collapse" is-nav>
                                    <ul class="navbar-nav ml-auto navbar-list">
                                    <li class="nav-item" v-nav-toggle>
                                        <a class="search-toggle iq-waves-effect language-title" href="#"><img :src="selectedLang.image" alt="img-flaf" class="img-fluid mr-1" style="height: 16px; width: 16px;" /> <i class="ri-arrow-down-s-line"></i></a>
                                        <div class="iq-sub-dropdown">
                                        <a class="iq-sub-card" href="javascript:void(0)" v-for="(lang, i) in langsOptions" :key="`Lang${i}`" @click="langChange(lang)">
                                            <img :src="lang.image" alt="img-flaf" class="img-fluid mr-2" />{{ lang.title }}
                                        </a>
                                        </div>
                                    </li>
                                    <li class="nav-item" v-nav-toggle>
                                        <div class="iq-sub-dropdown">
                                        <div class="iq-card shadow-none m-0">
                                            <div class="iq-card-body p-0 ">
                                            <div class="bg-primary p-3">
                                                <h5 class="mb-0 text-white">{{ $t('nav.allCarts') }}</h5>
                                            </div>
                                            <div class="iq-sub-card" v-for="(item, index) in cartItems" :key="index">
                                                <div class="media align-items-center">
                                                <div class="w-20 text-center d-none justify-content-center d-md-block">
                                                    <img :src="item.image" :alt="item.name" class="w-100 align-self-center mr-3" />
                                                </div>
                                                <div class="media-body ml-3">
                                                    <b-button variant=" iq-bg-danger mt-3" size="sm" class="float-right" @click="removeToCart(item)">X</b-button>
                                                    <h6 class="mb-0 ">{{ item.name.substring(0,20) + '...' }}</h6>
                                                    <p class="mb-0 font-size-12">{{ item.description.substring(0,20) + '...' }}</p>
                                                    <p class="mb-0"><b>$ {{ item.price }}</b></p>
                                                </div>
                                                </div>
                                            </div>
                                            <router-link :to="{ name: 'app.e-commerce.cart'}"><b-button variant=" iq-bg-primary" block><i class="fas fa-cart-plus"/>{{ $t('nav.viewCarts') }}</b-button></router-link>
                                            </div>
                                        </div>
                                        </div>
                                    </li>
                                    <li class="nav-item" v-nav-toggle>
                                        <a href="#" class="search-toggle iq-waves-effect">
                                        <lottie :option="require('../../../../assets/images/small/lottie-bell')" id="lottie-beil" />
                                        <span class="bg-danger dots"></span>
                                        </a>
                                        <div class="iq-sub-dropdown">
                                        <div class="iq-card shadow-none m-0">
                                            <div class="iq-card-body p-0 ">
                                            <div class="bg-primary p-3">
                                                <h5 class="mb-0 text-white">{{ $t('nav.allNotifications') }}<small class="badge  badge-light float-right pt-1">4</small></h5>
                                            </div>
                                            <a href="#" class="iq-sub-card" v-for="(item, index) in notification" :key="index">
                                                <div class="media align-items-center">
                                                <div class="">
                                                    <img class="avatar-40 rounded" :src="item.image" alt="img">
                                                </div>
                                                <div class="media-body ml-3">
                                                    <h6 class="mb-0 ">{{ item.name }}</h6>
                                                    <small class="float-right font-size-12">{{ item.date }}</small>
                                                    <p class="mb-0">{{ item.description}}</p>
                                                </div>
                                                </div>
                                            </a>
                                            </div>
                                        </div>
                                        </div>
                                    </li>
                                    <li class="nav-item" v-nav-toggle>
                                        <a href="#" class="search-toggle iq-waves-effect">
                                        <lottie :option="require('../../../../assets/images/small/lottie-mail')" id="lottie-mail" />
                                        <span class="bg-primary count-mail"></span>
                                        </a>
                                        <div class="iq-sub-dropdown">
                                        <div class="iq-card shadow-none m-0">
                                            <div class="iq-card-body p-0 ">
                                            <div class="bg-primary p-3">
                                                <h5 class="mb-0 text-white">{{ $t('nav.allMessages') }}<small class="badge  badge-light float-right pt-1">5</small></h5>
                                            </div>
                                            <a href="#" class="iq-sub-card" v-for="(item,index) in message" :key="index">
                                                <div class="media align-items-center">
                                                <div class="">
                                                    <img class="avatar-40 rounded" :src="item.image" alt="img">
                                                </div>
                                                <div class="media-body ml-3">
                                                    <h6 class="mb-0 ">{{ item.name }}</h6>
                                                    <small class="float-left font-size-12">{{ item.date }}</small>
                                                </div>
                                                </div>
                                            </a>
                                            </div>
                                        </div>
                                        </div>
                                    </li>
                                </ul>
                              </b-collapse>
                                <ul class="navbar-list">
                                <li class="rounded" v-nav-toggle>
                                     <a href="#" class="search-toggle iq-waves-effect d-flex align-items-center">
                                        <img src="../../../../assets/images/user/1.jpg" class="img-fluid rounded mr-3" alt="user">
                                        <div class="caption">
                                            <h6 class="mb-0 line-height">Nik jone</h6>
                                            <span class="font-size-12 text-primary">Available</span>
                                        </div>
                                     </a>
                                      <div class="iq-sub-dropdown iq-user-dropdown">
                                        <div class="iq-card shadow-none m-0">
                                            <div class="iq-card-body p-0 ">
                                            <div class="bg-primary p-3">
                                                <h5 class="mb-0 text-white line-height">Hello Nik jone</h5>
                                                <span class="text-white font-size-12">{{ $t('nav.user.available') }}</span>
                                            </div>
                                            <router-link :to="{ name: 'user.profile'}" class="iq-sub-card iq-bg-primary-hover">
                                                <div class="media align-items-center">
                                                <div class="rounded iq-card-icon iq-bg-primary">
                                                    <i class="ri-file-user-line"></i>
                                                </div>
                                                <div class="media-body ml-3">
                                                    <h6 class="mb-0 ">{{ $t('nav.user.profileTitle') }}</h6>
                                                    <p class="mb-0 font-size-12">{{ $t('nav.user.profileSub') }}</p>
                                                </div>
                                                </div>
                                            </router-link>
                                            <router-link :to="{ name: 'user.edit'}" class="iq-sub-card iq-bg-primary-hover">
                                                <div class="media align-items-center">
                                                <div class="rounded iq-card-icon iq-bg-primary">
                                                    <i class="ri-profile-line"></i>
                                                </div>
                                                <div class="media-body ml-3">
                                                    <h6 class="mb-0 ">{{ $t('nav.user.profileEditTitle') }}</h6>
                                                    <p class="mb-0 font-size-12">{{ $t('nav.user.profileEditSub') }}</p>
                                                </div>
                                                </div>
                                            </router-link>
                                            <router-link :to="{name: 'user.account-setting'}" class="iq-sub-card iq-bg-primary-hover">
                                                <div class="media align-items-center">
                                                <div class="rounded iq-card-icon iq-bg-primary">
                                                    <i class="ri-account-box-line"></i>
                                                </div>
                                                <div class="media-body ml-3">
                                                    <h6 class="mb-0 ">{{ $t('nav.user.accountSettingTitle') }}</h6>
                                                    <p class="mb-0 font-size-12">{{ $t('nav.user.accountSettingSub') }}</p>
                                                </div>
                                                </div>
                                            </router-link>
                                            <router-link :to="{name: 'user.privacy-setting'}" class="iq-sub-card iq-bg-primary-hover">
                                                <div class="media align-items-center">
                                                <div class="rounded iq-card-icon iq-bg-primary">
                                                    <i class="ri-lock-line"></i>
                                                </div>
                                                <div class="media-body ml-3">
                                                    <h6 class="mb-0 ">{{ $t('nav.user.privacySettingTitle') }}</h6>
                                                    <p class="mb-0 font-size-12">{{ $t('nav.user.privacySettingSub')}}</p>
                                                </div>
                                                </div>
                                            </router-link>
                                            <div class="d-inline-block w-100 text-center p-3">
                                                <a class="btn btn-primary dark-btn-primary" href="javascript:void(0)" @click="logout" role="button">{{ $t('nav.user.signout') }}<i class="ri-login-box-line ml-2"></i></a>
                                            </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                </ul>
                            </nav>
                            </div>
                        </div>
                  </div>
             </div>
        </div>
        <div class="tab-menu-horizontal">
            <div class="container">
                <div class="row">
                    <div class="iq-menu-horizontal-tab">
                        <div class="iq-sidebar-menu">
                            <CollapseMenu :items="items" :open="true" :horizontal="true" :sidebarGroupTitle="false" class="collapse-menu"/>
                            <HoverMenu :items="items" :sidebarGroupTitle="false" class="hover-menu" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
  </div>
</template>
<script>
import CollapseMenu from '../../menus/CollapseMenu'
import HoverMenu from '../../menus/HoverMenu'
import { core, APPNAME } from '../../../../config/pluginInit'
import { mapActions, mapGetters } from 'vuex'
import langChange from '../../../../Mixins/langchange'
import HorizontalItems from '../../../../FackApi/json/HorizontalMenu'
export default {
  name: 'HeaderStyle2',
  mixins: [langChange],
  components: {
    HoverMenu,
    CollapseMenu
  },
  data () {
    return {
      appName: APPNAME,
      items: HorizontalItems,
      notification: [
        { image: require('../../../../assets/images/user/user-01.jpg'), name: 'Emma Watson Nik', date: 'Just Now', description: '95 MB' },
        { image: require('../../../../assets/images/user/user-02.jpg'), name: 'New customer is join', date: '5 days ago', description: 'Jond Nik' },
        { image: require('../../../../assets/images/user/user-03.jpg'), name: 'Two customer is left', date: '2 days ago', description: 'Jond Nik' },
        { image: require('../../../../assets/images/user/user-04.jpg'), name: 'New Mail from Fenny', date: '3 days ago', description: 'Jond Nik' }
      ],
      message: [
        { image: require('../../../../assets/images/user/user-01.jpg'), name: 'Nik Emma Watson', date: '13 jan' },
        { image: require('../../../../assets/images/user/user-02.jpg'), name: 'Lorem Ipsum Watson', date: '20 Apr' },
        { image: require('../../../../assets/images/user/user-03.jpg'), name: 'Why do we use it?', date: '30 Jun' },
        { image: require('../../../../assets/images/user/user-04.jpg'), name: 'Variations Passages', date: '12 Sep' },
        { image: require('../../../../assets/images/user/user-05.jpg'), name: 'Lorem Ipsum generators', date: '5 Dec' }
      ]
    }
  },
  methods: {
    sidebarMini () {
      core.triggerSet()
    },
    logout () {
      localStorage.removeItem('user')
      localStorage.removeItem('access_token')
      this.$router.push({ name: 'auth1.sign-in1' })
    },
    ...mapActions({
      langChangeState: 'Setting/setLangAction',
      rtlAdd: 'Setting/setRtlAction',
      rtlRemove: 'Setting/removeRtlAction'
    })
  },
  computed: {
    ...mapGetters({
      cartItems: 'Ecommerce/cartState',
      removeToCart: 'Ecommerce/removeToCartAction',
      bookmark: 'Setting/bookmarkState',
      langsOptions: 'Setting/langOptionState',
      selectedLang: 'Setting/langState'
    })
  }
}
</script>
<style scoped lang="scss">
  .collapse-menu{
    @media (min-width:1300px) {
      display: none;
    }
  }
  .iq-sidebar-menu .iq-menu.hover-menu{
    display: flex;
    @media (max-width:1299px){
      display: none !important;
    }
  }
</style>
