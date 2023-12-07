<script>
import { mapState, mapActions } from 'pinia'
import counter from '../stores/counter'
export default {
    data() {
        return {
            audio: new Audio('ahoy.mp3'),
            isPlaying: false,
            marA: false,
            marB: false,
            marine3: false,
            b4c:false,
        }
    },
    components: {

    },
    methods: {
        b4change(){
            this.b4c =! this.b4c
        },
        mouseover() {
            this.marine3 = !this.marine3
        },
        marAA() {
            this.marA = !this.marA
        },
        marBB() {
            this.marB = !this.marB
        },
        playAudio() {
            if (!this.isPlaying) {
                this.audio.play();
                this.isPlaying = !this.isPlaying;
            }
        },
        ...mapActions(counter, ["zero", "p1close"]),
    },
    computed: {
    },
    mounted() {
        // 在音频准备好播放时调用
        this.audio.addEventListener('canplay', () => {
            console.log('準備好了船長');
            // 在这里可以执行其他初始化操作
        });

        // 监听播放结束事件，以便在结束时重置播放状态
        this.audio.addEventListener('ended', () => {
            this.isPlaying = !this.isPlaying;
        });

    }
}

</script>

<template>
    <div class="borderr">
        <div class="top">
            <div class="imgL"></div>
            <span>我的電腦</span>
            <div class="imgR" @click="p1close()"></div>
        </div>
        <div class="topM">
            <div class="F">檔案(F)</div>
            <div class="F">編輯(E)</div>
            <div class="F">檢視(V)</div>
            <div class="F">工具(T)</div>
            <div class="F">說明(H)</div>
        </div>
        <div class="inside">
            <div class="b1">111</div>
            <div class="b2">222</div>
            <div class="b3" @mouseenter="mouseover" @mouseleave="mouseover">
                <div class="wiggle bbox" v-show="marine3">
                    <h1>楊孝竣♂</h1>
                    <h2>2001/05/23♊</h2>
                    <h3>still alive</h3>
                </div>
            </div>
            <div class="b4">
                <div class="b44">
                    <div class="b444" @click="b4change" :class="{'b4cc':b4c}">
                    <h2>❤ 拉麵、甜點、宵夜 ❤</h2>
                    </div>
                </div>
            </div>
            <div class="mar">
                <div class="mar1" @click="marAA" :class="{ 'mar11': marA }"></div>
                <button class="ahoyButton" @click="playAudio" id="audio"></button>
                <div class="mar2" @click="marBB" :class="{ 'mar22': marB }"></div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.borderr {
    position: absolute;
    top: 0;
    left: 0;
    position: relative;
    width: 100%;
    height: 100%;
    border: 4px solid #1744DB;
    border-radius: 8px;

    .top {
        width: 100%;
        height: 7%;
        border-radius: 2px 2px 0 0;
        background-color: #1744DB;

        .imgL {
            position: absolute;
            top: 5px;
            left: 5px;
            background-image: url(my.png);
            width: 32px;
            height: 32px;
            z-index: 5;
        }

        span {
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
            background-image: url( X.jpg);
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

        .F {
            margin-top: 1px;
            width: 10%;
            height: 90%;
            border-right: 1px solid rgba(0, 0, 0, 0.144);
            font-size: 14px;
        }
    }

    .inside {
        width: 100%;
        height: 90%;
        background-color: white;
        position: absolute;

        .b1 {
            border: 1px solid red;

            width: 30%;
            height: 70%;
            position: absolute;
            left: 0;
            top: 0;
        }

        .b2 {
            border: 1px solid rgb(26, 0, 0);
            width: 70%;
            height: 30%;
            position: absolute;
            right: 0;
            top: 0;


        }

        .b3 {
            border: 1px solid red;
            width: 30%;
            height: 70%;
            background-image: url(marriine.gif);
            background-repeat: no-repeat;
            background-position: -45px 10px;
            background-size: cover;
            position: absolute;
            right: 0;
            bottom: 0;

            .bbox {
                position: absolute;
                top: 47%;
                left: 2%;
                width: 90%;
                height: 40%;
                backdrop-filter: blur(10px);
                -webkit-backdrop-filter: blur(8px);
                margin: 0 auto;
                padding: 5px 10px;
                border-radius: 5px;
                box-shadow: 5px 5px 8px 0 #000;
                background: rgba(231, 38, 38, 0.7);
            }

        }

        .b4 {
            border: 1px solid rgb(26, 0, 0);
            background-image: url(marrinee.gif);
            background-repeat: no-repeat;
            background-size: contain;
            background-position: -40px 0px;
            width: 70%;
            height: 30%;
            position: absolute;
            left: 0;
            bottom: 0;

            .b44 {
                width: 65%;
                height: 100%;
                position: absolute;
                right: 0;
                bottom: 0;
            }

            .b444 {
                width: 5%;
                height: 100%;
                background-image: url(1220.png);
                background-position: -20px ;
                background-size: cover;
                font-size: 1px;
                transition: 2s;
            }
            .b4cc{
                transition: 2s;
                width: 100%;
                background-image: url(1220.png);
                background-position: -20px ;
                background-size: cover;
                display: flex;
                justify-content: center;
                align-content: center;
                h2{
                    margin: 0;
                    padding-top: 60px;
                    color: white;
                    font-size: 40px;
                    transition: 2s;
                }
            }
        }

        .mar {
            width: 40%;
            height: 40%;
            position: absolute;
            top: 30%;
            left: 30%;
            overflow: hidden;
            // background-color: #98004c67;
            background-image: url(heart.gif);
            background-position: -10px -5px;
            background-repeat: no-repeat;

            .ahoyButton {
                width: 25%;
                height: 45%;
                background-image: url(amammamamam.gif);
                background-size: cover;
                background-repeat: no-repeat;
                border-radius: 20%;
                position: absolute;
                top: 28%;
                left: 38%;
            }

            .mar1 {
                background-image: url(marine3.gif);
                width: 25%;
                height: 50%;
                background-size: contain;
                background-repeat: no-repeat;
                position: absolute;
                bottom: 0;
                left: 0;
            }

            .mar11 {
                background-image: url(marine1.gif);
            }

            .mar2 {
                background-image: url(marine2.gif);
                width: 25%;
                height: 50%;
                background-size: contain;
                background-repeat: no-repeat;
                position: absolute;
                bottom: 0;
                right: 0;
            }

            .mar22 {
                background-image: url(marine4.gif);
            }
        }
    }
}
</style>