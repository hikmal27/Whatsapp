<template>
    <q-page class="tw-font-reemkufi tw-p-7">
        <div>
            <p class="tw-text-lg">Overview</p>
            <div class="tw-grid tw-grid-cols-5 tw-space-x-5 tw-mt-3">
                <q-card v-for="a in overviews" :key="a" flat bordered>
                    <div class="tw-flex tw-justify-between tw-px-5 tw-py-3">
                        <div class="tw-text-center">
                            <p class="tw-text-2xl tw-font-semibold">{{ a.value }}</p>
                            <p>{{ a.label }}</p>
                        </div>
                        <div class="tw-flex tw-items-center">
                            <div class="tw-box-border tw-p-2 tw-rounded-full tw-bg-[#F5F5F5]">
                                <img :src="a.icons" alt="">
                            </div>
                        </div>
                    </div>
                </q-card>
            </div>
        </div>
        <div class="tw-mt-7">
            <p class="tw-text-lg">Broadcast List</p>
            <div class="tw-mt-3">
                <q-table flat :columns="tableColumn" :rows="tableRows" />
            </div>
        </div>
    </q-page>
</template>

<script>
import { defineComponent, ref } from 'vue'

const overviews = [
    {
        value: 120,
        label: 'Sent',
        icons: 'icons/paper-plane.svg'
    },
    {
        value: 78,
        label: 'Success',
        icons: 'icons/done-all.svg'
    },
    {
        value: 0,
        label: 'Failed',
        icons: 'icons/close.svg'
    },
    {
        value: 14,
        label: 'Processing',
        icons: 'icons/sync.svg'
    },
    {
        value: 14,
        label: 'Queued',
        icons: 'icons/arrowhead-right.svg'
    },
]

const tableColumn = [
    { name: 'Name', label: 'Broadcast Name', align: 'left', field: 'Name' },
    { name: 'Schedule', label: 'Schedule', align: 'left', field: 'Schedule' },
    { name: 'Successfull', label: 'Successfull', align: 'left', field: 'Successfull' },
    { name: 'Recepients', label: 'Recepients', align: 'left', field: 'Recepients' },
    { name: 'Failed', label: 'Failed', align: 'left', field: 'Failed' },
    { name: 'Status', label: 'Status', align: 'left', field: 'Status' },
]

const tableRows = [
    { Name: 'Blast 1 September 2022', Schedule: 'Not set', Successfull: '80%', Recepients: '250 Contacts', Failed: '15 Contacts', Status: 'Completed' },
    { Name: 'Blast 1 September 2022', Schedule: '2022-10-12 15:55 PM', Successfull: '100%', Recepients: '250 Contacts', Failed: '15 Contacts', Status: 'Completed' },
    { Name: 'Blast 1 September 2022', Schedule: '2022-10-12 15:55 PM', Successfull: '100%', Recepients: '250 Contacts', Failed: '15 Contacts', Status: 'Completed' },
    { Name: 'Blast 1 September 2022', Schedule: '2022-10-12 15:55 PM', Successfull: '100%', Recepients: '250 Contacts', Failed: '15 Contacts', Status: 'Completed' },
]

export default defineComponent({
    setup() {
        return {
            overviews,
            tableColumn,
            tableRows
        }
    },
})
</script>

<style lang="sass">
thead tr:first-child th
  background-color: #F5F5F5

</style>

