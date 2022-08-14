<template>
  <router-link
    :to="{ name: 'house', params: { id: house.id, house } }"
    tag="div"
    class="house-item">
    <div class="image-wrap" :style="`background-image: url(${house.image})`"/>
    <div class="house-info">
      <span class="house-info__street">{{house.location.street}}</span>
      <span class="house-info__price">{{formatedPrice}}</span>
      <span class="house-info__city">{{house.location.zip}} {{house.location.city}}</span>
      <div class="house-info__short-house-info">
        <div class="info-item">
          <img src="@/assets/images/ic_bed@3x.png" alt="">
          {{house.rooms.bathrooms}}
        </div>
        <div class="info-item">
          <img src="@/assets/images/ic_bath@3x.png" alt="">
          {{house.rooms.bedrooms}}
        </div>
        <div class="info-item">
          <img src="@/assets/images/ic_size@3x.png" alt="">
          {{house.size}}
        </div>
      </div>
    </div>
    <div v-if="house.madeByMe" class="actions">
      <router-link class="edit" :to="{ name: 'update', params: { id: house.id, house} }"/>
      <button @click.stop="deleteItem(house.id)" class="delete"><img src="@/assets/images/ic_delete@3x.png" alt="delete"></button>
    </div>
  </router-link>
</template>

<script src="./HouseItem.js"/>
<style scoped src="./HouseItem.scss" lang="scss"/>
