<script setup>

</script>

<template>
    <div class="bg-white shadow px-2 py-4">
        <div class="flex justify-between">
            <button @click="showSidebar = !showSidebar" class="text-cyan-400 font-extrabold">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
            </button>
            <div class="flex justify-evenly items-center space-x-2">
                <div class="rounded-full p-2 bg-orange-400">CO</div>
                <p class="font-medium">Christian Quispe</p>
            </div>
        </div>
    </div>
</template>

