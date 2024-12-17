<template>
  <div class="poll-container">
    <h3>{{ question }}</h3>
    <form @submit.prevent="submitVote">
      <div v-for="(option, index) in options" :key="index" class="poll-option">
        <label>
          <input
            type="radio"
            :value="option"
            v-model="selectedOption"
            class="poll-radio"
          />
          <span>{{ option }}</span>
        </label>
      </div>
      <button type="submit" :disabled="!selectedOption" class="poll-submit">
        Голосовать
      </button>
    </form>
  </div>
</template>
  
<script>
export default {
  name: "Poll",
  data() {
    return {
      question: "Какой цвет вы предпочитаете?",
      options: ["Красный", "Зелёный", "Синий", "Серый"],
      selectedOption: null,
      voteSubmitted: false,
    };
  },
};
</script>
  
<style scoped>
.poll-container {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

h3 {
  margin-bottom: 10px;
}

.poll-option {
  display: flex;
  align-items: center;
  gap: 10px;
}

label {
  display: flex;
  align-items: center;
  font-size: 16px;
  color: #ffffff; /* Цвет текста */
  cursor: pointer;
}

/* Стили для радиокнопок */
.poll-radio {
  appearance: none; /* Скрывает стандартную радиокнопку */
  width: 16px;
  height: 16px;
  border: 2px solid #e6e6e6; /* Серый цвет обводки */
  border-radius: 50%;
  background-color: #616161; /* Светлый серый фон */
  cursor: pointer;
  margin-right: 10px;
  transition: 0.3s;
}

.poll-radio:checked {
  background-color: #1b1b1b; /* Цвет фона при выборе */
  border-color: #b6b6b6; /* Цвет обводки при выборе */
}

/* Кнопка "Голосовать" */
.poll-submit {
  margin-top: 10px;
  padding: 10px 20px;
  font-size: 16px;
  color: #fff;
  background-color: #303030;
  border: solid white 1px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.poll-submit:disabled {
  background-color: rgb(33, 33, 33);
  cursor: not-allowed;
}

.poll-submit:hover:not(:disabled) {
  background-color: #333;
}
</style>