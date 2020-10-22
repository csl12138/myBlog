<template>
    <article>
        <div class="head">
            <h3>测试文章标题</h3>
            <div class="time">发布于 2020/5/3</div>
        </div>
        <div class="content">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum similique repellendus nostrum, commodi a dignissimos quos rerum distinctio iusto dicta sunt dolorem consectetur consequatur sint nobis aliquid esse recusandae iure!
        </div>
        <div class="foot">
            <span class="tag">前端</span>
            <span class="complete">阅读全文<i class="iconfont icon-xiangyoushuangjiantou"></i></span>
        </div>
    </article>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
article {
    .head {
        height: 80px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        h3 {
            font-size: 32px;
            color: $articalTitleColor;
        }
    }
}
</style>
