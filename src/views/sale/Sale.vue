<template>
  <div id="sale">
      <VueHeader/>
      <VueAside :flag="asideFlag" />

      <main>
        <section>
          <div class="content">
            <div class="content-list">
                <div class="title">
                    <p>Sale Infomation</p>
                    <span class="line"></span>
                </div>
                <ul>                    
                  <li v-for="(mail, idx) in saleInfos" :key="idx" @click="goDetail(mail.seq)">
                      <div class="mail">
                          <div class="time">1분 전</div>
                          <div class="subject">{{ mail.subject }}</div>
                          <div class="desc">blah blah blah blah blah blahblah blah blahblah blah blahblah...</div>
                          <div class="from">from: {{ mail.from }}</div>
                      </div>
                  </li>
                </ul>
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
  name: 'Sale',

  components: {
    VueAside,
    VueFooter,
    VueHeader,
    VuePopup
  },

  mounted(){

  },

  methods: {
    goDetail(seq){
      this.$router.push({ name: 'Parse', params: { seq }})
    }
  },

  apollo: {
    // Simple query that will update the 'hello' vue property
    saleInfos: gql`query {
      saleInfos : selectSaleInfos(page: 1){
          seq,
          from,
          regdate,
          subject
      }
    }`,
  },

  data: () => ({
     asideFlag: false
  }),
};
</script>

<style>
  @import '../../assets/css/sale/sale.css';
</style>