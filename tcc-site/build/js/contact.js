var name="",email="",phone="",message="";$.ajax({url:"/rest/contact/",type:"POST",contentType:"application/json; charset=utf-8",dataType:"json",data:JSON.stringify({name:name,email:email,phone:phone,message:message}),cache:!1,success:function(e){e.errorMessage&&this.error(e.errorMessage)},error:function(){}});