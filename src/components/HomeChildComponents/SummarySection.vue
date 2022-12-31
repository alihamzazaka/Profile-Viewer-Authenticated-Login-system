<template>

  <div class="pa-2 ">
    <!-- starting coading-->

    <v-text-field append-icon="mdi-magnify" label="Search" single-line outlined class="rounded-pill" ></v-text-field>
      <template>
        <div class="text-center">
          <h1 class="text-h6 font-weight-medium">Year's Progress</h1>
          <v-progress-circular :rotate="-90" :size="100" :width="5" :value="value" color="primary">
            {{ value }}
            Clients
          </v-progress-circular>
          <v-progress-circular :rotate="90" :size="100" :width="5" :value="value" color="red">
            {{ value }}
            Earnings
          </v-progress-circular>
          
        </div>
        <div class="text-center">
          <v-progress-circular :rotate="-90" :size="100" :width="5" :value="value" color="secondary">
            {{ value }}
            Ratings
          </v-progress-circular>
          <v-progress-circular :rotate="90" :size="100" :width="5" :value="value" color="purple">
            {{ value }}
            Reviwed
          </v-progress-circular>
          
        </div>
      </template>
    
      <h2 class="text-h6 text-center font-weight-medium mt-6" >Why Is A Profile Blurb Important?</h2>

<!-- card starting-->
<div>
<v-card class="mx-auto rounded-xl check2 mt-5" color="#4d4cac">
  <v-list-item three-line class="d-flex justify-center">

    <v-icon color="indigo" size="35" class="rounded-lg   white pa-2">
      mdi-face-agent
    </v-icon>
    <!-- list content-->
    <v-list-item-content class="pl-4">

      <v-list-item-title class="white--text text-h6 mb-1">
        Customer
      </v-list-item-title >
      <v-list-item-subtitle class="grey--text text--lighten-2">Trustworthy Clients</v-list-item-subtitle>
    </v-list-item-content>


  </v-list-item>
</v-card>
</div>
<div>
<v-card class="mx-auto rounded-xl check2 mt-5" color="#9698d6">
  <v-list-item three-line class="d-flex justify-center">

    <v-icon color="#9698d6" size="35" class="rounded-lg   white pa-2">
      mdi-progress-check
    </v-icon>
    <!-- list content-->
    <v-list-item-content class="pl-4">

      <v-list-item-title class="white--text text-h6 mb-1">
        Projects
      </v-list-item-title >
      <v-list-item-subtitle class="grey--text text--lighten-2">Verified Products</v-list-item-subtitle>
    </v-list-item-content>


  </v-list-item>
</v-card>
</div>
<div>
<v-card class="mx-auto rounded-xl check2 mt-5" color="#ff808b">
  <v-list-item three-line class="d-flex justify-center">

    <v-icon color="#ff808b" size="35" class="rounded-lg   white pa-2">
      mdi-lan
    </v-icon>
    <!-- list content-->
    <v-list-item-content class="pl-4">

      <v-list-item-title class="white--text text-h6 mb-1">
        Remote Work
      </v-list-item-title >
      <v-list-item-subtitle class="grey--text text--lighten-2">Verified Employee</v-list-item-subtitle>
    </v-list-item-content>


  </v-list-item>
</v-card>
</div>
<!--ending chip-->
</div>

</template>
<script>
export default {
name: 'LastGrid'
}
</script>
<script>
export default {
data () {
  return {
    interval: {},
    value: 0,
  }
},
beforeDestroy () {
  clearInterval(this.interval)
},
mounted () {
  this.interval = setInterval(() => {
    if (this.value === 100) {
      return (this.value = 0)
    }
    this.value += 10
  }, 1000)
},
}
</script>
<style scoped>
ul {
list-style: none;

}

.v-progress-circular {
margin: 1rem;
}
.check{

background-color: #4d4cac;
}
</style>