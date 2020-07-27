<template>
  <div id="popup" v-if="flag">
      <div class="wrapper">
          <div class="contents">
              <div class="top">
                  Comfirm
              </div>
              <div class="message">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae nobis quos, asperiores dolorem blanditiis commodi esse voluptates. Molestias sapiente ullam sequi, dolor adipisci, magnam, dolorem et aperiam quas culpa perspiciatis.
              </div>
              <div class="btns">
                  <button>확인</button>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'VuePopup',
  props: {
    flag: Boolean
  }
}
</script>
