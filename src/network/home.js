import axios from "@/network/axios";
export function getHomeMultidata(){
  return axios({
   url: '/home/multidata'
  })
}
