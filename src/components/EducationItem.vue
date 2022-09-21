<template>
    <div class="py-4 text-gray-300">
        <h3 class="text-2xl text-bold text-gray-200">
            {{ educationItem.title }}
        </h3>

        <h4 class="text-gray-300">
            {{ educationItem.grade }}
        </h4>

        <h4 class="text-xs text-gray-400">
            {{ educationItem.org }}
        </h4>

        <div class="flex justify-between pb-2">
            <p class="text-xs text-gray-300">
                {{ educationItem.location }}
            </p>
            <p class="text-xs text-right text-gray-400">
                <span v-if="educationItem.startDate">
                    {{ formatDate(educationItem.startDate, "MMM YYYY") }}
                </span>
                -
                <span v-if="educationItem.endDate">
                    {{ formatDate(educationItem.endDate, "MMM YYYY") }}
                </span>
                <span v-else> Present </span>
            </p>
        </div>

        <ul v-if="educationItem.roles">
            <li class="text-sm" v-for="(r, ri) in educationItem.roles" :key="ri">&bull; {{ r }}</li>
        </ul>
    </div>
</template>
<script>
import momentServices from "../services/moment";
export default {
    props: ["educationItem"],
    methods: {
        formatDate: momentServices.formatDate,
    },
};
</script>
