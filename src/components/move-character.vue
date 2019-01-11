<template>
    <div id="root">
        <button id="click_button" class="btn btn-primary"
                @click.stop="(clickActive=!clickActive)&&(dragActive=false)"
                @mousemove.stop=""
                @mouseup.stop=""
                @mousedown.stop="">
            根据鼠标点击位置进行移动{{clickActive?"（已激活）":""}}
        </button>
        <button id="drag_button" class="btn btn-primary"
                @click.stop="(dragActive=!dragActive)&&(clickActive=false)"
                @mousemove.stop=""
                @mouseup.stop=""
                @mousedown.stop="">
            根据鼠标拖拽轨迹进行移动{{dragActive?"（已激活）":""}}
        </button>
        <img :src="currentStatImgSrcList[inMove?1:0]" :style='{top: imgTop+"px", left: imgLeft+"px"}'>
    </div>
</template>

<script>
    import _ from "lodash";

    export default {
        name: "move-character",
        data: function () {
            let currentStatImgSrcList = [
                "img/dragcharacter/1.gif",
                "img/dragcharacter/2.gif",
            ];
            let imgTop = 200;
            let imgLeft = 200;
            let clickActive = false;
            let dragActive = false;
            let inDrag = false;
            let dragMovePairList = [];
            let inMove = false;
            return {
                currentStatImgSrcList,
                imgTop,
                imgLeft,
                clickActive,
                dragActive,
                inDrag,
                dragMovePairList,
                inMove,
            }
        },
        methods: {
            generateTrack: function(start, end, maxMoveSteps) {
                let offsetX = end.x - start.x;
                let offsetY = end.y - start.y;
                let minStepMovePX = 10;
                let maxMoveStepsStepMoveMaxPX = Math.max(Math.abs(offsetX), Math.abs(offsetY))/maxMoveSteps;
                let minStepMovePXMoveMaxSteps = Math.floor(Math.max(Math.abs(offsetX), Math.abs(offsetY))/minStepMovePX);
                let steps = maxMoveStepsStepMoveMaxPX>=minStepMovePX?maxMoveSteps:minStepMovePXMoveMaxSteps;
                for(let i=0; i<steps; i++) {
                    this.dragMovePairList.push({x: start.x+offsetX/steps*i, y: start.y+offsetY/steps*i});
                }
                this.dragMovePairList.push({x: end.x, y: end.y});
            },
            startMove: function () {
                if (this.dragMovePairList.length === 0){
                    //no need to move
                    return;
                }
                if (this.inMove) {
                    //in moving already
                    return;
                }

                this.inMove = true;
                let _this = this;
                _this.interval = setInterval(function () {
                    if (_this.dragMovePairList.length !== 0) {
                        let pair = _this.dragMovePairList[0];
                        _this.dragMovePairList=_.drop(_this.dragMovePairList);
                        _this.imgTop = pair.y;
                        _this.imgLeft = pair.x;
                    }
                    else{
                        clearInterval(_this.interval);
                        delete _this.interval;
                        _this.inMove = false;
                    }
                }, 30);
            }
        },
        mounted() {
            let _this = this;
            document.onmousedown = function (event) {
                if (_this.dragActive) {
                    _this.inDrag = true;
                    _this.generateTrack({x:_this.imgLeft, y:_this.imgTop}, {x: event.clientX, y: event.clientY}, 10);
                }
            };

            document.onmousemove = function (event) {
                if (_this.inDrag) {
                    _this.dragMovePairList.push({x: event.clientX, y: event.clientY});
                }
            };

            document.onmouseup = function (event) {
                if (_this.inDrag) {
                    _this.inDrag = false;
                    _this.dragMovePairList.push({x: event.clientX, y: event.clientY});
                }
                if (_this.clickActive) {
                    _this.generateTrack({x:_this.imgLeft, y:_this.imgTop}, {x: event.clientX, y: event.clientY}, 15);
                }

                _this.startMove();
            }
        }
    }
</script>

<style scoped>
    #root{
        user-select: none;
    }
    img{
        position: absolute;
    }
</style>