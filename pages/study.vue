<script setup>
definePageMeta({
  layout: "landing",
});

const pricing = [
  {
    name: "Групповое занятие",
    price: "600₽",
    popular: false,
    features: [
      "1 занятие = 90 минут",
      "Минимум домашней работы",
      "Дружеская атмосфера",
    ],
    button: {
      text: "Подробнее",
      link: "/",
    },
  },
  {
    name: "Платформа с курсом",
    price: {
      monthly: "2500₽",
      annual: "$16",
      discount: "10%",
      original: "$24",
    },
    popular: true,
    features: [
      "Единый платеж",
      "Материалы обновляются",
      "Все необходимое под рукой",
      "Удобно отслеживать прогрес",
    ],
    button: {
      text: "Подробнее",
      link: "http://study.poliglotim.ru",
    },
  },
  {
    name: "Репетитор",
    price: "2000₽",
    popular: false,
    features: [
      "1 занятие = 60 минут",
      "Минимум домашней работы",
      "Дружеская атмосфера",
      "Помощь в подготовке к экзаменам",
    ],
    button: {
      text: "Подробнее",
      link: "/contact",
    },
  },
];
</script>

<template>
  <LandingContainer>

    <!-- Заголовок -->
    <LandingSectionhead>
      <template v-slot:title>Обучение</template>
      <template v-slot:desc
        >Выбирайте свой формат обучения или комбинируйте для лучшего рузультата.</template
      >
    </LandingSectionhead>

    <!-- Формат занятий -->
    <div class="grid md:grid-cols-3 gap-10 mx-auto max-w-screen-lg mt-12">
      <LandingPlan v-for="item of pricing" :plan="item" />
    </div>
    
    <!-- Языки -->
    <LandingFeatures></LandingFeatures>
  
    
    
    <LandingContactform />
    </LandingContainer>
</template>
