<template>
  <div class="house-view">
    <router-link class="back-to" :to="{ name: 'home'}">
      <img src="@/assets/images/ic_back_grey@3x.png" alt="arrow">
      <span>Back to overview</span>
    </router-link>
    <div v-if="house" class="house-view-content">
      <div class="house-info">
        <div
          :style="{ 'background-image': `url(${housePreview})` }"
          class="image-wrapper"/>
        <div class="house-detail">
          <div class="short-indormation">
            <div class="header">
              <h1>{{house.location.street}}</h1>
              <div v-if="house.madeByMe" class="actions">
                <router-link class="edit action-item" :to="{ name: 'update', params: { id: house.id, house} }"/>
                <button @click="deleteItem(house.id)" class="delete action-item"/>
              </div>
            </div>
            <div class="location">
              <img src="@/assets/images/ic_location@3x.png" alt="location">
              {{house.location.zip}}
              {{house.location.city}}
            </div>
            <div class="icon-block">
              <div class="item">
                <img src="@/assets/images/ic_price@3x.png" alt="">
                {{formatedPrice}}
              </div>
              <div class="item">
                <img src="@/assets/images/ic_size@3x.png" alt="">
                {{house.size}} m2
              </div>
              <div class="item">
                <img src="@/assets/images/ic_construction_date@3x.png" alt="">
                Built in {{house.constructionYear}}
              </div>
            </div>
            <div class="icon-block">
              <div class="item">
                <img src="@/assets/images/ic_bed@3x.png" alt="">
                {{house.rooms.bedrooms}}
              </div>
              <div class="item">
                <img src="@/assets/images/ic_bath@3x.png" alt="">
                {{house.rooms.bathrooms}}
              </div>
              <div class="item">
                <img src="@/assets/images/ic_garage@3x.png" alt="">
                {{house.hasGarage ? 'Yes' : 'No'}}
              </div>
            </div>
          </div>
          <div class="description">
            <span>{{house.description}}</span>
          </div>
        </div>
      </div>
      <div class="recommended">
        <h2>Recommended for you</h2>
        <div class="recommended-list">
          <house-item
            v-for="house in recommendedHouseList(house.id)"
            :key="house.id"
            :house="house"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script src="./HouseView.js"/>
<style scoped src="./HouseView.scss" lang="scss"/>
