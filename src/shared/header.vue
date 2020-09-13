<template>
  <header>
      <div class="alert">
          <i class="fas fa-chevron-left left"></i>
          <ul class="list">
              <li>
                  subscribe beggar clothes
              </li>
              <li>
                  나의 지갑을 지켜줘2
              </li>
              <li>
                  나의 지갑을 지켜줘3
              </li>
          </ul>
          <i class="fas fa-chevron-right right"></i>
      </div>
      <div class="content">
          <div class="left mobile">
              <button @click="asideOpen">
                  <i class="fas fa-bars"></i>
              </button>
          </div>
          <div class="logo">
              <img class="mobile" @click="goMain" src="/img/logo_main.png" alt="메인로고">
              <img class="desktop" @click="goMain" src="/img/logo_main_hor.png" alt="메인로고">
          </div>
          <div class="center">
              <ul>
                  <li @click="goDesigner">
                      <div>
                          <span>디자이너 랭킹</span>
                      </div>
                  </li>
                  <li @click="goFeed">
                      <div>
                          <span>추천</span>
                      </div>
                  </li>
                  <li @click="goSale">
                      <div>
                          <span>세일정보</span>
                      </div>
                  </li>
              </ul>
          </div>
          <div class="right">
              <div class="btns">
                  <button @click="goLike">
                      <i class="fas fa-heart"></i>
                  </button>
                  <button @click="goSignin">
                      <i class="fas fa-user"></i>
                  </button>
              </div>
          </div>
      </div>
  </header>
</template>

<script>
export default {
  name: 'VueHeader',
  props: {
    msg: String
  },

  

  methods: {
      //메뉴바 on/off
      asideOpen() {
          this.$parent.asideFlag = true
      },
      //네비게이션 이동
      goMain() {
          if(this.$router.currentRoute.name === 'Main'){
              this.$parent.asideFlag = false
          }else{
              this.$router.push({ path: '/' })
          }  
      },
      goDesigner() {
          if(this.$router.currentRoute.name === 'Designer'){
              this.$parent.asideFlag = false
          }else{
              this.$router.push({ path: '/designer' })
          }            
      },
      goFeed() {
          if(this.$router.currentRoute.name === 'Feed'){
              this.$parent.asideFlag = false
          }else{
              this.$router.push({ path: '/feed' })
          }  
      },
      goSale() {
          if(this.$router.currentRoute.name === 'Sale'){
              this.$parent.asideFlag = false
          }else{
              this.$router.push({ path: '/sale' })
          }  
      },
      goSignin() {
          this.$router.push({ path: '/signin' })
      },
      goLike(){
          this.$router.push({ path: '/signin' })
      }
  }
}
</script>