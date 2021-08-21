<template>
  <b-container fluid>
    <b-row>
      <b-col lg="8" >
        <iq-card class="iq-card-block iq-card-stretch iq-card-height">
          <template v-slot:body>
            <AmChart element="home-chart-06" type="dashboard2" :height="300" />
          </template>
        </iq-card>
      </b-col>
      <b-col lg="4">
        <iq-card class="iq-card-block iq-card-stretch iq-card-height" body-class="smaill-calender-home">
          <template v-slot:body>
            <template v-if="lang.value == 'en'">
              <flat-pickr :config="arConfig" value="" class="d-none"/>
            </template>
            <template v-else>
              <flat-pickr :config="config" value="" class="d-none" />
            </template>
          </template>
        </iq-card>
      </b-col>
      <b-col lg="3" md="6">
        <iq-card class="iq-card-block iq-card-stretch iq-card-height">
          <template v-slot:body>
            <div class="text-center"><span>Ventas al mes</span></div>
            <div class="d-flex justify-content-between align-items-center">
              <div class="value-box">
                <h2 class="mb-0"><Counter :value="2.648" /></h2>
                <p class="mb-0 text-secondary line-height"> 26.84% </p>
              </div>
              <div class="iq-iconbox iq-bg-danger">
                <i class="ri-arrow-down-line" />
              </div>
            </div>
            <div class="iq-progress-bar-linear d-inline-block w-100  mt-5">
              <Progressbar :value="80" color="danger" />
            </div>
          </template>
        </iq-card>
      </b-col>
      <div class="col-md-6 col-lg-3">
        <div class="iq-card iq-card-block iq-card-stretch iq-card-height">
          <div class="iq-card-body">
            <div class="text-center"><span>Productos en Stock</span></div>
            <div class="d-flex justify-content-between align-items-center">
              <div class="value-box">
                <h2 class="mb-0"><Counter :value="898" /></h2>
                <p class="mb-0 pl-2 text-secondary line-height"> 8.64% </p>
              </div>
              <div class="iq-iconbox iq-bg-info">
                <i class="ri-arrow-up-line"></i>
              </div>
            </div>
            <div class="iq-progress-bar-linear d-inline-block w-100  mt-5">
              <Progressbar :value="80" color="info" />
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-6 col-lg-3">
        <div class="iq-card iq-card-block iq-card-stretch iq-card-height">
          <div class="iq-card-body">
            <div class="text-center"><span>Ventas al Contado</span></div>
            <div class="d-flex justify-content-between align-items-center">
              <div class="value-box">
                <h2 class="mb-0"><Counter :value="826" /></h2>
                <p class="mb-0 pl-2 text-secondary line-height"> 0.86% </p>
              </div>
              <div class="iq-iconbox iq-bg-success">
                <i class="ri-arrow-up-line"></i>
              </div>
            </div>
            <div class="iq-progress-bar-linear d-inline-block w-100  mt-5">
              <Progressbar :value="80" color="success" />
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-6 col-lg-3">
        <div class="iq-card iq-card-block iq-card-stretch iq-card-height">
          <div class="iq-card-body">
            <div class="text-center"><span>Ventas a Credito</span></div>
            <div class="d-flex justify-content-between align-items-center">
              <div class="value-box">
                <h2 class="mb-0"><Counter :value="200" /></h2>
                <p class="mb-0 pl-2 text-secondary line-height"> 25.5% </p>
              </div>
              <div class="iq-iconbox iq-bg-primary">
                <i class="ri-arrow-up-line"></i>
              </div>
            </div>
            <div class="iq-progress-bar-linear d-inline-block w-100  mt-5">
              <Progressbar :value="80" color="bg-primary" />
            </div>

          </div>
        </div>
      </div>
    </b-row>
    <b-row>
      <b-col lg="8">
        <iq-card class="iq-card-block iq-card-stretch iq-card-height overflow-hidden">
          <template v-slot:headerTitle>
            <h4 class="card-title">Ultimas Transacciones</h4>
          </template>
          <template v-slot:body>
            <b-table responsive :items="items" class="mb-0" borderless>
              <template v-slot:cell(status)="data">
                <b-badge pill :variant="data.value.color">{{ data.value.name }}</b-badge>
              </template>
              <template v-slot:cell(progress)="data1">
                <Progressbar :value="data1.value.count" :color="data1.value.color" />
              </template>
            </b-table>
          </template>
        </iq-card>
      </b-col>
      <b-col lg="4" md="12">
        <iq-card class="iq-card-block iq-card-stretch iq-card-height">
          <template v-slot:headerTitle>
            <h4 class="card-title">Reporte al 31/08/2021</h4>
          </template>
          <template v-slot:headerAction>
            <b-dropdown id="dropdownMenuButton5" right variant="none" data-toggle="dropdown">
              <template v-slot:button-content>
                <span class="text-primary"><i class="ri-more-2-fill"></i></span>
              </template>
              <b-dropdown-item><i class="ri-eye-fill mr-2"></i>{{ $t('dropdown.view') }}</b-dropdown-item>
              <b-dropdown-item><i class="ri-delete-bin-6-fill mr-2"></i>{{ $t('dropdown.delete') }}</b-dropdown-item>
              <b-dropdown-item><i class="ri-pencil-fill mr-2"></i>{{ $t('dropdown.edit') }}</b-dropdown-item>
              <b-dropdown-item><i class="ri-printer-fill mr-2"></i>{{ $t('dropdown.print') }}</b-dropdown-item>
              <b-dropdown-item><i class="ri-file-download-fill mr-2"></i>{{ $t('dropdown.download') }}</b-dropdown-item>
            </b-dropdown>
          </template>
          <template v-slot:body>
            <p class="mb-0">Todas las transacciones</p>
            <div class="m-0 p-0 d-flex flex-wrap align-items-center justify-content-between">
              <div class="col-md-6">
                <div class="d-flex align-items-center  mt-3">
                  <div class="iq-scale-border mr-3 like-block"></div>
                  <div class="iq-scale-content">
                    <h6>13.345</h6>
                    <p class="mb-0">Productos Ingresados</p>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="d-flex align-items-center  mt-3">
                  <div class="iq-scale-border mr-3 comment-block"></div>
                  <div class="iq-scale-content">
                    <h6>10.278</h6>
                    <p class="mb-0">Ventas al contado</p>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="d-flex align-items-center mt-4">
                  <div class="iq-scale-border mr-3 share-block"></div>
                  <div class="iq-scale-content">
                    <h6>2.456</h6>
                    <p class="mb-0">Ventas a Credito</p>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="d-flex align-items-center mt-4">
                  <div class="iq-scale-border mr-3 repost-block"></div>
                  <div class="iq-scale-content">
                    <h6>345</h6>
                    <p class="mb-0">Devoluciones</p>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="d-flex align-items-center mt-4">
                  <div class="iq-scale-border mr-3 view-block"></div>
                  <div class="iq-scale-content">
                    <h6>175</h6>
                    <p class="mb-0">Clientes</p>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="d-flex align-items-center mt-4">
                  <div class="iq-scale-border mr-3 post-block"></div>
                  <div class="iq-scale-content">
                    <h6>25</h6>
                    <p class="mb-0">Productos</p>
                  </div>
                </div>
              </div>
            </div>
          </template>
        </iq-card>
      </b-col>
    </b-row>
  </b-container>
</template>
<script>
import { core } from '../../config/pluginInit'
import AmChart from '../../components/core/charts/AmChart'
import { Arabic } from 'flatpickr/dist/l10n/ar'
import { english } from 'flatpickr/dist/l10n/default'
import { mapGetters } from 'vuex'
import Counter from '../../components/core/counter/Counter'
export default {
  name: 'Dashboard2',
  components: { AmChart, Counter },
  mounted () {
    core.index()
  },
  watch: {
    rtl: function (value) {
      this.options.rtl = this.rtl
    }
  },
  computed: {
    ...mapGetters({
      rtl: 'Setting/rtlModeState',
      lang: 'Setting/langState'
    })
  },
  methods: {
  },
  data () {
    return {
      options: {
        centeredSlides: false,
        loop: true,
        slidesPerView: 1,
        autoplay: {
          delay: 4000
        },
        spaceBetween: 30,
        breakpoints: {
          320: {
            slidesPerView: 1
            // spaceBetween: 10
          },
          // when window width is >= 480px
          480: {
            slidesPerView: 1
            // spaceBetween: 15
          },
          // when window width is >= 640px
          640: {
            slidesPerView: 1
            // spaceBetween: 20
          },
          768: {
            slidesPerView: 1
            // spaceBetween: 20
          },
          1024: {
            slidesPerView: 2
            // spaceBetween: 20
          }
        },
        pagination: {
          el: '.swiper-pagination'
        },

        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },

        // And if we need scrollbar
        scrollbar: {
          el: '.swiper-scrollbar'
        }
      },
      config: {
        dateFormat: 'Y-m-d',
        inline: true,
        locale: english
      },
      arConfig: {
        dateFormat: 'Y-m-d',
        inline: true,
        locale: Arabic
      },
      chart1: {
        chart: {
          height: 80,
          type: 'area',
          sparkline: {
            enabled: true
          },
          group: 'sparklines'

        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          width: 3,
          curve: 'smooth'
        },
        fill: {
          type: 'gradient',
          gradient: {
            shadeIntensity: 1,
            opacityFrom: 0.5,
            opacityTo: 0
          }
        },
        series: [{
          name: 'series1',
          data: [60, 15, 50, 30, 70]
        }],
        colors: ['#0084ff'],

        xaxis: {
          type: 'datetime',
          categories: ['2018-08-19T00:00:00', '2018-09-19T01:30:00', '2018-10-19T02:30:00', '2018-11-19T01:30:00',
            '2018-12-19T01:30:00'
          ]
        },
        tooltip: {
          x: {
            format: 'dd/MM/yy HH:mm'
          }
        }
      },
      chart2: {
        chart: {
          height: 80,
          type: 'area',
          sparkline: {
            enabled: true
          },
          group: 'sparklines'

        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          width: 3,
          curve: 'smooth'
        },
        fill: {
          type: 'gradient',
          gradient: {
            shadeIntensity: 1,
            opacityFrom: 0.5,
            opacityTo: 0
          }
        },
        series: [{
          name: 'series1',
          data: [70, 40, 60, 30, 60]
        }],
        colors: ['#ffd400'],
        xaxis: {
          type: 'datetime',
          categories: ['2018-08-19T00:00:00', '2018-09-19T01:30:00', '2018-10-19T02:30:00', '2018-11-19T01:30:00',
            '2018-12-19T01:30:00'
          ]
        },
        tooltip: {
          x: {
            format: 'dd/MM/yy HH:mm'
          }
        }
      },
      chart3: {
        chart: {
          height: 80,
          type: 'area',
          sparkline: {
            enabled: true
          },
          group: 'sparklines'

        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          width: 3,
          curve: 'smooth'
        },
        fill: {
          type: 'gradient',
          gradient: {
            shadeIntensity: 1,
            opacityFrom: 0.5,
            opacityTo: 0
          }
        },
        series: [{
          name: 'series1',
          data: [60, 40, 60, 40, 70]
        }],
        colors: ['#00ca00'],

        xaxis: {
          type: 'datetime',
          categories: ['2018-08-19T00:00:00', '2018-09-19T01:30:00', '2018-10-19T02:30:00', '2018-11-19T01:30:00',
            '2018-12-19T01:30:00'
          ]
        },
        tooltip: {
          x: {
            format: 'dd/MM/yy HH:mm'
          }
        }
      },
      chart4: {
        chart: {
          height: 80,
          type: 'area',
          sparkline: {
            enabled: true
          },
          group: 'sparklines'

        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          width: 3,
          curve: 'smooth'
        },
        fill: {
          type: 'gradient',
          gradient: {
            shadeIntensity: 1,
            opacityFrom: 0.5,
            opacityTo: 0
          }
        },
        series: [{
          name: 'series1',
          data: [75, 30, 60, 35, 60]
        }],
        colors: ['#e64141'],
        xaxis: {
          type: 'datetime',
          categories: ['2018-08-19T00:00:00', '2018-09-19T01:30:00', '2018-10-19T02:30:00', '2018-11-19T01:30:00',
            '2018-12-19T01:30:00'
          ]
        },
        tooltip: {
          x: {
            format: 'dd/MM/yy HH:mm'
          }
        }
      },
      chart5: {
        chart: {
          height: 200,
          type: 'line',
          sparkline: {
            enabled: true
          },
          stacked: false
        },
        stroke: {
          width: [2, 3],
          curve: 'smooth',
          dashArray: [0, 5]
        },
        plotOptions: {
          bar: {
            columnWidth: '50%'
          }
        },
        colors: ['#00ca00', '#007bff'],
        series: [{
          name: 'Vine',
          type: 'area',
          data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43]
        }, {
          name: 'Dribbble',
          type: 'line',
          data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39]
        }],
        fill: {
          opacity: [0.2, 1],
          gradient: {
            inverseColors: false,
            shade: 'light',
            type: 'vertical',
            opacityFrom: 1,
            opacityTo: 1,
            stops: [0, 100, 100, 100]
          }
        },
        labels: ['01/01/2003', '02/01/2003', '03/01/2003', '04/01/2003', '05/01/2003', '06/01/2003', '07/01/2003',
          '08/01/2003', '09/01/2003', '10/01/2003', '11/01/2003'
        ],
        markers: {
          size: 0
        },
        xaxis: {
          type: 'datetime'
        },
        yaxis: {
          min: 0
        },
        tooltip: {
          shared: true,
          intersect: false,
          y: {
            formatter: function (y) {
              if (typeof y !== 'undefined') {
                return y.toFixed(0) + ' views'
              }
              return y
            }
          }
        },
        legend: {
          labels: {
            useSeriesColors: true
          },
          markers: {
            customHTML: [
              function () {
                return ''
              },
              function () {
                return ''
              },
              function () {
                return ''
              }
            ]
          }
        }
      },
      chart6: {
        chart: {
          height: 400,
          type: 'bar',
          sparkline: {
            show: false
          },
          toolbar: {
            show: false
          }
        },
        colors: ['#0084ff', '#ffd400'],
        plotOptions: {
          bar: {
            horizontal: false,
            columnWidth: '30%',
            borderRadius: 4
          }
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          show: false,
          width: 5,
          colors: ['#ffffff']
        },
        series: [{
          name: 'Mobile',
          enabled: 'true',
          data: [44, 90, 90, 60, 115]
        }, {
          name: 'Desktop',
          data: [35, 80, 100, 70, 95]
        }],
        fill: {
          opacity: 1
        },
        tooltip: {
          y: {
            formatter: function (val) {
              return '$ ' + val + ' thousands'
            }
          }
        }
      },
      chart7: {
        chart: {
          height: 112,
          type: 'area',
          animations: {
            enabled: true,
            easing: 'linear',
            dynamicAnimation: {
              speed: 1000
            }
          },
          toolbar: {
            show: false
          },
          sparkline: {
            enabled: true
          },
          group: 'sparklines'
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: 'smooth',
          width: 3
        },
        fill: {
          type: 'gradient',
          gradient: {
            shadeIntensity: 1,
            opacityFrom: 0.5,
            opacityTo: 0
          }
        },
        series: [{
          data: []
        }],
        colors: ['#0084ff'],
        markers: {
          size: 0
        },
        xaxis: {
          type: 'datetime',
          range: 777600000
        },
        yaxis: {
          labels: {
            minWidth: 34
          },
          max: 100
        },
        legend: {
          show: false
        }
      },
      chart8: {
        chart: {
          height: 112,
          type: 'area',
          animations: {
            enabled: true,
            easing: 'linear',
            dynamicAnimation: {
              speed: 1000
            }
          },
          toolbar: {
            show: false
          },
          sparkline: {
            enabled: true
          },
          group: 'sparklines'
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: 'smooth',
          width: 3
        },
        fill: {
          type: 'gradient',
          gradient: {
            shadeIntensity: 1,
            opacityFrom: 0.5,
            opacityTo: 0
          }
        },
        series: [{
          data: []
        }],
        colors: ['#00ca00'],
        markers: {
          size: 0
        },
        xaxis: {
          type: 'datetime',
          range: 777600000
        },
        yaxis: {
          labels: {
            minWidth: 34
          },
          max: 100
        },
        legend: {
          show: false
        }
      },
      items: [{
        Pedido: '#0879985',
        Fecha: '26/12/2019',
        Cliente: 'Juan Perez',
        status: {
          name: 'Entregado',
          color: 'success'
        },
        Direccion: 'Miraflores, av 1',
        progress: {
          count: 90,
          color: 'success'
        }
      },
      {
        Pedido: '#0879984',
        Fecha: '23/12/2020',
        Cliente: 'Cinthia Roca',
        status: {
          name: 'Pendiente',
          color: 'warning text-white'
        },
        Direccion: 'Sopocachi, plaza España',
        progress: {
          count: 70,
          color: 'warning'
        }
      },
      {
        Pedido: '#0879983',
        Fecha: '18/12/2020',
        Cliente: 'Juan Perez',
        status: {
          name: 'Cancelado',
          color: 'danger'
        },
        Direccion: 'El Alto, Ciudad Satelite',
        progress: {
          count: 45,
          color: 'danger'
        }
      },
      {
        Pedido: '#0879982',
        Fecha: '14/12/2020',
        Cliente: 'Cinthia Roca',
        status: {
          name: 'A credito',
          color: 'info'
        },
        Direccion: 'Calacoto, av Sanchez Bustamante',
        progress: {
          count: 90,
          color: 'info'
        }
      }
      ],
      usersList: [{
        name: 'Anna Sthesia',
        role: 'Admin',
        image: require('../../assets/images/user/user-01.jpg'),
        link: '',
        isActive: true
      },
      {
        name: 'Paul Molive',
        role: 'User',
        image: require('../../assets/images/user/user-02.jpg'),
        link: '',
        isActive: false
      },
      {
        name: 'Bob Frapples',
        role: 'Auther',
        image: require('../../assets/images/user/user-03.jpg'),
        link: '',
        isActive: true
      },
      {
        name: 'Barb Ackue',
        role: 'Editor',
        image: require('../../assets/images/user/user-04.jpg'),
        link: '',
        isActive: true
      },
      {
        name: 'Greta Life',
        role: 'User',
        image: require('../../assets/images/user/user-05.jpg'),
        link: '',
        isActive: false
      },
      {
        name: 'Ira Membrit',
        role: 'User',
        image: require('../../assets/images/user/user-06.jpg'),
        link: '',
        isActive: true
      },
      {
        name: 'Pete Sariya',
        role: 'Editor',
        image: require('../../assets/images/user/user-07.jpg'),
        link: '',
        isActive: false
      },
      {
        name: 'Anna Sthesia',
        role: 'Editor',
        image: require('../../assets/images/user/user-08.jpg'),
        link: '',
        isActive: true
      },
      {
        name: 'Paul Molive',
        role: 'Author',
        image: require('../../assets/images/user/user-09.jpg'),
        link: '',
        isActive: false
      },
      {
        name: 'Bob Frapples',
        role: 'User',
        image: require('../../assets/images/user/user10.jpg'),
        link: '',
        isActive: true
      },
      {
        name: 'Anna Sthesia',
        role: 'Admin',
        image: require('../../assets/images/user/user-01.jpg'),
        link: '',
        isActive: true
      },
      {
        name: 'Paul Molive',
        role: 'User',
        image: require('../../assets/images/user/user-02.jpg'),
        link: '',
        isActive: false
      },
      {
        name: 'Bob Frapples',
        role: 'Auther',
        image: require('../../assets/images/user/user-03.jpg'),
        link: '',
        isActive: false
      },
      {
        name: 'Barb Ackue',
        role: 'Editor',
        image: require('../../assets/images/user/user-04.jpg'),
        link: '',
        isActive: true
      },
      {
        name: 'Greta Life',
        role: 'User',
        image: require('../../assets/images/user/user-05.jpg'),
        link: '',
        isActive: true
      }
      ],
      timelineItems: [{
        color: 'primary',
        title: 'Client Login',
        right: '24 November 2019',
        description: 'Bonbon macaroon jelly beans gummi bears jelly lollipop apple',
        child: {
          type: 'img',
          items: []
        }
      },
      {
        color: 'success',
        title: 'Scheduled Maintenance',
        right: '23 November 2019',
        description: 'Bonbon macaroon jelly beans gummi bears jelly lollipop apple',
        child: {
          type: 'img',
          items: []
        }
      },
      {
        color: 'danger',
        title: 'Dev Meetup',
        right: '20 November 2019',
        description: 'Bonbon macaroon jelly <a href="">beans gummi</a> bears jelly lollipop apple',
        child: {
          type: 'img',
          items: [
            require('../../assets/images/user/user-05.jpg'),
            require('../../assets/images/user/user-06.jpg'),
            require('../../assets/images/user/user-07.jpg'),
            require('../../assets/images/user/user-08.jpg'),
            require('../../assets/images/user/user-09.jpg'),
            require('../../assets/images/user/user10.jpg')
          ]
        }
      },
      {
        color: 'primary',
        title: 'Client Call',
        right: '19 November 2019',
        description: 'Bonbon macaroon jelly beans gummi bears jelly lollipop apple',
        child: {
          type: 'img',
          items: []
        }
      },
      {
        color: 'warning',
        title: 'Mega Event',
        right: '15 November 2019',
        description: 'Bonbon macaroon jelly beans gummi bears jelly lollipop apple',
        child: {
          type: 'img',
          items: []
        }
      }
      ],
      averageList: [
        {
          title: 'Ventas',
          icons: { icon: 'ri-arrow-down-line', color: 'danger' },
          number: '2.648',
          percentage: '26.84'
        },
        {
          title: 'AVG Engagements Rate',
          icons: { icon: 'ri-arrow-up-line', color: 'info' },
          number: '89.6',
          percentage: '8.64'
        },
        {
          title: 'AVG Reach',
          icons: { icon: 'ri-arrow-up-line', color: 'success' },
          number: '826',
          percentage: '0.64'
        },
        {
          title: 'AVG Transport',
          icons: { icon: 'ri-arrow-up-line', color: 'primary' },
          number: '7.55',
          percentage: '25.5'
        }
      ]
    }
  }
}
</script>
<style>
#post-slider .slick-arrow{
  top: 25px;
}
#post-slider .slick-arrow.left {
    left: auto;
    right: 100px;
}
.slick-arrow.right {
    right: 65px;
    top: 0;
}
</style>
