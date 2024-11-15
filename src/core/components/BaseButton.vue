<script setup lang="ts">
defineProps<{
    isLoading: boolean;
    label: string;
    type: "reset" | "submit" | "button" | undefined;
    onClick: Function
}>();
</script>

<template>
    <div class="baseButton">
        <button :type="type" class="btn btn-primary submit-button">
            <span v-if="!isLoading">{{ label }}</span>
            <div class="spinner-border text-light spinner-border-sm" role="status" v-if="isLoading">
                <span class="sr-only">Loading...</span>
            </div>
        </button>
    </div>
</template>

<style scoped>

.baseButton button{
    width: 100%;
}
</style>
