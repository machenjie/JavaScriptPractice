<template>
    <div id="root">
        <ul id="nav-tab-area">
            <li data-toggle="tooltip" title="1235" data-placement="bottom">
                1234
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "sub-nav-tab",
        mounted: function () {
            this.$nextTick(function () {
                $('[data-toggle="tooltip"]').tooltip();
            });
        }
    }
</script>

<style scoped>

</style>