/*global console:true*/// @codekit-append functions.js
// @codekit-append index.js
// @codekit-append all.js
// @codekit-append new.js
// @codekit-append remove.js
// @codekit-append edit.js
// view = navigation / on all pages
// show clicked page
function goToHome(){$.ajax({type:"GET",url:"/mainContainer.php",data:{pageId:"home.php"}}).done(function(e){$(".main").replaceWith(e)}).fail(function(){console.log("error")}).always(function(){console.log("complete")})}$(document).on("click",".mainNav",function(e){e.preventDefault();var t=$(this).children("a");t.addClass("loading");var n=$(this).attr("data-page");$.ajax({type:"GET",url:"/mainContainer.php",data:{pageId:n}}).done(function(e){$(".main").replaceWith(e);t.removeClass("loading")}).fail(function(){console.log("error")}).always(function(){console.log("complete")})});$(document).on("focus",".signup",function(){$(this).on("keyup",function(){$(this).val().length>0&&$(this).siblings("label").fadeIn(400)})});$(document).on("blur",".signup",function(){$(this).val().length<1&&$(this).siblings("label").fadeOut(400)});$(document).on("click",".indexSpecificNote",function(e){e.preventDefault();var t=$(this).attr("data-id");$.ajax({type:"GET",url:"/note.php",data:{noteId:t}}).done(function(e){$(".note").replaceWith(e)})});$(document).on("click",".remove",function(e){e.preventDefault();var t=$(this).attr("data-id"),n=$(this);n.addClass("loading");$.ajax({type:"GET",url:"/mainContainer.php",data:{pageId:"remove.php"}}).done(function(e){$(".main").replaceWith(e);n.removeClass("loading")});$.ajax({type:"GET",url:"/remove.php",data:{noteId:t}}).done(function(e){$(".main").replaceWith(e)})});$(document).on("click",".edit",function(e){e.preventDefault();var t=$(this).attr("data-id"),n=$(this);n.addClass("loading");$.ajax({type:"GET",url:"/mainContainer.php",data:{pageId:"edit.php"}}).done(function(e){$(".main").replaceWith(e);n.removeClass("loading")});$.ajax({type:"GET",url:"/edit.php",data:{noteId:t}}).done(function(e){$(".main").replaceWith(e)})});$(document).on("click",".specificNote",function(e){e.preventDefault();var t=$(this).attr("data-id");$.ajax({type:"GET",url:"/mainContainer.php",data:{pageId:"home.php"}}).done(function(e){$(".main").replaceWith(e)}).fail(function(){console.log("error")}).always(function(){console.log("complete")});$.ajax({type:"GET",url:"/note.php",data:{noteId:t}}).done(function(e){$(".note").replaceWith(e)}).fail(function(){console.log("error")}).always(function(){console.log("complete")})});$(document).on("click",".addBtn",function(e){e.preventDefault();var t=$(".add").serializeArray(),n=t[0].value,r=t[1].value,i=$(this);i.addClass("loading");$.ajax({type:"POST",url:"/new.php",data:{title:n,content:r}}).done(function(e){$(".main").replaceWith(e);i.removeClass("loading")});goToHome()});$(document).on("click",".reallyDelete",function(e){e.preventDefault();var t=$(this).attr("data-id"),n=$(this);n.addClass("loading");$.ajax({type:"POST",url:"/remove.php",data:{reallyDelete:"yes",noteId:t}}).done(function(e){$(".main").replaceWith(e);n.removeClass("loading")}).fail(function(){console.log("error")}).always(function(){console.log("complete")});goToHome()});$(document).on("click",".cancel",function(e){e.preventDefault();var t=$(this);t.addClass("loading");$.ajax({type:"GET",url:"/mainContainer.php",data:{pageId:"home.php"}}).done(function(e){$(".main").replaceWith(e);t.removeClass("loading")}).fail(function(){console.log("error")}).always(function(){console.log("complete")})});$(document).on("click",".editBtn",function(e){e.preventDefault();var t=$(".editForm").serializeArray(),n=t[0].value,r=t[1].value,i=t[2].value,s=$(this);s.addClass("loading");$.ajax({type:"POST",url:"/edit.php",data:{id:n,title:r,content:i}}).done(function(e){$(".main").replaceWith(e);s.removeClass("loading")});goToHome()});