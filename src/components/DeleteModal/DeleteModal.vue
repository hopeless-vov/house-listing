<template>
  <div class="delete-modal">
    <div @click="closeModal" class="modal-bg"/>
    <div class="modal-body">
      <div class="content">
        <div class="text">
          <h2>Delete listing</h2>
          <p>Are you sure you want to delete this listing? This action cannot be undone.</p>
        </div>
        <div class="actions">
          <button @click="deleteItem" class="delete"> yes, delete</button>
          <button @click="closeModal" class="cancel">go back</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script src="./DeleteModal.js"/>
<style scoped src="./DeleteModal.scss" lang="scss"/>
