<template>
    <div id="root">
        <div id="head-area">
            <p id="head">
                来 , 说说你在做什么 , 想什么
            </p>
            <div id="name-area">
                <ul id="avatar">
                    <li v-for="avatar in avatarList" :key="avatar.key"
                        :style="{opacity: isAvatarShow(avatar.key)?1:0.3,
                            border: isAvatarShow(avatar.key)?'1px solid #000000':'',
                        }"
                        @mouseover="currentAvatar=avatar.key"
                        @mouseout="currentAvatar=0"
                    >
                        <img :src='"img/blog/face"+avatar.key+".gif"'>
                    </li>
                </ul>
                <input id="name" type="text" name="name" v-model="name">
            </div>
            <input id="words" type="text" name="words" v-model="words">
            <div id="footer">
                <button class="btn btn-info">广播</button>
                还能输入<span>{{140-words.length}}</span>个字
            </div>
        </div>
        <div id="comment-area">

        </div>
    </div>
</template>

<script>
    export default {
        name: "tencent-blog",
        data: function () {
            let avatarList = [
                {key: 1},
                {key: 2},
                {key: 3},
                {key: 4},
                {key: 5},
                {key: 6},
                {key: 7},
                {key: 8},
            ];
            let words = "";
            let name = "";
            let selectAvatar = 1;
            let currentAvatar = 0;
            return {
                avatarList,
                name,
                words,
                selectAvatar,
                currentAvatar,
            }
        },
        computed: {
            isAvatarShow: function (key) {
                return this.selectAvatar===key||this.currentAvatar===key;
            },
        },
    }
</script>

<style scoped>
    #root{
        display: inline-block;
        margin: 0px;
        padding: 0px;
    }
    #head-area{
        display: block;
        margin: 0px;
        padding: 15px;
        width: 400px;
        background-color: #f5f5f5;
        text-align: left;
    }
    #head{
        display: block;
        margin: 0px;
        padding: 0px;
        color: #000;
        font-size: 2rem;
    }
    #name-area{
        display: block;
        margin: 0px;
        padding: 0px;
        clear: both;
    }
    #avatar{
        float: right;
        margin: 0px;
        padding: 0px;
    }
    #avatar li{
        display: inline-block;
        margin: 0px 5px 0px 0px;
        padding: 0px;
        width: 28px;
        height: 28px;
        list-style-type: none;
    }
    #name{
        float: right;
        margin: 0px;
        padding: 0px;
        width: auto;
        height: 28px;
        font-size: 1rem;
        border: 1px solid #d0d0d0;
        border-radius: 2px;
    }
    #words{
        display: block;
        margin: 0px;
        padding: 5px;
        height: 75px;
        font-size: 1rem;
        border: 1px solid #d0d0d0;
        border-radius: 2px;
    }
    #name:focus, #words:focus{
        border: 1px solid #7abb2c;
    }
    #footer{
        display: block;
        margin: 0px;
        padding: 0px;
        clear: both;
        text-align: right;
    }
    #footer button{
        float: right;
        margin: 0px;
        padding: 0px;
    }
</style>