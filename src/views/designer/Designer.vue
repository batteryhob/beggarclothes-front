<template>
  <div id="designer">
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
  name: 'Designer',

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
  @import '../../assets/css/designer/designer.css';
</style>