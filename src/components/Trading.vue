<template>
  <div class="choice">
    <autocomplete
      :suggestions="companies"
      v-model="selectedCompany"
      @change="getStock(selectedCompany, '1m')">
    </autocomplete>
    <div class="stock" v-if="stock">
      <line-chart :data="stock"></line-chart>
    </div>
    <div class="actions" v-if="stock">
      <button @click="getStock(selectedCompany, '1m')">1 month</button>
      <button @click="getStock(selectedCompany, '3m')">3 months</button>
      <button @click="getStock(selectedCompany, '6m')">6 months</button>
      <button @click="getStock(selectedCompany, '1y')">1 year</button>
      <button @click="getStock(selectedCompany, '2y')">2 years</button>
      <button @click="getStock(selectedCompany, '5y')">5 years</button>
    </div>
  </div>
</template>

<script>
import TradingService from '../services/TradingService'
import Autocomplete from './Autocomplete'
export default {
  name: 'Trading',
  data() {
    return {
      companies: [],
      selectedCompany: "",
      stock: null
    }
  },
  components: {
    Autocomplete
  },
  created: function() {
    this.getCompanies();
  },
  methods: {
    getCompanies: function() {
      TradingService.getCompanies().then(res => this.companies = res );
    },
    getStock: function(company, duration) {
      TradingService.getStock(company, duration).then(res => {
        this.stock = res.reduce((obj, item) => {
          obj[item.date] = item.close;
          return obj;
        }, {});
      });
    }
  }
}
</script>

<style scoped>
</style>
