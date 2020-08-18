<template>
  <div id="detail">
      <VueHeader/>
      <VueAside :flag="asideFlag" />

      <main>
          서비스소개

          "싸고 멋있게"
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
  name: 'Introduce',

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