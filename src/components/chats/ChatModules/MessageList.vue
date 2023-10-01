<script setup>
import { ref } from 'vue'
import MessageContent from './MessageContent.vue'
const messages = ref([
  {
    id: 1,
    sender_id: 1,
    name: 'Bot W2GH',
    content: 'Hello welcome to our watch together, lets have fun!',
  },
  {
    id: 1,
    sender_id: 2,
    name: 'Anony',
    content: 'hello!',
  },
  {
    id: 1,
    sender_id: '650dd25dac436b0553bb215f',
    name: 'Bot W2GH',
    content: 'wtf!',
  },
  {
    id: 1,
    sender_id: 1,
    name: 'Bot W2GH',
    content: 'Hello welcome to our watch together, lets have fun!',
  },
  {
    id: 1,
    sender_id: 1,
    name: 'Bot W2GH',
    content: 'Hello welcome to our watch together, lets have fun!',
  },
  {
    id: 1,
    sender_id: 1,
    name: 'Bot W2GH',
    content: 'Hello welcome to our watch together, lets have fun!',
  },
  {
    id: 1,
    sender_id: 1,
    name: 'Bot W2GH',
    content: 'Hello welcome to our watch together, lets have fun!',
  },
  {
    id: 1,
    sender_id: 1,
    name: 'Bot W2GH',
    content: 'Hello welcome to our watch together, lets have fun!',
  },
  {
    id: 1,
    sender_id: 1,
    name: 'Bot W2GH',
    content: 'Hello welcome to our watch together, lets have fun!',
  },
])
</script>
<template>
  <div class="flex flex-col overflow-auto gap-1 pb-2">
    <div v-for="message in messages" :key="message.id">
      <MessageContent :message="message" />
    </div>
  </div>
</template>
