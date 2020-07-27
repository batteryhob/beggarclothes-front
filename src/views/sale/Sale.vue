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
                  <li v-for="(mail, idx) in mails" :key="idx">
                      <div class="mail">
                          <div class="time">1분 전</div>
                          <div class="subject">Sensse Up to 35%</div>
                          <div class="desc">blah blah blah blah blah blahblah blah blahblah blah blahblah...</div>
                          <div class="from">from: Sensse</div>
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

export default {
  name: 'Sale',

  components: {
    VueAside,
    VueFooter,
    VueHeader,
    VuePopup
  },

  data: () => ({
     asideFlag: false,

     mails: [1,2,3,4,5]
  }),
};
</script>

<style>
  @import '../../assets/css/sale/sale.css';
</style>