<template>
   <div class="container">
      <h1 class="bang">Hello,</h1>
      <h1>my name is dhruw lalan.</h1>
      <h4 class="bio">
         I love building cool stuff on the web & some CLI tools and utilities which help increase
         developer productivity.
      </h4>
      <h4 class="bio">
         I am also very passionate about OSS & actively looking to contribute to some open source
         projects.
      </h4>
      <div class="links">
         <a href="https://github.com/dhruwlalan" class="links__link"
            ><github-svg class="links__link--svg"
         /></a>
         <a href="https://stackoverflow.com/users/7409506/dhruw-lalan" class="links__link"
            ><stackoverflow-svg class="links__link--svg"
         /></a>
         <a href="https://twitter.com/dhruwlalan" class="links__link"
            ><twitter-svg class="links__link--svg"
         /></a>
         <a href="https://www.linkedin.com/in/dhruwlalan/" class="links__link"
            ><linkedin-svg class="links__link--svg"
         /></a>
         <a href="./assets/resume/dhruw-resume.pdf" download class="links__link">
            <div class="links__link--resume">
               <resume-svg class="links__link--svg links__link--resume--svg" />
               <span class="links__link--resume--text">resume</span>
            </div>
         </a>
      </div>
   </div>
</template>

<script>
import GithubSvg from './components/svg/github.vue';
import LinkedinSvg from './components/svg/Linkedin.vue';
import StackoverflowSvg from './components/svg/Stackoverflow.vue';
import TwitterSvg from './components/svg/Twitter.vue';
import ResumeSvg from './components/svg/Resume.vue';

export default {
   components: {
      GithubSvg,
      LinkedinSvg,
      StackoverflowSvg,
      TwitterSvg,
      ResumeSvg,
   },
};
</script>
