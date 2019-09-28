<template>
  <div class="blog-list">
      <router-link to="/addBlog">Add a New Blog</router-link>
      <h1>This is the blog list</h1>
      <div v-for="blog in blogs" :key="blog.id">
        <single-blog :blog="blog"></single-blog>
      </div>
  </div>
</template>

<script>
import SingleBlog from "./SingleBlog.vue";

export default {
    components: {
        SingleBlog
    },
    created()
    {

    const axios = require('axios');

    axios
      .get('https://vue-tutorials-c312e.firebaseio.com/posts.json')
      .then(response =>{
        console.log(response.data);
        this.$store.state.blogs = response.data;
        }
      )
    },
    
    
    computed:{
        blogs(){
            return this.$store.state.blogs;
        },


    }
}
</script>

<style scoped lang="scss">
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
</style>