import axios from "axios";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default async function connexionService(dataJson: any) {
  return await axios({
    url: "http://localhost:5000/user/login",
    method: "POST",
    headers: {
      "access-control-allow-headers": "content-type, authorization",
      "Access-Control-Allow-Origin": "*",
    },
    data: dataJson,
  });
}
