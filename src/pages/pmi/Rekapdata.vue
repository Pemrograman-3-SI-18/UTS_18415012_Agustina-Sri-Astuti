<template>
  <q-page class="flex-center q-mx-lg q-mt-lg">
    <div class="q-pa-md">
      <q-table title="Treats" :data="data" :columns="columns" row-key="name" :filter="filter" :loading="loading" :pagination.sync="pagination" class="q-px-lg q-py-lg">

        <template v-slot:top>
          <div class="text-h6">Data Penyebaran Pendonor</div>
          <q-space />
          <q-input borderless dense debounce="300" color="primary" v-model="filter" style="background: #f9f9f9" class="q-px-sm" label="cari data...">
            <template v-slot:prepend>
              <q-icon name="search"/>
            </template>
          </q-input>
        </template>

      </q-table>
    </div>
  </q-page>
</template>

<script>
export default {
  data () {
    return {
      loading: false,
      filter: '',
      rowCount: 2,
      pagination: {
        rowsPerPage: 10
      },
      columns: [
        {
          name: 'desc',
          required: true,
          label: 'NIK',
          align: 'left',
          field: row => row.nik,
          format: val => `${val}`,
          sortable: true
        },
        { name: 'fullname', align: 'center', label: 'Nama Lengkap', field: 'fullname', sortable: true },
        { name: 'age', label: 'Usia', field: 'age', sortable: true },
        { name: 'phone', label: 'Telephone', field: 'phone' },
        { name: 'address', label: 'Alamat Lengkap', field: 'address' },
        { name: 'darah', label: 'Golongan', field: 'golongan' }
      ],
      data: [
        { nik: '1991822212101011', fullname: 'Muklis Imama', age: '25', phone: '089543112312', address: 'Jl. Permata Baru', golongan: 'A' },
        { nik: '19918224411202021', fullname: 'Farid Sultoni', age: '30', phone: '081721431222', address: 'Jl. Cikutra Raya', golongan: 'B' },
        { nik: '19918214455313121', fullname: 'M. Sahbani Muthar', age: '33', phone: '085321451123', address: 'Jl. Dempo Arimbi', golongan: 'AB' },
        { nik: '19918257744131321', fullname: 'Jesika Nur Indah', age: '30', phone: '082144544221', address: 'Jl. Mataram Kilauan', golongan: 'O' }
      ]
    }
  },

  methods: {
    // emulate fetching data from server
    addRow () {
      this.loading = true
      setTimeout(() => {
        const
          index = Math.floor(Math.random() * (this.data.length + 1)),
          row = this.original[Math.floor(Math.random() * this.original.length)]
        if (this.data.length === 0) {
          this.rowCount = 0
        }
        row.id = ++this.rowCount
        const addRow = { ...row } // extend({}, row, { name: `${row.name} (${row.__count})` })
        this.data = [...this.data.slice(0, index), addRow, ...this.data.slice(index)]
        this.loading = false
      }, 500)
    },

    removeRow () {
      this.loading = true
      setTimeout(() => {
        const index = Math.floor(Math.random() * this.data.length)
        this.data = [...this.data.slice(0, index), ...this.data.slice(index + 1)]
        this.loading = false
      }, 500)
    }
  }
}
</script>
