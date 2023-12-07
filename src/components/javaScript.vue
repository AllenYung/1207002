<script>
import { mapState, mapActions } from 'pinia'
import counter from '../stores/counter'
export default {
    data() {
        return {
            c8: "",
        };
    },
    mounted() {
        this.loadContent();
    },
    methods: {
        async loadContent() {
            try {
                const response = await fetch("src/components/JavaScrip666.txt"); // 替換成你的文件路徑
                if (response.ok) {
                    this.c8 = await response.text();
                } else {
                    console.error("Failed to load content");
                }
            } catch (error) {
                console.error("Error fetching content:", error);
            }
        },
        ...mapActions(counter,["zero","p2close"]),
    },
};
</script>

<template>
    <div class="borderr">
        <div class="top">
            <div class="imgL"></div>
            <span>JavaScript</span>
            <div class="imgR" @click="p2close()"></div>
        </div>
        <div class="topM">
            <div class="F">檔案(F)</div>
            <div class="F">編輯(E)</div>
            <div class="F">檢視(V)</div>
            <div class="F">工具(T)</div>
            <div class="F">說明(H)</div>
        </div>
        <div class="inside">
            <pre class="inin" v-html="c8"></pre>
        </div>
    </div>
</template>

<style scoped lang="scss">
.borderr {
    position: relative;
    width: 100%;
    height: 100%;
    border: 4px solid #1744DB;
    border-radius: 8px;
    position: absolute;
    top: 0;
    left: 0;
    .top {
        width: 100%;
        height: 7%;
        border-radius: 2px 2px 0 0;
        background-color: #1744DB;
        .imgL{
            position: absolute;
            top: 5px;
            left: 5px;
            background-image: url(my.png);
            width: 32px;
            height: 32px;
        }
        span{
            color: white;
            font-size: 3vh;
            position: absolute;
            left: 4%;
            top: 1%;
        }
        .imgR {
            position: absolute;
            top: 5px;
            right: 5px;
            border-radius: 8px;
            border: 2px solid white;
            background-image: url(X.jpg);
            width: 32px;
            height: 32px;
            z-index: 5;
        }
    }

    .topM {
        background-color: #EBEFDE;
        box-shadow: -1px 1px 5px 0 solid black;
        border-bottom: 2px solid white;
        width: 100%;
        height: 3%;
        display: flex;
        justify-content: left;
        .F{
            margin-top: 1px;
            width: 10%;
            height: 90%;
            border-right: 1px solid rgba(0, 0, 0, 0.144);
            font-size: 14px;
        }
    }
    .inside{
        width: fill;
        height: 90%;
        background-color: white;
        .inin {
            margin: 0;
            width: 100%;
            height: 100%;
            overflow-y: auto;
            text-shadow: 0;
        }
    }
}</style>