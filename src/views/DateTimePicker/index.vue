<template>
  <div>
    <NDateTimePicker v-model="createTime" type="datetimerange" clearable />
  </div>
</template>

<script lant="ts" setup>
import NDateTimePicker from '../../components/DateTimePicker/src/index.vue'
import { ref } from 'vue'

const createTime = ref([])
</script>
