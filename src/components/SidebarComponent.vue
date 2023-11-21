<script setup>
import { ref } from 'vue';
import HeaderComponent from './HeaderComponent.vue';
import MainContent from './MainContent.vue';

const is_expanded = ref(false);

const ToogleMenu = () => {
    is_expanded.value = !is_expanded.value;
}

</script>

<template>
    <div class="w-64 bg-gray-50 shadow px-2 py-4 transform transition duration-200 ease-in-out">
        <div class="flex items-center justify-center mb-5">
            <img src="../assets/logo-qulqi.svg" alt="Logo">
        </div>
        <nav>
            <a href="#" class="flex items-center py-3 px-4 space-x-2 text-black hover:text-cyan-400">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                </svg>
                <span>Empleados</span>
            </a>
            <a href="#" class="flex items-center py-3 px-4 space-x-2 hover:text-cyan-400">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" />
                </svg>
                <span>Reclutamiento</span>
            </a>
        </nav>
    </div>
    <!-- Header --> 
    <div class="flex-1">
       <HeaderComponent /> 

        <!-- Content --> 
        <div class="p-5 m-5">
            <div class="bg-white h-screen rounded-md p-4">
                <MainContent />
            </div>
        </div>
    </div>
</template>

