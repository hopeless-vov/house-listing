<template>
  <div class="fields-container__content">
    <div class="street-name input-field">
      <label for="street-name">Street name*</label>
      <input id="street-name" required type="text" v-model="house.streetName" placeholder="Enter the street name">
      <span class="error-message">Required field missing.</span>
    </div>

    <div class="double-field-container">
      <div class="house-number input-field">
        <label for="house-number">House number*</label>
        <input id="house-number" required type="text" v-model="house.houseNumber" placeholder="Enter house number">
        <span class="error-message">Required field missing.</span>
      </div>
      <div class="additional input-field">
        <label for="additional">Addition (Optional)</label>
        <input id="additional" type="text" v-model="house.addition" placeholder="e.g. A">
      </div>
    </div>

    <div class="postal-code input-field">
      <label for="postal-code">Postal code*</label>
      <input id="postal-code" required type="text" v-model="house.zip" placeholder="e.g. 1000AA">
      <span class="error-message">Required field missing.</span>
    </div>

    <div class="city input-field">
      <label for="city">City*</label>
      <input id="city" required type="text" v-model="house.city" placeholder="e.g. Utrecht">
      <span class="error-message">Required field missing.</span>
    </div>

    <div class="input-field image">
      <label for="image">Upload picture (PNG or JPG)*</label>
      <div class="image-wrapper">
        <img v-if="!house.image" src="@/assets/images/ic_plus_grey@3x.png" alt="grey-plus">
        <div
          class="image-preview-wrapper"
          :class="{'hide-bg': house.image}"
          :key="key"
          :style="{ 'background-image': `url(${previewImage ? previewImage : house.image})` }"
          @click="selectImage">
        </div>
        <div
          v-if="house.image"
          class="clear-image"
          @click="clearImage">
          <img src="@/assets/images/ic_clear_white@3x.png" alt="clear-image">
        </div>
        <input
          accept="image/jpeg, image/png, image/jpg"
          ref="fileInput"
          type="file"
          @input="pickFile">
      </div>
      <span class="error-message">Required field missing.</span>
    </div>

    <div class="price input-field">
      <label for="price">Price*</label>
      <input id="price" required type="number" v-model="house.price" placeholder="e.g. €150.000">
      <span class="error-message">Required field missing.</span>
    </div>

    <div class="double-field-container">
      <div class="size input-field">
        <label for="size">Size*</label>
        <input id="size" required type="text" v-model="house.size" placeholder="e.g. 60m2">
        <span class="error-message">Required field missing.</span>
      </div>
      <div class="garage input-field">
        <label for="garage">Garage*</label>
        <select id="garage" required v-model="house.hasGarage" placeholder="dsdsa">
          <option value="true" selected>Yes</option>
          <option value="false">No</option>
        </select>
      </div>
    </div>

    <div class="double-field-container">
      <div class="befrooms input-field">
        <label for="befrooms">Bedrooms*</label>
        <input id="befrooms" v-model="house.bedrooms" required type="text" placeholder="Enter amount">
        <span class="error-message">Required field missing.</span>
      </div>
      <div class="bathrooms input-field">
        <label for="bathrooms">Bathrooms*</label>
        <input id="bathrooms" required v-model="house.bathrooms" type="text" placeholder="Enter amount">
        <span class="error-message">Required field missing.</span>
      </div>
    </div>

    <div class="construction-date input-field">
      <label for="construction-date">Construction date*</label>
      <input id="construction-date" required type="text" v-model="house.constructionYear" placeholder="e.g. 1990">
      <span class="error-message">Required field missing.</span>
    </div>

    <div class="description input-field">
      <label for="description">Description*</label>
      <textarea id="description" rows="4" v-model="house.description" cols="50" placeholder="Enter description"/>
      <span class="error-message">Required field missing.</span>
    </div>
    <button :class="{ 'disabled': !checkFields }" @click="sendForm()">{{isCreateListingPage ? 'Update' : 'Post'}}</button>
  </div>
</template>

<script src="./FormFields.js"/>
<style scoped src="./FormFields.scss" lang="scss"/>
