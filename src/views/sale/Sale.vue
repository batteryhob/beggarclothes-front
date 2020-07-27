<template>
  <div id="sale">
      <VueHeader/>
      <VueAside/>

      <main>
        <section>
          <div class="content">

          </div>
        </section>
      </main>

      <VueFooter/>
      <VuePopup/>
  </div>
</template>

<script>
import VueAside from '../../shared/aside'
import VueFooter from '../../shared/footer'
import VueHeader from '../../shared/header'
import VuePopup from '../../shared/popup'

export default {
  name: 'Sale',

  components: {
    VueAside,
    VueFooter,
    VueHeader,
    VuePopup
  },

  data: () => ({}),
};
</script>

<style>
  @import '../../assets/css/sale/sale.css';
</style>