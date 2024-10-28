<template>
  <!-- Hero Section -->
  <div
    class="curved-div relative h-screen"
    style="
      background-image: url('hero.jpeg');
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
    "
  >
    <div class="absolute bg-[#d9d9d9] w-full h-full bg-opacity-10"></div>
    <!-- Overlay content -->
    <div
      class="absolute inset-0 flex top-[100px] flex-col items-center justify-center hero-mask text-white w-full"
    >
      <h1
        class="text-[56px] sm:text-[72px] md:text-[108px] hero-header uppercase"
      >
        Jessica & Coenraad
      </h1>
      <!-- Countdown timer -->
      <div class="flex space-x-16 mt-12 text-4xl">
        <div class="flex flex-col items-center">
          <span class="time text-[32px] sm:text-[40px]">{{
            countdown.days
          }}</span>
          <p class="time-footer uppercase">Days</p>
        </div>
        <div class="flex flex-col items-center">
          <span class="time text-[32px] sm:text-[40px]">{{
            countdown.hours
          }}</span>
          <p class="time-footer uppercase">Hours</p>
        </div>
        <div class="flex flex-col items-center">
          <span class="time text-[32px] sm:text-[40px]">{{
            countdown.minutes
          }}</span>
          <p class="time-footer uppercase">Min</p>
        </div>
      </div>
    </div>
  </div>

  <!-- RSVP Section -->
  <section class="bg-[#FAF6F2]">
    <div
      class="container mx-auto max-w-[1240px] relative items-center flex flex-col p-4"
    >
      <div class="flex flex-col gap-4 justify-between items-center">
        <img src="/flower.png" alt="" class="-top-20 w-[290px] h-[150px]" />
        <div class="bg-dark-brown w-[1px] h-[67px] bg-opacity-50"></div>
      </div>
      <h2 class="text-center about-header uppercase mt-8 mb-12">
        JOIN US FOR OUR WEDDING day
      </h2>

      <!-- Form -->
      <div class="space-y-6 flex flex-col justify-between items-center w-full">
        <div class="flex flex-col justify-between items-center gap-4 w-full">
          <h3 class="about-question">Will you be joining us?</h3>
          <div class="flex justify-between items-center gap-4 w-full">
            <!-- Yes Button -->
            <button
              :class="selected === 'yes' ? 'bg-[#9E9693]/20' : ''"
              class="w-full py-2 rounded-full text-center uppercase transition-all border-[1.5px] border-dark-brown"
              @click="setSelected('yes')"
            >
              <span class="about-radio">Yes</span>
            </button>

            <!-- No Button -->
            <button
              :class="selected === 'no' ? 'bg-[#9E9693]/20' : ''"
              class="w-full py-2 rounded-full text-center uppercase transition-all border-[1.5px] border-dark-brown"
              @click="setSelected('no')"
            >
              <span class="about-radio">No</span>
            </button>
          </div>
        </div>
        <!-- Name Fields -->
        <div class="flex flex-col justify-between items-center gap-4 w-full">
          <h3 class="about-question">Your details</h3>
          <div class="grid grid-cols-2 gap-4 w-full">
            <input
              type="text"
              v-model="name"
              placeholder="Name"
              class="w-full px-4 py-2 border-[1.5px] border-dark-brown bg-[#FAF6F2] rounded-full input-text text-center"
            />
            <input
              type="text"
              v-model="surname"
              placeholder="Surname"
              class="w-full px-4 py-2 border-2 border-[#9E9693] bg-[#FAF6F2] rounded-full input-text text-center"
            />
          </div>
        </div>

        <!-- Plus One Option -->
        <div class="flex flex-col justify-between items-center gap-4 w-full">
          <h3 class="about-question">Will you be bringing a plus one?</h3>
          <div class="flex justify-between items-center gap-4 w-full">
            <!-- Yes Button -->
            <button
              :class="plusOneSelected === 'yes' ? 'bg-[#9E9693]/20' : ''"
              class="w-full py-2 rounded-full text-center uppercase transition-all border-[1.5px] border-dark-brown"
              @click="setPlusOne('yes')"
            >
              <span class="about-radio">Yes</span>
            </button>

            <!-- No Button -->
            <button
              :class="plusOneSelected === 'no' ? 'bg-[#9E9693]/20' : ''"
              class="w-full py-2 rounded-full text-center uppercase transition-all border-[1.5px] border-dark-brown"
              @click="setPlusOne('no')"
            >
              <span class="about-radio">No</span>
            </button>
          </div>
        </div>

        <!-- Plus One Details -->
        <div class="flex flex-col justify-between items-center gap-4 w-full">
          <h3 class="about-question">Plus one details</h3>
          <div class="grid grid-cols-2 gap-4 w-full">
            <input
              type="text"
              v-model="plusOneName"
              :disabled="plusOneSelected === 'no' || plusOneSelected === ''"
              placeholder="Name"
              class="w-full px-4 py-2 border-2 border-[#9E9693] bg-inherit rounded-full input-text text-center"
            />
            <input
              type="text"
              placeholder="Surname"
              :disabled="plusOneSelected === 'no' || plusOneSelected === ''"
              v-model="plusOneSurname"
              class="w-full px-4 py-2 border-2 border-[#9E9693] bg-inherit rounded-full input-text text-center"
            />
          </div>
        </div>

        <!-- Dietary Restrictions -->
        <div class="flex flex-col gap-4 justify-between items-center w-full">
          <h3 class="about-question">Any dietary restrictions?</h3>
          <input
            type="text"
            v-model="dietaryRestrictions"
            placeholder="Do you and/or your plus one have any food allergies?"
            class="w-full px-4 py-2 border-2 border-[#9E9693] bg-inherit rounded-full input-text text-center"
          />
        </div>

        <!-- Song Request -->
        <div class="flex flex-col gap-4 justify-between items-center w-full">
          <h3 class="about-question">Song request</h3>
          <input
            type="text"
            v-model="songRequest"
            placeholder="Please recommend 2 songs"
            class="w-full px-4 py-2 border-2 border-[#9E9693] bg-inherit rounded-full input-text text-center"
          />
        </div>

        <!-- Submit Button -->
        <button
          type="submit"
          @click="sendRSVP"
          class="about-submit rounded-full uppercase"
        >
          RSVP Now
        </button>
      </div>
    </div>
  </section>

  <section
    class="bg-[#F3EEE7] md:bg-[#FAF6F2] pt-8 pb-16 w-full relative flex flex-col items-center p-4"
  >
    <div class="absolute z-0 bottom-0 w-full h-1/2 bg-[#F3EEE7]"></div>
    <div
      class="max-w-[1240px] flex flex-col md:flex-row justify-center gap-8 items-center md:items-end z-20"
    >
      <div
        class="flex flex-col gap-4 md:gap-16 justify-between items-start w-full md:w-1/3 z-20"
      >
        <div class="dream-image w-full">
          <img src="/dream1.jpeg" alt="" />
        </div>
        <div class="flex flex-col justify-between items-start">
          <p class="dream-small text-dark-brown">come share our</p>
          <h3 class="dream-large text-dark-brown uppercase">dream day</h3>
        </div>
      </div>

      <div class="relative w-full md:w-2/3 mx-auto">
        <div
          class="w-full gap-0 flex flex-col justify-center items-end relative"
        >
          <img
            src="/flowers2.png"
            alt="Floral Decoration"
            class="right-0 w-[90%] z-1000"
          />
          <div class="dream-image w-full z-20 relative">
            <img src="/dream2.jpeg" alt="Main Image" class="w-full" />
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Wedding Venue Section -->
  <section
    class="bg-[#FAF6F2] flex justify-around items-center py-8 md:py-28 relative px-4"
  >
    <div
      class="flex flex-col sm:flex-row justify-center max-w-[1240px] relative md:mt-28"
    >
      <h3 class="block md:hidden uppercase venue-big mb-4">
        Our Wedding Venue
      </h3>
      <div
        class="flex flex-col justify-between items-start w-full md:w-1/2 gap-4 bg-[#FFFFFF] bg-opacity-80 p-5"
      >
        <img src="/gecko.png" alt="" class="w-[250px] h-[100px]" />
        <p class="venue-text text-[28px] md:text-[24px]">
          If you'd like to stay overnight, please check the accommodation
          options via the provided link. Kindly inform us in advance so we can
          make the necessary arrangements. Payment should be made to us, and we
          will handle the booking for you.
        </p>
        <p class="venue-small">
          Breakfast will be provided the next morning from 8-9 AM
        </p>
        <button class="about-submit rounded-full">
          <a
            href="https://book.nightsbridge.com/37042"
            target="_blank"
            class="text-[#faf6f2]"
            >View Accommodation</a
          >
        </button>
      </div>
      <div
        class="w-full md:w-1/2 flex flex-col justify-between items-end md:relative md:-top-28 mt-4"
      >
        <div class="dream-image">
          <img src="/venue.png" alt="" class="shadow-lg" />
        </div>
        <h3 class="self-end hidden md:block translate-y-28 uppercase venue-big">
          OUR WEDDING VENUE
        </h3>
      </div>
    </div>
  </section>

  <!-- Map Section -->
  <section class="bg-[#FAF6F2] pb-12 pt-1 w-full px-4">
    <div class="max-w-[1240px] mx-auto">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8 mt-8">
        <div class="col-span-3 flex flex-col justify-between items-start gap-4">
          <div class="flex flex-col justify-between items-start">
            <p class="location-small">wedding</p>
            <h3 class="location-big uppercase">Location</h3>
          </div>
          <div class="dream-image w-full h-full">
            <iframe
              class="w-full h-full"
              :src="source"
              allowfullscreen
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
        <div class="dream-image h-[550px] col-span-3 md:col-span-1 w-full">
          <img
            src="/location.png"
            alt=""
            class="w-full h-full object-cover bg-bottom"
          />
        </div>
      </div>
    </div>
  </section>

  <section class="relative bg-[#F3EEE7] py-16 text-center px-4">
    <div class="max-w-[1240px] mx-auto">
      <p class="gift-bold mb-4">
        Your presence on our special day is the greatest gift we could ask for.
      </p>
      <p class="gift-normal mb-16">
        However, if you would like to offer a gift, a wedding cash box will be
        available at the celebration.
      </p>
    </div>

    <!-- Centered Image at the Bottom, Half Visible -->
    <div class="absolute inset-x-0 bottom-0 flex justify-center px-4">
      <img
        src="/flower.png"
        alt="Flower Decoration"
        class="h-[200px] translate-y-1/2"
      />
    </div>
  </section>

  <section class="bg-[#FAF6F2] py-16"></section>
  <section class="bg-[#FAF6F2] flex justify-center items-center w-full">
    <div
      class="flex flex-col justify-center md:justify-between items-center max-w-[1240px] w-full px-4"
    >
      <div class="h-[1px] w-full bg-dark-brown"></div>
      <div
        class="flex-col md:flex-row flex text-center md:justify-between w-full py-2"
      >
        <p class="footer-text">Copyright &copy; 2024</p>
        <p class="footer-text">Privacy Policy | Terms & Conditions</p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.curved-div {
  overflow: hidden; /* Ensures content doesn't spill out */
}

.clip-curved {
  clip-path: ellipse(100% 100% at 50% 0%);
}

.clip-bottom {
  clip-path: ellipse(100% 100% at 50% 30%);
}

.footer-text {
  font-family: "Montserrat", sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  color: #6c4e3f;
}

.curved-div::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 50%;
  width: 110%; /* Adjust to control the curve's width */
  height: 150px; /* Adjust to control the curve's height */
  background-color: #faf6f2;
  border-radius: 50%;
  transform: translateX(-50%) translateY(50%);
}

@media screen and (max-width: 768px) {
  .curved-div::after {
    height: 50px;
  }
}

.gift-bold {
  font-family: "Cormorant Upright", sans-serif;
  font-size: 30px;
  font-weight: 700;
  line-height: 42px;
  text-align: center;
  color: #6c4e3f;
}

.gift-normal {
  font-family: "Cormorant Upright", sans-serif;
  font-size: 30px;
  font-weight: 500;
  line-height: 42px;
  text-align: center;
  color: #6c4e3f;
}

.hero-header {
  font-family: "Cormorant Upright";
  font-weight: 500;
  line-height: 109px;
  color: #faf6f2;
  text-align: center;
}

.venue-small {
  font-family: Montserrat;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  text-align: left;
  color: #6c4e3f;
}

.venue-big {
  font-family: "Cormorant Upright", sans-serif;
  font-size: 30px;
  font-weight: 600;
  line-height: 48px;
  letter-spacing: 0.2em;
  text-align: left;
  color: #6c4e3f;
}

.hero-mask {
  background: linear-gradient(
    360deg,
    rgba(41, 36, 34, 0.7) 26.44%,
    rgba(41, 36, 34, 0.35) 42.27%,
    rgba(41, 36, 34, 0) 58.11%
  );
}

.time {
  font-family: "Montserrat", sans-serif;
  font-weight: 400;
  color: #faf6f2;
}

.time-footer {
  font-family: "Montserrat", sans-serif;
  font-weight: 400;
  font-size: 15px;
  color: #faf6f2;
}

.about-header {
  font-family: "Cormorant Upright";
  font-weight: 400;
  font-size: 40px;
  line-height: 48px;
  color: #6c4e3f;
}

.venue-text {
  font-family: "Cormorant Upright";
  font-weight: 400;
  line-height: 48px;
  color: #6c4e3f;
}

.about-question {
  font-family: "Montserrat", sans-serif;
  font-weight: 400;
  font-size: 20px;
  line-height: 30px;
  color: #6c4e3f;
  text-align: center;
}

.about-radio {
  font-family: "Montserrat", sans-serif;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  color: #6c4e3f;
}

.about-submit {
  font-family: "Montserrat", sans-serif;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  color: #faf6f2;
  background-color: #6c4e3f;
  padding: 12px 56px;
}

.input-text {
  background-color: #faf6f2;
  border-width: 1.5px;
  border-color: #6c4e3f;
}

.input-text::placeholder {
  color: #6c4e3f;
  opacity: 0.5;
  font-family: "Montserrat", sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
}

.dream-image {
  box-shadow: 0px 5px 20px 0px #0000000d;
  border: 16px solid #ffffff;
}

.dream-small {
  font-family: "Cormorant Upright", sans-serif;
  font-weight: 400;
  font-size: 40px;
}

.dream-large {
  font-family: "Cormorant Upright", sans-serif;
  font-weight: bold;
  font-size: 50px;
  line-height: 50px;
}

.location-small {
  font-family: "Cormorant Upright", sans-serif;
  font-size: 48px;
  font-weight: 500;
  line-height: 56px;
  text-align: left;
  text-transform: lowercase;
  color: #6c4e3f;
}

.location-big {
  font-family: "Cormorant Upright";
  font-size: 48px;
  font-weight: 700;
  line-height: 56px;
  text-align: left;
  text-transform: uppercase;
  color: #6c4e3f;
}
</style>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const selected = ref("");
const plusOneSelected = ref("");
const mapsApiKey = useRuntimeConfig().mapsKey;
const source = `https://www.google.com/maps/embed/v1/place?key=${mapsApiKey}&q=70 Gecko Ridge Rd, Mooiplaas, Pretoria, 0065`;
const name = ref("");
const surname = ref("");
const plusOneName = ref("");
const plusOneSurname = ref("");
const dietaryRestrictions = ref("");
const songRequest = ref("");

const sendRSVP = async () => {
  if (
    selected.value === "" ||
    plusOneSelected.value === "" ||
    name.value === "" ||
    surname.value === "" ||
    dietaryRestrictions.value === "" ||
    songRequest.value === ""
  ) {
    alert("Please make sure all fields are filled");
    return;
  }
  if (plusOneSelected.value === "yes") {
    if (plusOneName.value === "" || plusOneSurname.value === "") {
      alert("Please make sure to fill in your plus one details");
      return;
    }
  }

  alert("RSVP Sent!");
  await sendEmail();
};

const sendEmail = async () => {
  try {
    await $fetch("/api/send", {
      params: {
        to: "jessie.reynolds1221@gmail.com",
        selected: selected.value,
        plusOneSelected: plusOneSelected.value,
        name: name.value,
        surname: surname.value,
        plusOneName: plusOneName.value,
        plusOneSurname: plusOneSurname.value,
        dietaryRestrictions: dietaryRestrictions.value,
        songRequest: songRequest.value,
      },
    });
  } catch (error) {
    console.log(error);
  }
};

// Function to update selected state
function setSelected(option) {
  selected.value = option;
}

function setPlusOne(option) {
  plusOneSelected.value = option;
}

const targetDate = new Date("2025-03-08T15:30:00").getTime();

const countdown = ref({
  days: "00",
  hours: "00",
  minutes: "00",
});

function updateCountdown() {
  const now = new Date().getTime();
  const distance = targetDate - now;

  if (distance < 0) {
    countdown.value = { days: "00", hours: "00", minutes: "00", seconds: "00" };
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

  countdown.value = {
    days: String(days).padStart(2, "0"),
    hours: String(hours).padStart(2, "0"),
    minutes: String(minutes).padStart(2, "0"),
  };
}

// Lifecycle hooks to start and stop the countdown
let countdownInterval;

onMounted(() => {
  updateCountdown(); // Initial call
  countdownInterval = setInterval(updateCountdown, 1000); // Update every second
});

onUnmounted(() => {
  clearInterval(countdownInterval); // Clean up the interval when component is destroyed
});
</script>
