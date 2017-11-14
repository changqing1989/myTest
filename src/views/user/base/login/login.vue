<template>
  <div>
    wwww

  </div>
</template>

<script>
  export default {
    name: 'register',
    filters: {
      getTime(time) {
        return time.split(" ")[0];
      }
    },
    data () {
      return {
        username: "",
        phone: "",
        nameflag: false
      }
    },
    methods: {
      //
      validate_phone(){
        var isChecked = $("#check_input").is(":checked");
        console.log(vm_list.nameflag)
        if(vm_list.phone.length != 11 || (vm_list.username.length < 6 || vm_list.username.length > 16) || !isChecked) {
          vm_list.phoneflag = false;
          $("#btn-phone").attr("disabled", "disabled");
          $("#btn-phone").css({
            "background": "#bebebe",
            "box-shadow": "none"
          });
        } else {
          vm_list.phoneflag = true;
          $("#btn-phone").removeAttr("disabled");
          $("#btn-phone").css({
            "background": "#51ca7a",
            "box-shadow": "0px 15px 35px -15px #51ca7a"
          });
        }
      },
      //
      validate_name(){
        var isChecked = $("#check_input").is(":checked");
        if(vm_list.phone.length != 11 || !isChecked) {
          vm_list.nameflag = false;
          $("#btn-phone").attr("disabled", "disabled");
          $("#btn-phone").css({
            "background": "#bebebe",
            "box-shadow": "none"
          });
        } else {
          vm_list.nameflag = true;
          $("#btn-phone").removeAttr("disabled");
          $("#btn-phone").css({
            "background": "#51ca7a",
            "box-shadow": "0px 15px 35px -15px #51ca7a"
          });
        }
      },





      /*checkHasMore(len){
        if(len < this.page.perPages){
          this.hasMore = false;
        }else{
          this.hasMore = true;
          this.page.currentPage ++;
        }
      },*/

    },
    created: function () {
      debugger;
      console.log('created');
    },
    destroyed:function(){
      console.log('destroyed');
    },
    mounted(){

      console.log("mounted");
//        $("#loading_index").hide();
//        this.getNewsCheck();
    },
    components:{

    }
  };



</script>

<!--<style src="../css/login.css" scoped></style>-->
