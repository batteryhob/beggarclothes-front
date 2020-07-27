<template>
  <footer>
      <div class="wrapper">
          <div class="logo">
              <img src="/img/logo_footer.png" alt="메인로고">
          </div>
          <div class="policy">
              <ul>
                  <li>
                      <span>이용약관</span>
                  </li>
                  <li>
                      <span>개인정보취급방침</span>
                  </li>
                  <li>
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
  }
}
</script>
