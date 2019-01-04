<template>
    <div id="root">
        <ul id="nav-tab-area">
            <li v-for="tab in tabList" :key="tab.key" class="dropdown">
                <a v-if="tab.subTabList.length!==0" class="tab" data-toggle="dropdown">{{tab.content}}</a>
                <a v-else="tab.subTabList.length!==0" class="tab">{{tab.content}}</a>
                <div class="dropdown-menu" v-if="tab.subTabList.length!==0">
                    <div class="drop-area" v-for="subTab in tab.subTabList" :key="subTab.key">
                        <a class="dropdown-item">{{subTab.content}}</a>
                        <div class="dropdown-divider" v-if="subTab.showDivider"></div>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "sub-nav-tab",
        data: function(){
            let tabList = [
                {key: 1, content: "站长之家", subTabList:[
                    ]},
                {key: 2, content: "行业资讯", subTabList:[
                        {key: 1, content: "业界动态", showDivider: true},
                        {key: 2, content: "收购融资", showDivider: true},
                        {key: 3, content: "门户动态", showDivider: true},
                        {key: 4, content: "搜索引擎", showDivider: true},
                        {key: 5, content: "网络游戏", showDivider: true},
                        {key: 6, content: "电子商务", showDivider: true},
                        {key: 7, content: "广告传媒", showDivider: true},
                        {key: 8, content: "厂商开发", showDivider: false},
                    ]},
                {key: 3, content: "站长在线", subTabList:[
                        {key: 1, content: "站长报道", showDivider: true},
                        {key: 2, content: "好站推荐", showDivider: true},
                        {key: 3, content: "站长聚会", showDivider: true},
                        {key: 4, content: "站长访谈", showDivider: true},
                        {key: 5, content: "站长茶馆", showDivider: true},
                        {key: 6, content: "网站排行", showDivider: false},
                    ]},
                {key: 4, content: "网站运营", subTabList:[
                        {key: 1, content: "建站经验", showDivider: true},
                        {key: 2, content: "策划盈利", showDivider: true},
                        {key: 3, content: "搜索优化", showDivider: true},
                        {key: 4, content: "网站推广", showDivider: true},
                        {key: 5, content: "免费资源", showDivider: false},
                    ]},
                {key: 5, content: "设计在线", subTabList:[
                        {key: 1, content: "酷站推荐", showDivider: true},
                        {key: 2, content: "网页设计", showDivider: true},
                        {key: 3, content: "WEB标准", showDivider: true},
                        {key: 4, content: "视频处理", showDivider: true},
                        {key: 5, content: "设计活动", showDivider: false},
                    ]},
                {key: 6, content: "网络编程", subTabList:[
                        {key: 1, content: "Asp编程", showDivider: true},
                        {key: 2, content: "Php编程", showDivider: true},
                        {key: 3, content: ".Net编程", showDivider: true},
                        {key: 4, content: "Xml编程", showDivider: true},
                        {key: 5, content: "Access", showDivider: true},
                        {key: 6, content: "Mssql", showDivider: true},
                        {key: 7, content: "Mysql", showDivider: false},
                    ]},
                {key: 7, content: "联盟资讯", subTabList:[
                        {key: 1, content: "联盟动态", showDivider: true},
                        {key: 2, content: "联盟介绍", showDivider: true},
                        {key: 3, content: "联盟点评", showDivider: true},
                        {key: 4, content: "网赚技巧", showDivider: false},
                    ]},
                {key: 8, content: "服务器", subTabList:[
                        {key: 1, content: "Web服务器", showDivider: true},
                        {key: 2, content: "Ftp服务器", showDivider: true},
                        {key: 3, content: "Mail服务器", showDivider: true},
                        {key: 4, content: "Dns服务器", showDivider: true},
                        {key: 5, content: "Win服务器", showDivider: true},
                        {key: 6, content: "Linux服务器", showDivider: true},
                        {key: 7, content: "安全防护", showDivider: true},
                        {key: 8, content: "虚拟主机", showDivider: false},
                    ]},
            ];
            return {
              tabList,
            };
        },
    }
</script>

<style scoped>
    #root{
        display: inline-block;
        margin: 0px;
        padding: 0px;
    }
    #nav-tab-area{
        display: inline-block;
        margin: 0px;
        padding: 0px;
        border-radius: 5px;
        border: 1px solid #7498bd;
        background: linear-gradient(#7498bd, #225d97);
    }
    #nav-tab-area li{
        display: inline-block;
        margin: 5px 0px 5px 0px;
        padding: 2px 10px 2px 10px;
        border-right: 1px solid #7498bd;
        list-style-type: none;
    }
    #nav-tab-area li .tab{
        display: inline-block;
        margin: 0px;
        padding: 0px;
        width: 100px;
        height: 30px;
        line-height: 30px;
        font-size: 1rem;
        color: #e2e2e2;
        cursor: pointer;
    }
    #nav-tab-area li .tab:hover{
        background-color: RGBA(255, 255, 255, 0.1);
        border-radius: 10px;
        font-weight: bold;
    }
    #nav-tab-area li .dropdown-menu{
        margin: 0px;
        padding: 0px;
        width: 100px;
        border: 0px;
        min-width: 100px !important;
        text-align: center !important;
        background: linear-gradient(#225d97, #7498bd);
        color: #e2e2e2;
    }
    #nav-tab-area li .dropdown-item{
        margin: 5px;
        padding: 0px;
        width: 90px;
    }
    #nav-tab-area li .dropdown-item:hover{
        background-color: RGBA(255, 255, 255, 0.1);
        border-radius: 10px;
        font-weight: bold;
    }
    #nav-tab-area li .dropdown-divider{
        margin: 0px 10px 0px 10px;
        padding: 0px;
        border-top: 1px solid RGBA(116, 152, 189, 0.5);
    }
</style>