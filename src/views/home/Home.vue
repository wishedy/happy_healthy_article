<template>
    <section class="jd_main">
        <HeaderBar :title="title"></HeaderBar>
        <section class="main-content" v-html="context"></section>
    </section>
</template>
<script>
    import { getArticle } from '@/resource'
    import HeaderBar from 'components/HeaderBar/index'
export default {
  name: 'home',
  methods: {
      async getArticleInfo(){
          const _this = this
          if(_this.id){
              try {
                const res = await getArticle({
                    id:_this.id
                })
                  if(res){
                      _this.context = res.result[0].context
                      _this.title = res.result[0].title
                      document.title = res.result[0].title
                  }
              }catch (e) {
                  _this.Toast('文章获取失败')
              }
          }else{
              _this.Toast('111文章获取失败')

          }
      }
  },
  data () {
      const _this = this
      const id = _this.$route.query.id?_this.$route.query.id:''
      console.log(id)
    return {
          id:id,
        context:'',
        title:'',
    }
  },
  components: {
      HeaderBar
  },
  mounted () {
    const _this = this
      _this.getArticleInfo()
  }
}
</script>
<style lang="scss" scoped>
    .main-content{
        height: 100vh;
    }
</style>
