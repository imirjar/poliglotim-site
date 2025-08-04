<script setup>
definePageMeta({
  layout: "landing",
});
</script>

<template>
  <LandingContainer>
    <LandingSectionhead>
      <template v-slot:title>Путешествия</template>
      <template v-slot:desc>Для чего учить языки, если не ради путешествий?</template>
    </LandingSectionhead>
    <!-- <LandingLogos></LandingLogos>  -->
    <!-- <LandingCta></LandingCta> -->
    <LandingContactform />
  </LandingContainer>
</template>
