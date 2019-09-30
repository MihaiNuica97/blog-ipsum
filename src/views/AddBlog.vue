<template>
  <div id="add-blog">
    <div id="input-container">
      <h1>input</h1>
      <form>
        <label>Title: </label>
        <input type="text" v-model="blog.title" required>
        <label>Article: </label>
        <textarea v-model="blog.content"></textarea>
        <label>Author: </label>
        <input type="text" v-model="blog.author" required>
        <button v-on:click.prevent="post">Submit</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      
      blog:{
        title:"",
        author:"",
        content:"",
      },
      submitted:false
    }
  },
  methods:{
    post: function(){

      const axios = require('axios');
      axios
      .post('https://vue-tutorials-c312e.firebaseio.com/posts.json',this.blog)
      .then(function(data){
        console.log(data);
      });
    }
  }
}
</script>

<style scoped>
#add-blog{
  box-sizing: border-box;
  text-align: left;
}
label{
  display: block;
  margin: 5px;
}
input,textarea{
  display: block;
  margin: 5px;
}
textarea{
  height: 200px;
  width: 80%;
}
#input-container{
  border: 1px solid;
  margin-bottom: 3px;
}
#preview-container{
  border: 1px solid;
  margin-top: 3px;
}
</style>>

