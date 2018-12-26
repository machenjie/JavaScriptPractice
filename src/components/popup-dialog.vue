<template>
    <div id="root">
        <button id="popup-btn" class="btn btn-info" data-toggle="modal" data-target="#popup-dialog"> Click Me</button>
        <div id="popup-dialog" class="modal fade">
            <div class="modal-dialog">
                <div class="modal-content">
                    <!-- header -->
                    <div class="modal-header">
                        <h5 class="modal-title">TITLE</h5>
                        <button type="button" class="close" data-dismiss="modal">&times;</button>
                    </div>

                    <!-- body -->
                    <div class="modal-body">
                        body content...
                    </div>

                    <!-- footer -->
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">close</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "popup-dialog"
    }
</script>

<style scoped>
    .modal-header{
        border-bottom: 0;
    }
    .modal-title{
        color: #ff5514;
    }
    .modal-footer{
        border-top: 0;
    }
</style>