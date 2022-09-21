<template>
    <div
        ref="app"
        class="absolute top-0 left-0 w-full h-full flex flex-col overflow-auto transition duration-500 bg-gray-900 text-white tracking-tight"
        :class="{ 'opacity-0': loading, 'opacity-100': !loading }"
    >
        <main class="w-full flex-grow text-white flex items-center justify-center px-8">
            <div class="w-full max-w-7xl">
                <div class="grid grid-cols-12 gap-4 md:gap-8 py-4">
                    <Card class="col-span-12">
                        <div class="w-full max-w-7xl space-y-8 md:flex md:space-x-8 md:space-y-0">
                            <img
                                class="h-46 rounded shadow-image mx-auto"
                                src="@/img/portrait-1024.jpg"
                                alt="Portrait photograph of Luke Geaves"
                            />
                            <div class="flex-grow flex flex-col justify-center space-y-2 min-h-46">
                                <h1 class="text-6xl font-bold text-gray-300">Luke Geaves</h1>

                                <h2 class="px-2">
                                    Full stack Software Engineer with experience in building e-Commerce and SaaS
                                    websites, VR and AI powered mobile apps.
                                </h2>

                                <div class="px-2 flex text-gray-400 space-x-8">
                                    <p>
                                        {{ dateDifference(new Date(), new Date(1996, 2, 17), "year") }}
                                        years old
                                    </p>
                                    <p>
                                        {{ dateDifference(new Date(), new Date(2015, 4, 1), "year") }}
                                        years experience
                                    </p>
                                </div>

                                <p class="px-2 text-gray-400 space-x-8">
                                    <a href="mailto:luke@geav.es">luke@geav.es</a>
                                    <a href="https://www.linkedin.com/in/lukegeaves/" target="_blank">LinkedIn</a>
                                </p>
                            </div>
                        </div>
                    </Card>
                    <Card class="col-span-12 xl:col-span-4">
                        <h2 class="text-4xl pb-4 text-red-300">Skills</h2>

                        <ul class="py-4 text-gray-300 space-y-2">
                            <li v-for="(s, si) in skills.items" :key="si">
                                <p class="">&bull; {{ s }}</p>
                            </li>
                        </ul>
                    </Card>
                    <Card class="col-span-12 md:col-span-6 xl:col-span-4">
                        <h2 class="text-4xl pb-2 text-green-300">Experience</h2>
                        <ul>
                            <li v-for="(e, ei) in experience.items" :key="ei">
                                <ExperienceItem :experienceItem="e" />
                            </li>
                        </ul>
                    </Card>
                    <Card class="col-span-12 md:col-span-6 xl:col-span-4">
                        <h2 class="text-4xl pb-2 text-blue-300">Education</h2>
                        <ul>
                            <li v-for="(e, ei) in education.items" :key="ei">
                                <EducationItem :educationItem="e" />
                            </li>
                        </ul>
                    </Card>
                </div>
            </div>
        </main>

        <footer
            class="w-full flex flex-col md:flex-row items-center space-y-2 md:space-x-6 md:space-y-0 py-6 px-8 text-gray-500 text-xs"
        >
            <div class="flex-grow items-center">Luke Geaves &copy; {{ new Date().getFullYear() }}</div>
        </footer>
    </div>
</template>

<script>
import dataModel from "./data";
import momentServices from "./services/moment";

export default {
    data() {
        return dataModel;
    },
    mounted() {
        this.loading = true;
        setTimeout(() => {
            this.loading = false;
        }, 100);
    },
    methods: {
        dateDifference: momentServices.difference,
    },
};
</script>
