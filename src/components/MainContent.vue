<script setup>

</script>

<template>
    <div class="flex justify-between mb-5">
        <div>
            <h2 class="text-black font-medium">Empleados</h2>
            <p class="text-gray-500 font-normal">Gestiona tus empleados</p>
        </div>
        <div class="flex justify-between space-x-2">
            <a href="#" class="border border-gray-500 rounded-md cursor-pointer w-32 h-10 flex justify-center items-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                </svg>
                <span class="text-sm">Download</span>
            </a>
            <a href="#" class="bg-gray-900 hover:bg-gray-700 cursor-pointer text-white rounded-md w-24 h-10 flex justify-center items-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
                <span class="text-sm">Nuevo</span>
            </a>
        </div>
    </div>
    <div class="w-full max-w-screen-xl flex">
        <div class="w-3/5 pr-4">
            <input type="text" class="w-full p-2 border border-gray-300 rounded" placeholder="Buscar empleado">
        </div>
        <div class="w-2/5">
            <select class="w-full p-2 border border-gray-300 rounded">
                <option value="option1">Nombre de cargo</option>
                <option value="option2">Opción 2</option>
                <option value="option3">Opción 3</option>
            </select>
        </div>
    </div>
    <!--Tabla -->
    <div class="w-full max-w-screen-xl mt-5">
        <table class="w-full">
            <thead>
                <tr class="text-gray-400 text-sm">
                    <th class="py-2 px-4">Nombre</th>
                    <th class="py-2 px-4">Nombre Cargo</th>
                    <th class="py-2 px-4">Departamento</th>
                    <th class="py-2 px-4">Oficina</th>
                    <th class="py-2 px-4">Cuenta</th>
                    <th class="py-2 px-4">Acciones</th>
                </tr>
            </thead>
            <tbody>
                <tr class="bg-opacity-50 text-xs">
                    <td class="py-2 px-4">John Doe</td>
                    <td class="py-2 px-4">Developer</td>
                    <td class="py-2 px-4">IT</td>
                    <td class="py-2 px-4">HQ</td>
                    <td class="py-2 px-4">Activo</td>
                    <td class="py-2 px-4 space-x-2 text-center w-32">
                        <button class="text-white bg-green-500 rounded p-0.5">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                                <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                        </button>
                        <button class="text-white bg-cyan-500 rounded p-0.5">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
                            </svg>
                        </button>
                        <button class="text-white bg-red-500 rounded p-0.5">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                            </svg>
                        </button>
                    </td>
                </tr>
                <tr class="bg-opacity-50 text-sm">
                    <td class="py-2 px-4">John Doe</td>
                    <td class="py-2 px-4">Developer</td>
                    <td class="py-2 px-4">IT</td>
                    <td class="py-2 px-4">HQ</td>
                    <td class="py-2 px-4">Activo</td>
                    <td class="py-2 px-4 space-x-2 text-center w-32">
                        <button class="text-white bg-green-500 rounded p-0.5">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                                <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                        </button>
                        <button class="text-white bg-cyan-500 rounded p-0.5">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
                            </svg>
                        </button>
                        <button class="text-white bg-red-500 rounded p-0.5">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                            </svg>
                        </button>
                    </td>
                </tr>
            </tbody>
        </table>
        <div class="flex justify-between items-center">
            <div class="flex justify-start mt-5">
                <nav class="relative z-0 inline-flex shadow-sm rounded-md">
                    <div class="-space-x-px" aria-label="Pagination">
                        <a href="#" class="pagination-item relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring focus:border-blue-300 active:bg-gray-200 transition">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                            </svg>
                        </a>
                        <a href="#" class="pagination-item relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring focus:border-blue-300 active:bg-gray-200 transition">
                            1
                        </a>
                        <a href="#" class="pagination-item relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring focus:border-blue-300 active:bg-gray-200 transition">
                            2
                        </a>
                        <a href="#" class="pagination-item relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring focus:border-blue-300 active:bg-gray-200 transition">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                            </svg>
                        </a>
                    </div>
                </nav>
            </div>
            <div class="flex space-x-2">
                <p class="text-gray-500">Mostrando 1 a 8 de 50 registros</p>
                <select>
                    <option value="">Mostrar 10</option>
                    <option value="">10</option>
                    <option value="">20</option>
                </select>
            </div>
        </div>
    </div>

</template>

