<template>
   <div class="container">
      <h1 class="bang">Hello,</h1>
      <h1>my name is dhruw lalan.</h1>
      <h4 class="bio">
         I love building cool stuff on the web & some automative CLI applications! I am also very
         passionate about OSS & will try to give any contribution for the community.
      </h4>
      <h5 class="bio">Current Goals: Contribute to Open Source.</h5>
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
