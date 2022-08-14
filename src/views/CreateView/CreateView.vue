<template>
  <div class="create-view view-forms">
    <div class="headline">
      <router-link class="back-to" :to="{ name: 'home'}">
        <img src="@/assets/images/ic_back_grey@3x.png" alt="arrow">
        <span>Back to overview</span>
      </router-link>
      <h1>Create new listing</h1>
    </div>
    <form-fields
      @submit="submit"
      @submitImage="submitImage"/>
  </div>
</template>

<script src="./CreateView.js"/>
<style scoped src="./CreateView.scss" lang="scss"/>
