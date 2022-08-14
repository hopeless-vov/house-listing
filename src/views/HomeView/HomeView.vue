<template>
  <div class="home-view">
    <div class="head-line">
      <h1>Houses</h1>
      <router-link to="/create-new-listing">
        <img src="@/assets/images/ic_plus_white@3x.png" alt="create-new">
        <img class="add-new-grey" src="@/assets/images/ic_plus_grey@3x.png" alt="create-new-grey">
        <span>Create New</span>
      </router-link>
    </div>
    <div class="content">
      <div class="filters">
        <div class="search">
          <img
            class="search-ico"
            src="@/assets/images/ic_search@3x.png"
            alt="search">
          <input type="text" placeholder="Search for a house" v-model="search">
          <img
            v-if="search.length"
            class="clear-search-ico"
            src="@/assets/images/ic_clear@3x.png"
            alt="clear-search"
            @click="search = ''">
        </div>
        <tab-navigation
          :tabsList="tabsList"
          :activeTab="activeTab"
          @setActiveTab="setActiveTab"/>
      </div>
      <span v-if="search.length && findedHouses.length" class="results">{{findedHouses.length}} results found</span>
      <div v-if="findedHouses.length" class="houses-list">
        <house-item
          v-for="house in findedHouses"
          :key="house.id"
          :house="house"/>
      </div>
      <div class="no-results" v-else>
        <img src="@/assets/images/img_empty_houses@3x.png" alt="bo-results">
        <span>No results found.</span>
      </div>
    </div>
  </div>
</template>

<script src="./HomeView.js"/>
<style scoped src="./HomeView.scss" lang="scss"/>
