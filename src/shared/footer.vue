<template>
  <footer>
      <div class="wrapper">
          <div class="logo">
              <img src="/img/logo_footer.png" alt="메인로고">
          </div>
          <div class="policy">
              <ul>
                  <li @click="goRule">
                      <span>이용약관</span>
                  </li>
                  <li @click="goPrivacy">
                      <span>개인정보취급방침</span>
                  </li>
                  <li @click="goIntro">
                      <span>서비스소개</span>
                  </li>
              </ul>
          </div>
          <div class="copy">
              2020 Jiho Jeon. All Rights Reserved.
          </div>
      </div>
  </footer>
</template>

<script>
export default {
  name: 'VueFooter',
  props: {
    msg: String
  },

  methods: {
      goIntro(){
          this.$router.push({path: '/intro'})
      },
      goPrivacy(){
          this.$router.push({path: '/privacy'})
      },
      goRule(){
          this.$router.push({path: '/rule'})
      }
  }
}
</script>
