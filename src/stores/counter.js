import { defineStore } from "pinia";

export default defineStore("counter", {

    state() {
        return {
            pp1:false,
            pp2:false,
            pp3:false,
            pp4:false,
            
        }
    },

    getters: {

    },

    actions: {
        p1change() {
            this.pp1 = !this.pp1;
            // this.pp2 = false;
            // this.pp3 = false;
            // this.pp4 = false;
          },
          p2change() {
            this.pp2 = !this.pp2;
            // this.pp1 = false;
            // this.pp3 = false;
            // this.pp4 = false;
      
          },
          p3change() {
            this.pp3 = !this.pp3;
            // this.pp1 = false;
            // this.pp2 = false;
            // this.pp4 = false;
      
          },
          p4change() {
            this.pp4 = !this.pp4;
        //     this.pp1 = false;
        //     this.pp2 = false;
        //     this.pp3 = false;
          },
          zero(){
            this.pp1 = false;
            this.pp2 = false;
            this.pp3 = false;
            this.pp4 = false;
          },
          p1close(){
            this.pp1=false;
          },
          p2close(){
            this.pp2=false;
          },
          p3close(){
            this.pp3=false;
          },
          p4close(){
            this.pp4=false;
          },
          
    }
})

import { mapState, mapActions } from 'pinia'
import counter from '../stores/counter'