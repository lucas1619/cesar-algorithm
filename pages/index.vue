<template>
  <v-container>
    <v-row justify="center" align="center">
      <v-col cols="12" sm="8" md="6">
        <v-card>
          <v-card-title class="headline">Cesar Algorithm</v-card-title>
          <v-card-text>
            <v-row>
              <v-col cols="9">
                <v-text-field
                  v-model="texto"
                  label="Text"
                  outlined
                  dense
                  clearable
                />
              </v-col>
              <v-col cols="3">
                <v-text-field
                  v-model.number="llave"
                  number
                  label="Key"
                  outlined
                  dense
                  type="number"
                  min="1"
                />
              </v-col>
            </v-row>
          </v-card-text>
          <v-card-actions>
            <v-btn dark @click="encrypted">Encrypt</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
    <v-row justify="center" align="center">
      <v-col cols="12" sm="8" md="6">
        <v-card>
          <v-card-title class="headline">Result</v-card-title>
          <v-card-text>
            <v-row>
              <v-col cols="12">
                <div>
                  {{ resultado }}
                </div>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { encrypt } from '../utils/cesar_algorithm'

interface Data {
  texto: string
  llave: number
  resultado: string
}

export default defineComponent({
  name: 'Index',
  data() : Data {
    return {
      texto: '',
      llave: 1,
      resultado: '',
    }
  },
  methods: {
    encrypted() {
      this.resultado = encrypt(this.texto, this.llave)
    },
  },
})
</script>
