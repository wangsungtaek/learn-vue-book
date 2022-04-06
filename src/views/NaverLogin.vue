<template>
  <div>
      <div id="naverIdLogin"></div>
      <button type="button" @click="logout">로그아웃</button>
  </div>
</template>

<script>
import axios from 'axios';
export default {
    data() {
      return {
        naverLogin: null,
      }
    },
    mounted() {
      this.naverLogin = new window.naver.LoginWithNaverId({
        clientId: "x0UXVDUHcT6002_Sl5Fp",
        callbackUrl: "http://localhost:8080/naverLogin",
        isPopup: false,
        loginButton: {
          color: "green", type: 3, height: 60
        }
      });

      this.naverLogin.init();

      this.naverLogin.getLoginStatus((state) => {
        if (state) {
          console.log(state);
          console.log(this.naverLogin.user);

          var email = this.naverLogin.user.getEamil();

          if(email == undefined || email == null) {
            alert("이메일은 필수 정보입니다. 정보 제공을 동의해주세요.");
            this.naverLogin.reprompt();
            return;
          }
        } else {
          console.log("callback 처리에 실패하였습니다.")
        }
      });
    },
    methods: {
      
    }

    
}
</script>

<style>

</style>