<template>
    <div id="root" data-toggle="tooltip" title="do not use this function on public computers!" data-placement="bottom">
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
    .tooltip-inner{
        background-color: #fac41a !important; /*modify background color*/
        text-align: left !important; /*Font left aligned*/
        color:#363636 !important; /*font color*/
        border:1px solid #000000; /*add boder*/
        max-width: 400px !important; /*Modify width*/
    }
    .tooltip-arrow{
        border-bottom-color: #fac41a !important;/*Modify the color of the triangle*/
        opacity: 0;/*Triangle transparent*/
    }
    .tooltip{
        opacity: 1 !important; /*Make the entire tooltip opaque*/
    }
</style>