<template>
  <div class="tab-navigation">
    <div
      v-for="tab in tabsList"
      :key="tab.id"
      :class="{'active': tab.value === activeTab}"
      class="tab-item"
      @click="setActiveTab(tab.value)">
      <span>{{tab.text}}</span>
    </div>
  </div>
</template>

<script src="./TabNavigation.js"/>
<style scoped src="./TabNavigation.scss" lang="scss"/>
