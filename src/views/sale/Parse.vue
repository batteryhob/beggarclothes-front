<template>
  <div id="parse">
      <VueHeader/>
      <VueAside :flag="asideFlag" />

      <main>
        <section>
          <div class="content">
              <div class="content-parse">
                {{ saleInfo }}
              </div>
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

import gql from 'graphql-tag'


export default {
  name: 'Parse',

  components: {
    VueAside,
    VueFooter,
    VueHeader,
    VuePopup
  },

  apollo: {
    // Simple query that will update the 'hello' vue property
    saleInfo: {
      // gql query
      query: gql`query selectSaleInfo($seq: Int!) {
        saleInfo : selectSaleInfo(seq: $seq){
          seq,
          from,
          regdate,
          subject,
          content
        }
      }`,
      variables () {
        return {
            seq: this.seq,
        }
      },
    },
  },

  data: () => ({
     asideFlag: false,
     seq: 94,
     saleInfo: {}
  }),
};
</script>

<style>
  @import '../../assets/css/parse/parse.css';
</style>