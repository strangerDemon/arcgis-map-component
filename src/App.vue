<template>
  <div id="app-start" class="app-start">
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import * as countryInfo from './data/local-country-info';
export default {
    name: 'App',
    components: {},
    data: () => ({
        countryInfo
    }),
    mounted() {
        console.log('window 1:', window);
        console.log('countryInfo:', this.countryInfo);
    }
};
</script>

<style lang="less" scoped>
.app-start {
    display: flex;
    flex-direction: column;
    padding: 0;
    margin: 0;
    width: 100%;
    height: 100%;
    font-size: 12px;
}
</style>
