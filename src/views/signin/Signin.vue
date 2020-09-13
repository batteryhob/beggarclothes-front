<template>
  <div id="signin">
      <VueHeader/>
      <VueAside :flag="asideFlag" />

            <main>
                <section>
                    <div class="content">

                        <div class="auth">
                            <div class="title">
                                <p>Sign In</p>
                                <span class="line"></span>
                            </div>
                            <ul>
                                <li>
                                    <div class="google">
                                        <svg aria-hidden="true" class="svg-icon" width="18" height="18"
                                            viewBox="0 0 18 18">
                                            <g>
                                                <path
                                                    d="M16.51 8H8.98v3h4.3c-.18 1-.74 1.48-1.6 2.04v2.01h2.6a7.8 7.8 0 0 0 2.38-5.88c0-.57-.05-.66-.15-1.18z"
                                                    fill="#4285F4"></path>
                                                <path
                                                    d="M8.98 17c2.16 0 3.97-.72 5.3-1.94l-2.6-2a4.8 4.8 0 0 1-7.18-2.54H1.83v2.07A8 8 0 0 0 8.98 17z"
                                                    fill="#34A853"></path>
                                                <path
                                                    d="M4.5 10.52a4.8 4.8 0 0 1 0-3.04V5.41H1.83a8 8 0 0 0 0 7.18l2.67-2.07z"
                                                    fill="#FBBC05"></path>
                                                <path
                                                    d="M8.98 4.18c1.17 0 2.23.4 3.06 1.2l2.3-2.3A8 8 0 0 0 1.83 5.4L4.5 7.49a4.77 4.77 0 0 1 4.48-3.3z"
                                                    fill="#EA4335"></path>
                                            </g>
                                        </svg>
                                        구글 계정으로 시작하기
                                    </div>
                                </li>
                                <li>
                                    <div class="kakao">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18"
                                            viewBox="0 0 256 256">
                                            <path fill="#FFE812"
                                                d="M256 236c0 11.046-8.954 20-20 20H20c-11.046 0-20-8.954-20-20V20C0 8.954 8.954 0 20 0h216c11.046 0 20 8.954 20 20v216z" />
                                            <path
                                                d="M128 36C70.562 36 24 72.713 24 118c0 29.279 19.466 54.97 48.748 69.477-1.593 5.494-10.237 35.344-10.581 37.689 0 0-.207 1.762.934 2.434s2.483.15 2.483.15c3.272-.457 37.943-24.811 43.944-29.04 5.995.849 12.168 1.29 18.472 1.29 57.438 0 104-36.712 104-82 0-45.287-46.562-82-104-82z" />
                                            <path fill="#FFE812"
                                                d="M70.5 146.625c-3.309 0-6-2.57-6-5.73V105.25h-9.362c-3.247 0-5.888-2.636-5.888-5.875s2.642-5.875 5.888-5.875h30.724c3.247 0 5.888 2.636 5.888 5.875s-2.642 5.875-5.888 5.875H76.5v35.645c0 3.16-2.691 5.73-6 5.73zM123.112 146.547c-2.502 0-4.416-1.016-4.993-2.65l-2.971-7.778-18.296-.001-2.973 7.783c-.575 1.631-2.488 2.646-4.99 2.646a9.155 9.155 0 0 1-3.814-.828c-1.654-.763-3.244-2.861-1.422-8.52l14.352-37.776c1.011-2.873 4.082-5.833 7.99-5.922 3.919.088 6.99 3.049 8.003 5.928l14.346 37.759c1.826 5.672.236 7.771-1.418 8.532a9.176 9.176 0 0 1-3.814.827c-.001 0 0 0 0 0zm-11.119-21.056L106 108.466l-5.993 17.025h11.986zM138 145.75c-3.171 0-5.75-2.468-5.75-5.5V99.5c0-3.309 2.748-6 6.125-6s6.125 2.691 6.125 6v35.25h12.75c3.171 0 5.75 2.468 5.75 5.5s-2.579 5.5-5.75 5.5H138zM171.334 146.547c-3.309 0-6-2.691-6-6V99.5c0-3.309 2.691-6 6-6s6 2.691 6 6v12.896l16.74-16.74c.861-.861 2.044-1.335 3.328-1.335 1.498 0 3.002.646 4.129 1.772 1.051 1.05 1.678 2.401 1.764 3.804.087 1.415-.384 2.712-1.324 3.653l-13.673 13.671 14.769 19.566a5.951 5.951 0 0 1 1.152 4.445 5.956 5.956 0 0 1-2.328 3.957 5.94 5.94 0 0 1-3.609 1.211 5.953 5.953 0 0 1-4.793-2.385l-14.071-18.644-2.082 2.082v13.091a6.01 6.01 0 0 1-6.002 6.003z" />
                                            </svg>
                                        카카오 아이디로 시작하기
                                    </div>
                                </li>
                                <li>
                                  <div id="naverIdLogin">                                    
                                  </div>
                                </li>
                            </ul>
                        </div>

                    </div>
                </section>
            </main>

      <VuePopup/>
  </div>
</template>

<script>
import VueAside from '../../shared/aside'
import VueHeader from '../../shared/header'
import VuePopup from '../../shared/popup'


export default {
  name: 'Signin',

  components: {
    VueAside,
    VueHeader,
    VuePopup
  },

  mounted(){
    
    /* 카카오 초기화 */
    // eslint-disable-next-line
    Kakao.init('JAVASCRIPT_KEY');

    /* 네이버 초기화 */
    // eslint-disable-next-line
    var naverLogin = new naver.LoginWithNaverId(
      {
        clientId: "개발자센터에 등록한 ClientID",
        callbackUrl: "개발자센터에 등록한 callback Url",
        isPopup: false, /* 팝업을 통한 연동처리 여부 */
        loginButton: {color: "green", type: 3, height: 60} /* 로그인 버튼의 타입을 지정 */
      }
    );    
    naverLogin.init();

  },

  methods: {
    loginWithKakao: function() {
      // eslint-disable-next-line
      Kakao.Auth.login({
        success: function(authObj) {
          alert(JSON.stringify(authObj))
        },
        fail: function(err) {
          alert(JSON.stringify(err))
        },
      })
    }
  },

  data: () => ({
     asideFlag: false
  }),
};
</script>

<style>
  @import '../../assets/css/signin/signin.css';
</style>