<template>
  <q-page class="flex-center q-mx-lg q-mt-lg">
    <div class="q-pa-md">
      <q-card class="my-card">
        <q-card-section>

          <div class="text-h5 q-pa-md">
            Pembelian Darah
          </div>

          <div class="row q-pa-md">
            <div class="col-4">
              <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">

                <q-input filled v-model="fullname" label="Nama Lengkap" hint="Masukan nama anda" lazy-rules :rules="[ val => val && val.length > 0 || 'Please type something']"/>

                <q-input filled v-model="jenis" label="Jenis Darah" hint="Jenis darah yang di beli" disable lazy-rules :rules="[ val => val && val.length > 0 || 'Please type something']"/>

                <q-input filled v-model="kebutuhan" label="Penggunaan" hint="ex : operasi, persalinan" lazy-rules :rules="[ val => val && val.length > 0 || 'Please type something']"/>

                <q-input filled v-model="qty" label="Jumlah Beli" hint="Banyaknya pembelian" type="number" lazy-rules :rules="[ val => val && val.length > 0 || 'Please type something']"/>

                <q-input filled v-model="harga" label="Harga Satuan" disabled lazy-rules :rules="[ val => val && val.length > 0 || 'Please type something']"/>

                <q-input filled v-model="total" label="Total harga" disabled lazy-rules :rules="[ val => val && val.length > 0 || 'Please type something']"/>

                <div>
                  <q-btn label="Submit" type="submit" color="primary" to="me"/>
                  <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" />
                </div>

              </q-form>
            </div>
            <div class="col-7">

            </div>
          </div>

        </q-card-section>
      </q-card>
    </div>
  </q-page>
</template>

<script>
export default {
  data () {
    return {
      fullname: null,
      jenis: 'A',
      kebutuhan: null,
      qty: null,
      harga: '250.000',
      total: null,

      accept: false
    }
  },

  methods: {
    onSubmit () {
      if (this.accept !== true) {
        this.$q.notify({
          color: 'red-5',
          textColor: 'white',
          icon: 'warning',
          message: 'You need to accept the license and terms first'
        })
      } else {
        this.$q.notify({
          color: 'green-4',
          textColor: 'white',
          icon: 'cloud_done',
          message: 'Submitted'
        })
      }
    },

    onReset () {
      this.fullname = null
      this.kebutuhan = null
      this.qty = null
      this.accept = false
    }
  }
}
</script>
