<template>
  <div class="flex w-full px-5 pt-7 justify-center gap-5">
    <div class="flex w-[70vw] h-fit bg-[#121213] rounded-[8px] justify-center py-5">
      <VideoLoader />
    </div>
    <ChatHandler />
  </div>
</template>

<script setup>
import VideoLoader from '@/components/videos/VideoLoader.vue'
import ChatHandler from '@/components/chats/ChatHandler.vue'
</script>
