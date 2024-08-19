<script setup>
import InputText from 'primevue/inputtext'
import Button from 'primevue/button'
</script>
<template>
  <div class="landing-section bg-white border-1 border-gray-200 px-4 md:px-8 pt-8 mt-8">
    <div class="lg:pt-8 pb-6">
      <div class="grid pb-4 border-bottom-1 border-300">
        <div class="col-12 lg:col-5">
          <div class="flex flex-column lg:flex-row align-items-center gap-3">
            <img
              src="https://i.pinimg.com/originals/fb/f6/83/fbf683c8e1a2b6f8b7d77cf47b274de0.jpg"
              width="150"
            />
            <div class="pr-4 flex flex-column align-items-center lg:align-items-start">
              <span class="text-3xl font-semibold text-center">PLACEHOLDER NAME</span>
              <p>&copy; 2024. All Rights Reserved.</p>
              <p class="text-gray-600 text-sm text-center lg:text-left">
                This website and its content, including but not limited to text, images, and design,
                are the property of <strong class="font-semibold">PLACEHOLDER NAME</strong> and are
                protected by copyright laws. Unauthorized use or duplication of any material is
                strictly prohibited.
              </p>
            </div>
          </div>
        </div>
        <div class="col-12 mt-6 lg:mt-0 lg:col-2">
          <div class="text-900 font-bold line-height-3 mb-3">Company</div>
          <a
            class="text-700 block cursor-pointer line-height-3 mb-2 hover:text-primary transition-duration-200"
            >About Us</a
          >
          <a
            class="text-700 block cursor-pointer line-height-3 mb-2 hover:text-primary transition-duration-200"
            >News</a
          >
          <a
            class="text-700 block cursor-pointer line-height-3 mb-2 hover:text-primary transition-duration-200"
            >Investor Relations</a
          >
          <a
            class="text-700 block cursor-pointer line-height-3 mb-2 hover:text-primary transition-duration-200"
            >Careers</a
          >
          <a
            class="text-700 block cursor-pointer line-height-3 hover:text-primary transition-duration-200"
            >Media Kit</a
          >
        </div>
        <div class="col-12 mt-6 lg:mt-0 lg:col-2">
          <div class="text-900 font-bold line-height-3 mb-3">Resourses</div>
          <a
            class="text-700 block cursor-pointer line-height-3 mb-2 hover:text-primary transition-duration-200"
            >Get Started</a
          >
          <a
            class="text-700 block cursor-pointer line-height-3 mb-2 hover:text-primary transition-duration-200"
            >Learn</a
          >
          <a
            class="text-700 block cursor-pointer line-height-3 hover:text-primary transition-duration-200"
            >Case Studies</a
          >
        </div>
        <div class="col-12 mt-6 lg:mt-0 lg:col-3">
          <div
            class="text-700 text-center lg:text-left line-height-3 mb-3 text-lg lg:text-base font-medium"
          >
            Join our community to get weekly updates and unique gifts every friday.
          </div>
          <InputText placeholder="Enter your email" class="w-full" />
          <Button v-ripple label="Join" class="px-5 w-full lg:w-auto mt-3 py-3"></Button>
        </div>
        <div class="flex justify-content-end w-full mt-2">
          <div class="flex align-items-center justify-content-between">
            <a
              class="cursor-pointer text-500 md:ml-3 ml-2 hover:text-primary transition-duration-200"
            >
              <i class="pi pi-facebook text-xl"></i>
            </a>
            <a
              class="cursor-pointer text-500 md:ml-3 ml-2 hover:text-primary transition-duration-200"
            >
              <i class="pi pi-github text-xl"></i>
            </a>
          </div>
        </div>
      </div>
      <div
        class="flex flex-wrap align-items-center justify-content-center lg:justify-content-between mt-4"
      >
        <img
          src="https://i.pinimg.com/originals/fb/f6/83/fbf683c8e1a2b6f8b7d77cf47b274de0.jpg"
          width="60"
        />
        <div class="flex align-items-center justify-content-between md:mb-0 mb-3">
          <a class="text-700 cursor-pointer md:ml-5 ml-2 hover:text-primary transition-duration-200"
            >Brand Policy</a
          >
          <a class="text-700 cursor-pointer md:ml-5 ml-2 hover:text-primary transition-duration-200"
            >Privacy Policy</a
          >
          <a class="text-700 cursor-pointer md:ml-5 ml-2 hover:text-primary transition-duration-200"
            >Terms of Service</a
          >
        </div>
      </div>
    </div>
  </div>
</template>
