<template>
  <b-container fluid="">
    <b-row>
      <b-col md="6" sm="6" lg="3">
        <iq-card>
          <template v-slot:body>
            <div class="d-flex d-flex align-items-center justify-content-between">
                <div>
                    <h2>352</h2>
                    <p class="fontsize-sm m-0">{{ $t('dashboard1.card1') }}</p>
                </div>
                <div class="rounded-circle iq-card-icon  dark-icon-light iq-bg-primary "> <i class="ri-inbox-fill"></i></div>
            </div>
          </template>
        </iq-card>
      </b-col>
      <b-col md="6" sm="6" lg="3">
        <iq-card>
          <template v-slot:body>
            <div class="d-flex d-flex align-items-center justify-content-between">
              <div>
                  <h2>$37k</h2>
                  <p class="fontsize-sm m-0">{{ $t('dashboard1.card2') }}</p>
              </div>
              <div class="rounded-circle iq-card-icon iq-bg-danger"><i class="ri-radar-line"></i></div>
            </div>
          </template>
        </iq-card>
      </b-col>
      <b-col md="6" sm="6" lg="3">
        <iq-card>
          <template v-slot:body>
            <div class="d-flex d-flex align-items-center justify-content-between">
              <div>
                  <h2>32%</h2>
                  <p class="fontsize-sm m-0">{{ $t('dashboard1.card3') }}</p>
              </div>
              <div class="rounded-circle iq-card-icon iq-bg-warning "><i class="ri-price-tag-3-line"></i></div>
            </div>
          </template>
        </iq-card>
      </b-col>
      <b-col md="6" sm="6" lg="3">
        <iq-card>
          <template v-slot:body>
            <div class="d-flex d-flex align-items-center justify-content-between">
              <div>
                  <h2>27h</h2>
                  <p class="fontsize-sm m-0">{{ $t('dashboard1.card4') }}</p>
              </div>
              <div class="rounded-circle iq-card-icon iq-bg-info "><i class="ri-refund-line"></i></div>
            </div>
          </template>
        </iq-card>
      </b-col>
    </b-row>
    <b-row>
      <b-col md="6" lg="7">
        <iq-card class-name="iq-card-block iq-card-stretch iq-card-height overflow-hidden">
          <template v-slot:headerTitle>
            <h4 class="card-title">{{ $t('dashboard1.invoiceState') }}</h4>
          </template>
          <template v-slot:headerAction>
            <b-dropdown id="dropdownMenuButton1" right variant="none p-0" data-toggle="dropdown">
              <template v-slot:button-content>
                 <i class="ri-more-fill p-0"></i>
              </template>
              <b-dropdown-item><i class="ri-eye-fill mr-2"></i>{{ $t('dropdown.view') }}</b-dropdown-item>
              <b-dropdown-item><i class="ri-delete-bin-6-fill mr-2"></i>{{ $t('dropdown.delete') }}</b-dropdown-item>
              <b-dropdown-item><i class="ri-pencil-fill mr-2"></i>{{ $t('dropdown.edit') }}</b-dropdown-item>
              <b-dropdown-item><i class="ri-printer-fill mr-2"></i>{{ $t('dropdown.print') }}</b-dropdown-item>
              <b-dropdown-item><i class="ri-file-download-fill mr-2"></i>{{ $t('dropdown.download') }}</b-dropdown-item>
            </b-dropdown>
          </template>
          <template v-slot:body>
            <ApexChart element="home-chart-02" :chartOption="chart1" style="min-height: 300px;"/>
          </template>
        </iq-card>
      </b-col>
      <b-col md="6" lg="5">
        <div class="iq-card iq-card-block iq-card-stretch iq-card-height" style="background: transparent;">
          <div class="iq-card-body rounded p-0" :style="`background: url(${require('../../assets/images/page-img/01.png')}) no-repeat;    background-size: cover; height: 415px;`">
            <div class="iq-caption">
                <h1>450</h1>
                <p>Invoice</p>
            </div>
          </div>
        </div>
      </b-col>
    </b-row>
    <b-row>
      <b-col lg="8">
        <iq-card class="iq-card-block iq-card-stretch iq-card-height">
          <template v-slot:headerTitle>
            <h4 class="card-title">{{ $t('dashboard1.openInvoice') }}</h4>
          </template>
          <template v-slot:headerAction>
            <b-dropdown  id="dropdownMenuButton5" right variant="none" data-toggle="dropdown">
              <template v-slot:button-content>
                <span class="text-primary"><i class="ri-more-fill"></i></span>
              </template>
              <b-dropdown-item><i class="ri-eye-fill mr-2"></i>{{ $t('dropdown.view') }}</b-dropdown-item>
              <b-dropdown-item><i class="ri-delete-bin-6-fill mr-2"></i>{{ $t('dropdown.delete') }}</b-dropdown-item>
              <b-dropdown-item><i class="ri-pencil-fill mr-2"></i>{{ $t('dropdown.edit') }}</b-dropdown-item>
              <b-dropdown-item><i class="ri-printer-fill mr-2"></i>{{ $t('dropdown.print') }}</b-dropdown-item>
              <b-dropdown-item><i class="ri-file-download-fill mr-2"></i>{{ $t('dropdown.download') }}</b-dropdown-item>
            </b-dropdown>
          </template>
          <template v-slot:body>
            <b-table responsive :items="items"  class="mb-0" borderless>
              <template v-slot:cell(status)="data">
                <span :class="'badge badge-pill iq-bg-'+data.value.color">{{ data.value.name }}</span>
              </template>
              <template v-slot:cell(amount)="data1">
                ${{ data1.value }}
              </template>
              <template v-slot:cell(action)>
               <i class="ri-ball-pen-fill text-success pr-1"/>
               <i class="ri-delete-bin-5-line text-danger"/>
              </template>
            </b-table>
          </template>
        </iq-card>
      </b-col>
      <b-col lg="4">
        <iq-card class="iq-card-block iq-card-stretch iq-card-height">
          <template v-slot:headerTitle>
            <h4 class="card-title">{{ $t('dashboard1.monthlyInvoice') }}</h4>
          </template>
          <template v-slot:headerAction>
            <b-dropdown  id="dropdownMenuButton1" right variant="none" data-toggle="dropdown">
              <template v-slot:button-content>
                <span class="text-primary"><i class="ri-more-fill"></i></span>
              </template>
              <b-dropdown-item><i class="ri-eye-fill mr-2"></i>{{ $t('dropdown.view') }}</b-dropdown-item>
              <b-dropdown-item><i class="ri-delete-bin-6-fill mr-2"></i>{{ $t('dropdown.delete') }}</b-dropdown-item>
              <b-dropdown-item><i class="ri-pencil-fill mr-2"></i>{{ $t('dropdown.edit') }}</b-dropdown-item>
              <b-dropdown-item><i class="ri-printer-fill mr-2"></i>{{ $t('dropdown.print') }}</b-dropdown-item>
              <b-dropdown-item><i class="ri-file-download-fill mr-2"></i>{{ $t('dropdown.download') }}</b-dropdown-item>
            </b-dropdown>
          </template>
          <template v-slot:body>
            <ul class="suggestions-lists m-0 p-0">
              <li v-for="(invoice,index) in monthlyInvocie" :key="index" :class="'d-flex  align-items-center ' + invoice.spaces">
                <div :class="'profile-icon iq-bg-' + invoice.color" ><span><i class="ri-check-fill"></i></span></div>
                <div class="media-support-info ml-3">
                  <h6>{{ invoice.title }}</h6>
                  <p class="mb-0 fontsize-sm"><span :class="'text-' + invoice.color">{{ invoice.paid_month }}</span>{{ invoice.total_month }}</p>
                </div>
                <div class="media-support-amount ml-3">
                  <h6><span :class="'text-secondary'">$</span><b> {{ invoice.amount }}</b></h6>
                  <p class="mb-0 d-flex justify-content-end">per month</p>
                </div>
              </li>
            </ul>
          </template>
        </iq-card>
      </b-col>
    </b-row>
    <b-row>
      <b-col md="8" lg="8">
        <b-row>
          <b-col md="12">
            <iq-card class="iq-card-block iq-card-stretch ">
              <template v-slot:headerTitle>
                <h4 class="card-title">{{ $t('dashboard1.exchangeRates')}}</h4>
              </template>
              <template v-slot:headerAction>
                <b-dropdown  id="dropdownMenuButton1" right variant="none" data-toggle="dropdown">
                  <template v-slot:button-content>
                    <span class="text-primary"><i class="ri-more-fill"></i></span>
                  </template>
                  <b-dropdown-item><i class="ri-eye-fill mr-2"></i>{{ $t('dropdown.view') }}</b-dropdown-item>
                  <b-dropdown-item><i class="ri-delete-bin-6-fill mr-2"></i>{{ $t('dropdown.delete') }}</b-dropdown-item>
                  <b-dropdown-item><i class="ri-pencil-fill mr-2"></i>{{ $t('dropdown.edit') }}</b-dropdown-item>
                  <b-dropdown-item><i class="ri-printer-fill mr-2"></i>{{ $t('dropdown.print') }}</b-dropdown-item>
                  <b-dropdown-item><i class="ri-file-download-fill mr-2"></i>{{ $t('dropdown.download') }}</b-dropdown-item>
                </b-dropdown>
              </template>
              <template v-slot:body>
                <ChartistChart  :id="chart4.id" :data="chart4.data" :options="chart4.options" :type="chart4.type" />
              </template>
            </iq-card>
          </b-col>
          <b-col md="6">
            <iq-card class="iq-card-block iq-card-stretch">
              <template v-slot:headerTitle>
                <h4 class="card-title">{{ $t('dashboard1.lastCosts') }}</h4>
              </template>
              <template v-slot:headerAction>
                <b-dropdown  id="dropdownMenuButton1" right variant="none" data-toggle="dropdown">
                  <template v-slot:button-content>
                    <span class="text-primary"><i class="ri-more-fill"></i></span>
                  </template>
                  <b-dropdown-item><i class="ri-eye-fill mr-2"></i>{{ $t('dropdown.view') }}</b-dropdown-item>
                  <b-dropdown-item><i class="ri-delete-bin-6-fill mr-2"></i>{{ $t('dropdown.delete') }}</b-dropdown-item>
                  <b-dropdown-item><i class="ri-pencil-fill mr-2"></i>{{ $t('dropdown.edit') }}</b-dropdown-item>
                  <b-dropdown-item><i class="ri-printer-fill mr-2"></i>{{ $t('dropdown.print') }}</b-dropdown-item>
                  <b-dropdown-item><i class="ri-file-download-fill mr-2"></i>{{ $t('dropdown.download') }}</b-dropdown-item>
                </b-dropdown>
              </template>
              <template v-slot:body>
                <AmChart element="home-chart-05" type="line-bar" :height="160" />
              </template>
            </iq-card>
          </b-col>
          <b-col md="6">
            <iq-card class=" iq-card-block iq-card-stretch ">
              <template v-slot:headerTitle>
                <h4 class="card-title">{{ $t('dashboard1.efficiency')}}</h4>
              </template>
              <template v-slot:headerAction>
                <b-dropdown  id="dropdownMenuButton1" right variant="none" data-toggle="dropdown">
                  <template v-slot:button-content>
                    <span class="text-primary"><i class="ri-more-fill"></i></span>
                  </template>
                  <b-dropdown-item><i class="ri-eye-fill mr-2"></i>{{ $t('dropdown.view') }}</b-dropdown-item>
                  <b-dropdown-item><i class="ri-delete-bin-6-fill mr-2"></i>{{ $t('dropdown.delete') }}</b-dropdown-item>
                  <b-dropdown-item><i class="ri-pencil-fill mr-2"></i>{{ $t('dropdown.edit') }}</b-dropdown-item>
                  <b-dropdown-item><i class="ri-printer-fill mr-2"></i>{{ $t('dropdown.print') }}</b-dropdown-item>
                  <b-dropdown-item><i class="ri-file-download-fill mr-2"></i>{{ $t('dropdown.download') }}</b-dropdown-item>
                </b-dropdown>
              </template>
              <template v-slot:body>
                <AmChart element="home-chart-11" type="gauge-chart" :height="160"/>
              </template>
            </iq-card>
          </b-col>
        </b-row>
      </b-col>
      <b-col lg="4">
        <iq-card class=" iq-card-block iq-card-stretch ">
          <template v-slot:headerTitle>
            <h4 class="card-title">{{ $t('dashboard1.paymentHistory') }}</h4>
          </template>
          <template v-slot:headerAction>
            <b-dropdown  id="dropdownMenuButton1" right variant="none" data-toggle="dropdown">
              <template v-slot:button-content>
                <span class="text-primary"><i class="ri-more-fill"></i></span>
              </template>
              <b-dropdown-item><i class="ri-eye-fill mr-2"></i>{{ $t('dropdown.view') }}</b-dropdown-item>
              <b-dropdown-item><i class="ri-delete-bin-6-fill mr-2"></i>{{ $t('dropdown.delete') }}</b-dropdown-item>
              <b-dropdown-item><i class="ri-pencil-fill mr-2"></i>{{ $t('dropdown.edit') }}</b-dropdown-item>
              <b-dropdown-item><i class="ri-printer-fill mr-2"></i>{{ $t('dropdown.print') }}</b-dropdown-item>
              <b-dropdown-item><i class="ri-file-download-fill mr-2"></i>{{ $t('dropdown.download') }}</b-dropdown-item>
            </b-dropdown>
          </template>
          <template v-slot:body>
            <ul class="suggestions-lists m-0 p-0">
              <li v-for="( payment,index ) in paymentHistory" :key="index" :class="'d-flex align-items-center ' +payment.space">
                <div :class="'profile-icon bg-' + payment.color"><span><i :class="payment.icon"></i></span></div>
                <div class="media-support-info ml-3">
                    <h6>{{ payment.title }}</h6>
                    <p class="mb-0  fontsize-sm">{{ payment.date }}</p>
                </div>
                <div class="media-support-amount ml-3">
                    <h6 :class="'text-' + payment.CurrencyColor">{{ payment.amount }}</h6>
                </div>
              </li>
            </ul>
          </template>
        </iq-card>
      </b-col>
    </b-row>
  </b-container>
</template>
<script>
import { core } from '../../config/pluginInit'
import AmChart from '../../components/core/charts/AmChart'
import ApexChart from '../../components/core/charts/ApexChart'
import ChartistChart from '../../components/core/charts/ChartistChart'
export default {
  name: 'Dashboard1',
  components: { AmChart, ApexChart, ChartistChart },
  mounted () {
    core.index()
  },
  data () {
    return {
      items: [
        { client: 'Ira Membrit', date: '18/10/2019', invoice: '20156', amount: '1500.0', status: { name: 'paid', color: 'success' }, action: '' },
        { client: 'Pete Sariya', date: '26/10/2019', invoice: '7859', amount: '2000.00', status: { name: 'paid', color: 'success' }, action: '' },
        { client: 'Cliff Hanger', date: '18/11/2019', invoice: '6396', amount: '250.00', status: { name: 'past due', color: 'danger' }, action: '' },
        { client: 'Terry Aki', date: '14/12/2019', invoice: '7854', amount: '5000.00', status: { name: 'paid', color: 'success' }, action: '' },
        { client: 'Anna Mull', date: '24/12/2019', invoice: '568569', amount: '10000.00', status: { name: 'paid', color: 'success' }, action: '' }
      ],
      monthlyInvocie: [
        { title: 'Camelun ios', spaces: 'mb-4', color: 'success', amount: '16,634.00', paid_month: '17/23 ', total_month: ' months paid' },
        { title: 'React', spaces: 'mb-4', color: 'warning', amount: '6,000.00', paid_month: '12 weeks ', total_month: 'Due' },
        { title: 'Camelun ios', spaces: 'mb-4', color: 'success', amount: '11,230.00', paid_month: '16/23 ', total_month: ' months paid' },
        { title: 'Camelun ios', spaces: 'mb-1', color: 'danger', amount: '10,050.00', paid_month: '15/23', total_month: ' months paid' }
      ],
      paymentHistory: [
        { title: 'Deposit from ATL', space: 'mb-4', amount: '- $1,470', icon: 'ri-refresh-line', color: 'secondary', date: '5 march, 18:33', CurrencyColor: 'info' },
        { title: 'Deposit PayPal', space: 'mb-4', amount: '+ $2,220', icon: 'ri-paypal-line', color: 'primary', date: '5 march, 18:33', CurrencyColor: 'primary' },
        { title: 'Deposit from ATL', space: 'mb-4', amount: '+ $250', icon: 'ri-check-line', color: 'primary', date: '5 march, 18:33', CurrencyColor: 'primary' },
        { title: 'Cancelled', space: 'mb-4', amount: '$0', icon: 'ri-close-line', color: 'info', date: '5 march, 18:33', CurrencyColor: 'info' },
        { title: 'Refund', space: 'mb-4', amount: '- $500', icon: 'ri-arrow-go-back-fill', color: 'info', date: '5 march, 18:33', CurrencyColor: 'info' },
        { title: 'Deposit from ATL', space: 'mb-4', amount: '$169', icon: 'ri-bar-chart-grouped-fill', color: 'secondary', date: '5 march, 18:33', CurrencyColor: 'primary' },
        { title: 'Deposit from Paypal', space: 'mb-4', amount: '- $1,470', icon: 'ri-qr-scan-line', color: 'warning', date: '5 march, 18:33', CurrencyColor: 'info' },
        { title: 'Refund Amount', space: 'mb-0', amount: '+ $9,480', icon: 'ri-mail-send-fill', color: 'danger', date: '5 march, 18:33', CurrencyColor: 'info' }
      ],
      chart1: {
        series: [{
          name: 'Net Profit',
          data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
        }, {
          name: 'Revenue',
          data: [76, 85, 101, 98, 87, 105, 91, 114, 94]
        }],
        chart: {
          type: 'bar',
          height: 300,
          toolbar: {
            show: false
          }
        },

        colors: ['#827af3', '#6ce6f4'],
        plotOptions: {
          bar: {
            horizontal: !1,
            columnWidth: '55%',
            borderRadius: 4
          }
        },
        dataLabels: {
          enabled: !1
        },
        stroke: {
          show: !0,
          width: 2,
          colors: ['transparent']
        },
        xaxis: {
          categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct']
        },
        yaxis: {},
        fill: {
          opacity: 1
        },
        tooltip: {
          y: {
            formatter: function (e) {
              return '$ ' + e + ' thousands'
            }
          }
        }
      },
      chart2: {
        series: [{
          name: 'Desktops',
          data: [5, 10, 8, 15]
        }],
        chart: {
          height: 150,
          type: 'line',
          zoom: {
            enabled: false
          }
        },
        colors: ['#827af3'],
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: 'straight'
        },
        grid: {
          row: {
            colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
            opacity: 0.5
          }
        },
        xaxis: {
          categories: ['Jan', 'Feb', 'Mar', 'Apr']
        }
      },
      darkChart2: {
        series: [{
          name: 'Desktops',
          data: [5, 10, 8, 15]
        }],
        chart: {
          height: 150,
          type: 'line',
          foreColor: '#8c91b6',
          zoom: {
            enabled: false
          }
        },
        colors: ['#827af3'],
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: 'straight'
        },
        grid: {
          row: {
            colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
            opacity: 0.5
          }
        },
        xaxis: {
          categories: ['Jan', 'Feb', 'Mar', 'Apr']
        }
      },
      chart3: {
        series: [44, 55, 13, 33],
        chart: {
          width: 380,
          height: 180,
          type: 'donut'
        },
        dataLabels: {
          enabled: false
        },
        colors: ['#827af3', '#6ce6f4', '#a09e9e', '#fbc647'],
        responsive: [{
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              show: false
            }
          }
        }],
        legend: {
          position: 'right',
          offsetY: 0,
          height: 150
        }
      },
      darkChart3: {
        series: [44, 55, 13, 33],
        chart: {
          width: 380,
          height: 180,
          foreColor: '#8c91b6',
          type: 'donut'
        },
        dataLabels: {
          enabled: false
        },
        colors: ['#827af3', '#6ce6f4', '#a09e9e', '#fbc647'],
        responsive: [{
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              show: false
            }
          }
        }],
        legend: {
          position: 'right',
          offsetY: 0,
          height: 150
        }
      },
      chart4: {
        type: 'Line',
        id: 'home-chart-01',
        data: {
          labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
          series: [
            [12, 9, 7, 8, 5],
            [2, 1, 3.5, 7, 3]
          ]
        },
        options: {
          height: 220, fullWidth: true
        }

      }
    }
  }
}
</script>

<style>
.iq-card-body{
  flex: unset;
}
</style>
