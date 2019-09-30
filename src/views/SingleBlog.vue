<template>
  <div class="single-blog">
      
      <h3>{{this.blog.title}}</h3>
      <article>{{this.blog.content}}</article>
  </div>
</template>

<script>
export default {
    props:['blog'],    
    data()
    {
        return  {
            title:this.$route.params.title,
            // blog:{
            //     id:null,
            //     title:"Blog title",
            //     content: "Blog content"}
            };
    },
    created(){
        console.log(this.blog);
    }


}
</script>

<style scoped lang="scss">
.single-blog{
    margin: 20px;
    background: rgb(255, 255, 255);
    border: 1px solid;
}


</style>