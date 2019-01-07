<template>
    <div id="root">
        <form class="form-group">
            <div id="tittle">User Login</div>
            <div id="name-area">
                <label for="name">User Name:</label>
                <input id="name" class="form-control" type="text" name="name">
            </div>
            <div id="password-area">
                <label for="password">password:</label>
                <input id="password" class="form-control" type="text" name="password">
            </div>
            <div id="btn-area">
                <label></label>
                <input id="login" type="submit" class="btn btn-info" value="LOGIN">
            </div>
        </form>
    </div>
</template>

<script>
    export default {
        name: "focus-highlight"
    }
</script>

<style scoped>
    #root{
        display: inline-block;
        margin: 0px;
        padding: 0px 0px 0px 0px;
        border: 2px solid #ff0000;
        border-radius: 2px;
        width: 400px;
        background-color: #ffce9b;
    }
    .form-group #tittle{
        margin: 0px 0px 0px 0px;
        padding: 5px 10px 5px 10px;
        border-bottom: 2px solid #ff0000;
        font-size: 1.5rem;
        font-weight: bold;
        text-align: left;
        color: #e9450d;
        background-color: #ffd890;
    }
    .form-group div{
        clear: both;
        margin: 0px;
        padding: 0px;
    }
    .form-group div label{
        float: left;
        margin: 10px 0px 0px 0px;
        padding: 0px 5px 0px 0px;
        text-align: right;
        width: 100px;
        height: 30px;
        font-size: 1rem;
        line-height: 30px;
    }
    .form-group div input{
        float: left;
        margin: 10px 0px 0px 0px;
        padding: 0px 0px 0px 5px;
        width: 200px;
        height: 30px;
        background-color: #FEFDED;
        line-height: 30px;
    }
    .form-group div #login{
        float: left;
        margin: 10px 0px 10px 0px;
        padding: 0px 0px 0px 5px;
        width: 100px;
        height: 30px;
        line-height: 30px;
        background-color: #e9441a;
        border-color: #e92703;
    }

    .form-group div #name:focus, #password:focus{
        background-color: #fecab4;
    }

</style>