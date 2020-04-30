<template>
  <q-page class="flex-center q-mx-lg q-mt-lg">
    <div class="q-pa-md">
      <div class="q-gutter-md">

        <q-card>

          <div class="row q-pa-lg">
            <div class="text-h5 text-weight-bold col-10">Data Stok Persediaan Darah</div>
            <div class="text-h4 col-2">
              <q-btn outline color="green-13" icon="sort" class="q-ml-xl" label="Sunting Data" push v-close-popup to="/pmi/edit"/>
            </div>
          </div>

          <div class="q-px-xl q-py-xl fit row wrap justify-center">

            <div class="col fit row wrap justify-center">
              <q-card class="my-card">
                <div class="text-h1 text-weight-bolder q-mx-xl q-my-xl col row wrap justify-center">A</div>

                <q-separator />

                <q-card-actions align="right">
                  <div class="text-weight-bold col q-pl-sm">STOK 100</div>
                  <q-btn outline style="color: orangered;" icon="opacity" label="BELI DARAH" to="/pmi/buy"/>
                </q-card-actions>
              </q-card>
            </div>

            <div class="col fit row wrap justify-center">
              <q-card class="my-card">
                <div class="text-h1 text-weight-bolder q-mx-xl q-my-xl col row wrap justify-center">B</div>

                <q-separator />

                <q-card-actions align="right">
                  <div class="text-weight-bold col q-pl-sm">STOK 150</div>
                  <q-btn outline style="color: orangered;" icon="opacity" label="BELI DARAH" to="/pmi/buy"/>
                </q-card-actions>
              </q-card>
            </div>

            <div class="col fit row wrap justify-center">
              <q-card class="my-card">
                <div class="text-h1 text-weight-bolder q-mx-xl q-my-xl col row wrap justify-center">AB</div>

                <q-separator />

                <q-card-actions align="right">
                  <div class="text-weight-bold col q-pl-sm">STOK 50</div>
                  <q-btn outline style="color: orangered;" icon="opacity" label="BELI DARAH" to="/pmi/buy"/>
                </q-card-actions>
              </q-card>
            </div>

            <div class="col fit row wrap justify-center">
              <q-card class="my-card">
                <div class="text-h1 text-weight-bolder q-mx-xl q-my-xl col row wrap justify-center">O</div>

                <q-separator />

                <q-card-actions align="right">
                  <div class="text-weight-bold col q-pl-sm">STOK 200</div>
                  <q-btn outline style="color: orangered;" icon="opacity" label="BELI DARAH" to="/pmi/buy"/>
                </q-card-actions>
              </q-card>
            </div>

          </div>

        </q-card>
      </div>

    </div>

    <div class="q-pa-md">
      <q-table title="Treats" :data="data" :columns="columns" row-key="name" :filter="filter" :loading="loading" :pagination.sync="pagination" class="q-px-lg q-py-lg">

        <template v-slot:top>
          <div class="text-h6">Data Pembelian</div>
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
        { name: 'fullname', required: true, label: 'Nama Lengkap', align: 'left', field: row => row.fullname, format: val => `${val}`, sortable: true },
        { name: 'jenis', label: 'Golongan', field: 'jenis' },
        { name: 'kebutuhan', label: 'Kebutuhan', field: 'kebutuhan' },
        { name: 'qty', label: 'Jumlah', field: 'qty' },
        { name: 'total', label: 'Total Harga', field: 'total' }
      ],
      data: [
        { fullname: 'Irma Sukmawati', jenis: 'A', kebutuhan: 'Operasi', qty: '10', total: '1.000.000' },
        { fullname: 'H. M. Tohir', jenis: 'B', kebutuhan: 'Melahirkan', qty: '10', total: '1.000.000' },
        { fullname: 'M. Abdullatif', jenis: 'AB', kebutuhan: 'Melahirkan', qty: '10', total: '1.000.000' },
        { fullname: 'Mirna Sri Wati', jenis: 'O', kebutuhan: 'Operasi', qty: '10', total: '1.000.000' }
      ]
    }
  }
}
</script>

<style lang="sass" scoped>
  .my-card
    width: 100%
    max-width: 250px
</style>
