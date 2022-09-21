<template>
    <div class="py-4 text-gray-300">
        <h3 class="text-2xl text-bold text-gray-200">
            <a :href="experienceItem.orgHref" target="_blank">
                {{ experienceItem.org }}
            </a>
        </h3>

        <div class="flex justify-between pb-2">
            <p class="text-xs text-gray-300">
                {{ experienceItem.location }}
            </p>

            <p class="text-xs text-gray-400">
                <span v-if="experienceItem.startDate">
                    {{ formatDate(experienceItem.startDate, "MMM YYYY") }}
                </span>
                -
                <span v-if="experienceItem.endDate">
                    {{ formatDate(experienceItem.endDate, "MMM YYYY") }}
                </span>
                <span v-else> Present </span>
            </p>
        </div>

        <ul v-if="experienceItem.roles">
            <li class="text-sm" v-for="(r, ri) in experienceItem.roles" :key="ri">&bull; {{ r }}</li>
        </ul>
    </div>
</template>
<script>
import momentServices from "../services/moment";
export default {
    props: ["experienceItem"],
    methods: {
        formatDate: momentServices.formatDate,
    },
};
</script>
