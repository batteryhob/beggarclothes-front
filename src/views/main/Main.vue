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
                          <li class="swiper-slide" v-for="(feature, idx) in features" :key="idx" >
                              <div class="feature">
                                  <img src="/img/sample3.png" alt="">
                                  <div class="desc">
                                      <p>Alexandar Wang</p>
                                      <p class="sub">페인티드 데님 오버 자켓</p>
                                      <button>
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
                      <p>Designer Ranking</p>
                      <!-- <p class="sub"><i class="fas fa-info-circle"></i>디매 어미새 고아캐등 패션카페 24시간 언급량</p> -->
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
                      <p>Curation</p>
                      <!-- <p class="sub"><i class="fas fa-info-circle"></i>해외명품 오픈마켓 중고나라 큐레이션 딜</p> -->
                      <span class="more">
                          More
                          <i class="fas fa-chevron-right right"></i>
                      </span>
                  </div>
                  <div class="feeds iscroll-container" id="feeds">
                      <div class="scroller">
                          <ul class="clearfix">                              
                            <li v-for="(feed, idx) in feeds" :key="idx" >
                                <div class="feed">
                                    <div class="thumbnail">
                                        <img src="/img/sample1.png" alt="">
                                    </div>
                                    <div class="desc">
                                        <p class="designer">Our Legacy</p>
                                        <p class="name">플리츠 후드 집업</p>
                                        <p class="price">
                                            ₩ 10,000
                                            <span>(₩ 10,000)</span>
                                        </p>
                                        <p class="interactive">
                                            <span class="eye">
                                                <i class="fas fa-eye"></i>22
                                            </span>
                                            <span class="heart">
                                                <i class="fas fa-heart"></i>1,200
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
                      <p>Sale Infomation</p>
                      <!-- <p class="sub"><i class="fas fa-info-circle"></i>전세계 세일정보 자동 수집</p> -->
                      <span class="more">
                          More
                          <i class="fas fa-chevron-right right"></i>
                      </span>
                  </div>
                  <div class="mails">
                      <ul>                          
                        <li v-for="(mail, idx) in mails" :key="idx">
                            <div class="mail">
                                <p class="subject">Sensse Up to 70%</p>
                                <p class="content">blah blah blahblah blah...</p>
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



export default {
  name: 'Main',

  components: {
    VueAside,
    VueFooter,
    VueHeader,
    VuePopup
  },



  data: () => ({
      asideFlag: false,

      features: [1,2,3,4,5],
      tags: [1,2,3,4,5],
      feeds: [1,2,3,4,5],
      mails: [1,2,3,4,5]
  }),
};
</script>

<style>
  @import '../../assets/css/main/main.css';
</style>