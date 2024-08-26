<script setup>
import { ref } from 'vue'
import Menubar from 'primevue/menubar'
import Button from 'primevue/button'
import InputText from 'primevue/inputtext'
import OverlayPanel from 'primevue/overlaypanel'

const items = ref([
  {
    label: 'Home',
    icon: 'pi pi-home'
  },
  {
    label: 'Features',
    icon: 'pi pi-star'
  },
  {
    label: 'Projects',
    icon: 'pi pi-search'
  },
  {
    label: 'Contact',
    icon: 'pi pi-envelope',
    badge: 3
  }
])

const op = ref()

const toggle = (event) => {
  op.value.toggle(event)
}
</script>

<template>
  <div class="card flex justify-content-center">
    <Menubar
      :model="items"
      class="w-full"
      :pt="{
        root: {
          class: 'bg-gray-100 border-none py-5',
          style: {
            maxWidth: '1440px'
          }
        },
        itemlink: {
          class: 'text-gray-800 hover:bg-gray-100 focus:bg-gray-100'
        },
        inputtext: {
          style: {
            background: 'transparent'
          }
        },
        menu: {
          class: 'flex-1 gap-5 ml-6'
        }
      }"
    >
      <template #start>
        <img
          class="hidden sm:block"
          src="https://i.pinimg.com/originals/fb/f6/83/fbf683c8e1a2b6f8b7d77cf47b274de0.jpg"
          width="60"
        />
      </template>
      <template #item="{ item, props }">
        <a class="flex items-center" v-bind="props.action">
          <span class="text-gray-800">{{ item.label }}</span>
        </a>
      </template>
      <template #end>
        <div class="flex flex-1 w-full items-center gap-2">
          <InputText
            placeholder="Search"
            :pt="{
              root: {
                class: 'border-round-2xl'
              }
            }"
            type="text"
            class="sm:w-auto"
          />
          <Button class="hidden sm:block" label="Login" rounded />
          <Button class="hidden sm:block" label="Register" severity="contrast" rounded outlined />
          <div class="card flex justify-content-center">
            <Button
              type="button"
              class="block sm:hidden"
              icon="pi pi-user"
              @click="toggle"
              rounded=""
              aria-haspopup="true"
              aria-controls="overlay_menu"
            />
            <OverlayPanel ref="op">
              <div class="p-2" style="width: 110px">
                <router-link to="/login"> Login</router-link>
              </div>
              <div class="p-2" style="width: 110px">
                <router-link to="/register"> Register</router-link>
              </div>
            </OverlayPanel>
          </div>
        </div>
      </template>
    </Menubar>
  </div>
</template>
