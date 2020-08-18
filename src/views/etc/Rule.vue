<template>
  <div id="detail">
      <VueHeader/>
      <VueAside :flag="asideFlag" />

      <main>
          이용약관
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
  name: 'Rule',

  components: {
    VueAside,
    VueFooter,
    VueHeader,
    VuePopup
  },

  data: () => ({
       asideFlag: false
  }),
};
</script>

<style>
  @import '../../assets/css/detail/detail.css';
</style>