<template>
  <div>
    <Header :data="entry" />
    <NuxtPage />
  </div>
</template>


<script setup lang="ts">
  import "~/assets/css/main.css"

  import type { HeaderType } from "~/plugin/contentful";
  import { getData } from "~/plugin/contentful";

  const entry = await getData<HeaderType>("header")
  .then(res => res.items.map(item => {
    if(item.fields.singletonID === 1) {
      return item;
    }
  }));


</script>
