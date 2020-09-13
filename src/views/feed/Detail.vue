<template>
  <div id="detail">
    <VueHeader />
    <VueAside :flag="asideFlag" />

    <main>
      <section>
        <div class="content">
          <div class="content-detail">
            <div class="imgs">
              <div class="wrapper swiper-container">
                <ul class="swiper-wrapper">
                  <li v-for="(img, idx) in feed.imgs" :key="idx" class="swiper-slide">
                    <div>
                      <img :src="img.url" :alt="feed.name + idx" />
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div class="desc">
              <p class="tag">
                <span v-if="feed.new" style="margin-right: 3px;">New</span>
                <span v-if="feed.flag" style="margin-right: 3px;">Hot</span>
                <span v-if="feed.recommend">Recommend</span>
              </p>
              <p class="designer">{{feed.designer}}</p>
              <p class="name">{{feed.name}}</p>
              <p class="before">{{feed.currency}} {{feed.before}}</p>
              <p class="after">{{feed.currency}} {{feed.after}}</p>
              <div class="btns">
                <button class="go">Link</button>
                <input type="checkbox" id="like" />
                <label for="like">
                  <svg id="heart-svg" viewBox="467 392 58 57" xmlns="http://www.w3.org/2000/svg">
                    <g id="Group" fill="none" fill-rule="evenodd" transform="translate(467 392)">
                      <path
                        d="M29.144 20.773c-.063-.13-4.227-8.67-11.44-2.59C7.63 28.795 28.94 43.256 29.143 43.394c.204-.138 21.513-14.6 11.44-25.213-7.214-6.08-11.377 2.46-11.44 2.59z"
                        id="heart"
                        fill="#AAB8C2"
                      />
                      <circle
                        id="main-circ"
                        fill="#E2264D"
                        opacity="0"
                        cx="29.5"
                        cy="29.5"
                        r="1.5"
                      />

                      <g id="grp7" opacity="0" transform="translate(7 6)">
                        <circle id="oval1" fill="#9CD8C3" cx="2" cy="6" r="2" />
                        <circle id="oval2" fill="#8CE8C3" cx="5" cy="2" r="2" />
                      </g>

                      <g id="grp6" opacity="0" transform="translate(0 28)">
                        <circle id="oval1" fill="#CC8EF5" cx="2" cy="7" r="2" />
                        <circle id="oval2" fill="#91D2FA" cx="3" cy="2" r="2" />
                      </g>

                      <g id="grp3" opacity="0" transform="translate(52 28)">
                        <circle id="oval2" fill="#9CD8C3" cx="2" cy="7" r="2" />
                        <circle id="oval1" fill="#8CE8C3" cx="4" cy="2" r="2" />
                      </g>

                      <g id="grp2" opacity="0" transform="translate(44 6)">
                        <circle id="oval2" fill="#CC8EF5" cx="5" cy="6" r="2" />
                        <circle id="oval1" fill="#CC8EF5" cx="2" cy="2" r="2" />
                      </g>

                      <g id="grp5" opacity="0" transform="translate(14 50)">
                        <circle id="oval1" fill="#91D2FA" cx="6" cy="5" r="2" />
                        <circle id="oval2" fill="#91D2FA" cx="2" cy="2" r="2" />
                      </g>

                      <g id="grp4" opacity="0" transform="translate(35 50)">
                        <circle id="oval1" fill="#F48EA7" cx="6" cy="5" r="2" />
                        <circle id="oval2" fill="#F48EA7" cx="2" cy="2" r="2" />
                      </g>

                      <g id="grp1" opacity="0" transform="translate(24)">
                        <circle id="oval1" fill="#9FC7FA" cx="2.5" cy="3" r="2" />
                        <circle id="oval2" fill="#9FC7FA" cx="7.5" cy="2" r="2" />
                      </g>
                    </g>
                  </svg>
                </label>
                <span>1,000</span>
              </div>
            </div>
            <div class="pagination">
              <div class="swiper-pagination"></div>
            </div>
          </div>
          <div class="content-comment">
            <div class="comment">
              <p class="title">Description</p>
              <div class="desc">
                  {{feed.desc}}
              </div>
            </div>
            <div class="graph">
              <p class="title">Get!</p>
              <div class="circles">
                <div class="wrapper">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="-1 -1 34 34">
                    <circle cx="16" cy="16" r="15.9155" class="progress-bar__background" />
                    <circle
                      cx="16"
                      cy="16"
                      r="15.9155"
                      class="progress-bar__progress js-progress-bar"
                      :style="{ 
                        strokeDashoffset: 100 - (feed.designer_point),
                      }"
                    />
                  </svg>
                  <div class="pt">
                    <p class="point">{{feed.designer_point}}</p>
                    <p class="sub">Designer</p>
                  </div>
                </div>
                <div class="wrapper">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="-1 -1 34 34">
                    <circle cx="16" cy="16" r="15.9155" class="progress-bar__background" />
                    <circle
                      cx="16"
                      cy="16"
                      r="15.9155"
                      class="progress-bar__progress js-progress-bar"
                                            :style="{ 
                        strokeDashoffset: 100 - (feed.price_point),
                      }"
                    />
                  </svg>
                  <div class="pt">
                    <p class="point">{{feed.price_point}}</p>
                    <p class="sub">Price</p>
                  </div>
                </div>
                <div class="wrapper">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="-1 -1 34 34">
                    <circle cx="16" cy="16" r="15.9155" class="progress-bar__background" />
                    <circle
                      cx="16"
                      cy="16"
                      r="15.9155"
                      class="progress-bar__progress js-progress-bar"
                                            :style="{ 
                        strokeDashoffset: 100 - (feed.essential_point),
                      }"
                    />
                  </svg>
                  <div class="pt">
                    <p class="point">{{feed.essential_point}}</p>
                    <p class="sub">Essential</p>
                  </div>
                </div>
                <div class="wrapper">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="-1 -1 34 34">
                    <circle cx="16" cy="16" r="15.9155" class="progress-bar__background" />
                    <circle
                      cx="16"
                      cy="16"
                      r="15.9155"
                      class="progress-bar__progress js-progress-bar"
                      :style="{ 
                        strokeDashoffset: 100 - (feed.daily_point),
                      }"
                    />
                  </svg>
                  <div class="pt">
                    <p class="point">{{feed.daily_point}}</p>
                    <p class="sub">Daily</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="review">
              <p class="title">Reviews</p>
              <div class="reviews iscroll-container" id="reviews">
                <div class="scroller">
                  <ul class="clearfix">
                    <li>
                      <div class="wrapper">
                        <img
                          src="https://eomisae.co.kr/files/attach/images/50382/471/787/031/2cf6f2604cd0dbe2629aaec65bcc5a7c.jpeg"
                          alt
                        />
                        <div class="desc">
                          <img class="social" src="/img/naver.png" alt />
                          <p class="subject">아워레가시 웨일 코트 리뷰</p>
                          <div
                            class="content"
                          >님들아 이거 꼭 사세요. 정가 대비 완전 저렴합니다. 핫딜이에요. 수량은 1-2개 남은 것 같습니다. 사이즈는 정사이즈로 선택하시면 되요.</div>
                          <span class="link">
                            View
                            <i class="fas fa-chevron-right right"></i>
                          </span>
                        </div>
                      </div>
                    </li>

                    <li>
                      <div class="wrapper">
                        <img
                          src="https://eomisae.co.kr/files/attach/images/50382/471/787/031/2cf6f2604cd0dbe2629aaec65bcc5a7c.jpeg"
                          alt
                        />
                        <div class="desc">
                          <img class="social" src="/img/naver.png" alt />
                          <p class="subject">아워레가시 웨일 코트 리뷰</p>
                          <div
                            class="content"
                          >님들아 이거 꼭 사세요. 정가 대비 완전 저렴합니다. 핫딜이에요. 수량은 1-2개 남은 것 같습니다. 사이즈는 정사이즈로 선택하시면 되요.</div>
                          <span class="link">
                            View
                            <i class="fas fa-chevron-right right"></i>
                          </span>
                        </div>
                      </div>
                    </li>

                    <li>
                      <div class="wrapper">
                        <img
                          src="https://eomisae.co.kr/files/attach/images/50382/471/787/031/2cf6f2604cd0dbe2629aaec65bcc5a7c.jpeg"
                          alt
                        />
                        <div class="desc">
                          <img
                            class="social"
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/1200px-Instagram_logo_2016.svg.png"
                            alt
                          />
                          <p class="subject">아워레가시 웨일 코트 리뷰</p>
                          <div class="content">#간지#개간지#이쁨#득템</div>
                          <span class="link">
                            View
                            <i class="fas fa-chevron-right right"></i>
                          </span>
                        </div>
                      </div>
                    </li>

                    <li>
                      <div class="wrapper">
                        <img
                          src="https://eomisae.co.kr/files/attach/images/50382/471/787/031/2cf6f2604cd0dbe2629aaec65bcc5a7c.jpeg"
                          alt
                        />
                        <div class="desc">
                          <img
                            class="social"
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/1200px-Instagram_logo_2016.svg.png"
                            alt
                          />
                          <p class="subject">아워레가시 웨일 코트 리뷰</p>
                          <div class="content">#간지#개간지#이쁨#득템</div>
                          <span class="link">
                            View
                            <i class="fas fa-chevron-right right"></i>
                          </span>
                        </div>
                      </div>
                    </li>

                    <li>
                      <div class="wrapper">
                        <img
                          src="https://eomisae.co.kr/files/attach/images/50382/471/787/031/2cf6f2604cd0dbe2629aaec65bcc5a7c.jpeg"
                          alt
                        />
                        <div class="desc">
                          <img
                            class="social"
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/1200px-Instagram_logo_2016.svg.png"
                            alt
                          />
                          <p class="subject">아워레가시 웨일 코트 리뷰</p>
                          <div class="content">#간지#개간지#이쁨#득템</div>
                          <span class="link">
                            View
                            <i class="fas fa-chevron-right right"></i>
                          </span>
                        </div>
                      </div>
                    </li>

                    <li>
                      <div class="wrapper">
                        <img
                          src="https://eomisae.co.kr/files/attach/images/50382/471/787/031/2cf6f2604cd0dbe2629aaec65bcc5a7c.jpeg"
                          alt
                        />
                        <div class="desc">
                          <img
                            class="social"
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/1200px-Instagram_logo_2016.svg.png"
                            alt
                          />
                          <p class="subject">아워레가시 웨일 코트 리뷰</p>
                          <div class="content">#간지#개간지#이쁨#득템</div>
                          <span class="link">
                            View
                            <i class="fas fa-chevron-right right"></i>
                          </span>
                        </div>
                      </div>
                    </li>

                    <li>
                      <div class="wrapper">
                        <img
                          src="https://eomisae.co.kr/files/attach/images/50382/471/787/031/2cf6f2604cd0dbe2629aaec65bcc5a7c.jpeg"
                          alt
                        />
                        <div class="desc">
                          <img
                            class="social"
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/1200px-Instagram_logo_2016.svg.png"
                            alt
                          />
                          <p class="subject">아워레가시 웨일 코트 리뷰</p>
                          <div class="content">#간지#개간지#이쁨#득템</div>
                          <span class="link">
                            View
                            <i class="fas fa-chevron-right right"></i>
                          </span>
                        </div>
                      </div>
                    </li>

                    <li>
                      <div class="wrapper">
                        <img
                          src="https://eomisae.co.kr/files/attach/images/50382/471/787/031/2cf6f2604cd0dbe2629aaec65bcc5a7c.jpeg"
                          alt
                        />
                        <div class="desc">
                          <img
                            class="social"
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/1200px-Instagram_logo_2016.svg.png"
                            alt
                          />
                          <p class="subject">아워레가시 웨일 코트 리뷰</p>
                          <div class="content">#간지#개간지#이쁨#득템</div>
                          <span class="link">
                            View
                            <i class="fas fa-chevron-right right"></i>
                          </span>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>

    <VueFooter />
    <VuePopup />
  </div>
</template>

<script>
import VueAside from "../../shared/aside";
import VueFooter from "../../shared/footer";
import VueHeader from "../../shared/header";
import VuePopup from "../../shared/popup";

import Swiper from "swiper/bundle";
import "swiper/swiper-bundle.css";

import gql from "graphql-tag";

export const VIEW_FEED_DETAIL = gql`
  mutation viewFeed($seq: Int!) {
    result: viewFeed(seq: $seq)
  }
`
export const GET_FEED_DETAIL = gql`
  query selectFeed($seq: Int!) {
    feed: selectFeed(seq: $seq) {
      seq
      hot
      newflag
      recommend
      designer_seq
      name
      currency
      before
      after
      desc
      mainimage
      designer
      designer_kor
      view
      like
      designer_point
      price_point
      essential_point
      daily_point
      imgs {
        url
      }
    }
  }
`;

export default {
  name: "Detail",

  components: {
    VueAside,
    VueFooter,
    VueHeader,
    VuePopup
  },

  async mounted() {

    //뷰카운트
    this.$apollo.mutate({
      mutation: VIEW_FEED_DETAIL,
      variables: { seq: parseInt(this.$route.params.seq) }
    });
    //디테일정보
    let res = await this.$apollo.query({
      query: GET_FEED_DETAIL,
      variables: { seq: parseInt(this.$route.params.seq) }
    });
    this.$data.feed = res.data.feed;

    this.$nextTick(() => {
      window.dswiper = new Swiper(".swiper-container", {
        spaceBetween: 10,
        pagination: {
          el: ".swiper-pagination"
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        }
      });
    });
  },

  data: () => ({
    asideFlag: false,
    feed: {}
  })
};
</script>

<style>
@import "../../assets/css/detail/detail.css";
</style>