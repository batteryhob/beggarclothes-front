<template>
  <div id="feed">
      <VueHeader/>
      <VueAside :flag="asideFlag" />

      <main>
        <section>
          <div class="content">
              <div class="content-designer">
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
              </div>
              <div class="content-feed">
                  <div class="feedlist">
                      <div class="title">
                          <p>Curation</p>
                          <span class="line"></span>
                      </div>
                      <ul>                          
                        <li v-for="(feed, idx) in feeds" :key="idx">
                            <div class="feed">
                                <div class="thumbnail">
                                    <img src="https://cache.net-a-porter.com/images/products/1213926/1213926_ou_2000_q80.jpg" alt="">
                                </div>
                                <div class="desc">
                                    <p class="designer">Acne Studio</p>
                                    <p class="name">플리츠 후드 집업</p>
                                    <p class="default">
                                        (₩ 10,000)                                               
                                    </p>
                                    <p class="price">
                                        ₩ 10,000
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

export default {
  name: 'Feed',

  components: {
    VueAside,
    VueFooter,
    VueHeader,
    VuePopup
  },

  data: () => ({
       asideFlag: false,

       feeds: [1,2,3,4,5]
  }),
};
</script>

<style>
  @import '../../assets/css/feed/feed.css';
</style>