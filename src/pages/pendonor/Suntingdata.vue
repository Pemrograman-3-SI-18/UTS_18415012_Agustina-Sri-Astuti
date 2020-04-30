<template>
  <q-page class="flex-center q-mx-lg q-mt-lg">
    <div class="q-pa-md">
      <q-card class="my-card">
        <q-card-section>

          <div class="text-h5 q-pa-md">
            Sunting Data Diri
          </div>

          <div class="row q-pa-md">
            <div class="col-4">
              <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">

                <q-input filled v-model="nik" label="Nomor Induk Kependudukan" hint="Masukan NIK anda" lazy-rules :rules="[ val => val && val.length > 0 || 'Please type something']"/>

                <q-input filled v-model="name" label="Nama Lengkap" hint="Masukan nama lengkap   anda" lazy-rules :rules="[ val => val && val.length > 0 || 'Please type something']"/>

                <q-input filled v-model="username" label="Username" hint="Masukan username anda" lazy-rules :rules="[ val => val && val.length > 0 || 'Please type something']"/>

                <q-input filled v-model="password" label="Password" type="password" hint="Masukan password anda" lazy-rules :rules="[ val => val && val.length > 0 || 'Please type something']"/>

                <q-input filled v-model="phone" label="Nomor Telephone" hint="Masukan nomor telephone anda" lazy-rules :rules="[ val => val && val.length > 0 || 'Please type something']"/>

                <q-input v-model="address" filled type="textarea" label="Alamat Lengkap"/>

                <q-select filled hint="Pilih Golongan Darah" outlined v-model="blood" :options="options" label="Golongan Darah" />

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
      address: '',
      name: null,
      username: null,
      password: null,
      nik: null,
      phone: null,
      blood: null,
      options: [
        'A', 'B', 'AB', 'O'
      ],

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
      this.kegiatan = null
      this.address = ''
      this.date = '0000/00/00'
      this.accept = false
    }
  }
}
</script>
