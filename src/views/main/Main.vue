<template>
  <div id="main">
      <VueHeader />
      <VueAside :flag="asideFlag" />

      <main>
        <section>
          <div class="content">
              <div class="content-main">
                  <div class="swiper-container">
                      <ul class="swiper-wrapper">
                          <li class="swiper-slide" v-for="(feed, idx) in feeds" :key="idx" >
                              <div class="feature">
                                  <img :src="feed.mainimage" alt="">
                                  <div class="desc">
                                      <p>{{ feed.designer }}</p>
                                      <p class="sub">{{ feed.name }}</p>
                                      <button @click="goDetail(feed.seq)">
                                          View Deal
                                          <i class="fas fa-chevron-right right"></i>
                                      </button>
                                  </div>                                            
                              </div>
                          </li>
                      </ul>                                
                      <div class="swiper-button-prev"></div>
                      <div class="swiper-button-next"></div>
                  </div>
                  <div class="pagination">
                      <div class="swiper-pagination"></div>
                  </div>                 
              </div>

              <div class="content-tags">
                  <div class="title">
                    <p>이번주 디자이너 랭킹</p>
                    <p class="sub">2020년 9월 17일 <span class="update">update</span></p>
                    <span class="more">
                        More
                        <i class="fas fa-chevron-right right"></i>
                    </span>
                  </div>
                  <div class="ranking">
                      <ul>                          
                        <li v-for="(tag, idx) in tags" :key="idx" >
                            <div class="tag">
                                <div class="thumb">
                                    <img src="/img/acne.png" alt="">
                                </div>
                                <div class="rank">
                                    <span>1</span>
                                </div>
                                <div class="desc">
                                    <p class="name">Acne Studio</p>
                                    <p>
                                        디매 언급량 감소
                                        <i class="fas fa-angle-down down"></i>
                                    </p>
                                </div>
                            </div>
                        </li>                          
                      </ul>
                  </div>
              </div>

              <div class="content-sub">
                  <div class="title">
                    <p>추천</p>
                    <p class="sub">매일 매일 새로운 세일 아이템 추천</p>
                    <span class="more">
                        More
                        <i class="fas fa-chevron-right right"></i>
                    </span>
                  </div>
                  <div class="feeds iscroll-container" id="feeds">
                      <div class="scroller">
                          <ul class="clearfix">                              
                            <li v-for="(feed, idx) in feeds" :key="idx" >
                                <div class="feed" @click="goDetail(feed.seq)">
                                    <div class="thumbnail">
                                        <img class="one" :src="feed.mainimage" alt="">
                                        <img class="two" :src="feed.mainimage" alt="">
                                    </div>
                                    <div class="desc">
                                        <p class="designer">{{ feed.designer }}</p>
                                        <p class="name">{{ feed.name }}</p>
                                        <p class="price">
                                            {{feed.currency}} {{feed.after}}
                                            <span>({{feed.currency}} {{feed.before}})</span>
                                        </p>
                                        <p class="interactive">
                                            <span class="eye">
                                                <i class="fas fa-eye"></i>{{feed.view}}
                                            </span>
                                            <span class="heart">
                                                <i class="fas fa-heart"></i>{{feed.like}}
                                            </span>
                                        </p>
                                    </div>
                                </div>
                            </li>
                          </ul>
                      </div>
                  </div>
              </div>

              <div class="content-sale">
                  <div class="title">
                    <p>세일정보</p>
                    <p class="sub">전세계 쇼핑몰 세일정보 실시간 수집</p>
                    <span class="more">
                        More
                        <i class="fas fa-chevron-right right"></i>
                    </span>
                  </div>
                  <div class="mails">
                      <ul>                          
                        <li class="hot" v-for="(mail, idx) in saleInfos" :key="idx" @click="goSaleInfos(mail.seq)">
                            <div class="mail">                                
                                <p class="subject"><span style="margin-right: 10px;">hot</span>{{ mail.subject }}</p>
                                <p class="content">from: {{ mail.from }}</p>
                                <p class="date">2020-07-08</p>
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

import Swiper from 'swiper/bundle';
import 'swiper/swiper-bundle.css';

import $ from 'jquery';

import gql from 'graphql-tag'

export const GET_FEED_LIST = gql`
  query selectFeeds($page: Int!) {
    feeds: selectFeeds(page: $page) {
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
  }
`;

export default {
  name: 'Main',

  components: {
    VueAside,
    VueFooter,
    VueHeader,
    VuePopup
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

  async mounted() {
    let res = await this.$apollo.query({
      query: GET_FEED_LIST,
      variables: { page: 1 }
    });
    console.log(res)
    this.$data.feeds = res.data.feeds;

    this.$nextTick(() => {
        if(typeof window.swiper === 'undefined' || window.swiper == null){
            window.swiper = new Swiper('.swiper-container', {
                spaceBetween: 10,
                pagination: {
                    el: '.swiper-pagination',
                },
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
            });

            const example_1_li_widths = $('#feeds > .scroller > ul > li').outerWidth();
            const example_1_num_elements = $('#feeds > .scroller > ul > li').length;
            $('#feeds > .scroller').width( example_1_li_widths * example_1_num_elements );

            //iscroll
            /* eslint-disable */
            const myScroll = new IScroll('#feeds', {
                scrollX: true,
                scrollY: false,
                // momentum: false,
                snap: true,
                snapSpeed: 400,
                keyBindings: true,
                mouseWheel: true,
                disablePointer: true,
                disableTouch: false,
                disableMouse: false
            });
        }
    });
  },


  methods: {
    goDetail(seq){
      this.$router.push({ name: 'Detail', params: { seq }})
    },
    goSaleInfos(seq){
      this.$router.push({ name: 'Parse', params: { seq }})
    }
  },

  data: () => ({
      asideFlag: false,

      features: [],
      feeds: [],
      tags: []
      
  }),
};
</script>

<style>
  @import '../../assets/css/main/main.css';
</style>