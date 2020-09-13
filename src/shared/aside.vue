<template>
  <aside :class="{ active: flag }">
      <div class="wrapper">
          <div class="title" @click="asideClose">
              <i class="fas fa-times"></i>
          </div>
          <ul class="contents">
              <li @click="goDesigner">
                  <div>
                      <span>
                          디자이너 랭킹
                          <i class="fas fa-chevron-right right"></i>
                      </span>
                  </div>
              </li>
              <li @click="goFeed">
                  <div>
                      <span>
                          추천
                          <i class="fas fa-chevron-right right"></i>
                      </span>
                  </div>
              </li>
              <li @click="goSale">
                  <div>
                      <span>
                          세일정보
                          <i class="fas fa-chevron-right right"></i>
                      </span>
                  </div>
              </li>
          </ul>
      </div>
  </aside>
</template>

<script>
export default {
  name: 'VueAside',
  props: {
    flag: Boolean
  },

  methods: {
      //메뉴바 on/off
      asideClose() {
          this.$parent.asideFlag = false
      },
      //네비게이션 이동
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
      }
  }

}
</script>
