<script>
import java from "../components/jaja.vue";
import httt from "../components/html.vue";
import me from "../components/me.vue";
import javaScript from "../components/javaScript.vue";
import { mapState, mapActions } from 'pinia'
import counter from '../stores/counter'
export default {
  data() {
    return {
      currentTime: '',
      
    }
  },
  methods: {
    ...mapActions(counter,["p1change","p2change","p3change","p4change"]),

    
  },
  computed: {
    ...mapState(counter,["pp1","pp2","pp3","pp4"])
  },
  components: {
    javaScript,
    java,
    httt,
    me,

  },
  created() {
    setInterval(() => {
      this.currentTime = new Date().toLocaleTimeString()
    }, 1000)
  }

}
</script>

<template>
  <div class="big">
    <div class="right">
      <div class="inside">
        <div class="block" @click="p1change()" :class="{ 'planB': pp1 == true }">
          <div class="pic p1 pp"></div>
          <div class="text">我的電腦</div>
        </div>
        <div class="block" @click="p2change()" :class="{ 'planB': pp2 == true }">
          <div class="pic p2 pp"></div>
          <div class="text">JavaScript</div>
        </div>
        <div class="block" @click="p3change()" :class="{ 'planB': pp3 == true }">
          <div class="pic p3 pp"></div>
          <div class="text">HTML</div>
        </div>
        <div class="block" @click="p4change()" :class="{ 'planB': pp4 == true }">
          <div class="pic p4 pp"></div>
          <div class="text">JAVA</div>
        </div>
        <a href="#">
          <div class="pic p5 gradient-border">
            <div class="wrapper">
              <img class="logo" alt="Klaus the cat" src="https://kibbles.klausapp.com/assets/img/loader/main.svg"
                width="140" />
              <img class="glasses" alt="Klaus's infamous yellow glasses"
                src="https://kibbles.klausapp.com/assets/img/loader/glasses-regular.svg" width="140" />
              <img class="glasses" alt="Deal-with-it meme glasses, pixelated"
                src="https://kibbles.klausapp.com/assets/img/loader/glasses-deal-with-it.svg" width="140" />
              <img class="glasses" alt="Two pulsing for eyes"
                src="https://kibbles.klausapp.com/assets/img/loader/glasses-hearts.svg" width="140" />
              <img class="glasses" alt="Two pulsing stars for eyes"
                src="https://kibbles.klausapp.com/assets/img/loader/glasses-stars.svg" width="140" />
            </div>
          </div>
        </a>
        <img src="/blakcc.png" alt="" class="bblack">
        <div class="windows">
          <me v-show="pp1" />
          <javaScript v-show="pp2" />
          <httt v-show="pp3" />
          <java v-show="pp4" />
        </div>
      </div>
    </div>
    <div class="bottom">
      <div class="startB"> 開始</div>
      <div class="bottomRight">
        <img src="/bluetooth.ico" alt="">
        <img src="/safe.ico" alt="">
        <img src="/louder.ico" alt="">
        <img src="/ber.ico" alt="">
        <img src="/in.ico" alt="">
        <div class="time">
          <span>{{ currentTime }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.big {
  -webkit-text-stroke: 0.2px black;
  text-shadow: 0.5px 0.5px 2px black;
  width: 100vw;
  height: 100vh;
  background-color: white;
  background-color: #4060F8;
  background-image: url(/1204.jpg);
  background-size: cover;
  display: flex;
  z-index: 0;

  .right {
    position: relative;
    width: 100%;
    height: 100%;

    .inside {
      position: absolute;
      left: 0%;
      width: 100%;
      height: 100%;
      border: 1px solid black;
      display: flex;
      flex-wrap: wrap;
      flex-direction: column;
      z-index: 0;


      .block {
        width: 6%;
        height: 13%;
        margin-top: 25px;
        margin-left: 15px;
        flex-wrap: wrap;
        z-index: 1;

        &:hover {
          background-color: rgba(255, 255, 255, 0.225);
        }

        &:active {
          background-color: rgba(255, 255, 255, 0.463);
        }

        .pic {
          width: fill;
          height: 60px;
          color: rgb(237, 217, 217);
        }

        .text {
          margin-top: 5px;
          width: fill;
          height: 20%;
          color: white;
          font-size: 20px;
          -webkit-text-stroke: 0.2px black;
          text-shadow: 0.5px 0.5px 2px black;
          text-align: center;
        }
      }

      .pp {
        background-position: center;
        background-size: contain;
        background-repeat: no-repeat;
      }

      .p1 {
        background-image: url(/my.png);
        // background-position: center;
        // background-size: contain;
        // background-repeat: no-repeat;

      }

      .p2 {
        background-image: url(/oo.png);
        // background-size: contain;
        // background-repeat: no-repeat;

        // background-position: center;
      }

      .p3 {
        background-image: url(/shell2.ico);
        // background-size: contain;
        // background-repeat: no-repeat;
        // background-position: center;

      }

      .p4 {
        background-image: url(/shell.ico);
        // background-size: contain;
        // background-repeat: no-repeat;
        // background-position: center;
      }
      .bblack{
        width: 17%;
        height: 30%;
        position: absolute;
        right: .8%;
        bottom: 1.8%;
        z-index: 1;
      }
      .windows{
        position: absolute;
        left: 10%;
        top: 4%;
        width: 74%;
        height: 90%;
      }
    }

    .p5 {
      position: absolute;
      bottom: 11%;
      right: 10px;
      z-index: 5;

      .wrapper {
        transform: translate(-50%, -50%);
      }

      .glasses {
        position: fixed;
        top: 0;
        right: 0;
        left: 0;
        animation: slideInOut 6s cubic-bezier(0.645, 0.045, 0.355, 1) infinite;
        transform: translateY(-60vh);
      }

      .glasses:nth-of-type(2) {
        animation-delay: -1.8s
      }

      .glasses:nth-of-type(3) {
        animation-delay: -0.25s
      }

      .glasses:nth-of-type(4) {
        animation-delay: 1.25s
      }

      .glasses:nth-of-type(5) {
        animation-delay: 2.65s
      }

      @keyframes slideInOut {
        0% {
          opacity: 0;
          transform: translateY(-100%);
        }

        5% {
          opacity: 1;
        }

        20% {
          transform: translateX(0);
          opacity: 1;
        }

        35% {
          transform: translateX(0);
          opacity: 1;
        }

        45% {
          transform: translateY(100%);
          opacity: 0;
        }

        100% {
          opacity: 0;
          transform: translateY(-100%);
        }
      }
    }
  }


  .bottom {
    width: 100%;
    height: 4%;
    background-image: linear-gradient(to top, #005CD8, #1885e4);
    // background-color: #005CD8;
    position: absolute;
    bottom: -18%;

    .startB {
      position: absolute;
      left: 5px;
      bottom: 0;
      width: 9%;
      height: 80%;
      border-radius: 10px;
      background-color: #2F9847;
      background-image: url(/windows.ico);
      background-size: contain;
      background-repeat: no-repeat;
      background-position: 10px;
      color: white;
      box-shadow: 1px 1px 10px 1px black;

      &:hover {
        background-color: #2cb14b;
      }

      &:active {
        background-color: #1d8435;
      }
    }

    .bottomRight {
      background-color: #00A0EC;
      width: 20%;
      height: 90%;
      position: absolute;
      right: 0;
      bottom: 1%;
      border-radius: 5px;
      display: flex;

      .time {
        color: white;
        position: absolute;
        right: 5%;
      }

      img {
        margin-right: 5px;
        margin-left: 5px;
      }
    }

  }
}

.planB {
  background-color: rgba(23, 34, 242, 0.5);
  color: white;
}</style>