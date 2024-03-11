<script setup>
import useHome from "../../composable/useHome"


const { HomePage } = useHome()

</script>
<template>
  <h1 class="text-[green]" v-text="HomePage[0].Cards.title" />
  <h2 class="text-[blue]">gasgasgasg</h2>
</template>