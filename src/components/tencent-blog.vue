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
                        @click="selectAvatar=avatar.key"
                    >
                        <img :src='"img/blog/face"+avatar.key+".gif"'>
                    </li>
                </ul>
                <input ref="name" id="name" type="text" name="name" v-model="name">
            </div>
            <div id="words">
                <textarea ref="words" v-model="words"></textarea>
            </div>
            <div id="footer">
                <button class="btn btn-info" @click="addComment">广播</button>
                <div v-if="140-words.length>=0">
                    还能输入<span>{{140-words.length}}</span>个字
                </div>
                <div v-else>
                    已超出<span style='color: #ff5154; font-weight: bold'>{{words.length-140}}</span>个字
                </div>
            </div>
        </div>
        <div id="comment-area">
            <div id="comment-head">
                <span>大家都在说</span>
            </div>
            <ul id="comment-list">
                <transition-group name="fade">
                <li v-for="comment in commentList" :key="comment.key"
                    @mouseover="hoverKey=comment.key"
                    @mouseout="hoverKey=0"
                >
                    <img :src="comment.faceSrc">
                    <div class="comment">
                        <div class="name-info">
                            {{comment.name}}:  {{comment.comment}}
                        </div>
                        <div class="date-delete">
                            {{comment.date}}
                            <a class="delete" v-if="hoverKey===comment.key" @click="removeComment(comment.key)">删除</a>
                        </div>
                    </div>
                </li>
                </transition-group>
            </ul>
        </div>
    </div>
</template>

<script>
    // 对Date的扩展，将 Date 转化为指定格式的String
    // 月(M)、日(d)、小时(h)、分(m)、秒(s)、季度(q) 可以用 1-2 个占位符，
    // 年(y)可以用 1-4 个占位符，毫秒(S)只能用 1 个占位符(是 1-3 位的数字)
    // 例子：
    // (new Date()).Format("yyyy-MM-dd hh:mm:ss.S") ==> 2006-07-02 08:09:04.423
    // (new Date()).Format("yyyy-M-d h:m:s.S")      ==> 2006-7-2 8:9:4.18
    Date.prototype.format = function(fmt)
    { //author: meizz
        let o = {
            "M+" : this.getMonth()+1,                 //月份
            "d+" : this.getDate(),                    //日
            "h+" : this.getHours(),                   //小时
            "m+" : this.getMinutes(),                 //分
            "s+" : this.getSeconds(),                 //秒
            "q+" : Math.floor((this.getMonth()+3)/3), //季度
            "S"  : this.getMilliseconds()             //毫秒
        };
        if(/(y+)/.test(fmt))
            fmt=fmt.replace(RegExp.$1, (this.getFullYear()+"").substr(4 - RegExp.$1.length));
        for(let k in o)
            if(new RegExp("("+ k +")").test(fmt))
                fmt = fmt.replace(RegExp.$1, (RegExp.$1.length==1) ? (o[k]) : (("00"+ o[k]).substr((""+ o[k]).length)));
        return fmt;
    };

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
            let commentList = [
                {key: 1, faceSrc: "img/blog/face.gif", name: "日丶久生情", comment: "新增删除广播功能。", date: "07月05日 15:14"},
                {key: 2, faceSrc: "img/blog/face.gif", name: "日丶久生情", comment: "新增Ctrl+Enter快捷键发送广播。", date: "07月05日 12:20"},
                {key: 3, faceSrc: "img/blog/face.gif", name: "日丶久生情", comment: "新增选择头像功能。", date: "07月05日 12:08"},
                {key: 4, faceSrc: "img/blog/face.gif", name: "日丶久生情", comment: "增加了记录广播时间的功能。", date: "07月04日 16:55"},
                {key: 5, faceSrc: "img/blog/face.gif", name: "日丶久生情", comment: "增加了输入字符检测功能，英文/半角为半个字符，汉字/全角为一个字符。", date: "07月04日 08:30"},
                {key: 6, faceSrc: "img/blog/face.gif", name: "日丶久生情", comment: "仿腾讯微博效果，欢迎大家测试！", date: "07月03日 20:19"},
            ];
            let hoverKey = 0;
            return {
                avatarList,
                name,
                words,
                selectAvatar,
                currentAvatar,
                commentList,
                hoverKey,
            }
        },
        methods: {
            isAvatarShow: function (key) {
                return this.selectAvatar===key||this.currentAvatar===key;
            },
            removeComment: function (key) {
                this.commentList = this.commentList.filter(function (item) {
                    return item.key !== key;
                })
            },
            addComment: function () {
                if (/^\s*$/.test(this.name)){
                    alert("请输入名字！");
                    this.$refs.name.focus();
                }
                else if(!/^[\u4e00-\u9fa5\w]{2,8}$/g.test(this.name)){
                    alert("姓名由2-8位字母、数字、下划线、汉字组成！");
                    this.$refs.name.focus();
                }
                else if(/^\s*$/.test(this.words)){
                    alert("请输入评论！");
                    this.$refs.words.focus();
                }
                else if(140<this.words.length){
                    alert("你输入的内容已超出限制，请检查！");
                    this.$refs.words.focus();
                }
                else {
                    let time = new Date().format("MM月dd日 hh:mm");
                    this.commentList = [{
                        key: this.commentList.length + 1,
                        faceSrc: "img/blog/face" + this.selectAvatar + ".gif",
                        name: this.name,
                        comment: this.words,
                        date: time,
                    }].concat(this.commentList);
                    this.name = "";
                    this.words = "";
                }
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
        padding: 0px 0px 15px 15px;
        width: 500px;
        background-color: #f5f5f5;
        text-align: left;
        border-top-left-radius: 15px;
        border-top-right-radius: 15px;
    }
    #head{
        display: block;
        margin: 0px;
        padding: 15px 0px 0px 0px;
        color: #000;
        font-size: 1.5rem;
    }
    #name-area{
        display: block;
        margin: 15px 15px 0px 0px;
        padding: 0px;
        height: 28px;
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
        list-style-type: none;
        border: 1px solid RGBA(208, 208, 208, 0);
    }
    #avatar li img{
        display: inline-block;
        margin: 0px;
        padding: 0px;
        width: 28px;
        height: 28px;
    }
    #name{
        float: left;
        margin: 0px 5px 0px 0px;
        padding: 0px;
        width: 180px;
        height: 28px;
        font-size: 1rem;
        border: 1px solid #d0d0d0;
        border-radius: 5px;
    }
    #words{
        display: block;
        margin: 15px 15px 0px 0px;
        padding: 0px;

    }
    #words textarea{
        display: block;
        margin: 0px;
        padding: 5px;
        height: 75px;
        width: 100%;
        font-size: 1rem;
        border: 1px solid #d0d0d0;
        border-radius: 5px;
    }
    #name:focus, #words:focus{
        border: 1px solid #7abb2c;
        border-radius: 5px;
    }
    #footer{
        display: block;
        margin: 15px 15px 0px 0px;
        padding: 0px;
        clear: both;
        text-align: right;
        height: 28px;
        line-height: 28px;
        color: RGB(153, 153, 153);
    }
    #footer button{
        float: right;
        margin: 0px 0px 0px 5px;
        padding: 0px;
        width: 100px;
        height: 28px;
        line-height: 28px;
    }
    #footer span{
        font: 26px/30px Georgia, Tahoma, Arial;
    }
    #comment-area{
        display: block;
        margin: 0px;
        padding: 10px;
        width: 500px;
        background-color: #ffffff;
        text-align: left;
        border-bottom-left-radius: 15px;
        border-bottom-right-radius: 15px;
    }
    #comment-head{
        display: block;
        position: relative;
        margin: 0px;
        padding: 0px;
        height: 40px;
        background-color: #e3eaec;
    }
    #comment-head span{
        position: absolute;
        bottom: 0px;
        left: 5px;
        background-color: #ffffff;
        height: 30px;
        line-height: 30px;
    }
    #comment-list{
        display: block;
        margin: 0px;
        padding: 0px;
        overflow: hidden;
    }
    #comment-list li{
        float: left;
        margin: 0px;
        padding: 10px 5px 10px 5px;
        list-style-type: none;
        border-bottom: 1px dashed #000;
        clear: both;
    }
    #comment-list li:hover{
        background-color: #f5f5f5;
    }
    #comment-list img {
        float: left;
        border-radius: 3px;
    }
    #comment-list .comment{
        float: left;
        padding: 0px 0px 0px 10px;
        width: 420px;
        font-size: 0.8rem;
        word-wrap: break-word;
    }
    #comment-list .date-delete{
        position: relative;
        margin-top: 5px;
        color: #889db6;
    }
    #comment-list .delete{
        position: absolute;
        right: 0px;
        bottom: 0px;
        cursor: pointer;
    }
    #comment-list .delete:hover{
        text-decoration: underline;
    }
    .fade-enter-active, .fade-leave-active {
        transition: all .7s;
    }
    .fade-enter, .fade-leave-to {
        opacity: 0;
    }
</style>