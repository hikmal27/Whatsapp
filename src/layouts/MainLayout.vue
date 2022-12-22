<template>
  <q-layout view="hHh lpR fFf">

    <q-header bordered class="tw-bg-white text-white tw-py-2 tw-px-5">
      <q-toolbar class="tw-flex tw-justify-between">
            <div class="tw-flex tw-space-x-10">
                <div class="tw-flex">
                    <!-- <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" /> -->

                    <q-toolbar-title class="tw-flex tw-items-center tw-space-x-2">
                        <q-avatar>
                            <img src="icons/logo.svg">
                        </q-avatar>
                        <p class="tw-text-xl tw-font-semibold tw-text-black tw-font-ubuntu">WANO</p>
                    </q-toolbar-title>
                </div>
                <div class="tw-w-full tw-flex">
                    <div class="tw-w-full tw-flex">
                        <q-list class="tw-text-[#1A1A1A] tw-font-reemkufi tw-flex">
                            <q-item clickable v-ripple @click="onSidebar = false">
                                <q-item-section avatar>
                                    <img src="icons/dashboard.svg" class="tw-w-5">
                                </q-item-section>
                                <q-item-section class="tw--ml-5">Dashboard</q-item-section>
                            </q-item>
                            <q-item clickable v-ripple @click="onSidebar = true" :to="{ name: 'broadcast' }">
                                <q-item-section avatar>
                                    <img src="icons/broadcast.svg" class="tw-w-5">
                                </q-item-section>
                                <q-item-section class="tw--ml-5">Broadcast</q-item-section>
                            </q-item>
                            <q-item clickable v-ripple>
                                <q-item-section avatar>
                                    <img src="icons/automation.svg" class="tw-w-5">
                                </q-item-section>
                                <q-item-section class="tw--ml-5">Automation</q-item-section>
                            </q-item>
                            <q-item clickable v-ripple>
                                <q-item-section avatar>
                                    <img src="icons/book.svg" class="tw-w-5">
                                </q-item-section>
                                <q-item-section class="tw--ml-5">Api Docs</q-item-section>
                            </q-item>
                            <q-item clickable v-ripple>
                                <q-item-section avatar>
                                    <img src="icons/settings.svg" class="tw-w-5">
                                </q-item-section>
                                <q-item-section class="tw--ml-5">Settings</q-item-section>
                            </q-item>
                        </q-list>
                    </div>
                </div>
            </div>

            <div class="tw-flex tw-items-center tw-space-x-2">
                <img src="icons/profile.svg" alt="">
                <q-icon name="eva-arrow-ios-downward-outline" class="tw-text-black tw-text-xl" />
            </div>

      </q-toolbar>
    </q-header>

    <q-drawer v-if="onSidebar" show-if-above v-model="leftDrawerOpen" side="left" :width="250" bordered>
      <!-- drawer content -->
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script>
import { ref } from 'vue'

export default {
  setup () {
    const leftDrawerOpen = ref(true)

    return {
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      },
      onSidebar: ref(false)
    }
  }
}
</script>
