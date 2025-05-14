import { instance } from "./api";
import Routes_api_java from "../routes/Routes_apis_java";

export const loginUser = async (email: string, password: string) => {
  try {
    const response = await instance.post(`${Routes_api_java.url_base}${Routes_api_java.login}`, {
      email,
      password,
    });

    if (response.status === 200) {
      window.location.href = "/sales/home";
      return { success: true, message: "Inicio de sesión exitoso" };
    } else {
      return { success: false, message: response.data.error || "Ocurrió un problema" };
    }
  } catch (error: any) {
    return {
      success: false,
      message: error.response?.data?.error || "No se pudo conectar con el servidor",
    };
  }
};
