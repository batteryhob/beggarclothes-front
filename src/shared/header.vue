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
              <button>
                  <i class="fas fa-bars"></i>
              </button>
          </div>
          <div class="logo">
              <img class="mobile" src="/img/logo_main.png" alt="메인로고">
              <img class="desktop" src="/img/logo_main_hor.png" alt="메인로고">
          </div>
          <div class="center">
              <ul>
                  <li>
                      <div>
                          <span>디자이너</span>
                      </div>
                  </li>
                  <li>
                      <div>
                          <span>추천</span>
                      </div>
                  </li>
                  <li>
                      <div>
                          <span>세일정보</span>
                      </div>
                  </li>
              </ul>
          </div>
          <div class="right">
              <div class="btns">
                  <button>
                      <i class="fas fa-heart"></i>
                  </button>
                  <button>
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
  }
}
</script>
