<template>
  <div>
    <Header/>
    <nuxt />
    <Footer/>
  </div>
</template>
<script>
import Header from '@/components/header';
import Footer from '@/components/footer';
export default {
  
  // 注册主键
  components:{
    Header,
    Footer
  }
}
</script>
<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}
*{
  margin: 0;
  padding:0;
}
ul,li,ol{
  list-style: none;
}
i,em{
  font-style: normal;
}
a{
  color:inherit;
  text-decoration: none;
}
a:hover{
  color:inherit;
}

</style>
