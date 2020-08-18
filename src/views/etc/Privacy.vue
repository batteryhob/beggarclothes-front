<template>
  <div id="detail">
      <VueHeader/>
      <VueAside :flag="asideFlag" />

      <main>
          개인정보취급방침

          개인정보를 포함하지 않습니다.
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
  name: 'Privacy',

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