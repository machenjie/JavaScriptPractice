<template>
    <div id="root"
         data-toggle="tooltip"
         title="do not use this function on public computers!"
         data-placement="bottom">
        <input id="remember" type="checkbox" name="remember"/>
        <label id="remember-label"for="remember">remember me</label>
    </div>
</template>

<script>
    export default {
        name: "tooltip",
        mounted: function () {
            this.$nextTick(function () {
                $('[data-toggle="tooltip"]').tooltip();
            });
        }
    }

</script>

<style scoped>
    #root{
        display: inline-block;
    }
    #remember{
        vertical-align: middle;
    }
    #remember-label{
        vertical-align: middle;
        margin: 0px 0px 0px 0px;
    }
</style>
<style>
    .tooltip{
        opacity: 0.7 !important; /*Make the entire tooltip not transparent*/
    }
    .bs-tooltip-top .arrow::before, .bs-tooltip-auto[x-placement^="top"] .arrow::before {
        border-top-color: #fac41a  !important; /*change the triangle color when data-placement="top"*/
    }
    .bs-tooltip-right .arrow::before, .bs-tooltip-auto[x-placement^="right"] .arrow::before {
        border-right-color: #fac41a  !important; /*change the triangle color when data-placement="right"*/
    }
    .bs-tooltip-bottom .arrow::before, .bs-tooltip-auto[x-placement^="bottom"] .arrow::before {
        border-bottom-color: #fac41a  !important; /*change the triangle color when data-placement="bottom"*/
    }
    .bs-tooltip-left .arrow::before, .bs-tooltip-auto[x-placement^="left"] .arrow::before {
        border-left-color: #fac41a  !important; /*change the triangle color when data-placement="left"*/
    }
    .tooltip-inner{
        background-color: #fac41a !important; /*modify background color*/
        text-align: left !important; /*Font left aligned*/
        color:#363636 !important; /*font color*/
        border:1px solid #fac41a ; /*add boder*/
        max-width: 400px !important; /*Modify width*/
    }
</style>