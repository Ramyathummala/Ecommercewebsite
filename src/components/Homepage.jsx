import React, { useState } from "react";
import "./homepage.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { NavLink, useNavigate } from "react-router-dom";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import chairs from "../assets/all-products/chair.png";
import bestseller from "../assets/all-products/bestseller.png";
import hairpin from "../assets/all-products/hairpin.png";
import Scrunchie from "../assets/products/Scrunchie.png";
import clawclip from "../assets/all-products/clowclip.png";
import Earrings from "../assets/all-products/earrings.png";
import ImageIcon from "@mui/icons-material/Image";
import PlayCircleFilledIcon from "@mui/icons-material/PlayCircleFilled";
import video1 from "../assets/Homepageimagesandvideos/video1.mp4";
import { Link } from "react-router-dom";
const products = [
  {
    id: 1,
    title: "Bows Hair",
    code: "B001",
    price: "83.00",
    images: [hairpin],
  },
  {
    id: 1,
    title: " Scrunchie",
    code: "B001",
    price: "83.00",
    images: [Scrunchie],
  },
  {
    id: 3,
    title: "Clow clip",
    code: "C001",
    price: "60.00",
    images: [clawclip],
  },
  {
    id: 4,
    title: "Ear Rings",
    code: "E001",
    price: "150.00",
    images: [Earrings],
  },
];
const allProducts = [
  {
    id: 1,
    title: "Comfort Handy Craft",
    price: "42.00",
    oldPrice: "65.00",
    category: "new",
    image: chairs,
  },
  {
    id: 2,
    title: "Comfort Handy Craft",
    price: "42.00",
    oldPrice: "65.00",
    category: "new",
    image: chairs,
  },
  {
    id: 3,
    title: "Comfort Handy Craft",
    price: "42.00",
    oldPrice: "65.00",
    category: "new",
    image: chairs,
  },
  {
    id: 4,
    title: "Comfort Handy Craft",
    price: "42.00",
    oldPrice: "65.00",
    category: "new",
    image: chairs,
  },
  {
    id: 5,
    title: "Comfort Handy Craft",
    price: "42.00",
    oldPrice: "65.00",
    category: "new",
    image: chairs,
  },
  {
    id: 6,
    title: "Comfort Handy Craft",
    price: "42.00",
    oldPrice: "65.00",
    category: "new",
    image: chairs,
  },
  {
    id: 7,
    title: "Comfort Handy Craft",
    price: "42.00",
    oldPrice: "65.00",
    category: "bestseller",
    image: bestseller,
  },
  {
    id: 8,
    title: "Comfort Handy Craft",
    price: "42.00",
    oldPrice: "65.00",
    category: "bestseller",
    image: bestseller,
  },
  {
    id: 9,
    title: "Comfort Handy Craft",
    price: "42.00",
    oldPrice: "65.00",
    category: "bestseller",
    image: bestseller,
  },
  {
    id: 10,
    title: "Comfort Handy Craft",
    price: "42.00",
    oldPrice: "65.00",
    category: "bestseller",
    image: bestseller,
  },
  {
    id: 11,
    title: "Comfort Handy Craft",
    price: "42.00",
    oldPrice: "65.00",
    category: "bestseller",
    image: bestseller,
  },
  {
    id: 12,
    title: "Comfort Handy Craft",
    price: "42.00",
    oldPrice: "65.00",
    category: "bestseller",
    image: bestseller,
  },
  {
    id: 13,
    title: "Comfort Handy Craft",
    price: "42.00",
    oldPrice: "65.00",
    category: "bestseller",
    image: bestseller,
  },
  {
    id: 14,
    title: "Comfort Handy Craft",
    price: "42.00",
    oldPrice: "65.00",
    category: "featured",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBLOkU3nQNj2AYpK-963vkezyO797BlfVgaBnnhVdsTNyv1opRvNIyPvtyPzyrFUsEHNjIr2MUoZS0FO3HzRRrU7rq71UbVoVsm9kK-D7uvNxt0N-hP9jmGbjcpDD1T0CiSOFxOP_MXunbSpoPAQuEl9wWz6SmhzEpypktYT4CpagrvXSds71ZMnvAlscoHOgf1MTvsrpyW-dKHvzpSzWacr7KrQDVsQbXGW4gF-3sdgakPq0tvEv90okD2QLYZ2PnYl_Ua010Kixuz",
  },
  {
    id: 15,
    title: "Comfort Handy Craft",
    price: "42.00",
    oldPrice: "65.00",
    category: "featured",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBLOkU3nQNj2AYpK-963vkezyO797BlfVgaBnnhVdsTNyv1opRvNIyPvtyPzyrFUsEHNjIr2MUoZS0FO3HzRRrU7rq71UbVoVsm9kK-D7uvNxt0N-hP9jmGbjcpDD1T0CiSOFxOP_MXunbSpoPAQuEl9wWz6SmhzEpypktYT4CpagrvXSds71ZMnvAlscoHOgf1MTvsrpyW-dKHvzpSzWacr7KrQDVsQbXGW4gF-3sdgakPq0tvEv90okD2QLYZ2PnYl_Ua010Kixuz",
  },
  {
    id: 16,
    title: "Comfort Handy Craft",
    price: "42.00",
    oldPrice: "65.00",
    category: "featured",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBLOkU3nQNj2AYpK-963vkezyO797BlfVgaBnnhVdsTNyv1opRvNIyPvtyPzyrFUsEHNjIr2MUoZS0FO3HzRRrU7rq71UbVoVsm9kK-D7uvNxt0N-hP9jmGbjcpDD1T0CiSOFxOP_MXunbSpoPAQuEl9wWz6SmhzEpypktYT4CpagrvXSds71ZMnvAlscoHOgf1MTvsrpyW-dKHvzpSzWacr7KrQDVsQbXGW4gF-3sdgakPq0tvEv90okD2QLYZ2PnYl_Ua010Kixuz",
  },
  {
    id: 17,
    title: "Comfort Handy Craft",
    price: "42.00",
    oldPrice: "65.00",
    category: "featured",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBLOkU3nQNj2AYpK-963vkezyO797BlfVgaBnnhVdsTNyv1opRvNIyPvtyPzyrFUsEHNjIr2MUoZS0FO3HzRRrU7rq71UbVoVsm9kK-D7uvNxt0N-hP9jmGbjcpDD1T0CiSOFxOP_MXunbSpoPAQuEl9wWz6SmhzEpypktYT4CpagrvXSds71ZMnvAlscoHOgf1MTvsrpyW-dKHvzpSzWacr7KrQDVsQbXGW4gF-3sdgakPq0tvEv90okD2QLYZ2PnYl_Ua010Kixuz",
  },
  {
    id: 18,
    title: "Comfort Handy Craft",
    price: "42.00",
    oldPrice: "65.00",
    category: "featured",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBLOkU3nQNj2AYpK-963vkezyO797BlfVgaBnnhVdsTNyv1opRvNIyPvtyPzyrFUsEHNjIr2MUoZS0FO3HzRRrU7rq71UbVoVsm9kK-D7uvNxt0N-hP9jmGbjcpDD1T0CiSOFxOP_MXunbSpoPAQuEl9wWz6SmhzEpypktYT4CpagrvXSds71ZMnvAlscoHOgf1MTvsrpyW-dKHvzpSzWacr7KrQDVsQbXGW4gF-3sdgakPq0tvEv90okD2QLYZ2PnYl_Ua010Kixuz",
  },
  {
    id: 19,
    title: "Comfort Handy Craft",
    price: "42.00",
    oldPrice: "65.00",
    category: "offer",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBda2Rv8hOBcnlTMuHaWD_CN7ogQh4G3vuJwc9q8GOADRaZ2wLio_bl9rgG-JSPH4FzCrauLu21cnl7q_tLNGo5UT2pKEXNRWkccumDzKcGWWGeiPPP7w11YIw5ZCv9_0lelsa2WMCgcGHdmFFUZPdq-jevYv_apOKPG7F6JJOanYA2pEodhbzIXMOFvKHsbUtlhTk05pmGvFjLcZoUPvLeG-qU1yBkSo4EtBjeyrABtntXe5HJxR3mjvV6Fa4rPev3wWSr4G4j-p79",
  },
  {
    id: 20,
    title: "Comfort Handy Craft",
    price: "42.00",
    oldPrice: "65.00",
    category: "offer",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBda2Rv8hOBcnlTMuHaWD_CN7ogQh4G3vuJwc9q8GOADRaZ2wLio_bl9rgG-JSPH4FzCrauLu21cnl7q_tLNGo5UT2pKEXNRWkccumDzKcGWWGeiPPP7w11YIw5ZCv9_0lelsa2WMCgcGHdmFFUZPdq-jevYv_apOKPG7F6JJOanYA2pEodhbzIXMOFvKHsbUtlhTk05pmGvFjLcZoUPvLeG-qU1yBkSo4EtBjeyrABtntXe5HJxR3mjvV6Fa4rPev3wWSr4G4j-p79",
  },
  {
    id: 21,
    title: "Comfort Handy Craft",
    price: "42.00",
    oldPrice: "65.00",
    category: "offer",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBda2Rv8hOBcnlTMuHaWD_CN7ogQh4G3vuJwc9q8GOADRaZ2wLio_bl9rgG-JSPH4FzCrauLu21cnl7q_tLNGo5UT2pKEXNRWkccumDzKcGWWGeiPPP7w11YIw5ZCv9_0lelsa2WMCgcGHdmFFUZPdq-jevYv_apOKPG7F6JJOanYA2pEodhbzIXMOFvKHsbUtlhTk05pmGvFjLcZoUPvLeG-qU1yBkSo4EtBjeyrABtntXe5HJxR3mjvV6Fa4rPev3wWSr4G4j-p79",
  },
  {
    id: 22,
    title: "Comfort Handy Craft",
    price: "42.00",
    oldPrice: "65.00",
    category: "offer",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBda2Rv8hOBcnlTMuHaWD_CN7ogQh4G3vuJwc9q8GOADRaZ2wLio_bl9rgG-JSPH4FzCrauLu21cnl7q_tLNGo5UT2pKEXNRWkccumDzKcGWWGeiPPP7w11YIw5ZCv9_0lelsa2WMCgcGHdmFFUZPdq-jevYv_apOKPG7F6JJOanYA2pEodhbzIXMOFvKHsbUtlhTk05pmGvFjLcZoUPvLeG-qU1yBkSo4EtBjeyrABtntXe5HJxR3mjvV6Fa4rPev3wWSr4G4j-p79",
  },
  {
    id: 23,
    title: "Comfort Handy Craft",
    price: "₹42.00",
    oldPrice: "₹65.00",
    category: "offer",
    image: chairs,
  },
  {
    id: 24,
    title: "Comfort Handy Craft",
    price: "₹42.00",
    oldPrice: "₹65.00",
    category: "offer",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBda2Rv8hOBcnlTMuHaWD_CN7ogQh4G3vuJwc9q8GOADRaZ2wLio_bl9rgG-JSPH4FzCrauLu21cnl7q_tLNGo5UT2pKEXNRWkccumDzKcGWWGeiPPP7w11YIw5ZCv9_0lelsa2WMCgcGHdmFFUZPdq-jevYv_apOKPG7F6JJOanYA2pEodhbzIXMOFvKHsbUtlhTk05pmGvFjLcZoUPvLeG-qU1yBkSo4EtBjeyrABtntXe5HJxR3mjvV6Fa4rPev3wWSr4G4j-p79",
  },
];
const offerData = [
  {
    title: "24/7 Support",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCGBL2KYi9ly16ItOYbyOMyik49cfFBsbNelgkcMs_IYNWkuWNA9uMcjLsZw6Xjw7ZHT_juCkpvLtO9KcslgZIHmESUtaQyM9f04cPQnIloPWb6RCxgqrPHSbh654xxq0RlWNF3ZNKXxUp4o8XfcYnIAqgcjpX4yHolhswkKqIxAPVwnqhvf_OmAOD18aFFsRb1YweR5RM29eaoiJJEpNsOpXD2-IbOwL7Wu0kE4-rLmf0x0ww8H8EA35EKt54Y_c5DKAsU6ccIcc50",
  },
  {
    title: "Cashback Guarantee",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBUW_7XLSfACxEuf8nJ_cJPCWm1EaSsvBRgJ8XViWxPH98pzJeXZiq1O5bdy_ajDbxQjYunlvKk4NsBUHWLFmkBIaOdpU2UqowBTfPxWXvYyjd803YqiI2Lrwne687NZ9dH9bn8xOn96x1merxtX_YHyMyIMsoU-1embV5IO04gVp3dJ3bkWF4J631XpLlaCkGK4KnEY0ij9m28D53WzLjCqTFTz4wiOpxBQsmEI9mRJRFbB-aDm1lJU1E395lck1_brbQ9sdlqO7n3",
  },
  {
    title: "Premium Quality",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBzJo9SeO8fihQFHSna98loHYfcSpBHg2CZMz5FlbPRb_c2433sGMeKyFk0QDhCkNQBUImcZpcyyR0gSZ9L8V0PpH80vioOUmMZFH9dzNtS9jZ4PKpRtfcDVDhuqWApeHpQ7Q8y1wNN5aMYdrj5MXRmRou0egUPHWr7bcw4SbVGjPs8DNu42r5Mp2hVj2wB9HG2u_-XBo3szE19pRP_LexCn_AUsUAS3WX6bGcjy2tIEmHRmPyYQ5p4u1f6RCQnhs1ybeWaO6OtVlwg",
  },
  {
    title: "Free Delivery",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCgNthYb7xbXu7h8cJHGX8oSH11M7Yp-PJ_zNBnZrMXpjVVfFYixu3sBUp86xQF1bGDsbkyg3QaY0YhUjamNqRzul7bzlQub2KKkdUpQy97S8MSyEjG-nHMcb-wNszh8ehW4qG0WNKUJ6zxQfeMuC-EUUGwzG2eKYnyIQObnI1ELM3j0FQ3FuZwIw5xcQSBHoTAgDNGqKUjlXS87wwRXEvE4wiRy3NsFwhe488NtT7oHdRwV5u6u3yb8tde7IiL8X3vHJBRB2JBu_ED",
  },
];
const treandingproducts = [
  {
    name: "Hair Bows",
    price: "₹26.00",
    oldPrice: "₹42.00",
    image: chairs,
  },
  {
    name: "Scrunchie",
    price: "₹26.00",
    oldPrice: "₹42.00",
    image: Scrunchie,
  },
  {
    name: "Claw Clip",
    price: "₹26.00",
    oldPrice: "₹42.00",
    image: clawclip,
  },
  {
    name: "Ear Rings",
    price: "₹26.00",
    oldPrice: "₹42.00",
    image: Earrings,
  },
];
const HairProducts = [
  {
    id: 1,
    title: "Pink Satin Bow",
    category: "Bows",
    price: 12,
    image: "/images/product1.jpg",
  },
  {
    id: 2,
    title: "Floral Scrunchie",
    category: "Scrunchies",
    price: 8,
    image: "/images/product2.jpg",
  },
  {
    id: 3,
    title: "Pearl Clip",
    category: "Clips",
    price: 10,
    image: "/images/product3.jpg",
  },
  {
    id: 4,
    title: "Velvet Headband",
    category: "Headbands",
    price: 15,
    image: "/images/product4.jpg",
  },
  {
    id: 5,
    title: "Rainbow Claw Clip",
    category: "Clips",
    price: 9,
    image: "/images/product5.jpg",
  },
];
// const categories = [
//   {
//     id: 1,
//     title: "Hair Bows",
//     price: "₹12.00",
//     img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCUHeuu2hEooR1scuiFthw9Absyvk00bXXZuMcwJwdt2yULvmZEmnmbG8cGeJuQW3GUEhdNG-jMF8R2BsU3_8SH9gxDl-Tf7vDVorsuIDQds8TJkHepdk7wzVqMstz8yfTjRWdYxhMIeQBdBX4sOdkl495_0-Kc7iwJU8VOgu3OCiuel4YSeVGuGjU4s5kNm8Rx5z6u_WrcmgSb9Wt6JxXTZefx5T_JEE-NVpC11NWw3DKLl95TZj4hwClglIXNEMlQjzHdIG8kj2g",
//     viewLink: "#",
//   },
//   {
//     id: 2,
//     title: "Scrunchies",
//     price: "₹8.00",
//     img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBo4-b-ypCGIPufV9RhAus0PtdpU8fZkCzRpaLxfHI6-6aZos1KEKb6ZxRxZk6eYX51BruX0YPyy9Leia2kRDpXK5k92cY_v4Hgs9ks4vNHlAO8ksEuHl0ueeMnwMZtydtYebQtg4fkaxW1PMk2idha4rFv_g7hvUY44W-_i0UFSXFywcSUnkriEpvi3YzCjQUabn240JNqxut9VEtsalre2MuoLsZnKGYdMrGUZckWxZFAazN2trguLPyhXpL3BxPRcM7hirdJItA",
//     viewLink: "#",
//   },
//   {
//     id: 3,
//     title: "Claw Clips",
//     price: "₹15.00",
//     img: "https://lh3.googleusercontent.com/aida-public/AB6AXuC7C78TuRzDA08vF8dkNhvBnYZc-izxzXgghyAm8hm41UlWHUOifBeMiVPFOlVYlYS3xsFhATPm-I5IPCuIRyhe_Zd5BOK-19kAQgQkHMnnN_ZkpTtCHXC-qceWcwTuujBYneQyWZHWp3X2ONrcxo--E1UXkgPJrTTzkk8EyMFzpTOpKAy-srC4QDWmKzPF5djFguOX-AT17gvq9eZfrog91GhAi-Dt38gELUSUAdAXBkyuqMErhjxRKNc71c9CVcERpxS6iKwU2As",
//     viewLink: "#",
//   },
//   {
//     id: 4,
//     title: "Earrings",
//     price: "₹25.00",
//     img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBxtogccnMXhnGJ7xsnJDPbAkmxltgj0xS9QlWXpYmBdWEIR1vmStTjCsbZweVhnJTZWAa7iPp1-dZHuT4sFmQdL1_oxXTD7WgvF1Uyp1nLd8G_mbWNetT656RPbpil2YuFkMdBQkQqQGF4C3ua9oOASi6V_3y3oS2uWfWJkOL9R_exOQ-Hmc2vLx0i8pIxEq0v1nNe1ku_bBmp4pjzj-LAl7mqjuO83E0QFH6LqS1ASfxslunPn6nPl796btff_kSuGE4ATA9VG6c",
//     viewLink: "#",
//   },
//   {
//     id: 1,
//     title: "Hair Bows",
//     price: "₹12.00",
//     img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCUHeuu2hEooR1scuiFthw9Absyvk00bXXZuMcwJwdt2yULvmZEmnmbG8cGeJuQW3GUEhdNG-jMF8R2BsU3_8SH9gxDl-Tf7vDVorsuIDQds8TJkHepdk7wzVqMstz8yfTjRWdYxhMIeQBdBX4sOdkl495_0-Kc7iwJU8VOgu3OCiuel4YSeVGuGjU4s5kNm8Rx5z6u_WrcmgSb9Wt6JxXTZefx5T_JEE-NVpC11NWw3DKLl95TZj4hwClglIXNEMlQjzHdIG8kj2g",
//     viewLink: "#",
//   },
//   {
//     id: 2,
//     title: "Scrunchies",
//     price: "₹8.00",
//     img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBo4-b-ypCGIPufV9RhAus0PtdpU8fZkCzRpaLxfHI6-6aZos1KEKb6ZxRxZk6eYX51BruX0YPyy9Leia2kRDpXK5k92cY_v4Hgs9ks4vNHlAO8ksEuHl0ueeMnwMZtydtYebQtg4fkaxW1PMk2idha4rFv_g7hvUY44W-_i0UFSXFywcSUnkriEpvi3YzCjQUabn240JNqxut9VEtsalre2MuoLsZnKGYdMrGUZckWxZFAazN2trguLPyhXpL3BxPRcM7hirdJItA",
//     viewLink: "#",
//   },
//   {
//     id: 3,
//     title: "Claw Clips",
//     price: "₹15.00",
//     img: "https://lh3.googleusercontent.com/aida-public/AB6AXuC7C78TuRzDA08vF8dkNhvBnYZc-izxzXgghyAm8hm41UlWHUOifBeMiVPFOlVYlYS3xsFhATPm-I5IPCuIRyhe_Zd5BOK-19kAQgQkHMnnN_ZkpTtCHXC-qceWcwTuujBYneQyWZHWp3X2ONrcxo--E1UXkgPJrTTzkk8EyMFzpTOpKAy-srC4QDWmKzPF5djFguOX-AT17gvq9eZfrog91GhAi-Dt38gELUSUAdAXBkyuqMErhjxRKNc71c9CVcERpxS6iKwU2As",
//     viewLink: "#",
//   },
//   {
//     id: 4,
//     title: "Earrings",
//     price: "₹25.00",
//     img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBxtogccnMXhnGJ7xsnJDPbAkmxltgj0xS9QlWXpYmBdWEIR1vmStTjCsbZweVhnJTZWAa7iPp1-dZHuT4sFmQdL1_oxXTD7WgvF1Uyp1nLd8G_mbWNetT656RPbpil2YuFkMdBQkQqQGF4C3ua9oOASi6V_3y3oS2uWfWJkOL9R_exOQ-Hmc2vLx0i8pIxEq0v1nNe1ku_bBmp4pjzj-LAl7mqjuO83E0QFH6LqS1ASfxslunPn6nPl796btff_kSuGE4ATA9VG6c",
//     viewLink: "#",
//   },
// ];
const logos = [
  {
    alt: "Fashion Live logo",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDxpYO8lhNHB4HKQC_xxXQWZ_cS0FfuM0E45sCjBBwvDOwN5rBGa56fJWZjDFM4i7utrd25-JoQodKEpcngTVzDCQh-uIMNB8t1f8qjQwDuu6LAnBgh_p2EiNkzD7DQhwPfdDTVZfYEmwbQYGpfFe3vpCkHN_P-kClgzsqocCDnthLH5fqkWYiZeKr_nkXH2R92hEB7hsayQMwi8HXbBPI11yCURFvYlyHSP19zr7GcelLEUyWMpvYDRvPYACy_0rn_q_4aWMLfph4",
  },
  {
    alt: "Hand Crafted logo",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuC0w9y-26DoBhNqzmR8SLjZw0Kw4mFu472Ks_vqxj0cnwGl02OC1tYVKNXWKMZo9TmwrChZxUz5cxCNGcTPjUrJjmCqZrypeEJQ51rNcWx3PMPjuCOdNQaC21FO8v1RePjKugle5PSsc5lOtwghafbEDuIb7ATtHWcedkO29IB5b0OXFe7M-9RdJ24bFXo3h8EDnrM6nxwml3HbrJfcalU5b6f8ruJ_G2dl4q5rSF2YJvY1MgeY0GCPQr7tyAjUT-1644idOe3zLow",
  },
  {
    alt: "Mestonix logo",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCl4lRmc2Mxjs5frD1ih8464CWGhsz2FYakzxC_CN7OApPotgWXOi-HiAtQP5nTO5GcitTjq5tdlrFl507uAsgb0LCytLP_OM2XRg1DzneAytkY8WQScnwwQbElqzpwQSXwXpCbYuWxMP1sltWJz1bnbNif0eX7qafAB408KtiSPTjTpcaFNVY6rtk08pXXdgkDrXk04crwYc2wgieiv0UttDvJrpjrml1IaQBKO-_pqMhGGeD-CBMB0IJMBpy1P1Cfcmh7nZkrILo",
  },
  {
    alt: "Little Sunshine logo",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDud4OUnOd_zBMAKfxS73sH9Qkjgd7cCQgxZz7WpxhqHqEo98_UMNh960JEdhqHpiZXibcb2DPuTSqQ6gNhpfExbXe5dHLlnXRhAE3-BGdALki4fSWEJqwyrHjZz68ILR4cnt8pv_qV3ylV6-xaF0URGw_xe5cdYf7Ot9kkluqApUc7suVV9Bo-VaBOto6b8JwtOapenOaAkD8Al0Kw_i9QOEP-FbVwzVcY12RqExaz9ZNjtM2YXCkNa4kDq8reBs3iHKT_eoJu3eg",
  },
  {
    alt: "Pure logo",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDqP4angDoHcoPeXPV9k-db8H7BgTJBv20xzKqsAHKuKEnZW1IsBCpk8dtPgwpuIh25frisfWGm9gcKdcLhweXoH31kvlvjBkbhVzgCVHLhwxF__hpJ2NqS0I1_bMh-AO9h7i5tUh6a7roZaBEgz141i0PdgA4KTAvkCR2ILTF0QaL_lcgAPUGFEHJjoB0p7QgVLnZaZiDmiz6mhJuoRDXvr0MQqE0G9ZX88zvU_MIhizUEpR9_akyYHe7H9QKqykukHlqerPx9WAc",
  },
  {
    alt: "Fashion Live logo",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDxpYO8lhNHB4HKQC_xxXQWZ_cS0FfuM0E45sCjBBwvDOwN5rBGa56fJWZjDFM4i7utrd25-JoQodKEpcngTVzDCQh-uIMNB8t1f8qjQwDuu6LAnBgh_p2EiNkzD7DQhwPfdDTVZfYEmwbQYGpfFe3vpCkHN_P-kClgzsqocCDnthLH5fqkWYiZeKr_nkXH2R92hEB7hsayQMwi8HXbBPI11yCURFvYlyHSP19zr7GcelLEUyWMpvYDRvPYACy_0rn_q_4aWMLfph4",
  },
  {
    alt: "Hand Crafted logo",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuC0w9y-26DoBhNqzmR8SLjZw0Kw4mFu472Ks_vqxj0cnwGl02OC1tYVKNXWKMZo9TmwrChZxUz5cxCNGcTPjUrJjmCqZrypeEJQ51rNcWx3PMPjuCOdNQaC21FO8v1RePjKugle5PSsc5lOtwghafbEDuIb7ATtHWcedkO29IB5b0OXFe7M-9RdJ24bFXo3h8EDnrM6nxwml3HbrJfcalU5b6f8ruJ_G2dl4q5rSF2YJvY1MgeY0GCPQr7tyAjUT-1644idOe3zLow",
  },
  {
    alt: "Mestonix logo",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCl4lRmc2Mxjs5frD1ih8464CWGhsz2FYakzxC_CN7OApPotgWXOi-HiAtQP5nTO5GcitTjq5tdlrFl507uAsgb0LCytLP_OM2XRg1DzneAytkY8WQScnwwQbElqzpwQSXwXpCbYuWxMP1sltWJz1bnbNif0eX7qafAB408KtiSPTjTpcaFNVY6rtk08pXXdgkDrXk04crwYc2wgieiv0UttDvJrpjrml1IaQBKO-_pqMhGGeD-CBMB0IJMBpy1P1Cfcmh7nZkrILo",
  },
  {
    alt: "Little Sunshine logo",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDud4OUnOd_zBMAKfxS73sH9Qkjgd7cCQgxZz7WpxhqHqEo98_UMNh960JEdhqHpiZXibcb2DPuTSqQ6gNhpfExbXe5dHLlnXRhAE3-BGdALki4fSWEJqwyrHjZz68ILR4cnt8pv_qV3ylV6-xaF0URGw_xe5cdYf7Ot9kkluqApUc7suVV9Bo-VaBOto6b8JwtOapenOaAkD8Al0Kw_i9QOEP-FbVwzVcY12RqExaz9ZNjtM2YXCkNa4kDq8reBs3iHKT_eoJu3eg",
  },
  {
    alt: "Pure logo",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDqP4angDoHcoPeXPV9k-db8H7BgTJBv20xzKqsAHKuKEnZW1IsBCpk8dtPgwpuIh25frisfWGm9gcKdcLhweXoH31kvlvjBkbhVzgCVHLhwxF__hpJ2NqS0I1_bMh-AO9h7i5tUh6a7roZaBEgz141i0PdgA4KTAvkCR2ILTF0QaL_lcgAPUGFEHJjoB0p7QgVLnZaZiDmiz6mhJuoRDXvr0MQqE0G9ZX88zvU_MIhizUEpR9_akyYHe7H9QKqykukHlqerPx9WAc",
  },
];
const imageUrls = [
  "https://picsum.photos/seed/customer1/600/400",
  "https://picsum.photos/seed/customer2/600/400",
  "https://picsum.photos/seed/customer2/600/400",
];
const videoUrls = [
  "https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
  "https://storage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
   "https://storage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
];

const Homepage = () => {
  const [selectedTab, setSelectedTab] = useState("new");
  // const [category, setCategory] = useState("All");
  // const [cart, setCart] = useState([])
  //  const filtered = category === "All" ? allProducts : allProducts.filter(p => p.category === category);
  //  const addToCart = (product) => {
  //   if (!cart.find(item => item.id === product.id)) {
  //     setCart([...cart, product]);
  //   }
  // };

  const filteredProducts = allProducts.filter(
    (product) => product.category === selectedTab
  );
  const navigate = useNavigate();

  const goToProductDetails = (index) => {
    if (index === 0) navigate("/product1");
    else if (index === 1) navigate("/product2");
    else if (index === 2) navigate("/Product3");
    else if (index === 3) navigate("/Product4");
  };
  return (
    <div className="homepage">
      {/* <main> */}
      <section className="hero-section">
        <div className="hero-container">
          <div className="hero-content">
            <p>Best Furniture For Your Castle....</p>
            <h1>New Furniture Collection Trends in 2020</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in
              est adipiscing in phasellus non in justo.
            </p>
            <button className="hero-btn">Shop Now</button>
          </div>
          <div className="heroimage">
            <video autoPlay loop muted playsInline>
              <source src={video1} type="video/mp4" />
            </video>
          </div>
        </div>
      </section>

      {/* </main> */}

      <h2 className="Fmain-heading">Featured Products</h2>
      <div className="card-grid">
        {products.map((product, index) => (
          <div
            key={index}
            className={`card ${product.dark ? "card-dark" : ""}`}
            onClick={() => goToProductDetails(index)}
            style={{ cursor: "pointer" }}
          >
            <div className="image-container">
              <Swiper
                modules={[Autoplay]}
                autoplay={{ delay: 2000, disableOnInteraction: false }}
                loop
              >
                {product.images.map((img, i) => (
                  <SwiperSlide key={`${product.title}-${i}`}>
                    <img src={img} alt={`${product.title} ${index + 1}`} />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            <div className="details">
              <h3 className="Ptittle">{product.title}</h3>
              <div className="colors">
                <span className="color pink"></span>
                <span className="color indigo"></span>
                <span className="color cyan"></span>
              </div>
              <p className="code">Code - Y113701</p>
              <p className="price">42.00</p>
            </div>
          </div>
        ))}
      </div>
      <div className="container">
        <h1 className="heading">Latest Products</h1>
        <div className="tabs">
          <a
            href="#"
            className={selectedTab === "new" ? "active" : ""}
            onClick={(e) => {
              e.preventDefault();
              setSelectedTab("new");
            }}
          >
            New Arrival
          </a>
          <a
            href="#"
            className={selectedTab === "bestseller" ? "active" : ""}
            onClick={(e) => {
              e.preventDefault();
              setSelectedTab("bestseller");
            }}
          >
            Best Seller
          </a>
          <a
            href="#"
            className={selectedTab === "featured" ? "active" : ""}
            onClick={(e) => {
              e.preventDefault();
              setSelectedTab("featured");
            }}
          >
            Featured
          </a>
          <a
            href="#"
            className={selectedTab === "offer" ? "active" : ""}
            onClick={(e) => {
              e.preventDefault();
              setSelectedTab("offer");
            }}
          >
            Special Offer
          </a>
        </div>
        <div className="product-grid">
          {filteredProducts.map((product) => (
            <div key={product.id} className="product-card">
              <div className="image-wrapper">
                <img src={product.image} alt={product.title} />
              </div>
              <h3 className="product-title">{product.title}</h3>
              <p className="product-price">
                <span className="price">{product.price}</span>
                <span className="old-price">{product.oldPrice}</span>
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="offer-container">
        <h2 className="offer-title">What Shopex Offer!</h2>
        <div className="offer-grid">
          {offerData.map((offer, index) => (
            <div key={index} className="offer-card">
              <img src={offer.img} alt={offer.title} className="offer-image" />
              <h3 className="offer-heading">{offer.title}</h3>
              <p className="offer-desc">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa
                purus gravida.
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="features-container">
        <div className="features-wrapper">
          <div className="features-image-section">
            <div className="features-blur-circle"></div>
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAOWeiULiZQ5P0gu3j7691yz1ZX2ZA1Y-7LyXMw_q2qCTEJ-8soariIyYZLGB3_GJC-SG56PoLjg1BeTxxQkIwuh6b1f_WJC55Unk7VZ5_sgFPztEa-Nojc8pEcNufW7N-iirrUGQ1k4l8SFJ8ALgz0rYIqPcvjUY_hVBFZujGbWmrQ0r6joAUGvEAwx7TuphMQ3R34sQ2-cMBywtkJ4te7QltFNhv0vCffuWlM_vLu7st4eaVdn8AsSLbwICHpd6ATOBBIJEvhqtc"
              alt="Stylish ear rings"
              className="features-image"
            />
          </div>
          <div className="features-text-section">
            <h2 className="features-heading">
              Unique Features Of latest & Trending Products
            </h2>
            <ul className="features-list">
              <li>
                <span className="dot red"></span>
                All frames constructed with hardwood solids and laminates
              </li>
              <li>
                <span className="dot blue"></span>
                Reinforced with double wood dowels, glue, screw - nails corner
                blocks and machine nails
              </li>
              <li>
                <span className="dot teal"></span>
                Arms, backs and seats are structurally reinforced
              </li>
            </ul>
            <div className="features-footer">
              <button className="add-to-cart">Add To Cart</button>
              <div>
                <p className="product-name">B&amp;B Italian Sofa</p>
                <p className="product-price">₹32.00</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="tp-container">
        <h2 className="tp-title">Trending Products</h2>
        <div className="tp-grid">
          {treandingproducts.map((treandingproducts, index) => (
            <div className="tp-card" key={index}>
              <div className="tp-image-wrapper">
                <img
                  src={treandingproducts.image}
                  alt={treandingproducts.name}
                  className="tp-image"
                />
              </div>
              <div className="tp-details">
                <h3 className="tp-name">{treandingproducts.name}</h3>
                <p className="tp-price">
                  <span className="tp-new-price">
                    {treandingproducts.price}
                  </span>
                  <span className="tp-old-price">
                    {treandingproducts.oldPrice}
                  </span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="container">
        <div className="grid">
          <div className="promo pink">
            <div>
              <h2>23% off in all products</h2>
              <a href="#" style={{ fontSize: "1.2vw" }}>
                Shop Now
              </a>
            </div>
            <div className="image-center">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuA5HVsnIXhVRXMM6rUzY2UNHf7ueT2IxlU3vblX-k6j4t71V29fO1zBRfDaS7LxeCEcDVDJuSStm4Y-cZemwPLubeUFyAp-Kmll_Js0SBviLtdB1tZHmSawbwPO7n7LWX9_pv4VMs0umpGYycp78dsMIS6870QC4x6bnPRm7hS-qjAzxy-M1r54SDuWD_C5nfgSVq9U0_LfTGGsedABpGvVbVkTktmh0YsY4NGGpR59a943O168HsOjLmRM4iarw-usERZw_ZcgKH0"
                alt="A pink hair bow"
              />
            </div>
          </div>

          <div className="promo indigo">
            <h2>23% off in all products</h2>
            <a href="#" style={{ fontSize: "1.2vw" }}>
              View Collection
            </a>
            <div className="image-center mt">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDa--l4b0jtirZ9BN6dGozewXT9ory7CGIHjYMxnhfbSfM6m2fiOU-5CMekH-nDNX6QZ5I0TZ88cnG_tJve-i41hRKKcLitxFgXdkk8bPiSeei8J9Gkt5dahczVnpvCTn6fYPali0fO1l9VgLBMbrchyAzaU79YW85UAIjF_lqufDt4WAHY3JRZi46kLezN5tXw-GgUGJkX__lt0-vxfKV_r1PNztH21fMir8CuBEOayKGRtSNUMsaDiRGQ7NB8z4Ca7lxMmZ_Nl3c"
                alt="A set of colorful scrunchies"
              />
            </div>
          </div>

          <div className="product-list">
            <div className="product">
              <Link to="/product3">
                <div className="product-img">
                  <img
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAOvaQYuxOUkfDf7-FQInrO_IOBwZlaLBpsoeaA1nOuU_PWdIomIDmtseur8g8IH1l7A5mS97L10bkYqN2PF9Oq3rvPb_LQtnfM2Q4ubmUrS9dHx3OL357SxPWpX1bEFpBd4bpHsrE1GBAg4UIMxgkQ6GXdNOXXVlDWDKK3LMHJp8ehbqqVB0NBPjxSlUfFec4JXMK4javV-ZcnKhRPdAGu1_-hcBYKBOoPa5p005jPx0NKJQokMiojfogbM8XRn26HbmncZSNXsao"
                    alt="Claw Clips"
                  />
                </div>
              </Link>
              <div>
                <h3>Claw Clips</h3>
                <p>₹12.00</p>
              </div>
            </div>

            <div className="product">
              <Link to="/product4">
                <div className="product-img">
                  <img
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAnX1Bd0Bujiw1Pa8nDZzynp4qNh7Yp1ySYrSnThCflcMiInISUunDEs6Hs4MxfdcNhxXuwLUUECY2wClxDdiWB-4SvIMhFSR4DdP3cJfqrG_DJ6lgqSmUmUZdklngJrvGPHSICGTuFUWFCTkW-KjosCVh-k08wggQ1RdZ0n91_5stdfUWofulxAGcBcwjQgrgAoESg31IXaeNAWXOzS_hhprr6PddOObq9zVa3zviu_iZyHqdlqjvdSmDVrQHs1-r_4dI7-4rgPKw"
                    alt="Earrings"
                  />
                </div>
              </Link>
              <div>
                <h3>Earrings</h3>
                <p>₹25.00</p>
              </div>
            </div>

            <div className="product">
              <Link to="/product2">
                <div className="product-img">
                  <img
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBIcj0Jl5G1HS5OJ3NxIfh640LByCHBXMZMR-MK7Fj7jRl4xXSacnzzQHfeMm-I6-WMa6WnI0Zo1WHLh_Dh12Py-FC-vikkpbHfu3nAh6J6Q9VkheGbwB_qfxBIJp5buM4NXjCVMkKQAPgabhtDCiwrouZNARcRPTIUxUOPEENb-bMel0Nt8_KockcjAWP8cXUuK23PpKcOoT8qKz-XMwyeaGC0Bh6B3dBNoNQpM4kYmSIToTb5At6XfLBUnY59eyykdtEoVoiQ-FM"
                    alt="Scrunchies Set"
                  />
                </div>
              </Link>
              <div>
                <h3>Scrunchies Set</h3>
                <p>₹15.00</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="top-category-container">
        <h2 className="top-category-heading">Top Categories</h2>
        <Swiper
          spaceBetween={30}
          slidesPerView={4}
          grabCursor={true}
          modules={[Autoplay]}
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          loop
          className="top-category-swiper"
        >
          <SwiperSlide>
            <div className="top-category-card">
              <Link to="/product1">
                <div className="top-category-image-wrapper">
                  <img
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCUHeuu2hEooR1scuiFthw9Absyvk00bXXZuMcwJwdt2yULvmZEmnmbG8cGeJuQW3GUEhdNG-jMF8R2BsU3_8SH9gxDl-Tf7vDVorsuIDQds8TJkHepdk7wzVqMstz8yfTjRWdYxhMIeQBdBX4sOdkl495_0-Kc7iwJU8VOgu3OCiuel4YSeVGuGjU4s5kNm8Rx5z6u_WrcmgSb9Wt6JxXTZefx5T_JEE-NVpC11NWw3DKLl95TZj4hwClglIXNEMlQjzHdIG8kj2g"
                    alt="Hair Bows"
                    className="top-category-img"
                  />
                  <div className="top-category-overlay">
                    <a href="#" className="top-category-view-btn">
                      View Shop
                    </a>
                  </div>
                </div>
              </Link>
              <div className="top-category-info">
                <p className="top-category-title">Hair Bows</p>
                <p className="top-category-price">₹12.00</p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="top-category-card">
              <Link to="/product2">
                <div className="top-category-image-wrapper">
                  <img
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBo4-b-ypCGIPufV9RhAus0PtdpU8fZkCzRpaLxfHI6-6aZos1KEKb6ZxRxZk6eYX51BruX0YPyy9Leia2kRDpXK5k92cY_v4Hgs9ks4vNHlAO8ksEuHl0ueeMnwMZtydtYebQtg4fkaxW1PMk2idha4rFv_g7hvUY44W-_i0UFSXFywcSUnkriEpvi3YzCjQUabn240JNqxut9VEtsalre2MuoLsZnKGYdMrGUZckWxZFAazN2trguLPyhXpL3BxPRcM7hirdJItA"
                    alt="Scrunchies"
                    className="top-category-img"
                  />
                  <div className="top-category-overlay">
                    <a href="#" className="top-category-view-btn">
                      View Shop
                    </a>
                  </div>
                </div>
              </Link>
              <div className="top-category-info">
                <p className="top-category-title">Scrunchies</p>
                <p className="top-category-price">₹8.00</p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="top-category-card">
              <Link to="/product3">
                <div className="top-category-image-wrapper">
                  <img
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuC7C78TuRzDA08vF8dkNhvBnYZc-izxzXgghyAm8hm41UlWHUOifBeMiVPFOlVYlYS3xsFhATPm-I5IPCuIRyhe_Zd5BOK-19kAQgQkHMnnN_ZkpTtCHXC-qceWcwTuujBYneQyWZHWp3X2ONrcxo--E1UXkgPJrTTzkk8EyMFzpTOpKAy-srC4QDWmKzPF5djFguOX-AT17gvq9eZfrog91GhAi-Dt38gELUSUAdAXBkyuqMErhjxRKNc71c9CVcERpxS6iKwU2As"
                    alt="Claw Clips"
                    className="top-category-img"
                  />
                  <div className="top-category-overlay">
                    <a href="#" className="top-category-view-btn">
                      View Shop
                    </a>
                  </div>
                </div>
              </Link>
              <div className="top-category-info">
                <p className="top-category-title">Claw Clips</p>
                <p className="top-category-price">₹15.00</p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="top-category-card">
              <Link to="/product4">
                <div className="top-category-image-wrapper">
                  <img
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBxtogccnMXhnGJ7xsnJDPbAkmxltgj0xS9QlWXpYmBdWEIR1vmStTjCsbZweVhnJTZWAa7iPp1-dZHuT4sFmQdL1_oxXTD7WgvF1Uyp1nLd8G_mbWNetT656RPbpil2YuFkMdBQkQqQGF4C3ua9oOASi6V_3y3oS2uWfWJkOL9R_exOQ-Hmc2vLx0i8pIxEq0v1nNe1ku_bBmp4pjzj-LAl7mqjuO83E0QFH6LqS1ASfxslunPn6nPl796btff_kSuGE4ATA9VG6c"
                    alt="Earrings"
                    className="top-category-img"
                  />
                  <div className="top-category-overlay">
                    <a href="#" className="top-category-view-btn">
                      View Shop
                    </a>
                  </div>
                </div>
              </Link>
              <div className="top-category-info">
                <p className="top-category-title">Earrings</p>
                <p className="top-category-price">₹25.00</p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="newsletter-body">
        <div className="newsletter-wrapper">
          <div className="newsletter-content">
            <h1 className="newsletter-title">Get Latest Update By Subscribe</h1>
            <h2 className="newsletter-subtitle">Our Newsletter</h2>
            <button className="newsletter-button">Shop Now</button>
          </div>
        </div>
      </div>
      <div className="client-logos-section">
        <Swiper
          spaceBetween={30}
          slidesPerView={3}
          loop={true}
          modules={[Autoplay]}
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          grabCursor={true}
          breakpoints={{
            320: { slidesPerView: 2 },
            640: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
          }}
        >
          {logos.map((logo, index) => (
            <SwiperSlide key={index}>
              <img
                className="client-logo-image"
                src={logo.src}
                alt={logo.alt}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="happy-customers-section">
        <h2 className="happy-customers-title">Happy Customers</h2>
        <div className="happy-customers-content">
          {imageUrls.map((src, i) => (
            <div key={`img-${i}`} className="customer-media-block">
              <div className="customer-image-card">
                <img
                  src={src}
                  alt={`Customer ${i + 1}`}
                  className="customer-image"
                />
                <div className="media-hover-overlay">
                  <ImageIcon className="media-icon" />
                </div>
              </div>
              <div className="customer-video-card">
                <video className="customer-video" controls>
                  <source src={videoUrls[i]} type="video/mp4" />
                </video>
                <div className="media-hover-overlay">
                  <PlayCircleFilledIcon className="media-icon" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Homepage;
