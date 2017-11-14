<template>
  <div>
    <div class="loginbox box" id="loginbox">
      <div style="width: 90%;">

          <!-- 这个很重要 -->
          <img src="img/logo_icon.png" class="logo-img" />
          <div class="input-box">
            <div class="icon-user icon-base"></div>
            <input class="login_input username"  type="text" placeholder="用户名 / 身份证号" v-model="loginname" />
          </div>
          <div class="input-box" style="margin-top: 23px;margin-top: 2.3rem;">
            <div class="icon-pwd icon-base"></div>
            <input class="login_input pwd" type="password" placeholder="登录密码" v-model="password"   />
          </div>
          <div class="login-btn">
            <button class="common_btn common_btn_gray" style="height: 46px; font-weight: normal;"  @click="login(loginname,password)">登 录</button>
          </div>
          <div class="box_justify">
            <div>
              <a class="remb box_left text-left" for="radio_remb" href="register/retrieval_pass.html">忘记密码</a>
            </div>
            <div>
              <a class="remb box_right text-right" for="radio_remb" href="/register">新用户注册</a>
            </div>
          </div>
          <div class="common_loading"></div>
          <div class="company">杭州金投健康网络科技有限公司</div>
      </div>

      <!--<div class="aim">
                <div>

                </div>
            </div>-->

    </div>

  </div>
</template>

<script>




</script>

<!--<style src="../css/login.css" scoped></style>-->
