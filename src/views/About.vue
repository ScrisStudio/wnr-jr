<template>
  <div class="about text-center">
    <img src="../assets/wnrIcon.png" width="60px" />
    <br />
    <br />
    <p class="title-2 rest font-weight-bolder">
      wnr -
      <i>jr</i>
    </p>
    <p class="text-muted">{{ $t("about.versionShort") }}{{ version }}</p>
    <p class="info">
      <a class="rest" :href="Homepage()" target="_blank">
        <i class="fa fa-home" id="homepage"></i>
      </a>&nbsp;&nbsp;
      <a class="rest" :href="OnGithub()" target="_blank">
        <i class="fa fa-github" id="onGithub"></i>
      </a>&nbsp;&nbsp;
      <a class="rest" :href="Issues()" target="_blank">
        <i class="fa fa-exclamation-circle" id="issues"></i>
      </a>
    </p>
    <p class="small">
      Made with ❤ by
      <a class="rest" :href="PersonalPage()" target="_blank">Roderick Qiu</a>.
    </p>
    <p class="small">
      <a class="rest" :href="Downloader()" target="_blank">{{ $t("about.downloadFullVersion") }}</a>.
    </p>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      version: require("../../package.json").version
    };
  },
  methods: {
    Homepage: function() {
      return "https://wnr.scris.top/";
    },
    OnGithub: function() {
      return "https://github.com/RoderickQiu/wnr/";
    },
    Issues: function() {
      return "https://github.com/RoderickQiu/wnr/issues/";
    },
    PersonalPage: function() {
      return "https://r-q.name/";
    },
    Downloader: function() {
      return "https://github.com/RoderickQiu/wnr/releases";
    }
  }
};
</script>