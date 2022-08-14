<template>
  <div v-if="house" class="update-view view-forms">
    <div class="headline">
      <router-link class="back-to" :to="{ name: 'house', params: { id: house.id, house }}">
        <img src="@/assets/images/ic_back_grey@3x.png" alt="arrow">
        Back to detail page
      </router-link>
      <h1>Edit listing</h1>
    </div>
    <form-fields
      :formatedHouse="formatedHouse"
      @submit="submit"
      @submitImage="submitImage"/>
  </div>
</template>

<script src="./UpdateView.js"/>
<style scoped src="./UpdateView.scss" lang="scss"/>
