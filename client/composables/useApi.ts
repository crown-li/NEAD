import { ref } from "vue";

export function useApi() {
  const { $axios } = useNuxtApp();
  const message = ref("");
  const error = ref("");

  const getStartMessage = async () => {
    try {
      const response = await $axios.get("/api/getStart");
      message.value = response.data;
      error.value = "";
    } catch (err) {
      console.error("Error fetching start message:", err);
      error.value = "Error fetching message";
      message.value = "";
    }
  };

  return {
    message,
    error,
    getStartMessage,
  };
}
