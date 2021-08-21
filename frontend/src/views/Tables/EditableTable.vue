<template>
  <b-container fluid>
    <b-row>
      <b-col md="12">
        <iq-card>
          <template v-slot:headerTitle>
            <h4 class="card-title">Usuarios</h4>
          </template>
          <template v-slot:headerAction>
            <b-button variant="primary" @click="add">Nuevo Usuario</b-button>
          </template>
          <template v-slot:body>
            <b-row>
              <b-col md="12" class="table-responsive">
                <b-table bordered hover :items="rows" :fields="columns" foot-clone>
                  <template v-slot:cell(nombre)="data">
                    <span v-if="!data.item.editable">{{ data.item.nombre }}</span>
                    <input type="text" v-model="data.item.nombre" v-else class="form-control">
                  </template>
                  <template v-slot:cell(paterno)="data">
                    <span v-if="!data.item.editable">{{ data.item.paterno }}</span>
                    <input type="text" v-model="data.item.paterno" v-else class="form-control">
                  </template>
                  <template v-slot:cell(materno)="data">
                    <span v-if="!data.item.editable">{{ data.item.materno }}</span>
                    <input type="text" v-model="data.item.materno" v-else class="form-control">
                  </template>
                  <template v-slot:cell(email)="data">
                    <span v-if="!data.item.editable">{{ data.item.email }}</span>
                    <input type="text" v-model="data.item.email" v-else class="form-control">
                  </template>
                  <template v-slot:cell(documento)="data">
                    <span v-if="!data.item.editable">{{ data.item.documento }}</span>
                    <input type="text" v-model="data.item.documento" v-else class="form-control">
                  </template>
                  <template v-slot:cell(perfil)="data">
                    <span v-if="!data.item.editable">{{ data.item.perfil }}</span>
                    <input type="text" v-model="data.item.perfil" v-else class="form-control">
                  </template>
                  <template v-slot:cell(action)="data">
                    <b-button variant=" iq-bg-success mr-1 mb-1" size="sm" @click="edit(data.item)" v-if="!data.item.editable"><i class="ri-ball-pen-fill m-0"></i></b-button>
                    <b-button variant=" iq-bg-success mr-1 mb-1" size="sm" @click="submit(data.item)" v-else>Ok</b-button>
                    <b-button variant=" iq-bg-danger" size="sm" @click="remove(data.item)"><i class="ri-delete-bin-line m-0"></i></b-button>
                  </template>
                </b-table>
              </b-col>
            </b-row>
          </template>
        </iq-card>
      </b-col>
    </b-row>
  </b-container>
</template>
<script>
import { core } from '../../config/pluginInit'

export default {
  name: 'UiDataTable',
  mounted () {
    core.index()
  },
  methods: {
    add () {
      const obj = this.default()
      this.rows.push(obj)
    },
    default () {
      return {
        id: this.rows.length,
        nombre: '',
        paterno: '',
        materno: '',
        email: '',
        documento: '',
        perfil: '',
        editable: false
      }
    },
    edit (item) {
      item.editable = true
    },
    submit (item) {
      item.editable = false
    },
    remove (item) {
      const index = this.rows.indexOf(item)
      this.rows.splice(index, 1)
    }
  },
  data () {
    return {
      columns: [
        { label: 'Nombre', key: 'nombre', class: 'text-left' },
        { label: 'Apellido Paterno', key: 'paterno', class: 'text-left' },
        { label: 'Apellido Materno', key: 'materno', class: 'text-left' },
        { label: 'Correo', key: 'email', class: 'text-left' },
        { label: 'Documento', key: 'documento', class: 'text-left' },
        { label: 'Perfil', key: 'perfil', class: 'text-left' },
        { label: 'Acciones', key: 'action', class: 'text-center' }
      ],
      rows: [
        {
          id: 1,
          nombre: 'Juan',
          paterno: 'Perez',
          materno: 'Sanchez',
          email: 'juan@jacqard.bo',
          documento: '4589625',
          perfil: '1',
          editable: false
        },
        {
          id: 2,
          nombre: 'Fernando',
          paterno: 'Gutierrez',
          materno: '',
          email: 'fernando@jacqard.bo',
          documento: '25987413',
          perfil: '2',
          editable: false
        },
        {
          id: 3,
          nombre: 'Carol',
          paterno: 'Gutierrez',
          materno: 'Silva',
          email: 'carol@jacqard.bo',
          documento: '5984721',
          perfil: '1',
          editable: false
        },
        {
          id: 4,
          nombre: 'Estela',
          paterno: 'Mamani',
          materno: 'Lopez',
          email: 'estela@jacqard.bo',
          documento: '5984721',
          perfil: '1',
          editable: false
        },
        {
          id: 5,
          nombre: 'Mery',
          paterno: 'Quispe',
          materno: '',
          email: 'mery@jacqard.bo',
          documento: '4158796',
          perfil: '2',
          editable: false
        },
        {
          id: 6,
          nombre: 'Esteban',
          paterno: 'Quispe',
          materno: '',
          email: 'esteban@jacqard.bo',
          documento: '41259876',
          perfil: '2',
          editable: false
        },

        {
          id: 7,
          nombre: 'Kevin',
          paterno: 'velasco',
          materno: 'suxo',
          email: 'kevin@jacqard.bo',
          documento: '41259876',
          perfil: '2',
          editable: false
        },
        {
          id: 8,
          nombre: 'Nelia',
          paterno: 'Rocabado',
          materno: 'sanchez',
          email: 'nelia@jacqard.bo',
          documento: '234579',
          perfil: '2',
          editable: false
        }
      ]
    }
  }
}
</script>
