$(function(){jQuery(document).ready(function(e){var r=e("#form-contact");r.submit(function(a){a.preventDefault(),jQuery("#sendForm i").removeClass("fa-envelope").addClass("fa-refresh fa-spin");var s="application/x-www-form-urlencoded;charset=UTF-8";jQuery.ajax({type:"POST",async:!0,cache:!1,url:"contact/send",contentType:s,processData:!0,data:r.serialize(),success:function(r){jQuery("#sendForm i").removeClass("fa-refresh fa-spin").addClass("fa-envelope");try{if("success"==r.status)return e("#form-contact :input").attr("disabled","disabled"),void e("#form-contact").fadeTo("slow",.15,function(){e(this).find(":input").attr("disabled","disabled"),e(this).find("label").css("cursor","default"),e(".successForm").fadeIn()})}catch(a){}e("#form-contact").fadeTo("slow",.15,function(){e(".errorForm").fadeIn()})},error:function(r,a,s){if(jQuery("#sendForm i").removeClass("fa-refresh fa-spin").addClass("fa-envelope"),422==r.status)try{var o=jQuery.parseJSON(r.responseText);return void jQuery.each(o,function(e,r){jQuery.each(r,function(r,a){jQuery("#"+e+"-input-message").html(a),jQuery("#"+e+"-form-group").addClass("has-error")})})}catch(n){console.log(n)}e("#form-contact").fadeTo("slow",.15,function(){e(".errorForm").fadeIn()})}})})})});