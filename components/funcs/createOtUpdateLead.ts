import routes from "@/config/routes";
import axios from "axios";

async function createOrUpdateLead(formData) {
  try {
    const responseNewLead = await axios.post(
      `${routes.front.root}/api/checkAndCreateLead`,
      formData
    );
    return { success: true, data: responseNewLead.data };
    
  } catch (error) {
    formData.error = error.response.data
    const res = await axios.post(`${routes.front.root}/api/contact`, formData)
    return res
  }
}

export default createOrUpdateLead