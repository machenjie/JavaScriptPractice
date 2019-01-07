<template>
    <div id="root">
        Right click do not work!
    </div>
</template>

<script>
    export default {
        name: "block-context-menu",
        mounted() {
            this.$nextTick(function () {
               document.oncontextmenu = function () {
                   return false;
               } 
            });
        },
        destroyed() {
            this.$nextTick(function () {
                document.oncontextmenu = function () {
                    return true;
                }
            });
        }
    }
</script>

<style scoped>
    #root{
        display: inline-block;
        margin: 0px;
        padding: 0px;
        text-align: center;
        font-size: 1.5rem;
        font-weight: bold;
        color: #ff5514;
    }
</style>