<template>
  <div id="app" class="d-flex mx-auto justify-content-center align-items-center text-dark">
    <div id="controller-left" class="lead rest">
      <transition name="fade" mode="out-in">
        <router-link to="/" id="back-home" v-if="this.$route.path != '/'">
          <b-button
            v-bind:class="{'work': ($store.state.timer.isWorking && $route.path == '/wnr'), 'rest': (!$store.state.timer.isWorking || $route.path != '/wnr')}"
            variant="link"
            size="lg"
            toggle-class="text-decoration-none"
          >
            <i class="fa fa-chevron-left" id="Home"></i>
          </b-button>
        </router-link>
      </transition>
    </div>
    <transition name="fade" mode="out-in">
      <div id="controller-center" class="rest">{{ $store.state.app.controllerCenterText }}</div>
    </transition>
    <div id="controller-right" class="lead rest">
      <transition name="fade" mode="out-in">
        <b-dropdown
          size="lg"
          variant="link"
          toggle-class="text-decoration-none"
          no-caret
          dropleft
          v-if="this.$route.path=='/'"
          id="select"
        >
          <template slot="button-content">
            <i class="rest fa fa-bars"></i>
          </template>
          <b-dropdown-item>
            <router-link class="dropdown-item" to="/about">{{ $t("app.about") }}</router-link>
          </b-dropdown-item>
          <b-dropdown-item>
            <router-link class="dropdown-item" to="/settings">{{ $t("app.settings") }}</router-link>
          </b-dropdown-item>
          <b-dropdown-divider></b-dropdown-divider>
          <b-dropdown-item>
            <a class="dropdown-item" v-on:click="onlyRestOptionsOpen()">{{ $t("home.onlyRest") }}</a>
          </b-dropdown-item>
        </b-dropdown>
      </transition>
    </div>
    <div class="justify-content-center align-content-center">
      <transition name="fade" mode="out-in">
        <router-view />
      </transition>
    </div>
  </div>
</template>

<script>
import { Plugins } from "@capacitor/core";
const { Device } = Plugins;
export default {
  mounted: function() {
    var link = document.createElement("link");
    link.type = "text/css";
    link.rel = "stylesheet";
    link.href = "./adapt.css";
    var head = document.getElementsByTagName("head")[0];
    head.appendChild(link);
  },
  watch: {
    $route: function() {
      switch (this.$route.path) {
        case "/settings":
          this.$store.commit("setNowPage", this.$t("app.settings"));
          break;
        case "/about":
          this.$store.commit("setNowPage", this.$t("app.about"));
          break;
        default:
          this.$store.commit("setNowPage", "");
          break;
      }
    }
  },
  methods: {
    onlyRestOptionsOpen: function() {
      document.getElementById("only-rest-modal").style.visibility = "visible";
      document.getElementById("only-rest-modal").style.opacity = 1;
      document.getElementById("select").style.visibility = "hidden";
    }
  }
};
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease-in-out;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>