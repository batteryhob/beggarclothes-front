<template>
  <div id="feed">
      <VueHeader/>
      <VueAside :flag="asideFlag" />

      <main>
        <section>
          <div class="content">
              <!-- <div class="content-designer">
                  <img src="https://www.frameweb.com/media/files/293691" alt="">
                  <div class="wrapper">
                      <div class="rect">
                          <p>Acne Studio</p>
                          <span class="line"></span>
                          <p class="sub">스웨덴의 컨템포러리 패션 브랜드. 우리나라에서는 '신세계 인터내셔널'에서 공식 수입해 온다. 국내 매장은 청담동 직영점과 신세계백화점 강남점, 신세계백화점 본점, 신세계백화점 센텀시티점 이렇게 세 지점에 입점되어있다.</p>
                          <div class="push">
                              <span>알림받기</span>
                              <div class="toggle">                                 
                                  <input class="tgl tgl-light" id="cb1" type="checkbox"/>
                                  <label class="tgl-btn" for="cb1"></label>
                              </div>
                          </div>
                      </div>
                  </div>
              </div> -->
              <div class="content-feed">
                  <div class="feedlist">
                      <div class="title">
                          <p>Curation</p>
                          <span class="line"></span>
                      </div>
                      <ul>                          
                        <li v-for="(feed, idx) in feeds" :key="idx" @click="goDetail(feed.seq)">
                            <div class="feed">
                                <div class="thumbnail">
                                    <img class="one" :src="feed.mainimage" alt="">
                                    <img class="two" :src="feed.mainimage" alt="">
                                </div>
                                <div class="desc">
                                    <p class="designer">{{ feed.designer }}</p>
                                    <p class="name">{{ feed.name }}</p>
                                    <p class="default">
                                        ({{feed.currency}} {{feed.before}} )                                               
                                    </p>
                                    <p class="price">
                                        {{feed.currency}} {{feed.after}}
                                    </p>
                                </div>
                            </div>
                        </li>                          
                      </ul>
                  </div>
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
  name: 'Feed',

  components: {
    VueAside,
    VueFooter,
    VueHeader,
    VuePopup
  },
  
  apollo: {
    // Simple query that will update the 'hello' vue property
    feeds: gql`query {
      feeds : selectFeeds(page: 1){
          seq
          designer_seq
          name
          currency
          before
          after
          mainimage
          designer
          designer_kor
          view
          like
      }
    }`,
  },

  methods: {
    goDetail(seq){
      this.$router.push({ name: 'Detail', params: { seq }})
    }
  },

  data: () => ({
       asideFlag: false
  }),
};
</script>

<style>
  @import '../../assets/css/feed/feed.css';
</style>