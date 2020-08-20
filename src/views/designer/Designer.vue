<template>
  <div id="designer">
    <VueHeader />
    <VueAside :flag="asideFlag" />

    <main>
      <section>
        <div class="content">
          <div class="content-designer">
            <div class="title">
              <p>Designer Ranking</p>
              <span class="line"></span>
            </div>
            <div class="boards iscroll-container" id="boards">
              <div class="scroller">
                <ul class="communitys clearfix">
                  <li v-for="(community, idx) in communitys" :key="idx" class="community">
                    <div class="board">
                      <div class="name">
                        <p>
                          {{ community.name }}
                          <img class="social" src="/img/naver.png" alt />
                        </p>
                        <span class="line"></span>
                      </div>
                      <ul>
                        <li
                          v-for="(rank, i) in community.ranks.slice(0,10)"
                          :key="i"
                          class="keyword"
                        >
                          <div class="rank">{{ i+1 }}</div>
                          <div class="designer">{{ rank.designer }}</div>
                        </li>
                      </ul>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="content-chart"></div>
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

import gql from "graphql-tag";

import $ from "jquery"

export const GET_COMMUNITYS = gql`
  query {
    communitys: selectCommunityList {
      seq
      url
      name
      desc
      ranks {
        designer
        computed
      }
    }
  }
`;

export default {
  name: "Designer",

  components: {
    VueAside,
    VueFooter,
    VueHeader,
    VuePopup
  },

  async mounted() {
    let res = await this.$apollo.query({ query: GET_COMMUNITYS });
    this.$data.communitys = res.data.communitys;

    this.$nextTick(()=>{
        const example_1_li_widths = $(
        "#boards > .scroller > ul > li"
        ).outerWidth();
        const example_1_num_elements = $("#boards > .scroller > ul > li").length;
        $("#boards > .scroller").width(
        example_1_li_widths * example_1_num_elements
        );

        /* eslint-disable */
        const myScroll = new IScroll("#boards", {
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
    })


  },

  data: () => ({
    asideFlag: false,
    communitys: []
  })
};
</script>

<style>
@import "../../assets/css/designer/designer.css";
</style>