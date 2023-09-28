<template>
  <div class="flex w-full px-5 pt-7 justify-center gap-5">
    <VideoLoader />
    <ChatHandler />
  </div>
</template>

<script setup>
import VideoLoader from '@/components/videos/VideoLoader.vue'
import ChatHandler from '@/components/chats/ChatHandler.vue'
</script>
