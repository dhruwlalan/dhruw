<template>
   <div class="container">
      <h1 class="bang">Hello,</h1>
      <h1>my name is dhruw lalan.</h1>
      <h4 class="bio">
         I like building cool stuff on the web & some CLI tools and utilities which help increase
         developer productivity.
      </h4>
      <h4 class="bio">
         I am also very passionate about OSS & will be contributing to some open some source
         projects.
      </h4>
      <div class="links">
         <a href="https://twitter.com/dhruwlalan" class="links__link"
            ><twitter-svg class="links__link--svg"
         /></a>
         <a href="https://github.com/dhruwlalan" class="links__link"
            ><github-svg class="links__link--svg"
         /></a>
         <a href="https://stackoverflow.com/users/7409506/dhruw-lalan" class="links__link"
            ><stackoverflow-svg class="links__link--svg"
         /></a>
         <a href="https://www.linkedin.com/in/dhruwlalan/" class="links__link"
            ><linkedin-svg class="links__link--svg"
         /></a>
      </div>
   </div>
</template>

<script>
import GithubSvg from './components/svg/github.vue';
import LinkedinSvg from './components/svg/Linkedin.vue';
import StackoverflowSvg from './components/svg/Stackoverflow.vue';
import TwitterSvg from './components/svg/Twitter.vue';

export default {
   components: {
      GithubSvg,
      LinkedinSvg,
      StackoverflowSvg,
      TwitterSvg,
   },
};
</script>
