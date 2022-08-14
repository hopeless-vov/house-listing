<template>
  <nav class="navigation-bar">
    <component :is="component" />
  </nav>
</template>

<script src="./NavigationBar.js"/>
<style scoped lang="scss">
  @import "./NavigationBar.scss";
  @import "./NavigationBar.mobile.scss";
</style>
