<template>
    <div>
       <header>js+css3过渡效果无缝滚动</header>
       <div class="viewport">
            <div class="wrapper" :class="{transition: hasTransition}" :style="{marginTop: marginTop + 'px'}">
                <div class="item" v-for="(item,key) in list" :key="key">{{item}}</div>
                <div class="item">{{list[0]}}</div>
            </div>
       </div>
      
    </div>
</template>

<script>

export default {
    data() {
        return {
            marginTop: 0,
            index: 0,
            hasTransition: true,
            list: [1,2]
        };
    },
    methods: {
        play(){
            var duration = 1000;
            var itemH = 100;
            var len = this.list.length;
            var timeout = duration/(len+1);      // 大于改值
            var self = this;
            var interval ;
            setInterval(function(){
                self.index++;
                self.marginTop = -(itemH * self.index);

                setTimeout(function(){
                    if (self.index == len){
                        self.index = 0;
                        self.marginTop = 0;
                        // 待最后一个item滚动结束才关闭过度动画
                        self.hasTransition = false;
                        // 在还原到原位置的时候的下一帧才开启动画
                        // 下
                        setTimeout(function(){
                            self.hasTransition = true;
                        },0)
                    } 
                }, timeout);
            }, duration);
        }
    },
    created(){
        this.play();
    }
};

</script>

<style lang="less">
div {
    font-size: 20px;
    text-align: center;
}
.viewport{
    height: 102px;
    width: 402px;
    overflow: hidden;
}
.wrapper{
    position: relative;
    height: 102px;
    width: 402px;
    box-sizing: border-box;
   
}
.transition{
    transition: margin-top .3s;
} 
.item{
    position: relative;
    height: 100px;
    width: 400px;
    font-size: 38px;
}
</style>
