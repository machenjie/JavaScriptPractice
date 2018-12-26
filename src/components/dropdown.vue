<template>
    <div id="root" class="dropdown">
        <button id="dropdown-trigger" class="btn btn-info dropdown-toggle" data-toggle="dropdown" >
            Edit
        </button>
        <div id="dropdown-list" class="dropdown-menu dropdown-menu-left">
            <a class="dropdown-item">Cut</a>
            <a class="dropdown-item">Copy</a>
            <a class="dropdown-item">Find</a>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item">Select All</a>
        </div>
    </div>
</template>

<script>
    export default {
        name: "dropdown",
        mounted: function () {
            this.$nextTick(function () {
                //when page open, dropdown toggle
                $('.dropdown-toggle').dropdown('toggle');
                $('.dropdown-toggle').dropdown('update');
            });
        }
    }
</script>

<style scoped>

    .dropdown-toggle{
        font-size: 0.9rem;
    }
    #dropdown-list{
        background-color: #fcfcfc;
    }
    .dropdown-item{
        font-size: 0.9rem;
    }
</style>