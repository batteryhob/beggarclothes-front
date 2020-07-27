<template>
  <aside class="">
      <div class="wrapper">
          <div class="title">
              <i class="fas fa-times"></i>
          </div>
          <ul class="contents">
              <li>
                  <div>
                      <span>
                          디자이너
                          <i class="fas fa-chevron-right right"></i>
                      </span>
                  </div>
              </li>
              <li>
                  <div>
                      <span>
                          추천
                          <i class="fas fa-chevron-right right"></i>
                      </span>
                  </div>
              </li>
              <li>
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
    msg: String
  }
}
</script>
