<template>
    <div id="root">
        <div id="first-news" class="news"
             data-toggle="popover"
             data-placement="top"
             title="弹出框标题"
             data-content="弹出框内容">
            abcd
        </div>
    </div>
</template>

<script>
    export default {
        name: "inner-html",
        mounted() {
            this.$nextTick(function () {
                $('[data-toggle="popover"]').popover({trigger:"hover"});
            });
        }
    }
</script>

<style scoped>

    .news{
        border: 1px solid #707070;
        border-radius: 2px;
    }
</style>